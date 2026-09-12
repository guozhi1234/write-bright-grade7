const upperUnits = [
  {
    id: "s1", type: "Starter", number: "1", title: "Hello!", chinese: "用英语，大方地认识新朋友", range: "40-55 词", prompt: "向一位新同学做简短自我介绍，并友好地开启对话。", focus: ["问候语", "姓名与拼写", "礼貌结束语"], grammar: ["be 动词 am / is", "人称代词 I / you"], tip: "介绍自己时用 I am ...；问别人姓名时用 What’s your name?", words: [["greet", "问候"], ["spell", "拼写"], ["classmate", "同学"], ["friendly", "友好的"], ["nice to meet you", "很高兴认识你"]], sentences: ["Hello! My name is ___.", "I’m ___ years old. I’m in Class ___.", "Nice to meet you. I hope we can be friends."], outline: [["开头：打招呼", "用 Hello! 或 Good morning! 友好开场。"], ["中间：介绍自己", "写姓名、年龄、班级或一个兴趣。"], ["结尾：表达期待", "说 Nice to meet you 或 Let’s be friends."]], sampleTitle: "Hello, New Friend!", essay: ["Hello! My name is Lucy. I’m 12 years old. I’m in Class 3, Grade 7.", "I like reading and drawing. My favourite colour is blue. I’m happy to meet you at school.", "Nice to meet you! I hope we can be good friends."], translation: "你好！我叫露西，12岁，在七年级3班。我喜欢阅读和画画，最喜欢蓝色。很高兴在学校认识你，希望我们能成为好朋友。", highlights: ["开头自然问候，像真正的对话。", "信息简洁完整：姓名、年龄、班级和爱好。", "结尾表达友好愿望，语气得体。"], checklist: ["开头字母大写了吗？", "I am 写对了吗？", "结尾有句号吗？"], plan: (name, detail) => [`Hello! My name is ${name}.`, `I am ... years old and I am in ... .`, `I like ${detail || "reading and drawing"}. Nice to meet you!`] },
  {
    id: "s2", type: "Starter", number: "2", title: "Keep Tidy!", chinese: "介绍我的物品，写清楚颜色和位置", range: "40-55 词", prompt: "介绍两三件自己的物品，写出它们的颜色以及所在的位置。", focus: ["物品名称", "颜色", "位置介词"], grammar: ["this / these", "in / on / under", "单复数"], tip: "一件物品用 It is；两件或更多物品用 They are。", words: [["schoolbag", "书包"], ["ruler", "尺子"], ["colourful", "色彩鲜艳的"], ["under", "在……下面"], ["next to", "在……旁边"]], sentences: ["My ___ is ___. It is on / in / under ___.", "These are my ___. They are ___.", "I keep my things tidy every day."], outline: [["开头：说整体", "先介绍书包、书桌或房间。"], ["中间：说两件物品", "每件物品写颜色和位置。"], ["结尾：小习惯", "补一句自己会整理物品。"]], sampleTitle: "My Tidy Desk", essay: ["This is my desk. It is small but tidy. My blue schoolbag is under the desk.", "A red ruler and two pencils are in my pencil box. The pencil box is on the desk. My books are next to it.", "I put my things in the right place every day."], translation: "这是我的书桌。它不大，但很整洁。我的蓝色书包在桌子下面。一把红尺子和两支铅笔在铅笔盒里，铅笔盒在桌上，书在它旁边。我每天都把物品放在正确的位置。", highlights: ["按“整体—细节—习惯”顺序写，清楚好读。", "颜色词和位置介词使用准确。", "最后一句表现爱整洁的好习惯。"], checklist: ["单数用 is，复数用 are。", "in / on / under 选对了吗？", "物品前有 a / two 吗？"], plan: (name, detail) => [`This is ${name}'s desk / schoolbag. It is ... .`, `My ___ is ___. It is ${detail || "on the desk"}.`, `I keep my things tidy every day.`] },
  {
    id: "s3", type: "Starter", number: "3", title: "Welcome!", chinese: "看图写话：我的快乐农场", range: "45-60 词", prompt: "想象你有一个农场，介绍农场里的动物、颜色和数量。", focus: ["动物名称", "数量", "颜色与感受"], grammar: ["have / has", "how many", "名词复数"], tip: "数量超过一时，名词通常要加 -s，例如 three ducks。", words: [["farm", "农场"], ["cow", "奶牛"], ["duck", "鸭子"], ["field", "田地"], ["wonderful", "很棒的"]], sentences: ["I have a small / big farm.", "There are ___ ___ on my farm.", "They are ___. I love my farm."], outline: [["开头：农场是什么样", "用 big、small 或 beautiful 描述农场。"], ["中间：动物和景物", "选两三种动物，写数量或颜色。"], ["结尾：表达喜爱", "用 I love ... 收尾。"]], sampleTitle: "My Happy Farm", essay: ["I have a small farm. It is beautiful and green.", "There are four black and white cows near the house. I also have six yellow ducks. They are in the water. There are many flowers in my farm, too.", "I like feeding the animals. I love my happy farm."], translation: "我有一个小农场，它美丽又绿意盎然。房子旁有四头黑白相间的奶牛，我还有六只黄鸭子，它们在水里。农场里也有很多花。我喜欢喂动物，我爱我的快乐农场。", highlights: ["动物、颜色和数量都写到了。", "用 also 和 too 增加信息，句子不重复。", "结尾写自己的活动，让农场更有生活感。"], checklist: ["数量和名词复数搭配了吗？", "颜色放在名词前了吗？", "有写自己的感受吗？"], plan: (name, detail) => [`I have a ___ farm. It is ... .`, `There are ___ ___ on my farm. They are ... .`, `I like ${detail || "feeding the animals"}. I love my farm.`] },
  {
    id: "u1", type: "Unit", number: "1", title: "You and Me", chinese: "个人档案：让新朋友认识你", range: "60-80 词", prompt: "写一份个人档案或一封交友回复，介绍自己的基本信息、家庭、爱好和喜好。", focus: ["基本信息", "家庭与宠物", "爱好与喜好"], grammar: ["be 动词", "like / love", "简单现在时"], tip: "介绍自己的日常喜好时用 I like / I love；不要把 like 写成 likes。", words: [["profile", "个人档案"], ["hobby", "爱好"], ["favourite", "最喜欢的"], ["weekend", "周末"], ["share", "分享"]], sentences: ["My name is ___. I am ___ years old.", "I live with my ___.", "My favourite ___ is ___. I like ___ at weekends."], outline: [["第一段：我是谁", "姓名、年龄、来自哪里或现在住在哪里。"], ["第二段：我喜欢什么", "家庭、宠物、食物、运动或兴趣，选三项。"], ["第三段：交朋友", "写希望认识对方或一起做什么。"]], sampleTitle: "A Little Profile About Me", essay: ["Hello! My name is Kevin. I am 13 years old. I live in Nanjing with my parents and my little sister.", "I love playing basketball and reading storybooks. My favourite food is tomato noodles. At weekends, I often play basketball with my friends in the park.", "I am friendly and helpful. I hope we can be friends!"], translation: "你好！我叫凯文，13岁，和父母及妹妹住在南京。我喜欢打篮球和读故事书，最喜欢番茄面。周末常和朋友在公园打篮球。我友好又乐于助人，希望我们能成为朋友！", highlights: ["信息丰富，但每句都短而准确。", "使用 at weekends 说明日常习惯。", "最后用性格特点和交友愿望，完整回应题目。"], checklist: ["I 后面用 am，不用 is。", "like 后面动词用了 -ing 吗？", "人名、城市名首字母大写了吗？"], plan: (name, detail) => [`Hello! My name is ${name}. I am ... years old. I live in ... .`, `I like ${detail || "reading and playing sports"}. My favourite ... is ... .`, `I am friendly. I hope we can be friends!`] },
  {
    id: "u2", type: "Unit", number: "2", title: "We’re Family!", chinese: "家庭照片介绍：写出爱与温暖", range: "60-80 词", prompt: "结合一张家庭照片，介绍两三位家人，写出外貌、性格、爱好和你的感受。", focus: ["人物关系", "外貌或性格", "爱好与家庭情感"], grammar: ["he / she", "has / likes", "所有格 his / her"], tip: "介绍他人时别忘了动词第三人称：She likes ...，He has ...。", words: [["family photo", "家庭照片"], ["kind", "善良的"], ["clever", "聪明的"], ["together", "一起"], ["helpful", "乐于助人的"]], sentences: ["This is my ___. His / Her name is ___.", "He / She is ___ and ___.", "We love and help each other."], outline: [["第一段：照片中的家人", "先说这是一张家庭照片，再点出人物。"], ["第二段：分别介绍", "选两三位，写性格、外貌或爱好。"], ["第三段：我的感受", "表达对家人的爱。"]], sampleTitle: "My Loving Family", essay: ["This is a photo of my family. There are four people in my family.", "My father is tall and funny. He likes playing football on Sundays. My mother is kind and helpful. She loves cooking for us. The girl next to my mother is me. I like drawing and reading.", "We often do things together. I love my family very much."], translation: "这是一张我的家庭照片。我家有四口人。爸爸高高的，很幽默，星期天喜欢踢足球。妈妈善良又乐于助人，喜欢为我们做饭。妈妈旁边的女孩是我，我喜欢画画和阅读。我们经常一起做事，我非常爱我的家人。", highlights: ["用 This is ... 和 There are ... 自然开篇。", "每个人都有不同细节，人物形象不重复。", "结尾回到家庭情感，主题很完整。"], checklist: ["he / she 用对了吗？", "She likes 中 likes 加 -s 了吗？", "家人关系称谓拼对了吗？"], plan: (name, detail) => [`This is ${name}'s family photo. There are ... people in my family.`, `My ___ is ... . He / She likes ${detail || "..."}.`, `We often ... together. I love my family.`] },
  {
    id: "u3", type: "Unit", number: "3", title: "My School", chinese: "写邮件，带朋友逛校园", range: "70-90 词", prompt: "给一位朋友写邮件，介绍你的学校、最喜欢的地点和在那里的活动。", focus: ["邮件格式", "校园地点", "方位与原因"], grammar: ["there is / are", "位置介词", "because"], tip: "介绍地点时先写 There is / are ...，再补充它在哪里、你为什么喜欢它。", words: [["library", "图书馆"], ["dining hall", "食堂"], ["sports field", "运动场"], ["modern", "现代化的"], ["across from", "在……对面"]], sentences: ["There are many interesting places in my school.", "My favourite place is the ___. It is ___ the ___.", "I like it because I can ___."], outline: [["第一段：回复问候", "称呼朋友，表示很高兴介绍学校。"], ["第二段：校园和最爱地点", "写两三个地点，重点写一个最喜欢的。"], ["第三段：邮件结尾", "邀请朋友来参观或友好告别。"]], sampleTitle: "Welcome to My School", essay: ["Dear Amy,\n\nThank you for your email. I would like to tell you about my school. It is big, clean and beautiful.", "There are many interesting places here. My favourite place is the library. It is next to our classroom building. It is quiet, and there are lots of books. I like reading there after class.", "Welcome to my school one day!\n\nBest,\nLiu Mei"], translation: "亲爱的艾米：谢谢你的邮件。我想告诉你一些关于我学校的事。它又大、又干净、又漂亮。学校有许多有趣的地方。我最喜欢图书馆，它在教学楼旁边。那里很安静，也有很多书。我喜欢课后在那里读书。欢迎有一天来我的学校！祝好，刘梅", highlights: ["邮件格式完整，有称呼和落款。", "用 big, clean and beautiful 并列描述，语言自然。", "重点地点写了位置、特点和活动，信息具体。"], checklist: ["邮件有 Dear ... 和 Best 吗？", "there are 后面是复数吗？", "because 后面写完整原因了吗？"], plan: (name, detail) => [`Dear friend,\n\nThank you for your email. I want to tell you about my school.`, `There are ... . My favourite place is ... . It is ... . I like it because ${detail || "I can ... there"}.`, `Welcome to my school!\n\nBest,\n${name}`] },
  {
    id: "u4", type: "Unit", number: "4", title: "My Favourite Subject", chinese: "说出喜欢一门课的理由", range: "60-80 词", prompt: "写一则介绍自己课程和最喜欢学科的小短文，说明喜欢它的原因。", focus: ["学科名称", "喜欢与不喜欢", "理由与收获"], grammar: ["and / but / because", "简单现在时", "形容词"], tip: "because 用来连接“喜欢”和“原因”，前面不用再加 so。", words: [["subject", "学科"], ["interesting", "有趣的"], ["useful", "有用的"], ["learn about", "了解"], ["future", "未来"]], sentences: ["This term, I have ___, ___ and ___.", "I like ___, but my favourite subject is ___.", "I like it because ___."], outline: [["第一段：本学期课程", "列举两三门课，写最喜欢哪一门。"], ["第二段：喜欢的理由", "从老师、课堂、内容或未来职业中选两个理由。"], ["第三段：学习态度", "写想继续学习或想做的事。"]], sampleTitle: "My Favourite Subject", essay: ["This term, I have Chinese, English, maths, art and music. I like art, but my favourite subject is English.", "I like English because it is useful and interesting. Our English teacher is kind, and her classes are fun. I can read English stories and talk with new friends in English.", "I want to learn more English every day."], translation: "这学期我有语文、英语、数学、美术和音乐课。我喜欢美术，但最喜欢英语。因为英语既有用又有趣。我们的英语老师很亲切，她的课很有趣。我可以读英语故事，也能用英语和新朋友交谈。我想每天学习更多英语。", highlights: ["用 but 对比“喜欢”和“最喜欢”，表达更丰富。", "because 后给出多个具体理由。", "结尾写学习目标，积极有力量。"], checklist: ["and / but / because 用对了吗？", "because 前面没有 so 吗？", "学科名称首字母需要大写吗？"], plan: (name, detail) => [`This term, I have ... . My favourite subject is ... .`, `I like it because ${detail || "it is interesting and useful"}.`, `I want to learn more about ... every day.`] },
  {
    id: "u5", type: "Unit", number: "5", title: "Fun Clubs", chinese: "申请加入社团，写一封有礼貌的邮件", range: "70-90 词", prompt: "选择一个你想加入的社团，给负责人写邮件，介绍能力、兴趣和加入原因。", focus: ["邮件礼貌用语", "能力 can", "兴趣和原因"], grammar: ["can / can't", "would like to", "一般现在时"], tip: "can 后面直接接动词原形：I can draw. 不能写 I can draws。", words: [["club leader", "社团负责人"], ["interested in", "对……感兴趣"], ["join", "加入"], ["member", "成员"], ["practice", "练习"]], sentences: ["I am interested in your ___ club.", "I can ___, and I would like to learn ___.", "Can I join your club?"], outline: [["第一段：写信目的", "称呼负责人，说明想加入什么社团。"], ["第二段：我的能力与兴趣", "写会做什么、还想学习什么。"], ["第三段：礼貌请求", "询问能否加入，写结尾和署名。"]], sampleTitle: "An Email to the Art Club", essay: ["Dear Ms Wang,\n\nI am interested in your Art Club. I love drawing animals and flowers. I can draw with pencils and paint with colours.", "I would like to join the club because I want to learn more about painting. I also want to make new friends there. I can come to the club every Wednesday afternoon.", "Can I join your club?\n\nBest,\nTom"], translation: "亲爱的王老师：我对您的美术社团很感兴趣。我喜欢画动物和花，会用铅笔画画，也会用颜料上色。我想加入社团，因为想学习更多绘画知识，也想在那里交新朋友。我每周三下午都能来。请问我可以加入吗？祝好，汤姆", highlights: ["写信目的明确，第一句就进入主题。", "can 和 would like to 分别写能力和愿望。", "写出参加时间，显得真诚具体。"], checklist: ["can 后是动词原形吗？", "邮件称呼和落款完整吗？", "理由写清楚了吗？"], plan: (name, detail) => [`Dear Club Leader,\n\nI am interested in your ... Club.`, `I can ${detail || "..."}. I would like to learn ... .`, `Can I join your club?\n\nBest,\n${name}`] },
  {
    id: "u6", type: "Unit", number: "6", title: "A Day in the Life", chinese: "我的一天：把时间线写清楚", range: "70-90 词", prompt: "介绍一个上学日的日常安排，写清时间、活动以及如何合理利用时间。", focus: ["时间表达", "日常活动", "顺序词"], grammar: ["简单现在时", "at / in / after", "what time / when"], tip: "写日常习惯时，主语是 I 用 get up；主语是 he / she 要用 gets up。", words: [["usually", "通常"], ["routine", "日常安排"], ["begin", "开始"], ["finish", "完成"], ["make good use of", "好好利用"]], sentences: ["I usually get up at ___.", "After school, I ___.", "At ___, it is time for me to ___."], outline: [["第一段：早晨", "起床、早餐、到校时间。"], ["第二段：在校与放学后", "上午课程、午餐、放学后活动。"], ["第三段：晚上与感受", "作业、睡觉时间和对时间的看法。"]], sampleTitle: "My Busy School Day", essay: ["I usually get up at 6:40 a.m. I have breakfast with my family and go to school at 7:20.", "My classes begin at 8:00. I have four classes in the morning. After lunch, I read for twenty minutes. School finishes at 4:30 p.m. Then I play table tennis with my friends.", "At 8:00 p.m., I do my homework. I go to bed at 9:30. My day is busy, but I use my time well."], translation: "我通常早上6点40分起床，和家人吃早餐，7点20分去学校。8点开始上课，上午有四节课。午饭后我阅读20分钟。4点30分放学，然后和朋友打乒乓球。晚上8点做作业，9点30分睡觉。我的一天很忙，但我把时间利用得很好。", highlights: ["按时间顺序写，读者很容易跟上。", "使用 after lunch、then、at 等词衔接。", "最后一句概括一天，扣住合理利用时间的主题。"], checklist: ["时间前的 at 用了吗？", "第三人称和 I 的动词形式分清了吗？", "活动顺序清楚吗？"], plan: (name, detail) => [`I usually get up at ... . Then I ... .`, `My school begins at ... . After school, I ${detail || "..."}.`, `At ..., I ... . I use my time well.`] },
  {
    id: "u7", type: "Unit", number: "7", title: "Happy Birthday!", chinese: "生日小帖：让庆祝更有意义", range: "70-90 词", prompt: "写一则帖子，介绍你的生日日期、庆祝方式、感受以及今年想做的有意义的事。", focus: ["日期表达", "庆祝活动", "感受与意义"], grammar: ["序数词", "一般现在时", "疑问词复习"], tip: "日期读作 on May fifth，不说 on May five。", words: [["celebrate", "庆祝"], ["birthday cake", "生日蛋糕"], ["meaningful", "有意义的"], ["wish", "愿望"], ["together", "一起"]], sentences: ["My birthday is on ___.", "I usually ___ with ___.", "This year, I want to ___ because ___."], outline: [["第一段：生日日期", "写生日在什么时候，通常和谁庆祝。"], ["第二段：庆祝活动", "准备什么、做什么、感觉如何。"], ["第三段：今年的心愿", "写一个更有意义的计划和原因。"]], sampleTitle: "A Meaningful Birthday", essay: ["My birthday is on October twelfth. I usually celebrate it with my family at home.", "My mother makes a small chocolate cake, and we have a nice dinner together. After dinner, I open my presents and take photos with my family. I always feel happy and loved.", "This year, I want to make a card for my parents and help them cook dinner. I want to say thank you to them."], translation: "我的生日是10月12日。我通常在家和家人一起庆祝。妈妈会做一个小巧克力蛋糕，我们一起吃丰盛的晚餐。晚餐后我打开礼物，和家人拍照。我总感到幸福和被爱。今年我想给父母做一张卡片，还要帮他们做晚饭。我想对他们说谢谢。", highlights: ["日期使用序数词，符合英语习惯。", "活动有顺序：晚餐、开礼物、拍照。", "最后的感谢父母让生日主题更有意义。"], checklist: ["日期使用序数词了吗？", "on + 具体日期写对了吗？", "写出了感受或心愿吗？"], plan: (name, detail) => [`My birthday is on ... . I usually celebrate it with ... .`, `We ... together. I feel ... .`, `This year, I want to ${detail || "..."} because ... .`] }
];

