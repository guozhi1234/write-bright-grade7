const maxRequestBytes = 12 * 1024 * 1024;

const reviewSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['transcription', 'summary', 'totalScore', 'scores', 'praise', 'issues', 'improvedEssay', 'nextPractice'],
  properties: {
    transcription: { type: 'string' },
    summary: { type: 'string' },
    totalScore: { type: 'integer', minimum: 0, maximum: 20 },
    scores: {
      type: 'object',
      additionalProperties: false,
      required: ['content', 'structure', 'language', 'presentation'],
      properties: {
        content: { type: 'integer', minimum: 0, maximum: 5 },
        structure: { type: 'integer', minimum: 0, maximum: 5 },
        language: { type: 'integer', minimum: 0, maximum: 5 },
        presentation: { type: 'integer', minimum: 0, maximum: 5 }
      }
    },
    praise: { type: 'array', maxItems: 3, items: { type: 'string' } },
    issues: {
      type: 'array',
      maxItems: 8,
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['original', 'suggestion', 'reason'],
        properties: {
          original: { type: 'string' },
          suggestion: { type: 'string' },
          reason: { type: 'string' }
        }
      }
    },
    improvedEssay: { type: 'string' },
    nextPractice: { type: 'string' }
  }
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: responseHeaders() });
    }

    if (request.method === 'GET' && url.pathname === '/health') {
      return jsonResponse(200, {
        status: 'ok',
        aiConfigured: Boolean(readEnv('DEEPSEEK_API_KEY', env))
      });
    }

    if (request.method === 'POST' && url.pathname === '/api/review') {
      try {
        return await handleReview(request, env);
      } catch (error) {
        console.error('ESA review request failed:', error?.message || error);
        return jsonResponse(500, { error: '服务器发生错误，请稍后再试。' });
      }
    }

    if (url.pathname.startsWith('/api/')) {
      return jsonResponse(404, { error: '未找到该 API 路由。' });
    }

    return new Response('Not found', { status: 404 });
  }
};

async function handleReview(request, env) {
  const apiKey = readEnv('DEEPSEEK_API_KEY', env);
  if (!apiKey) {
    return jsonResponse(503, { error: '尚未配置 DEEPSEEK_API_KEY。请在 ESA 控制台设置密钥。' });
  }

  const body = await readRequestJson(request);
  const imageDataUrl = body?.imageDataUrl;
  const unit = body?.unit;

  if (!isSupportedImage(imageDataUrl)) {
    return jsonResponse(400, { error: '请上传 JPG、PNG 或 WEBP 格式的作文照片。' });
  }
  if (!unit || typeof unit !== 'object' || typeof unit.id !== 'string' || typeof unit.task !== 'string') {
    return jsonResponse(400, { error: '缺少当前单元的写作要求。' });
  }

  const baseUrl = (readEnv('DEEPSEEK_BASE_URL', env) || 'https://api.deepseek.com').replace(/\/+$/, '');
  const apiResponse = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: readEnv('DEEPSEEK_MODEL', env) || 'deepseek-flash',
      temperature: 0.2,
      max_tokens: 3000,
      response_format: { type: 'json_object' },
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: buildReviewPrompt(unit) },
          { type: 'image_url', image_url: { url: imageDataUrl, detail: 'high' } }
        ]
      }]
    })
  });

  const apiPayload = await apiResponse.json();
  if (!apiResponse.ok) {
    console.error('DeepSeek API error:', apiPayload?.error?.message || apiResponse.status);
    return jsonResponse(apiResponse.status >= 400 && apiResponse.status < 500 ? 400 : 502, {
      error: apiPayload?.error?.message || 'AI 批改服务暂时不可用，请稍后再试。'
    });
  }

  const outputText = extractDeepSeekText(apiPayload);
  let review;
  try {
    review = JSON.parse(stripJsonFence(outputText));
  } catch {
    console.error('Could not parse structured review response.');
    return jsonResponse(502, { error: 'AI 返回的批改格式异常，请再试一次。' });
  }
  if (!isValidReview(review)) {
    console.error('DeepSeek returned an incomplete review object.');
    return jsonResponse(502, { error: 'AI 返回的批改内容不完整，请再试一次。' });
  }

  return jsonResponse(200, { review });
}

function buildReviewPrompt(unit) {
  return `You are a kind, precise English teacher for Chinese Grade 7 students. Review only the student's English composition in the attached photo. Do not transcribe names, phone numbers, addresses, school IDs, or unrelated sensitive information if visible.

The target lesson is ${unit.title} (${unit.chineseTheme || ''}).
Writing task: ${unit.task}
Suggested length: ${unit.range || 'not specified'}
Target grammar: ${(unit.grammar || []).join(', ')}
Useful vocabulary: ${(unit.keyWords || []).join(', ')}
Useful sentence patterns: ${(unit.sentencePatterns || []).join(' | ')}

First, carefully transcribe the student's English exactly. If any words are unclear, write [unclear] rather than inventing them. Then score out of 20: content, structure, language, and presentation are each out of 5. Be encouraging, but do not give points for information that is missing. In the issues array, include only important, teachable corrections. The original field must quote the student's text; suggestion must be a corrected English version; reason must be short Chinese suitable for a Grade 7 student. improvedEssay must keep the student's main ideas, stay within the suggested length when possible, use only Grade 7 level English, and not introduce advanced vocabulary. summary, praise, reasons, and nextPractice must be in Chinese. If the image is too blurry or no composition is visible, say so clearly in transcription and summary, use 0 scores, return an empty issues array, and leave improvedEssay empty.

Return only one valid JSON object. It must match this schema exactly: ${JSON.stringify(reviewSchema)}`;
}

function extractDeepSeekText(payload) {
  const content = payload?.choices?.[0]?.message?.content;
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) return content.map(part => part?.text || '').join('');
  return '';
}

function stripJsonFence(text) {
  return text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
}

function isValidReview(review) {
  if (!review || typeof review !== 'object') return false;
  if (typeof review.transcription !== 'string' || typeof review.summary !== 'string' || typeof review.improvedEssay !== 'string' || typeof review.nextPractice !== 'string') return false;
  if (!Number.isInteger(review.totalScore) || review.totalScore < 0 || review.totalScore > 20) return false;
  if (!Array.isArray(review.praise) || !Array.isArray(review.issues) || review.praise.length > 3 || review.issues.length > 8 || review.praise.some(item => typeof item !== 'string')) return false;
  if (review.issues.some(issue => !issue || typeof issue.original !== 'string' || typeof issue.suggestion !== 'string' || typeof issue.reason !== 'string')) return false;
  return ['content', 'structure', 'language', 'presentation'].every(key => Number.isInteger(review.scores?.[key]) && review.scores[key] >= 0 && review.scores[key] <= 5);
}

async function readRequestJson(request) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > maxRequestBytes) throw new Error('图片请求过大。');
  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > maxRequestBytes) throw new Error('图片请求过大。');
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function isSupportedImage(dataUrl) {
  return typeof dataUrl === 'string' && dataUrl.length <= maxRequestBytes && /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(dataUrl);
}

function readEnv(name, env) {
  return env?.[name]
    || env?.vars?.[name]
    || globalThis.process?.env?.[name]
    || globalThis.Deno?.env?.get?.(name)
    || globalThis.env?.[name]
    || '';
}

function responseHeaders() {
  return {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store'
  };
}

function jsonResponse(status, data) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...responseHeaders(),
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
