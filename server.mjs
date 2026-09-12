import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const rootDirectory = resolve(process.cwd());
const port = Number.parseInt(process.env.PORT || '4173', 10);
const host = process.env.HOST || '0.0.0.0';
const maxRequestBytes = 12 * 1024 * 1024;

await loadEnvFile();

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

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

const server = createServer(async (request, response) => {
  try {
    if (request.method === 'POST' && request.url === '/api/review') {
      await handleReview(request, response);
      return;
    }

    if (request.method === 'GET' && request.url === '/health') {
      sendJson(response, 200, { status: 'ok', aiConfigured: Boolean(process.env.DEEPSEEK_API_KEY) });
      return;
    }

    if (request.url?.startsWith('/api/')) {
      sendJson(response, 404, { error: '未找到该 API 路由。' });
      return;
    }

    await serveStaticFile(request, response);
  } catch (error) {
    console.error('Request failed:', error.message);
    sendJson(response, 500, { error: '服务器发生错误，请稍后再试。' });
  }
});

server.listen(port, host, () => {
  console.log(`写作小宇宙已启动：http://${host}:${port}`);
  console.log(process.env.DEEPSEEK_API_KEY ? 'DeepSeek AI 批改已就绪。' : '未检测到 DEEPSEEK_API_KEY，拍照批改功能暂不可用。');
});

async function handleReview(request, response) {
  if (!process.env.DEEPSEEK_API_KEY) {
    sendJson(response, 503, { error: '尚未配置 DEEPSEEK_API_KEY。请按 README.md 设置密钥后重启服务。' });
    return;
  }

  const body = await readJsonBody(request);
  const imageDataUrl = body?.imageDataUrl;
  const unit = body?.unit;

  if (!isSupportedImage(imageDataUrl)) {
    sendJson(response, 400, { error: '请上传 JPG、PNG 或 WEBP 格式的作文照片。' });
    return;
  }
  if (!unit || typeof unit !== 'object' || typeof unit.id !== 'string' || typeof unit.task !== 'string') {
    sendJson(response, 400, { error: '缺少当前单元的写作要求。' });
    return;
  }

  const baseUrl = (process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com').replace(/\/+$/, '');
  const apiResponse = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: process.env.DEEPSEEK_MODEL || 'deepseek-flash',
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
    sendJson(response, apiResponse.status >= 400 && apiResponse.status < 500 ? 400 : 502, {
      error: apiPayload?.error?.message || 'AI 批改服务暂时不可用，请稍后再试。'
    });
    return;
  }

  const outputText = extractDeepSeekText(apiPayload);
  let review;
  try {
    review = JSON.parse(outputText);
  } catch {
    console.error('Could not parse structured review response.');
    sendJson(response, 502, { error: 'AI 返回的批改格式异常，请再试一次。' });
    return;
  }
  if (!isValidReview(review)) {
    console.error('DeepSeek returned an incomplete review object.');
    sendJson(response, 502, { error: 'AI 返回的批改内容不完整，请再试一次。' });
    return;
  }
  sendJson(response, 200, { review });
}

function buildReviewPrompt(unit) {
  return `You are a kind, precise English teacher for Chinese Grade 7 students. Review only the student's English composition in the attached photo. Do not transcribe names, phone numbers, addresses, school IDs, or unrelated sensitive information if visible.

The target lesson is ${unit.title} (${unit.chineseTheme}).
Writing task: ${unit.task}
Suggested length: ${unit.range}
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

function isValidReview(review) {
  if (!review || typeof review !== 'object') return false;
  if (typeof review.transcription !== 'string' || typeof review.summary !== 'string' || typeof review.improvedEssay !== 'string' || typeof review.nextPractice !== 'string') return false;
  if (!Number.isInteger(review.totalScore) || review.totalScore < 0 || review.totalScore > 20) return false;
  if (!Array.isArray(review.praise) || !Array.isArray(review.issues) || review.praise.some(item => typeof item !== 'string')) return false;
  if (review.issues.some(issue => !issue || typeof issue.original !== 'string' || typeof issue.suggestion !== 'string' || typeof issue.reason !== 'string')) return false;
  return ['content', 'structure', 'language', 'presentation'].every(key => Number.isInteger(review.scores?.[key]) && review.scores[key] >= 0 && review.scores[key] <= 5);
}

async function serveStaticFile(request, response) {
  const requestPath = request.url === '/' ? '/index.html' : decodeURIComponent(request.url || '/index.html').split('?')[0];
  const normalizedPath = resolve(rootDirectory, `.${requestPath}`);
  if (normalizedPath !== rootDirectory && !normalizedPath.startsWith(`${rootDirectory}${sep}`)) {
    sendText(response, 403, 'Forbidden');
    return;
  }

  try {
    const fileInfo = await stat(normalizedPath);
    if (!fileInfo.isFile()) throw new Error('Not a file');
    const file = await readFile(normalizedPath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(normalizedPath)] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    response.end(file);
  } catch {
    sendText(response, 404, 'Not found');
  }
}

function isSupportedImage(dataUrl) {
  return typeof dataUrl === 'string' && dataUrl.length <= maxRequestBytes && /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(dataUrl);
}

function readJsonBody(request) {
  return new Promise((resolveBody, rejectBody) => {
    let size = 0;
    const chunks = [];
    request.on('data', chunk => {
      size += chunk.length;
      if (size > maxRequestBytes) {
        rejectBody(new Error('图片请求过大。'));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on('end', () => {
      try {
        resolveBody(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch {
        rejectBody(new Error('请求格式错误。'));
      }
    });
    request.on('error', rejectBody);
  });
}

function sendJson(response, status, data) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(data));
}

function sendText(response, status, text) {
  response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end(text);
}

async function loadEnvFile() {
  try {
    const contents = await readFile(resolve(rootDirectory, '.env'), 'utf8');
    for (const line of contents.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/i);
      if (!match || match[1].startsWith('#') || process.env[match[1]]) continue;
      process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}