const lowerUnits = [
  { id: 'l1', type: '七下 Unit', number: '1', title: 'Animal Friends', chinese: '动物朋友：写一篇我最喜欢的动物小帖', range: '70-90 词', prompt: '写一则小帖介绍你最喜欢的动物，说明它的外形、习性，以及你喜欢它的原因。', focus: ['动物名称与特征', '形容词描述', '喜欢的原因'], grammar: ['Wh- 疑问词', '形容词', '名词复数'], tip: '描述动物时，先用形容词写特点，再用 because 解释喜欢它的原因。', words: [['animal friend', '动物朋友'], ['clever', '聪明的'], ['gentle', '温顺的'], ['protect', '保护'], ['take care of', '照顾']], sentences: ['My favourite animal is the ___.', 'It is ___ and ___.', 'I like it because ___.'], outline: [['第一段：点出动物', '说最喜欢什么动物，以及在哪里见过它。'], ['第二段：写特点', '写外形、能力或生活习性，选两三个细节。'], ['第三段：表达喜爱', '说明喜欢它的原因，也可以写怎样关爱动物。']], sampleTitle: 'My Favourite Animal', essay: ['My favourite animal is the elephant. I first saw elephants at a zoo with my parents. They are big, strong and very clever.', 'An elephant has a long nose and large ears. It can use its nose to pick up food and drink water. Elephants usually live in groups and take good care of their babies.', 'I like elephants because they are gentle and helpful. I think we should protect animals and give them a safe home.'], translation: '我最喜欢的动物是大象。我第一次和父母在动物园看到大象。它们高大、强壮又聪明。大象有长鼻子和大耳朵，能用鼻子拿食物、喝水。它们通常群居并照顾幼崽。我喜欢大象，因为它们温顺又乐于助人。我们应该保护动物，给它们安全的家。', highlights: ['按“是什么—什么样—为什么喜欢”展开，条理清楚。', '用 big、strong、clever 等形容词写出动物特点。', '结尾从喜欢动物上升到保护动物，主题完整。'], checklist: ['动物名称和复数形式写对了吗？', '至少用了两个形容词吗？', 'because 后面写清原因了吗？'], plan: (name, detail) => [`My favourite animal is ${name || 'the ...'}. It is ... .`, `It has / can ${detail || '...'}. It is ... and ... .`, 'I like it because ... . We should protect animals.'] },
  { id: 'l2', type: '七下 Unit', number: '2', title: 'No Rules, No Order', chinese: '规则与秩序：写信给同学提建议', range: '80-100 词', prompt: '针对校园或班级中的一个不文明现象，写一封信提出两三条具体规则，并说明规则的重要性。', focus: ['规则表达', '情态动词', '建议和理由'], grammar: ['祈使句', 'can / have to / must', '否定规则'], tip: '规则可以用 Don\'t ...、We must ... 或 We have to ...；语气要友好，理由要具体。', words: [['rule', '规则'], ['follow', '遵守'], ['hallway', '走廊'], ['respect', '尊重'], ['safe', '安全的']], sentences: ['We must / have to ___.', 'Don\'t ___ in the ___.', 'These rules can help us ___.'], outline: [['第一段：说明问题', '礼貌说明你想谈的规则或现象。'], ['第二段：给出规则', '写两三条清楚、可做到的规则。'], ['第三段：解释意义', '说明规则能带来什么好处，并友好结尾。']], sampleTitle: 'Rules for a Better Classroom', essay: ['Dear classmates,\n\nOur classroom is our learning home, so we need some simple rules. First, we must arrive on time and get ready for class. We should listen carefully when others are speaking.', 'We must not eat or run in the classroom. We also have to put rubbish in the bin and keep our desks tidy. If we want to ask a question, we can put up our hands.', 'These rules can help us learn safely and happily. Let us follow them together!\n\nYours,\nLi Hua'], translation: '亲爱的同学们：教室是我们的学习之家，因此需要一些简单规则。首先，我们必须准时到校并做好上课准备。别人说话时应认真倾听。不能在教室吃东西或跑动，也必须把垃圾放进垃圾桶、保持课桌整洁。想提问可以举手。这些规则能帮助我们安全快乐地学习。让我们一起遵守吧！', highlights: ['用 Dear 和落款，书信格式完整。', '规则具体、可执行，并使用了 must、have to、can。', '最后解释规则的好处，语气积极。'], checklist: ['祈使句或 must / have to 用对了吗？', '否定规则用了 Don\'t 或 must not 吗？', '每条规则都清楚具体吗？'], plan: (name, detail) => [`Dear ${name || 'classmates'},\n\nI want to talk about our class rules.`, `We must ${detail || '...'}. Don\'t ... . We also have to ... .`, 'These rules can help us ... . Let us follow them together!\n\nYours,\n...'] },
  { id: 'l3', type: '七下 Unit', number: '3', title: 'Keep Fit', chinese: '保持健康：分享我的运动习惯', range: '80-100 词', prompt: '写一篇短文介绍你最喜欢的运动或锻炼方式，写清频率、伙伴以及它带来的好处。', focus: ['运动与频率', '所有格', '健康益处'], grammar: ['所有格代词', '频度副词', 'how often'], tip: '写运动习惯时，用 usually、often、twice a week 等词让信息更具体。', words: [['keep fit', '保持健康'], ['exercise', '锻炼'], ['usually', '通常'], ['twice a week', '一周两次'], ['healthy', '健康的']], sentences: ['My favourite way to keep fit is ___.', 'I usually do it ___.', 'It helps me ___.'], outline: [['第一段：最爱的运动', '说喜欢哪种运动或锻炼方式。'], ['第二段：运动习惯', '写多久做一次、和谁做、在哪里做。'], ['第三段：健康收获', '写身体或心情有什么变化。']], sampleTitle: 'My Way to Keep Fit', essay: ['My favourite way to keep fit is playing badminton. My sister has a badminton racket, and I often use mine after school. We usually play in the sports hall near our home.', 'I play badminton twice a week. At weekends, my father sometimes joins us. We run, jump and laugh a lot during the game.', 'Badminton makes my body stronger and helps me relax after a busy day. I think doing exercise with my family is healthy and fun.'], translation: '我最喜欢的保持健康方式是打羽毛球。姐姐有一副球拍，我放学后常用自己的。我们通常在家附近的体育馆打球。我每周打两次，周末爸爸有时也加入。运动中我们跑、跳、欢笑。羽毛球让身体更强壮，也帮我在忙碌后放松。我觉得和家人锻炼既健康又有趣。', highlights: ['频率 twice a week 和 often 让习惯很具体。', '自然使用 mine、my sister\'s 等所有格表达。', '结尾写出身体和心情两方面的收获。'], checklist: ['写了频率词或次数吗？', '所有格 my / mine / my sister\'s 用对了吗？', '写出运动带来的好处了吗？'], plan: (name, detail) => [`My favourite way to keep fit is ${name || '...'}.`, `I usually do it ${detail || '...'}. I often exercise with ... .`, 'It helps me ... . I think it is healthy and fun.'] },
  { id: 'l4', type: '七下 Unit', number: '4', title: 'Eat Well', chinese: '健康饮食：介绍我的饮食习惯', range: '80-100 词', prompt: '写一篇短文介绍你平时的三餐、喜欢的健康食物，以及你想改进的一项饮食习惯。', focus: ['三餐内容', '食物偏好', '健康建议'], grammar: ['可数与不可数名词', 'some / any', '选择疑问句'], tip: '不可数食物如 rice、milk 通常不用 a / an；可数名词复数可用 some。', words: [['meal', '一餐'], ['porridge', '粥'], ['vegetable', '蔬菜'], ['fruit', '水果'], ['healthy habit', '健康习惯']], sentences: ['I usually have ___ for breakfast.', 'I like ___, but I do not eat much ___.', 'I want to ___ to eat more healthily.'], outline: [['第一段：三餐概况', '写早餐、午餐或晚餐中有代表性的食物。'], ['第二段：喜欢和选择', '写喜欢什么、为什么，注意食物搭配。'], ['第三段：健康计划', '写一项准备改进的饮食习惯。']], sampleTitle: 'My Healthy Eating Habits', essay: ['I try to eat well every day. For breakfast, I usually have porridge, an egg and some fruit. At school, I often have rice, vegetables and chicken for lunch.', 'My favourite food is tomato and egg noodles because they are delicious. I also like apples and bananas. I do not drink much cola because too much sugar is not good for my teeth.', 'This month, I want to eat more vegetables and drink more water. Healthy food gives me energy for school and sport.'], translation: '我每天努力吃得健康。早餐通常吃粥、一个鸡蛋和一些水果。在学校午餐常吃米饭、蔬菜和鸡肉。我最喜欢番茄鸡蛋面，因为很美味，也喜欢苹果和香蕉。我不喝太多可乐，因为过多糖分对牙齿不好。这个月我想多吃蔬菜、多喝水。健康食物给我上学和运动的能量。', highlights: ['按三餐和喜好组织，内容贴近生活。', '正确使用 some fruit、vegetables、water 等名词。', '最后有明确的健康计划，主题完整。'], checklist: ['可数和不可数食物用对了吗？', '写了至少两种健康食物吗？', '有一项具体的健康计划吗？'], plan: (name, detail) => [`For breakfast, I usually have ${name || '...'}.`, `I like ${detail || '...'} because ... . I also eat / drink ... .`, 'I want to ... to eat more healthily.'] }
  ,{ id: 'l5', type: '七下 Unit', number: '5', title: 'Here and Now', chinese: '此时此刻：描述大家正在做什么', range: '80-100 词', prompt: '写一段此时此刻的场景描述，介绍不同地点的家人或朋友正在做的事情。', focus: ['现在进行时', '人物与地点', '活动描写'], grammar: ['现在进行时', 'be + 动词-ing', '电话用语'], tip: '现在进行时由 be 动词加动词 -ing 构成：She is reading；They are playing。', words: [['right now', '此刻'], ['at the moment', '此时'], ['chat', '聊天'], ['prepare', '准备'], ['share', '分享']], sentences: ['___ is / are ___ing right now.', 'At the moment, ___ is ___ing in / at ___.', 'We are having a good time.'], outline: [['第一段：交代时间', '说明这是此刻的家庭或朋友场景。'], ['第二段：分别描写', '写两三个人在不同地点做的事。'], ['第三段：整体感受', '用一句话概括热闹、温暖或快乐。']], sampleTitle: 'My Family Right Now', essay: ['It is eight o\'clock on Saturday evening. My family members are all doing different things at home. We are enjoying a quiet and happy time together.', 'My father is reading a newspaper in the living room. My mother is preparing some fruit in the kitchen. My little brother is drawing a picture at his desk. I am talking with my cousin on the phone.', 'Although we are doing different things, we are sharing the same warm home. I love these simple moments with my family.'], translation: '星期六晚上八点，我们一家都在家做不同的事情，享受安静快乐的时光。爸爸在客厅看报，妈妈在厨房准备水果，弟弟在书桌前画画，我正在和表哥打电话。虽然做的事情不同，但我们共享同一个温暖的家。我喜欢这些和家人在一起的简单时刻。', highlights: ['开头用具体时间建立场景。', '多次正确使用 is / are + -ing 描写正在发生的事。', '结尾从活动回到家庭情感，自然完整。'], checklist: ['每个现在进行时都有 be 动词吗？', '动词加 -ing 形式写对了吗？', '写清人物、地点和活动了吗？'], plan: (name, detail) => [`It is ... right now. My family / friends are ... .`, `${name || '...'} is / are ${detail || '...ing'} in / at ... .`, 'We are ... . I enjoy this moment.'] },
  { id: 'l6', type: '七下 Unit', number: '6', title: 'Rain or Shine', chinese: '晴雨之间：描述天气和活动', range: '80-100 词', prompt: '写一段天气小报道，介绍某地的天气、人们正在做的活动，以及天气对生活的影响。', focus: ['天气表达', '现在进行时', '活动与感受'], grammar: ['天气句型', '现在进行时', '一般现在时'], tip: '问天气用 What\'s the weather like?；描述正在发生的活动用 be + 动词-ing。', words: [['sunny', '晴朗的'], ['rainy', '下雨的'], ['windy', '有风的'], ['temperature', '气温'], ['weather report', '天气预报']], sentences: ['It is ___ and ___ in ___.', 'People are ___ing ___.', 'This weather makes people ___.'], outline: [['第一段：天气信息', '写地点、天气和大致气温或季节。'], ['第二段：人们的活动', '写两三种正在进行的活动。'], ['第三段：天气影响', '写你喜欢或不喜欢的原因及建议。']], sampleTitle: 'A Rainy Day in My City', essay: ['It is rainy and cool in my city today. The temperature is about 16 degrees, so many people are wearing jackets and carrying umbrellas.', 'In the street, some students are walking to school carefully. A bus driver is taking people to work. In the park, the trees are drinking the rain, but nobody is playing there now.', 'Rainy days can make the roads wet, so we need to be careful. I still like the rain because the air feels fresh after it stops.'], translation: '今天我的城市下雨而且凉爽，气温大约16度，所以许多人穿着外套、带着伞。街上有些学生正小心地去学校，公交司机正送人们上班。公园里树木在享受雨水，但现在没有人在那里玩。雨天会让道路湿滑，我们要小心。我仍喜欢雨，因为雨停后空气很清新。', highlights: ['开头有地点、天气、气温，像简短天气播报。', '用现在进行时描写街上的动态画面。', '结尾写出天气影响和个人感受。'], checklist: ['天气形容词 sunny / rainy 等写对了吗？', '正在发生的活动用了 be + -ing 吗？', '写出了一条安全或生活建议吗？'], plan: (name, detail) => [`It is ${name || '...'} in ... today.`, `People are ${detail || '...ing'}. Some people are ... .`, 'This weather makes ... . We should ... .'] },
  { id: 'l7', type: '七下 Unit', number: '7', title: 'A Day to Remember', chinese: '难忘的一天：写一篇学校活动日记', range: '90-110 词', prompt: '写一篇日记，记录一次学校旅行或特别活动，写清时间、经过、感受和收获。', focus: ['日记格式', '过去时', '经历与收获'], grammar: ['一般过去时', '规则动词 -ed', 'was / were'], tip: '日记写已经发生的事，多用过去式：visited、walked、was、were。', words: [['school trip', '学校旅行'], ['visit', '参观'], ['learn about', '了解'], ['excited', '兴奋的'], ['memorable', '难忘的']], sentences: ['Last ___, we went to ___.', 'We ___ed / saw / learned ___.', 'I felt ___ because ___.'], outline: [['第一段：日记开头', '写日期、天气和去哪里活动。'], ['第二段：活动经过', '按时间顺序写两三件做过的事。'], ['第三段：感受收获', '写当时的感受，以及学到了什么。']], sampleTitle: 'A School Trip to the Farm', essay: ['Saturday, 12 April\n\nIt was sunny last Saturday. Our class went on a school trip to a farm outside the city. We left school early by bus, and everyone was excited.', 'At the farm, we fed chickens and picked strawberries. A farmer showed us how vegetables grow. After lunch, we worked in small groups and cleaned the animal area. We were tired, but we had a lot of fun.', 'I learned that food comes from hard work. It was a memorable day, and I want to visit the farm again.'], translation: '4月12日，星期六。上周六天气晴朗，我们班去城外农场春游。我们一早乘公交出发，大家都很兴奋。在农场，我们喂鸡、摘草莓。一位农民向我们展示蔬菜如何生长。午饭后，我们分组清理动物区。虽然累，但很开心。我懂得了食物来自辛勤劳动。这是难忘的一天，我想再去农场。', highlights: ['日记有日期，开头交代天气、时间和地点。', '按活动顺序使用过去式，过程清楚。', '最后写出收获，日记有思考深度。'], checklist: ['发生过的事都用了过去式吗？', '日记有日期和时间顺序吗？', '写出感受或收获了吗？'], plan: (name, detail) => [`Saturday, ...\n\nLast ..., we went to ${name || '...'}. It was ... .`, `We ${detail || 'visited / played / learned ...'}. Then we ... .`, 'I felt ... because ... . It was a memorable day.'] },
  { id: 'l8', type: '七下 Unit', number: '8', title: 'Once upon a Time', chinese: '从前：为故事续写一个结尾', range: '90-110 词', prompt: '为一个动物故事续写结尾，写清问题如何解决、人物从中学到什么。', focus: ['故事顺序', '过去时', '道理与结局'], grammar: ['一般过去时', '过去与现在的对比', '连接词'], tip: '故事经过多用过去式；最后的道理可以用现在时，如 We should help others。', words: [['once upon a time', '从前'], ['brave', '勇敢的'], ['kindness', '善意'], ['save', '救'], ['lesson', '道理']], sentences: ['One day, ___ happened.', 'Then / After that, ___ .', 'In the end, ___ learned that ___.'], outline: [['第一段：出现问题', '接住原故事，写谁遇到了什么困难。'], ['第二段：解决过程', '用 Then、After that 写两三步行动。'], ['第三段：结局和道理', '写问题怎样解决、角色明白了什么。']], sampleTitle: 'A Kind Little Mouse', essay: ['One day, a little mouse was looking for food near a river. Suddenly, it heard a lion crying for help. The lion had a thorn in his paw and could not walk.', 'The mouse was afraid, but it remembered that everyone needs help sometimes. It carefully pulled out the thorn. The lion thanked the mouse and promised to be kind to small animals.', 'A few days later, the lion saw a cat chasing the mouse. He scared the cat away and saved his new friend. In the end, they learned that kindness can make even different animals become friends.'], translation: '一天，一只小老鼠在河边找食物，忽然听到狮子呼救。狮子爪子里扎了刺，走不了路。老鼠很害怕，但想到每个人都有需要帮助的时候，便小心拔出了刺。狮子感谢它，并答应善待小动物。几天后，狮子看到猫追老鼠，便吓跑了猫、救了朋友。最后它们明白，善意能让不同的动物成为朋友。', highlights: ['有问题、行动、结局，故事结构完整。', '用 suddenly、then、a few days later 让情节连贯。', '结尾用现在时点明故事道理。'], checklist: ['故事经过主要用了过去式吗？', '使用了 Then / Suddenly 等连接词吗？', '结尾写出了一个道理吗？'], plan: (name, detail) => [`One day, ${name || '...'} happened.`, `Then ${detail || '...'}. After that, ... .`, 'In the end, ... learned that we should ... .'] }
];

