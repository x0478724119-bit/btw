// 单篇 · 科学。新格式（中英一对一对，三档都能读）
addContent('sleep-memory', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "雅思考试": "IELTS test", "单词表": "word list", "单词": "words", "大脑": "brain",
    "新知识": "new facts", "长期记忆": "long-term memory", "收件箱": "inbox", "信息": "information",
    "研究": "study", "学生": "students", "图片": "pictures", "扫描仪": "scanner",
    "扫描": "scan", "任务": "task", "原因": "reason", "邮件": "mail",
    "深度睡眠": "deep sleep", "睡眠": "sleep", "过程": "process", "考试": "exam",
    "哈佛": "Harvard", "科学家": "scientists", "时间": "time", "晚上": "night",
    "早上": "morning", "通宵": "all-nighter", "区域": "area", "测试": "test",
  },
  summary: '熬一夜背单词，第二天反而记不住？一项哈佛的研究告诉你，问题出在大脑的「收件箱」。',
  sayTitle: 'Say it in English',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲真实研究，事实来源见下',
    facts: [
      ['Yoo, Hu, Gujar, Jolesz & Walker (2007). A deficit in the ability to form new human memories without sleep. Nature Neuroscience（PubMed）', 'https://pubmed.ncbi.nlm.nih.gov/17293859/'],
      ['Harvard Gazette：Study shows importance of sleep for optimal memory functioning（2007-02）', 'https://news.harvard.edu/gazette/story/2007/02/study-shows-importance-of-sleep-for-optimal-memory-functioning'],
      ['BPS Research Digest：Students, it’s time to ditch the pre-exam all-nighter', 'https://bps.org.uk/research-digest/students-its-time-ditch-pre-exam-all-nighter'],
    ],
  },
  guide: '读完你会知道：① 大脑里有个叫「海马体」的地方，像收件箱一样先接住新信息；② 一夜不睡，收件箱就塞不进新东西了（一项研究里最多差了 40%）；③ 睡觉的时候，大脑会把收件箱里的东西整理进长期记忆。所以考前通宵，往往是在白费力气。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['Your IELTS test is in two days.', '离雅思考试还有两天。'],
      ['You decide to stay up all night to learn 200 more words.', '你决定通宵，再背 200 个单词。'],
      ['The next morning, you look at the list again and many of the words feel brand new.', '第二天早上再看那张单词表，很多词就像从没见过一样。'],
      ['It is not that you were lazy. Your brain simply could not hold on to them.', '不是你偷懒，而是你的大脑真的没能把它们留住。'],
    ],
    { img: {"src": "images/sleeping-students.jpg", "alt": "A student asleep on a classroom desk", "caption": "Sleeping while studying, Nakhon Sawan, Thailand", "zh": "泰国北榄坡，一个趴在课桌上睡着的学生", "credit": "Photo: Love Krittaya · Public domain", "link": "https://commons.wikimedia.org/wiki/File:Sleeping_students.jpg"} },

    { h: '1. The brain’s inbox', zh: '1. 大脑的收件箱' },
    [
      ['New facts don’t go straight into long-term memory.', '新知识不会直接进入长期记忆。'],
      ['They first pass through the [[hippocampus|海马体]], a small, curved part deep inside the brain.', '它们会先经过海马体{hippocampus}，这是大脑深处一个小小的、弯弯的区域。'],
      ['You can think of the hippocampus as an inbox: it catches new information during the day and holds it for a while.', '你可以把海马体想成一个收件箱：白天它先接住新信息，暂时存着。'],
    ],

    { h: '2. What happens without sleep', zh: '2. 不睡觉会怎样' },
    [
      ['In a 2007 study led by Matthew Walker, then at Harvard, some students stayed awake all night and others slept normally.', '2007 年，由当时在哈佛的马修·沃克带领的一项研究里，一部分学生通宵不睡，另一部分正常睡觉。'],
      ['The next day, both groups looked at a set of pictures while a brain scanner watched their brains.', '第二天，两组人一边看一组图片，一边用脑部扫描仪观察大脑。'],
      ['Later they were tested on what they remembered.', '之后再测试他们记住了多少。'],
    ],
    [
      ['The students who had stayed up remembered much less, as much as 40% worse on the picture task, according to Walker.', '据沃克说，通宵的那组学生记住的少得多，在看图任务上最多差了 40%。'],
      ['The scans showed why: their hippocampus was much less active while they were trying to learn.', '扫描结果说明了原因：他们努力学习的时候，海马体明显没那么活跃。'],
      ['In other words, a tired brain’s inbox stops accepting new mail.', '换句话说，大脑累了，收件箱就不再收新邮件了。'],
    ],

    { h: '3. Sleep files your notes', zh: '3. 睡觉是在整理笔记' },
    [
      ['Sleep also matters after you learn.', '学完以后，睡觉同样重要。'],
      ['During deep sleep, the brain replays the day’s new information and moves the important parts into long-term storage.', '深度睡眠时，大脑会把白天的新信息「重播」一遍，把重要的部分搬进长期记忆。'],
      ['Scientists call this [[memory consolidation|记忆巩固]].', '科学家把这个过程叫作记忆巩固{memory consolidation}。'],
      ['It also clears space in the inbox, so you can take in new things the next day.', '它也会把收件箱腾空，让你第二天能接收新东西。'],
    ],
    {
      box: [
        ['So an all-nighter costs you twice.', '所以通宵其实亏了两次。'],
        ['The words you study that night go in badly, and the words you studied earlier never get properly filed.', '当晚背的词塞不太进去，之前背的词也没机会被好好整理进长期记忆。'],
      ],
    },

    { h: '4. Use it before your exam', zh: '4. 考前这样用' },
    [
      ['Study in shorter sessions across several days instead of one long night.', '分几天、每次少学一点，而不是一个晚上学到底。'],
      ['Review your hardest words shortly before bed, then actually sleep.', '把最难的词放在睡前复习，然后好好睡觉。'],
      ['The night before the test, sleep is part of your preparation, not a break from it.', '考试前一晚，睡觉也是备考的一部分，而不是偷懒。'],
    ],
  ],
  sayIt: [
    ['Pulling an all-nighter before an exam usually backfires.', '考前熬通宵，通常会适得其反。'],
    ['Sleep is when the brain moves new information into long-term memory.', '睡觉的时候，大脑会把新信息搬进长期记忆。'],
  ],
  quiz: [
    {
      q: ['Which part of the brain works like an “inbox” for new facts?', '大脑哪个部分像新知识的「收件箱」？'],
      opts: [['The hippocampus', '海马体'], ['The stomach', '胃'], ['The eyes', '眼睛']],
      a: 0,
      e: ['The [[hippocampus|海马体]] catches new information first and holds it for a while.', '海马体{hippocampus}先接住新信息，暂时存着。'],
    },
    {
      q: ['In the 2007 study, what happened to the students who stayed up all night?', '2007 年那项研究里，通宵的学生怎么样了？'],
      opts: [['They remembered more.', '记住的更多'], ['They remembered much less, and their hippocampus was less active.', '记住的少得多，海马体也没那么活跃'], ['There was no difference.', '没有区别']],
      a: 1,
      e: ['According to Walker, they did as much as 40% worse on the picture task.', '据沃克说，他们在看图任务上最多差了 40%。'],
    },
    {
      q: ['What is [[memory consolidation|记忆巩固]]?', '什么是记忆巩固{memory consolidation}？'],
      opts: [['Forgetting things on purpose.', '故意忘掉东西'], ['Moving new information into long-term memory during sleep.', '睡觉时把新信息搬进长期记忆'], ['Learning many words in one night.', '一晚上背很多单词']],
      a: 1,
      e: ['During deep sleep, the brain replays new information and stores the important parts.', '深度睡眠时，大脑会重播新信息，把重要的部分存起来。'],
    },
  ],
  questions: [
    {
      q: ['How would you plan the last three days before an exam, using what you just read?', '用刚读到的内容，你会怎么安排考试前的最后三天？'],
      a: [
        ['There is no single right answer.', '没有标准答案。'],
        ['A good plan has short study sessions each day, a quick review of the hardest items before bed, and a full night’s sleep every night, especially the last one.', '好的安排是：每天分几段短时间学习，睡前快速过一遍最难的内容，每晚都睡够，尤其是考前最后一晚。'],
      ],
    },
  ],
  words: {
    'brand':       ['/brænd/', 'brand new 全新的'],
    hippocampus:   ['/ˌhɪpəˈkæmpəs/', '海马体（大脑中负责形成新记忆的区域）'],
    curved:        ['/kɜːrvd/', '弯曲的'],
    inbox:         ['/ˈɪnbɑːks/', '收件箱'],
    matthew:       ['', '马修（人名）'],
    walker:        ['', '沃克（人名，睡眠科学家）'],
    scanner:       ['/ˈskænər/', '扫描仪'],
    replays:       ['/ˌriːˈpleɪz/', '重播'],
    storage:       ['/ˈstɔːrɪdʒ/', '储存'],
    consolidation: ['/kənˌsɑːlɪˈdeɪʃn/', '巩固；memory consolidation 记忆巩固'],
    filed:         ['/faɪld/', '归档，整理好'],
    'all-nighter': ['/ˌɔːl ˈnaɪtər/', '通宵（熬夜一整晚）'],
    backfires:     ['/ˌbækˈfaɪərz/', '适得其反'],
    sessions:      ['/ˈseʃnz/', '（一段）时间，一节'],
  },
});