const units = [...upperUnits, ...lowerUnits];

const teachingData = {
  s1: {
    questions: [['写给谁？', '一位刚认识的新同学。'], ['写什么？', '姓名、年龄、班级和一个爱好。'], ['必须有什么？', '问候语和友好的结束语。'], ['重点句型？', 'I am ... / My name is ...']],
    ladder: [['基础句', 'I am Lucy.'], ['完整句', 'My name is Lucy. I am 12 years old.'], ['精彩句', 'Hello! My name is Lucy. I am 12 years old, and I like drawing.']],
    note: '先说“我是谁”，再补充一个让人记住你的特点。',
    annotations: [['第一段：友好开场', '用 Hello! 和姓名开篇，让对方愿意继续读。'], ['第二段：补充信息', '年龄、班级和爱好只选两三项，短句更准确。'], ['第三段：交朋友', '用 hope we can be friends 回应“认识新朋友”的主题。']]
  },
  s2: {
    questions: [['写谁的物品？', '自己的书桌、书包或房间。'], ['写什么？', '两三件物品的颜色和位置。'], ['必须有什么？', '物品名、颜色词和位置介词。'], ['重点句型？', 'It is ... / They are ...']],
    ladder: [['基础句', 'My bag is blue.'], ['完整句', 'My blue bag is under the desk.'], ['精彩句', 'My blue schoolbag is under the desk, and my books are next to it.']],
    note: '每写一件物品，都回答“什么颜色、在哪里”。',
    annotations: [['第一段：整体介绍', '先说 This is my desk，让读者知道观察的地方。'], ['第二段：物品细节', '按“颜色 + 物品 + 位置”写，信息最清楚。'], ['第三段：好习惯', '最后写自己会整理物品，让文章不只是看图说话。']]
  },
  s3: {
    questions: [['写什么地方？', '想象中的快乐农场。'], ['写什么内容？', '动物、数量、颜色和农场景物。'], ['必须有什么？', '至少两种动物和一个数量。'], ['重点句型？', 'There are ... / I have ...']],
    ladder: [['基础句', 'I have ducks.'], ['完整句', 'I have six yellow ducks.'], ['精彩句', 'I have six yellow ducks. They are happy in the water.']],
    note: '数量后面记得接复数名词，如 six ducks。',
    annotations: [['第一段：农场全貌', '用 small、beautiful 等词先给农场一个整体印象。'], ['第二段：动物细节', '用数量和颜色，让画面变得具体。'], ['第三段：我的感受', '写喜欢做什么，文章就有了“我”的声音。']]
  },
  u1: {
    questions: [['写给谁？', '想交朋友的同龄人或新同学。'], ['写什么？', '基本信息、家庭、爱好和喜好。'], ['必须有什么？', '至少三类个人信息和交友愿望。'], ['重点句型？', 'I live with ... / I like ...']],
    ladder: [['基础句', 'I like basketball.'], ['完整句', 'I like playing basketball at weekends.'], ['精彩句', 'At weekends, I often play basketball with my friends in the park.']],
    note: '不要只列信息；加上时间、地点或伙伴，人物才更真实。',
    annotations: [['第一段：基本档案', '姓名、年龄和居住地回答了“我是谁”。'], ['第二段：生活细节', '爱好、食物和周末活动让新朋友了解你的生活。'], ['第三段：真诚交友', '性格特点和希望交朋友，完整回应写作目的。']]
  },
  u2: {
    questions: [['写谁？', '照片中的两三位家人。'], ['写什么？', '关系、性格或外貌、爱好。'], ['必须有什么？', '家庭照片开头和自己的感受。'], ['重点句型？', 'He / She likes ...']],
    ladder: [['基础句', 'My mother is kind.'], ['完整句', 'My mother is kind and helpful.'], ['精彩句', 'My mother is kind and helpful. She loves cooking for our family.']],
    note: '介绍家人时，每个人写一个不同的特点，避免重复。',
    annotations: [['第一段：照片和人数', '先交代这是一张家庭照片，文章主题很明确。'], ['第二段：分别介绍', '每位家人都有“特点 + 爱好”，人物更鲜活。'], ['第三段：家庭情感', '用 together 和 love 收束，扣住家庭的温暖。']]
  },
  u3: {
    questions: [['写给谁？', '一位想了解你学校的朋友。'], ['写什么？', '学校整体和一个最喜欢的地点。'], ['必须有什么？', '邮件称呼、地点、原因和落款。'], ['重点句型？', 'There is / are ... / because ...']],
    ladder: [['基础句', 'I like the library.'], ['完整句', 'The library is next to our classroom building.'], ['精彩句', 'My favourite place is the library because I can read there after class.']],
    note: '重点地点要写“在哪里、怎么样、为什么喜欢”。',
    annotations: [['第一段：邮件开头', '先回应朋友的邮件，再自然转入自己的学校。'], ['第二段：重点地点', '位置、特点和活动三个信息让介绍很具体。'], ['第三段：友好结尾', '邀请朋友来参观，邮件格式完整又自然。']]
  },
  u4: {
    questions: [['写什么？', '本学期课程和最喜欢的学科。'], ['写什么理由？', '老师、课堂内容、兴趣或未来用途。'], ['必须有什么？', '喜欢与最喜欢的对比，加上原因。'], ['重点句型？', 'I like ..., but ... because ...']],
    ladder: [['基础句', 'I like English.'], ['完整句', 'English is my favourite subject because it is useful.'], ['精彩句', 'English is my favourite subject because it is useful and our classes are fun.']],
    note: 'because 后面写完整原因，不要只写 because good。',
    annotations: [['第一段：课程和选择', '先列课程，再用 but 突出最喜欢的科目。'], ['第二段：具体理由', '从“有用、老师好、课堂有趣”中选两点解释。'], ['第三段：学习目标', '写想继续学习什么，使结尾更积极。']]
  },
  u5: {
    questions: [['写给谁？', '社团负责人或老师。'], ['写什么？', '想加入哪个社团、会做什么、想学什么。'], ['必须有什么？', '礼貌称呼、加入请求和落款。'], ['重点句型？', 'I can ... / Can I join ...?']],
    ladder: [['基础句', 'I can draw.'], ['完整句', 'I can draw animals and flowers.'], ['精彩句', 'I can draw animals and flowers, and I would like to learn more about painting.']],
    note: 'can 后接动词原形；想加入用 Can I join ...? 更礼貌。',
    annotations: [['第一段：写信目的', '开头就说对哪个社团感兴趣，主题直接。'], ['第二段：能力和愿望', 'can 写会做什么，would like 写想学什么。'], ['第三段：礼貌请求', '询问能否加入，再用 Best 和名字完成邮件。']]
  },
  u6: {
    questions: [['写哪一天？', '一个普通上学日。'], ['写什么？', '早晨、在校、放学后和晚上活动。'], ['必须有什么？', '至少五个时间点和两个顺序词。'], ['重点句型？', 'at ... / After ... / Then ...']],
    ladder: [['基础句', 'I do homework.'], ['完整句', 'I do my homework at 8:00 p.m.'], ['精彩句', 'After dinner, I do my homework at 8:00 p.m. and go to bed at 9:30.']],
    note: '按时间顺序写，就像带读者走过你的一天。',
    annotations: [['第一段：早晨安排', '起床、早餐和到校时间是一天的起点。'], ['第二段：学校和放学后', '用 after lunch、then 等词，把活动连起来。'], ['第三段：夜晚与感受', '作业和睡觉时间后，补一句对时间的看法。']]
  },
  u7: {
    questions: [['写什么？', '自己的生日和庆祝方式。'], ['写什么活动？', '和谁庆祝、做什么、感觉如何。'], ['必须有什么？', '具体日期、庆祝活动和今年心愿。'], ['重点句型？', 'on ... / I usually ... / This year ...']],
    ladder: [['基础句', 'My birthday is in May.'], ['完整句', 'My birthday is on May fifth.'], ['精彩句', 'My birthday is on May fifth, and I usually celebrate it with my family.']],
    note: '具体日期前用 on，日期要用序数词，如 fifth。',
    annotations: [['第一段：日期和对象', '先写生日日期和通常跟谁庆祝。'], ['第二段：庆祝过程', '按照晚餐、礼物、拍照的顺序写，画面清楚。'], ['第三段：有意义的愿望', '感谢父母或帮助家人，让主题更有深度。']]
  },
  l1: { questions: [['写什么动物？', '一种你熟悉或喜欢的动物。'], ['写什么特点？', '外形、能力、习性或照顾幼崽的方式。'], ['必须有什么？', '至少两个形容词和一个喜欢的原因。'], ['重点句型？', 'My favourite animal is ... / because ...']], ladder: [['基础句', 'I like elephants.'], ['完整句', 'I like elephants because they are clever.'], ['精彩句', 'I like elephants because they are clever, gentle and helpful.']], note: '先把动物写具体，再说喜欢它的理由，最后可以写保护动物。', annotations: [['第一段：点出对象', '开头直接说最喜欢什么动物，读者不会猜主题。'], ['第二段：描写特点', '从外形、能力、习性中选两三项，不要只堆形容词。'], ['第三段：升华主题', '从“我喜欢”写到“我会保护”，文章更有意义。']] },
  l2: { questions: [['写给谁？', '班级同学、朋友或学校里的同学。'], ['写什么问题？', '一个需要改进的校园或班级现象。'], ['必须有什么？', '两三条规则和规则带来的好处。'], ['重点句型？', 'We must ... / Don\'t ... / We have to ...']], ladder: [['基础句', 'Don\'t run.'], ['完整句', 'Don\'t run in the hallway.'], ['精彩句', 'Don\'t run in the hallway because we need to keep everyone safe.']], note: '规则要具体、能做到，结尾说明“为什么这样做”会更有说服力。', annotations: [['第一段：友好说明', '先说明写信的目的，不直接批评同学。'], ['第二段：列出规则', '每条规则用一句清楚的句子，避免太长。'], ['第三段：说明好处', '用 safe、happy、clean 等词解释规则意义。']] },
  l3: { questions: [['写哪种运动？', '一种最喜欢的运动或锻炼方式。'], ['写什么习惯？', '频率、时间、地点和伙伴。'], ['必须有什么？', '一个频率词和运动带来的好处。'], ['重点句型？', 'I usually ... / twice a week / It helps me ...']], ladder: [['基础句', 'I play badminton.'], ['完整句', 'I play badminton twice a week.'], ['精彩句', 'I play badminton twice a week because it makes my body stronger.']], note: '频率和伙伴让运动习惯更真实；结尾写身体或心情的变化。', annotations: [['第一段：最爱运动', '第一句说清哪项运动是主题。'], ['第二段：运动细节', '时间、次数、地点任选两项写具体。'], ['第三段：健康收获', '用 stronger、relax、healthy 等词写运动的价值。']] },
  l4: { questions: [['写哪几餐？', '早餐、午餐、晚餐中有代表性的内容。'], ['写什么偏好？', '喜欢的健康食物和想少吃的食物。'], ['必须有什么？', '三餐或食物例子，加一项健康计划。'], ['重点句型？', 'I usually have ... / I want to ...']], ladder: [['基础句', 'I eat fruit.'], ['完整句', 'I usually eat fruit for breakfast.'], ['精彩句', 'I usually eat fruit for breakfast because it gives me energy.']], note: '食物名词要用对；最后写一个小改变，让文章更有行动力。', annotations: [['第一段：三餐概况', '从一餐写起，信息自然不杂乱。'], ['第二段：喜好和原因', '写喜欢什么，也可以写为什么少喝可乐。'], ['第三段：健康计划', '用 want to 表达下一步改变，结尾积极。']] },
  l5: { questions: [['写什么时候？', '现在或某个具体时刻。'], ['写谁？', '两三位家人或朋友。'], ['必须有什么？', '人物、地点和正在做的活动。'], ['重点句型？', 'He / She is ...ing / They are ...ing']], ladder: [['基础句', 'My father is reading.'], ['完整句', 'My father is reading in the living room.'], ['精彩句', 'My father is reading a newspaper in the living room right now.']], note: '每个人写一个不同活动，记得现在进行时要有 be 动词。', annotations: [['第一段：建立场景', '用具体时间和整体画面开头。'], ['第二段：分别描写', '按人物顺序写，每句补上地点或动作。'], ['第三段：整体感受', '从画面回到温暖、快乐等感受。']] },
  l6: { questions: [['写哪里的天气？', '你的城市或一个熟悉的地方。'], ['写什么活动？', '天气中人们正在进行的活动。'], ['必须有什么？', '天气形容词、活动和天气影响。'], ['重点句型？', 'It is ... / People are ...ing']], ladder: [['基础句', 'It is rainy.'], ['完整句', 'It is rainy in my city today.'], ['精彩句', 'It is rainy in my city today, so people are carrying umbrellas.']], note: '天气是背景，人物活动是画面；最后补一句安全建议或个人感受。', annotations: [['第一段：天气播报', '地点、天气和气温让信息完整。'], ['第二段：动态画面', '写街上或公园里正在发生的事。'], ['第三段：影响和态度', '道路湿滑、空气清新等感受能扣住主题。']] },
  l7: { questions: [['写哪一天？', '一次学校旅行或特别活动。'], ['写什么经过？', '按时间顺序写两三件做过的事。'], ['必须有什么？', '日期、过去式、感受或收获。'], ['重点句型？', 'Last ... / We visited ... / I felt ...']], ladder: [['基础句', 'We visited a farm.'], ['完整句', 'We visited a farm last Saturday.'], ['精彩句', 'Last Saturday, we visited a farm and learned how vegetables grow.']], note: '日记写已经发生的事，用过去式；结尾写“我学到了什么”。', annotations: [['第一段：日记开头', '日期、天气和目的地快速交代背景。'], ['第二段：活动经过', '用 first、then、after lunch 等词串起经历。'], ['第三段：收获感受', '写开心之外的收获，日记更有内容。']] },
  l8: { questions: [['故事有什么问题？', '角色遇到的困难或冲突。'], ['怎样解决？', '谁做了什么，事情如何转变。'], ['必须有什么？', '连接词、过去式和故事道理。'], ['重点句型？', 'Suddenly ... / In the end ...']], ladder: [['基础句', 'The mouse helped the lion.'], ['完整句', 'The mouse helped the lion with his paw.'], ['精彩句', 'In the end, the mouse helped the lion, and they became friends.']], note: '续写要先解决问题，再给一个温暖或有道理的结局。', annotations: [['第一段：出现困难', '接住原故事中的矛盾，不要另起一个不相关的情节。'], ['第二段：行动解决', '用 Then、After that 推进两三步。'], ['第三段：结局道理', '故事用过去式，最后的道理可用现在时。']] }
};

const writingPractice = {
  s1: { fields: [['name', '你的英文名是什么？', '例如：Lily'], ['age', '你几岁、几年级？', '例如：12 years old, Grade 7'], ['hobby', '你喜欢做什么？', '例如：drawing and reading'], ['wish', '你想对新同学说什么？', '例如：I hope we can be friends']], plan: v => [`Hello! My name is ${v.name || '...'}.`, `I am ${v.age || '...'}. I like ${v.hobby || '...'}.`, v.wish || 'Nice to meet you. I hope we can be friends.'] },
  s2: { fields: [['place', '你想介绍哪里？', '例如：my desk'], ['thing1', '第一件物品是什么、什么颜色？', '例如：a blue schoolbag'], ['position', '它在哪里？', '例如：under the desk'], ['thing2', '再写一件物品和位置', '例如：My books are on the desk']], plan: v => [`This is ${v.place || 'my desk'}. It is tidy.`, `My ${v.thing1 || '...'} is ${v.position || '...'}.`, `${v.thing2 || 'My books are on the desk.'} I keep my things tidy every day.`] },
  s3: { fields: [['size', '你的农场是什么样的？', '例如：small and beautiful'], ['animals', '有什么动物、多少只？', '例如：six yellow ducks'], ['place', '动物在哪里？', '例如：in the water'], ['activity', '你喜欢做什么？', '例如：feeding the animals']], plan: v => [`I have a ${v.size || '...'} farm.`, `There are ${v.animals || '...'} on my farm. They are ${v.place || '...'}.`, `I like ${v.activity || '...'}. I love my farm.`] },
  u1: { fields: [['name', '你的英文名和年龄？', '例如：Kevin, 13 years old'], ['place', '你住在哪里、和谁住？', '例如：Nanjing with my family'], ['hobby', '你的爱好或最喜欢的事物？', '例如：playing basketball'], ['wish', '想怎样和对方交朋友？', '例如：I hope we can be friends']], plan: v => [`Hello! My name is ${v.name || '...'}.`, `I live in ${v.place || '...'}. I like ${v.hobby || '...'}.`, v.wish || 'I am friendly. I hope we can be friends!'] },
  u2: { fields: [['people', '照片里有谁？', '例如：my parents and me'], ['father', '介绍一位家人：特点或爱好', '例如：My father is funny and likes football'], ['mother', '再介绍一位家人', '例如：My mother is kind and loves cooking'], ['feeling', '你想对家人说什么？', '例如：I love my family very much']], plan: v => [`This is a photo of ${v.people || 'my family'}.`, `${v.father || 'My father is ...'}. ${v.mother || 'My mother is ...'}.`, v.feeling || 'We love and help each other.'] },
  u3: { fields: [['friend', '写给哪位朋友？', '例如：Amy'], ['school', '学校整体怎么样？', '例如：big, clean and beautiful'], ['place', '最喜欢哪个地方、在哪里？', '例如：the library next to our classroom'], ['reason', '为什么喜欢那里？', '例如：I can read there after class']], plan: v => [`Dear ${v.friend || 'friend'},\n\nI would like to tell you about my school. It is ${v.school || '...'}.`, `My favourite place is ${v.place || '...'}. I like it because ${v.reason || '...'}.`, 'Welcome to my school!\n\nBest,\n...'] },
  u4: { fields: [['subjects', '这学期有哪些课？', '例如：English, maths and art'], ['favourite', '最喜欢哪一门？', '例如：English'], ['reason', '为什么喜欢？', '例如：it is useful and interesting'], ['goal', '你还想学什么？', '例如：learn more English every day']], plan: v => [`This term, I have ${v.subjects || '...'}.`, `My favourite subject is ${v.favourite || '...'}. I like it because ${v.reason || '...'}.`, `I want to ${v.goal || '...'}.`] },
  u5: { fields: [['club', '想加入哪个社团？', '例如：the Art Club'], ['can', '你会做什么？', '例如：draw animals and flowers'], ['learn', '还想学什么？', '例如：learn more about painting'], ['time', '什么时候能参加？', '例如：every Wednesday afternoon']], plan: v => ['Dear Club Leader,\n\nI am interested in ' + (v.club || '...') + '.', `I can ${v.can || '...'}. I would like to ${v.learn || '...'}.`, `I can come ${v.time || '...'}. Can I join your club?\n\nBest,\n...`] },
  u6: { fields: [['morning', '几点起床、几点到校？', '例如：get up at 6:40 and go to school at 7:20'], ['school', '在学校做什么？', '例如：have four classes and read after lunch'], ['after', '放学后做什么？', '例如：play table tennis with my friends'], ['evening', '晚上怎么安排？', '例如：do my homework at 8:00']], plan: v => [`I usually ${v.morning || '...'}.`, `At school, I ${v.school || '...'}. After school, I ${v.after || '...'}.`, `In the evening, I ${v.evening || '...'}. I use my time well.`] },
  u7: { fields: [['date', '你的生日是哪一天？', '例如：on May fifth'], ['people', '和谁庆祝？', '例如：with my family'], ['activities', '通常做什么？', '例如：have dinner and take photos'], ['wish', '今年想做什么有意义的事？', '例如：make a card for my parents']], plan: v => [`My birthday is ${v.date || '...'}. I usually celebrate it ${v.people || '...'}.`, `We ${v.activities || '...'} together. I feel happy and loved.`, `This year, I want to ${v.wish || '...'} because ... .`] }
  ,l1: { fields: [['animal', '最喜欢什么动物？', '例如：elephants'], ['look', '它长什么样或有什么能力？', '例如：big, strong and clever'], ['habit', '它有什么习性？', '例如：usually lives in groups and cares for babies'], ['reason', '你为什么喜欢它？', '例如：they are gentle and helpful']], plan: v => [`My favourite animal is ${v.animal || '...'}.`, `It is ${v.look || '...'}. It ${v.habit || 'can ...'}.`, `I like it because ${v.reason || '...'}. We should protect animals.`] },
  l2: { fields: [['place', '想为哪里制定规则？', '例如：our classroom'], ['rule1', '第一条规则是什么？', '例如：arrive on time'], ['rule2', '第二条规则是什么？', '例如：not run in the classroom'], ['benefit', '规则能带来什么好处？', '例如：learn safely and happily']], plan: v => [`Dear classmates,\n\nWe need some rules for ${v.place || '...'}.`, `We must ${v.rule1 || '...'}. Don't / must not ${v.rule2 || '...'}.`, `These rules can help us ${v.benefit || '...'}.\n\nYours,\n...`] },
  l3: { fields: [['sport', '最喜欢哪项运动？', '例如：playing badminton'], ['frequency', '多久做一次？', '例如：twice a week'], ['partner', '和谁、在哪里运动？', '例如：with my sister in the sports hall'], ['benefit', '运动有什么好处？', '例如：make my body stronger']], plan: v => [`My favourite way to keep fit is ${v.sport || '...'}.`, `I usually do it ${v.frequency || '...'} ${v.partner || '...'}.`, `It helps me ${v.benefit || '...'}. I think exercise is healthy and fun.`] },
  l4: { fields: [['breakfast', '早餐通常吃什么？', '例如：porridge, an egg and fruit'], ['lunch', '午餐吃什么？', '例如：rice, vegetables and chicken'], ['favourite', '最喜欢什么健康食物？', '例如：tomato and egg noodles'], ['plan', '想改进什么习惯？', '例如：eat more vegetables and drink more water']], plan: v => [`For breakfast, I usually have ${v.breakfast || '...'}.`, `For lunch, I often have ${v.lunch || '...'}. I like ${v.favourite || '...'} because ... .`, `I want to ${v.plan || '...'} to eat more healthily.`] },
  l5: { fields: [['time', '现在是什么时间？', '例如：eight o\'clock on Saturday evening'], ['person1', '第一位家人在做什么？', '例如：My father is reading in the living room'], ['person2', '第二位家人在做什么？', '例如：My mother is cooking in the kitchen'], ['feeling', '你有什么感受？', '例如：enjoying a warm time together']], plan: v => [`It is ${v.time || '...'} right now.`, `${v.person1 || '...'} . ${v.person2 || '...'} .`, `We are ${v.feeling || '...'}. I love this moment.`] },
  l6: { fields: [['weather', '天气和地点怎么样？', '例如：rainy and cool in my city'], ['activity1', '人们正在做什么？', '例如：students are walking to school'], ['activity2', '还有什么活动？', '例如：people are carrying umbrellas'], ['feeling', '天气有什么影响或感受？', '例如：the air feels fresh']], plan: v => [`It is ${v.weather || '...'} today.`, `${v.activity1 || '...'}. ${v.activity2 || '...'}.`, `This weather makes ... . I think ${v.feeling || '...'}.`] },
  l7: { fields: [['date', '什么时候、天气怎样？', '例如：last Saturday, sunny'], ['place', '去了哪里？', '例如：a farm outside the city'], ['activities', '做了哪些事？', '例如：fed chickens and picked strawberries'], ['lesson', '学到了什么？', '例如：food comes from hard work']], plan: v => [`Saturday, ...\n\nIt was ${v.date || '...'}. We went to ${v.place || '...'}.`, `We ${v.activities || '...'}. Then we ... .`, `I learned that ${v.lesson || '...'}. It was a memorable day.`] },
  l8: { fields: [['problem', '故事发生了什么困难？', '例如：the lion had a thorn in his paw'], ['action', '谁怎样帮助了它？', '例如：the mouse pulled out the thorn'], ['result', '后来发生了什么？', '例如：the lion saved the mouse'], ['lesson', '故事说明什么道理？', '例如：kindness can make friends']], plan: v => [`One day, ${v.problem || '...'}.`, `Then ${v.action || '...'}. After that, ${v.result || '...'}.`, `In the end, they learned that ${v.lesson || '...'}.`] }
};

const writingChecks = {
  s1: [['有友好问候', /\b(hello|hi|good morning)\b/i], ['写了姓名或年龄', /\b(my name is|i am|i'm)\b/i], ['写了一项爱好', /\b(like|love)\b/i]], s2: [['写了物品名称', /\b(bag|schoolbag|book|ruler|pencil|desk|chair)\b/i], ['写了颜色', /\b(red|blue|green|yellow|black|white|brown)\b/i], ['写了位置', /\b(in|on|under|next to)\b/i]], s3: [['写了农场或动物', /\b(farm|cow|duck|rabbit|animal)\b/i], ['写了数量', /\b(one|two|three|four|five|six|seven|many)\b/i], ['写了感受或活动', /\b(like|love|feeding)\b/i]], u1: [['写了基本信息', /\b(my name is|i am|i'm)\b/i], ['写了生活或家庭', /\b(live|family|mother|father|parent)\b/i], ['写了交友愿望', /\b(friend|hope)\b/i]], u2: [['点出家庭或照片', /\b(family|photo)\b/i], ['介绍了家人', /\b(father|mother|sister|brother|grandpa|grandma)\b/i], ['写了家庭感受', /\b(love|together|help)\b/i]], u3: [['有邮件称呼', /\bdear\b/i], ['介绍了学校地点', /\b(school|library|classroom|field|hall)\b/i], ['写了喜欢的原因', /\bbecause\b/i]], u4: [['写了学科', /\b(english|maths|music|art|chinese|science)\b/i], ['写了最喜欢的课', /\b(favourite|favorite)\b/i], ['写了原因', /\bbecause\b/i]], u5: [['有邮件称呼', /\bdear\b/i], ['写了能力 can', /\bcan\b/i], ['提出加入请求', /\b(can i join|join your club)\b/i]], u6: [['写了时间', /\b\d{1,2}(:\d{2})?\s?(a\.m\.|p\.m\.)?\b/i], ['用了顺序词', /\b(then|after|before)\b/i], ['写了日常活动', /\b(get up|school|homework|breakfast|bed)\b/i]], u7: [['写了生日日期', /\b(on|first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|twelfth)\b/i], ['写了庆祝活动', /\b(celebrate|cake|dinner|present|photo)\b/i], ['写了心愿或感受', /\b(this year|want|happy|love)\b/i]]
  ,l1: [['写了动物名称', /\b(elephant|tiger|lion|monkey|panda|animal)\b/i], ['用了形容词', /\b(big|strong|clever|gentle|cute|beautiful)\b/i], ['写了喜欢原因', /\bbecause\b/i]],
  l2: [['写了规则表达', /\b(must|have to|don\'t|must not)\b/i], ['写了具体地点或行为', /\b(classroom|hallway|school|run|eat|arrive)\b/i], ['说明了规则好处', /\b(safe|happy|clean|help)\b/i]],
  l3: [['写了运动项目', /\b(badminton|football|basketball|ping-pong|run|exercise)\b/i], ['写了频率', /\b(often|usually|sometimes|twice|week)\b/i], ['写了健康好处', /\b(healthy|strong|relax|fit)\b/i]],
  l4: [['写了食物或饮料', /\b(rice|fruit|vegetable|water|milk|noodles|egg)\b/i], ['写了三餐之一', /\b(breakfast|lunch|dinner)\b/i], ['写了健康计划', /\b(want to|healthy|more water|more vegetables)\b/i]],
  l5: [['使用了现在进行时', /\b(am|is|are)\s+\w+ing\b/i], ['写了人物', /\b(father|mother|brother|sister|friend|family)\b/i], ['写了地点或时间', /\b(right now|moment|room|kitchen|home)\b/i]],
  l6: [['写了天气', /\b(sunny|rainy|windy|cloudy|cool|warm)\b/i], ['写了正在进行的活动', /\b(am|is|are)\s+\w+ing\b/i], ['写了影响或感受', /\b(careful|fresh|like|safe|wet)\b/i]],
  l7: [['使用了过去时', /\b(was|were|went|visited|played|learned|felt|had)\b/i], ['写了活动地点', /\b(farm|museum|park|school|trip)\b/i], ['写了感受或收获', /\b(happy|excited|memorable|learned)\b/i]],
  l8: [['写了故事角色', /\b(mouse|lion|animal|fox|duck)\b/i], ['使用了过去时', /\b(was|were|had|helped|saved|learned|went)\b/i], ['写了结局或道理', /\b(in the end|lesson|kindness|should|friend)\b/i]]
};

const writingReferences = {
  s1: {
    grammar: [
      ['be 动词：I 用 am', '介绍自己时用 I am，也可以缩写成 I\'m。', 'I\'m 12 years old.', '不要写 I is 或 I are。'],
      ['名字和句首要大写', '英文名字、班级和每句话的第一个词都要用大写字母。', 'My name is Lucy. I\'m in Class 3.', '句末别忘了用句号。']
    ],
    words: [['hello', '你好'], ['good morning', '早上好'], ['name', '名字'], ['spell', '拼写'], ['classmate', '同学'], ['friendly', '友好的'], ['nice to meet you', '很高兴认识你'], ['be friends', '成为朋友']]
  },
  s2: {
    grammar: [
      ['this / these', '一件物品用 This is；两件或更多物品用 These are。', 'This is my ruler. These are my books.', 'this 后接单数，these 后接复数。'],
      ['位置介词', '用 in、on、under、next to 说清物品在哪里。', 'My schoolbag is under the desk.', '介词后面要有地点。']
    ],
    words: [['schoolbag', '书包'], ['pencil box', '铅笔盒'], ['ruler', '尺子'], ['desk', '书桌'], ['tidy', '整洁的'], ['colourful', '色彩鲜艳的'], ['under', '在……下面'], ['next to', '在……旁边']]
  },
  s3: {
    grammar: [
      ['have / there are', 'I have 介绍“我拥有”；There are 介绍“某处有”。', 'I have a farm. There are six ducks on it.', 'there are 后面一般接复数名词。'],
      ['数量和复数', '数字超过一时，名词通常要加 -s。', 'three cows / six yellow ducks', 'one cow 不加 -s。']
    ],
    words: [['farm', '农场'], ['animal', '动物'], ['cow', '奶牛'], ['duck', '鸭子'], ['rabbit', '兔子'], ['field', '田地'], ['feed', '喂养'], ['wonderful', '很棒的']]
  },
  u1: {
    grammar: [
      ['be 动词和个人信息', '用 I am 介绍年龄；用 I live in 介绍住处。', 'I am 13 years old. I live in Nanjing.', 'I 后面不能用 is。'],
      ['like / love + -ing', '表达喜欢做某事时，like / love 后常接动词 -ing。', 'I like playing basketball.', '不要写 I like play basketball。']
    ],
    words: [['profile', '个人档案'], ['hobby', '爱好'], ['favourite', '最喜欢的'], ['weekend', '周末'], ['friendly', '友好的'], ['helpful', '乐于助人的'], ['live with', '和……一起住'], ['share', '分享']]
  },
  u2: {
    grammar: [
      ['he / she 和第三人称', '介绍一位家人时，用 He / She；动词常加 -s。', 'She likes cooking. He has a bike.', '不能写 She like cooking。'],
      ['his / her', 'his 指“他的”，her 指“她的”，后面接名词。', 'His name is Tom. Her hobby is reading.', 'his / her 不等于 he / she。']
    ],
    words: [['family photo', '家庭照片'], ['parents', '父母'], ['grandparents', '祖父母'], ['kind', '善良的'], ['clever', '聪明的'], ['funny', '有趣的'], ['together', '一起'], ['help each other', '互相帮助']]
  },
  u3: {
    grammar: [
      ['there is / there are', '介绍校园地点时，单数用 There is，复数用 There are。', 'There is a library. There are many classrooms.', 'there are 后接复数。'],
      ['位置和原因', '先写地点位置，再用 because 补充喜欢的理由。', 'It is next to the hall because I can read there.', 'because 前面不要再加 so。']
    ],
    words: [['library', '图书馆'], ['classroom', '教室'], ['dining hall', '食堂'], ['sports field', '运动场'], ['next to', '在……旁边'], ['across from', '在……对面'], ['quiet', '安静的'], ['welcome', '欢迎']]
  },
  u4: {
    grammar: [
      ['and / but / because', 'and 补充信息，but 表示转折，because 说明原因。', 'I like art, but English is my favourite because it is useful.', 'because 前面不要同时用 so。'],
      ['简单现在时', '介绍课程和日常感受时，用一般现在时。', 'Our teacher is kind. Her classes are fun.', '主语是 he / she 时动词通常加 -s。']
    ],
    words: [['subject', '学科'], ['favourite', '最喜欢的'], ['interesting', '有趣的'], ['useful', '有用的'], ['teacher', '老师'], ['learn about', '了解'], ['future', '未来'], ['every day', '每天']]
  },
  u5: {
    grammar: [
      ['can + 动词原形', 'can 后面直接接动词原形，表示能力。', 'I can draw animals.', '不能写 I can draws。'],
      ['would like to', '用 would like to 礼貌表达愿望。', 'I would like to join the Art Club.', 'to 后面接动词原形。']
    ],
    words: [['club', '社团'], ['club leader', '社团负责人'], ['join', '加入'], ['member', '成员'], ['interested in', '对……感兴趣'], ['practice', '练习'], ['learn more about', '了解更多关于……'], ['Wednesday afternoon', '周三下午']]
  },
  u6: {
    grammar: [
      ['时间前的介词', '具体时刻前用 at；上午、下午、晚上前常用 in。', 'I get up at 6:40. I read in the evening.', '不要漏掉 at。'],
      ['顺序词', '用 then、after、before 把一天的活动连起来。', 'After school, I play table tennis. Then I do my homework.', '按时间顺序写，文章更清楚。']
    ],
    words: [['usually', '通常'], ['get up', '起床'], ['have breakfast', '吃早餐'], ['begin', '开始'], ['finish', '结束'], ['after school', '放学后'], ['do homework', '做作业'], ['make good use of', '好好利用']]
  },
  u7: {
    grammar: [
      ['日期和序数词', '说具体日期时用 on + 月份 + 序数词。', 'My birthday is on May fifth.', '不能说 on May five。'],
      ['一般现在时写习惯', '介绍每年通常怎样庆祝时，用 usually 和一般现在时。', 'I usually celebrate it with my family.', 'this year 可用来写今年的愿望。']
    ],
    words: [['birthday', '生日'], ['celebrate', '庆祝'], ['birthday cake', '生日蛋糕'], ['present', '礼物'], ['take photos', '拍照'], ['meaningful', '有意义的'], ['wish', '愿望'], ['say thank you', '说谢谢']]
  }
  ,l1: { grammar: [['形容词描述动物', '形容词放在名词前，或放在 be 动词后。', 'Elephants are big and clever.', '不要写 elephant is bigs。'], ['名词复数', '说多只动物时，名词通常加 -s。', 'Elephants live in groups.', 'one elephant 不加 -s。']], words: [['animal', '动物'], ['elephant', '大象'], ['clever', '聪明的'], ['gentle', '温顺的'], ['strong', '强壮的'], ['group', '群体'], ['protect', '保护'], ['safe home', '安全的家']] },
  l2: { grammar: [['祈使句写规则', '用动词原形开头；否定规则用 Don\'t + 动词。', 'Don\'t run in the hallway.', '祈使句前一般不加 you。'], ['must / have to', 'must 表示必须；have to 表示不得不、需要。', 'We must keep the classroom clean.', '后面都接动词原形。']], words: [['rule', '规则'], ['follow', '遵守'], ['arrive on time', '准时到达'], ['hallway', '走廊'], ['rubbish', '垃圾'], ['respect', '尊重'], ['polite', '有礼貌的'], ['safe', '安全的']] },
  l3: { grammar: [['所有格代词', 'mine、yours、his 等可单独表示“……的”。', 'This racket is mine.', 'mine 后面不能再加名词。'], ['频率表达', '用 usually、often、sometimes 或次数写习惯。', 'I play badminton twice a week.', '频率词通常放在实义动词前。']], words: [['keep fit', '保持健康'], ['exercise', '锻炼'], ['badminton', '羽毛球'], ['racket', '球拍'], ['usually', '通常'], ['twice a week', '一周两次'], ['stronger', '更强壮的'], ['relax', '放松']] },
  l4: { grammar: [['可数和不可数名词', 'vegetables、eggs 可数；rice、milk、water 不可数。', 'I have some rice and vegetables.', '不可数名词前通常不用 a / an。'], ['some / any', 'some 常用于肯定句；any 常用于否定句和疑问句。', 'I have some fruit. I do not have any milk.', '不要把 some 和 any 随意互换。']], words: [['meal', '一餐'], ['breakfast', '早餐'], ['porridge', '粥'], ['vegetable', '蔬菜'], ['fruit', '水果'], ['water', '水'], ['sugar', '糖'], ['healthy habit', '健康习惯']] },
  l5: { grammar: [['现在进行时', 'be 动词加动词 -ing，表示此刻正在发生。', 'My father is reading.', '不要漏掉 am / is / are。'], ['电话问候', '打电话时可以先问对方正在做什么。', 'What are you doing right now?', '回答时用 I am ...ing。']], words: [['right now', '此刻'], ['at the moment', '此时'], ['living room', '客厅'], ['kitchen', '厨房'], ['read', '阅读'], ['prepare', '准备'], ['chat', '聊天'], ['warm', '温暖的']] },
  l6: { grammar: [['天气表达', 'It is + 天气形容词；问天气用 What\'s the weather like?', 'It is rainy and cool today.', '不能说 It has rainy。'], ['天气中的活动', '正在发生的活动用现在进行时。', 'People are carrying umbrellas.', '日常事实仍可用一般现在时。']], words: [['sunny', '晴朗的'], ['rainy', '下雨的'], ['windy', '有风的'], ['cloudy', '多云的'], ['temperature', '气温'], ['umbrella', '雨伞'], ['wet', '潮湿的'], ['fresh', '清新的']] },
  l7: { grammar: [['一般过去时', '已发生的动作常用动词过去式。', 'We visited a farm and picked strawberries.', '规则动词通常加 -ed，但 go 变 went。'], ['was / were', 'I / he / she 用 was；we / they 用 were。', 'We were excited.', '不要写 We was。']], words: [['school trip', '学校旅行'], ['farm', '农场'], ['visit', '参观'], ['pick', '采摘'], ['farmer', '农民'], ['excited', '兴奋的'], ['memorable', '难忘的'], ['learn from', '从……中学习']] },
  l8: { grammar: [['故事的过去式', '故事经过通常用过去式叙述。', 'The mouse helped the lion.', '时态要前后一致。'], ['故事道理用现在时', '说普遍道理时可用一般现在时。', 'Kindness can make friends.', '结局前可用 In the end。']], words: [['once upon a time', '从前'], ['mouse', '老鼠'], ['lion', '狮子'], ['thorn', '刺'], ['brave', '勇敢的'], ['kindness', '善意'], ['save', '救'], ['lesson', '道理']] }
};

const elements = {
  nav: document.querySelector('#unit-nav'), bookSelector: document.querySelector('#book-selector'), bookUnitLabel: document.querySelector('#book-unit-label'), kicker: document.querySelector('#unit-kicker'), title: document.querySelector('#unit-title'), subtitle: document.querySelector('#unit-subtitle'), tags: document.querySelector('#hero-tags'), questions: document.querySelector('#question-grid'), ladder: document.querySelector('#sentence-ladder'), ladderNote: document.querySelector('#ladder-note'), task: document.querySelector('#task-prompt'), focus: document.querySelector('#task-focus'), grammar: document.querySelector('#grammar-list'), grammarTip: document.querySelector('#grammar-tip'), words: document.querySelector('#word-bank'), sentences: document.querySelector('#sentence-bank'), grammarReference: document.querySelector('#grammar-reference-list'), coreVocabulary: document.querySelector('#core-vocabulary-list'), outline: document.querySelector('#outline-list'), sampleTitle: document.querySelector('#sample-title'), sampleRange: document.querySelector('#sample-range'), essay: document.querySelector('#sample-essay'), translation: document.querySelector('#sample-translation'), highlights: document.querySelector('#highlight-list'), annotations: document.querySelector('#annotation-list'), checklist: document.querySelector('#checklist-items'), draft: document.querySelector('#draft'), wordCount: document.querySelector('#word-count'), materialFields: document.querySelector('#material-fields'), writingGoals: document.querySelector('#writing-goals'), saveFirstDraft: document.querySelector('#save-first-draft'), compareDrafts: document.querySelector('#compare-drafts'), draftComparison: document.querySelector('#draft-comparison'), personalPlan: document.querySelector('#personal-plan'), checkResult: document.querySelector('#check-result'), modal: document.querySelector('#ai-modal'), stepTitle: document.querySelector('#learning-step-title'), stepHint: document.querySelector('#learning-step-hint'), resumeMessage: document.querySelector('#resume-message')
};

const reviewElements = {
  imageInput: document.querySelector('#essay-image'), previewWrap: document.querySelector('#image-preview-wrap'), preview: document.querySelector('#image-preview'), removeImage: document.querySelector('#remove-image'), consent: document.querySelector('#review-consent'), submit: document.querySelector('#review-submit'), status: document.querySelector('#review-status'), result: document.querySelector('#review-result'), total: document.querySelector('#review-total'), summary: document.querySelector('#review-summary'), scores: document.querySelector('#review-scores'), transcription: document.querySelector('#review-transcription'), praise: document.querySelector('#review-praise'), issues: document.querySelector('#review-issues'), improved: document.querySelector('#review-improved'), useImproved: document.querySelector('#use-improved'), next: document.querySelector('#review-next')
};

let currentUnit = 3;
let currentBook = 'upper';
let uploadedEssayImage = '';
let reviewInProgress = false;
let firstDraft = null;
let currentLearningStep = 1;
const progressStorageKey = 'write-bright-progress-v1';
const books = {
  upper: { label: '七年级上册', startIndex: 0, count: upperUnits.length },
  lower: { label: '七年级下册', startIndex: upperUnits.length, count: lowerUnits.length }
};
const lastUnitByBook = { upper: currentUnit, lower: upperUnits.length };

const learningSteps = {
  1: { title: '第 1 步：读懂题目', hint: '先确认写给谁、写什么、必须写什么。' },
  2: { title: '第 2 步：搭建框架', hint: '用词句小帮手和三段式地图搭好骨架。' },
  3: { title: '第 3 步：参考仿写', hint: '看懂范文的结构，再替换成自己的信息。' },
  4: { title: '第 4 步：独立完成', hint: '填入素材，完成草稿并检查写作要点。' },
  5: { title: '第 5 步：拍照批改', hint: '上传清晰的作文照片，先看表扬，再修改。' }
};

function loadAllProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressStorageKey) || '{}');
  } catch {
    return {};
  }
}

function saveCurrentProgress() {
  const unit = units[currentUnit];
  const allProgress = loadAllProgress();
  const materials = Object.fromEntries(Array.from(elements.materialFields.querySelectorAll('input')).map(input => [input.dataset.materialKey, input.value]));
  allProgress[unit.id] = { draft: elements.draft.value, materials, step: currentLearningStep, updatedAt: Date.now() };
  try {
    localStorage.setItem(progressStorageKey, JSON.stringify(allProgress));
    elements.resumeMessage.textContent = '草稿和素材已自动保存到本机。';
  } catch {
    elements.resumeMessage.textContent = '浏览器暂时无法保存草稿，请完成后自行复制备份。';
  }
}

function restoreCurrentProgress() {
  const savedProgress = loadAllProgress()[units[currentUnit].id];
  elements.draft.value = savedProgress?.draft || '';
  Array.from(elements.materialFields.querySelectorAll('input')).forEach(input => {
    input.value = savedProgress?.materials?.[input.dataset.materialKey] || '';
  });
  currentLearningStep = learningSteps[savedProgress?.step] ? Number(savedProgress.step) : 1;
  elements.resumeMessage.textContent = savedProgress ? '已恢复上次保存的草稿、素材和学习步骤。' : '';
}

function setLearningStep(step, { scroll = true, persist = true } = {}) {
  if (!learningSteps[step]) return;
  currentLearningStep = step;
  document.querySelectorAll('[data-learning-content]').forEach(section => {
    section.classList.toggle('learning-hidden', Number(section.dataset.learningContent) !== step);
  });
  document.querySelectorAll('[data-learning-step]').forEach(button => {
    const active = Number(button.dataset.learningStep) === step;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'step' : 'false');
  });
  elements.stepTitle.textContent = learningSteps[step].title;
  elements.stepHint.textContent = learningSteps[step].hint;
  if (persist) saveCurrentProgress();
  if (scroll) {
    const firstSection = document.querySelector(`[data-learning-content="${step}"]`);
    (firstSection || document.querySelector('#learning-bar')).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.querySelectorAll('[data-learning-step]').forEach(button => {
  button.addEventListener('click', () => setLearningStep(Number(button.dataset.learningStep)));
});

document.querySelector('[data-learning-entry="guided"]').addEventListener('click', () => setLearningStep(1));
document.querySelector('[data-learning-entry="review"]').addEventListener('click', () => setLearningStep(5));

function renderNav() {
  const book = books[currentBook];
  const bookUnits = units.slice(book.startIndex, book.startIndex + book.count);
  elements.bookUnitLabel.textContent = `${book.label} · 选择单元`;
  elements.bookSelector.querySelectorAll('[data-book]').forEach(button => {
    const active = button.dataset.book === currentBook;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  elements.nav.innerHTML = bookUnits.map((unit, offset) => {
    const index = book.startIndex + offset;
    return `
    <button class="unit-button ${index === currentUnit ? 'active' : ''}" type="button" data-index="${index}">
      <span class="unit-number">${unit.number}</span>
      <span><span class="unit-type">${unit.type}</span><span class="unit-name">${unit.title}</span></span>
    </button>`;
  }).join('');
  elements.nav.querySelectorAll('.unit-button').forEach(button => button.addEventListener('click', () => {
    saveCurrentProgress();
    currentUnit = Number(button.dataset.index);
    lastUnitByBook[currentBook] = currentUnit;
    elements.personalPlan.innerHTML = '';
    renderUnit();
    document.querySelector('.content').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

elements.bookSelector.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', () => {
    const selectedBook = button.dataset.book;
    if (selectedBook === currentBook) return;
    saveCurrentProgress();
    currentBook = selectedBook;
    currentUnit = lastUnitByBook[currentBook];
    elements.personalPlan.innerHTML = '';
    renderUnit();
    document.querySelector('.content').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

function renderUnit() {
  const unit = units[currentUnit];
  const teaching = teachingData[unit.id];
  const practice = writingPractice[unit.id];
  const reference = writingReferences[unit.id];
  renderNav();
  document.title = `${unit.title} | 写作小宇宙`;
  elements.kicker.textContent = `${unit.type.toUpperCase()} ${unit.number} · WRITING GUIDE`;
  elements.title.textContent = unit.title;
  elements.subtitle.textContent = unit.chinese;
  elements.tags.innerHTML = [`建议 ${unit.range}`, ...unit.grammar].map(tag => `<span>${tag}</span>`).join('');
  elements.task.textContent = unit.prompt;
  elements.questions.innerHTML = teaching.questions.map((item, index) => `<article class="question-item"><span>${index + 1}</span><strong>${item[0]}</strong><p>${item[1]}</p></article>`).join('');
  elements.ladder.innerHTML = teaching.ladder.map(item => `<article class="ladder-step"><small>${item[0]}</small><p>${item[1]}</p></article>`).join('');
  elements.ladderNote.textContent = teaching.note;
  elements.focus.innerHTML = unit.focus.map(item => `<span>${item}</span>`).join('');
  elements.grammar.innerHTML = unit.grammar.map(item => `<span>${item}</span>`).join('');
  elements.grammarTip.textContent = unit.tip;
  elements.words.innerHTML = unit.words.map(([word, meaning]) => `<span class="word-item">${word}<small>${meaning}</small></span>`).join('');
  elements.sentences.innerHTML = unit.sentences.map(sentence => `<div class="sentence">${sentence}</div>`).join('');
  elements.grammarReference.innerHTML = reference.grammar.map(([title, explanation, example, reminder]) => `<article class="grammar-rule"><h4>${title}</h4><p>${explanation}</p><div><span>例句</span>${example}</div><small>易错提醒：${reminder}</small></article>`).join('');
  elements.coreVocabulary.innerHTML = reference.words.map(([word, meaning]) => `<span class="core-word"><strong>${word}</strong><small>${meaning}</small></span>`).join('');
  elements.outline.innerHTML = unit.outline.map((item, index) => `<article class="outline-item" data-number="${index + 1}"><strong>${item[0]}</strong><p>${item[1]}</p></article>`).join('');
  elements.sampleTitle.textContent = unit.sampleTitle;
  elements.sampleRange.textContent = `建议 ${unit.range}`;
  elements.essay.innerHTML = unit.essay.map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`).join('');
  elements.translation.textContent = unit.translation;
  elements.highlights.innerHTML = unit.highlights.map(item => `<li>${item}</li>`).join('');
  elements.annotations.innerHTML = teaching.annotations.map((item, index) => `<article class="annotation-item"><strong><span>${index + 1}</span>${item[0]}</strong><p>${item[1]}</p></article>`).join('');
  elements.checklist.innerHTML = unit.checklist.map(item => `<span>✓ ${item}</span>`).join('');
  renderMaterialFields(practice);
  resetDraftComparison();
  restoreCurrentProgress();
  updateWordCount();
  resetReview();
  setLearningStep(currentLearningStep, { scroll: false, persist: false });
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function wordCount(text) {
  const englishWords = text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g);
  return englishWords ? englishWords.length : 0;
}

function updateWordCount() {
  elements.wordCount.textContent = `${wordCount(elements.draft.value)} / 建议 ${units[currentUnit].range}`;
  renderWritingGoals();
}

function renderMaterialFields(practice) {
  elements.materialFields.innerHTML = practice.fields.map((field, index) => `<label><span data-number="${index + 1}">${field[1]}</span><input data-material-key="${field[0]}" maxlength="90" placeholder="${field[2]}" /></label>`).join('');
  elements.materialFields.querySelectorAll('input').forEach(input => input.addEventListener('input', saveCurrentProgress));
  elements.personalPlan.innerHTML = '';
}

function materialValues() {
  return Array.from(elements.materialFields.querySelectorAll('input')).reduce((values, input) => {
    values[input.dataset.materialKey] = escapeHtml(input.value.trim());
    return values;
  }, {});
}

function getWritingGoals(text = elements.draft.value) {
  const unit = units[currentUnit];
  const [minimum] = unit.range.match(/\d+/).map(Number);
  const contentGoals = writingChecks[unit.id].map(([label, pattern]) => ({ label, done: pattern.test(text) }));
  return [...contentGoals, { label: `达到建议字数（${unit.range}）`, done: wordCount(text) >= minimum }];
}

function renderWritingGoals() {
  const goals = getWritingGoals();
  elements.writingGoals.innerHTML = goals.map(goal => `<span class="writing-goal ${goal.done ? 'done' : ''}"><span>${goal.done ? '✓' : '○'}</span>${goal.label}</span>`).join('');
}

function resetDraftComparison() {
  firstDraft = null;
  elements.compareDrafts.disabled = true;
  elements.saveFirstDraft.textContent = '保存为初稿';
  elements.draftComparison.textContent = '保存初稿后，修改作文并点击“对比二稿”。';
}

document.querySelector('#make-plan').addEventListener('click', () => {
  const lines = writingPractice[units[currentUnit].id].plan(materialValues());
  elements.personalPlan.innerHTML = `<strong>给你的三步提纲：</strong><ol>${lines.map(line => `<li>${line}</li>`).join('')}</ol>`;
  saveCurrentProgress();
});

document.querySelector('#fill-draft').addEventListener('click', () => {
  const unit = units[currentUnit];
  elements.draft.value = unit.outline.map((item, index) => `${index + 1}. ${item[0]}\n`).join('\n');
  elements.draft.focus();
  updateWordCount();
  saveCurrentProgress();
  setLearningStep(4, { scroll: false });
  document.querySelector('#studio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('#use-sample').addEventListener('click', () => {
  elements.draft.value = units[currentUnit].essay.join('\n\n');
  elements.draft.focus();
  updateWordCount();
  saveCurrentProgress();
  setLearningStep(4, { scroll: false });
  document.querySelector('#studio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('#copy-sample').addEventListener('click', async () => {
  const button = document.querySelector('#copy-sample');
  const original = button.textContent;
  try {
    await navigator.clipboard.writeText(units[currentUnit].essay.join('\n\n'));
    button.textContent = '已复制 ✓';
  } catch {
    button.textContent = '请长按复制';
  }
  setTimeout(() => { button.textContent = original; }, 1600);
});

elements.draft.addEventListener('input', () => {
  updateWordCount();
  saveCurrentProgress();
});
elements.saveFirstDraft.addEventListener('click', () => {
  const text = elements.draft.value.trim();
  if (!text) {
    elements.draftComparison.textContent = '先完成几句作文，再把它保存为初稿。';
    return;
  }
  firstDraft = { unitId: units[currentUnit].id, text };
  elements.compareDrafts.disabled = false;
  elements.saveFirstDraft.textContent = '重新保存初稿';
  elements.draftComparison.innerHTML = `<strong>初稿已保存。</strong> 当前有 ${wordCount(text)} 个英文词。现在请根据提示自己修改，再进行二稿对比。`;
});

elements.compareDrafts.addEventListener('click', () => {
  const revisedText = elements.draft.value.trim();
  if (!firstDraft || firstDraft.unitId !== units[currentUnit].id) {
    elements.draftComparison.textContent = '请先保存当前单元的初稿。';
    return;
  }
  if (!revisedText) {
    elements.draftComparison.textContent = '二稿不能为空，先写下你的修改。';
    return;
  }
  if (revisedText === firstDraft.text) {
    elements.draftComparison.textContent = '二稿和初稿还相同。试着根据完成条补充一个细节或改正一个错误。';
    return;
  }
  const beforeGoals = getWritingGoals(firstDraft.text);
  const afterGoals = getWritingGoals(revisedText);
  const newlyDone = afterGoals.filter((goal, index) => goal.done && !beforeGoals[index].done).map(goal => goal.label);
  const wordDifference = wordCount(revisedText) - wordCount(firstDraft.text);
  const sentenceDifference = revisedText.split(/[.!?]+/).filter(Boolean).length - firstDraft.text.split(/[.!?]+/).filter(Boolean).length;
  const growth = newlyDone.length ? `新完成：${newlyDone.join('、')}。` : '完成条没有新增项目，试着补充时间、原因或结尾感受。';
  const lengthNote = wordDifference === 0 ? '词数相同，但你仍可以检查句子是否更准确。' : `英文词数 ${wordDifference > 0 ? '增加' : '减少'}了 ${Math.abs(wordDifference)} 个`;
  const sentenceNote = sentenceDifference === 0 ? '句子数量没有变化。' : `句子数量变化 ${sentenceDifference > 0 ? '+' : ''}${sentenceDifference}。`;
  elements.draftComparison.innerHTML = `<strong>你完成了自己的二稿！</strong><ul><li>${lengthNote}</li><li>${sentenceNote}</li><li>${growth}</li></ul>`;
});

document.querySelector('#basic-check').addEventListener('click', () => {
  const text = elements.draft.value.trim();
  const count = wordCount(text);
  const unit = units[currentUnit];
  if (!text) { elements.checkResult.textContent = '先写一句英文试试看吧。'; return; }
  const hasCapital = /^[A-Z]/.test(text);
  const hasPunctuation = /[.!?]$/.test(text);
  const [minimum] = unit.range.match(/\d+/).map(Number);
  const notes = [];
  notes.push(count >= minimum ? `字数不错（${count} 词）` : `目前 ${count} 词，可再补充一两句细节`);
  if (!hasCapital) notes.push('开头记得用大写字母');
  if (!hasPunctuation) notes.push('结尾记得加标点');
  elements.checkResult.textContent = notes.join('；');
});

function openModal() { elements.modal.hidden = false; document.querySelector('.modal-close').focus(); }
function closeModal() { elements.modal.hidden = true; }
document.querySelectorAll('[data-open-modal]').forEach(button => button.addEventListener('click', openModal));
document.querySelector('.modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-confirm').addEventListener('click', closeModal);
elements.modal.addEventListener('click', event => { if (event.target === elements.modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !elements.modal.hidden) closeModal(); });

function setReviewStatus(message, type = '') {
  reviewElements.status.textContent = message;
  reviewElements.status.className = `review-status ${type}`;
}

function updateReviewSubmit() {
  reviewElements.submit.disabled = reviewInProgress || !uploadedEssayImage || !reviewElements.consent.checked;
}

function resetReview() {
  reviewElements.result.hidden = true;
  reviewElements.result.dataset.review = '';
}

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('图片无法读取，请换一张清楚的照片。'));
    image.src = source;
  });
}

async function prepareEssayImage(file) {
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    throw new Error('请上传 JPG、PNG 或 WEBP 格式的图片。');
  }
  if (file.size > 10 * 1024 * 1024) {
    throw new Error('图片超过 10 MB，请先裁剪或压缩后再上传。');
  }
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = await loadImage(objectUrl);
    const maxSide = 2000;
    const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext('2d');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', 0.9);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

reviewElements.imageInput.addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    setReviewStatus('正在准备图片……', 'working');
    uploadedEssayImage = await prepareEssayImage(file);
    reviewElements.preview.src = uploadedEssayImage;
    reviewElements.previewWrap.hidden = false;
    setReviewStatus('图片已准备好。勾选确认后即可开始批改。');
  } catch (error) {
    uploadedEssayImage = '';
    reviewElements.previewWrap.hidden = true;
    reviewElements.imageInput.value = '';
    setReviewStatus(error.message, 'error');
  }
  updateReviewSubmit();
});

reviewElements.removeImage.addEventListener('click', () => {
  uploadedEssayImage = '';
  reviewElements.preview.removeAttribute('src');
  reviewElements.previewWrap.hidden = true;
  reviewElements.imageInput.value = '';
  setReviewStatus('照片已移除。');
  updateReviewSubmit();
});

reviewElements.consent.addEventListener('change', updateReviewSubmit);

function reviewContext(unit) {
  return {
    id: unit.id,
    title: unit.title,
    chineseTheme: unit.chinese,
    task: unit.prompt,
    range: unit.range,
    grammar: unit.grammar,
    keyWords: unit.words.map(([word]) => word),
    sentencePatterns: unit.sentences
  };
}

function renderReview(review) {
  reviewElements.total.textContent = `${review.totalScore} / 20`;
  reviewElements.summary.textContent = review.summary;
  const dimensions = [['内容', 'content'], ['结构', 'structure'], ['语言', 'language'], ['书写', 'presentation']];
  reviewElements.scores.innerHTML = dimensions.map(([label, key]) => `<div class="score-item"><strong>${label}</strong><span>${review.scores[key]}</span><small>/ 5 分</small></div>`).join('');
  reviewElements.transcription.textContent = review.transcription;
  reviewElements.praise.innerHTML = review.praise.map(item => `<li>${escapeHtml(item)}</li>`).join('') || '<li>认真完成一次写作，就是很好的开始。</li>';
  reviewElements.issues.innerHTML = review.issues.length
    ? `<div class="issue-list">${review.issues.map(issue => `<article class="issue"><span class="issue-original">${escapeHtml(issue.original)}</span><span class="issue-arrow">→</span><span class="issue-suggestion">${escapeHtml(issue.suggestion)}</span><span class="issue-reason">${escapeHtml(issue.reason)}</span></article>`).join('')}</div>`
    : '<p class="review-summary">没有发现需要逐处标注的问题。可以重点比较下面的升级版表达。</p>';
  reviewElements.improved.textContent = review.improvedEssay;
  reviewElements.useImproved.disabled = !review.improvedEssay;
  reviewElements.next.textContent = review.nextPractice;
  reviewElements.result.dataset.review = JSON.stringify(review);
  reviewElements.result.hidden = false;
  reviewElements.result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

reviewElements.submit.addEventListener('click', async () => {
  if (!uploadedEssayImage || !reviewElements.consent.checked || reviewInProgress) return;
  reviewInProgress = true;
  updateReviewSubmit();
  resetReview();
  setReviewStatus('正在识别作文并按当前单元标准批改，通常需要十几秒……', 'working');
  try {
    const response = await fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageDataUrl: uploadedEssayImage, unit: reviewContext(units[currentUnit]) })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || '批改服务暂时不可用，请稍后再试。');
    renderReview(data.review);
    setReviewStatus('批改完成。请先看表扬和修改原因，再自己改一遍。');
  } catch (error) {
    setReviewStatus(error.message || '批改失败，请检查网络和服务设置。', 'error');
  } finally {
    reviewInProgress = false;
    updateReviewSubmit();
  }
});

reviewElements.useImproved.addEventListener('click', () => {
  const storedReview = reviewElements.result.dataset.review;
  if (!storedReview) return;
  const review = JSON.parse(storedReview);
  elements.draft.value = review.improvedEssay;
  updateWordCount();
  saveCurrentProgress();
  setLearningStep(4, { scroll: false });
  elements.draft.focus();
  document.querySelector('#studio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

renderUnit();
