// BTW 的所有内容数据。现在大部分是占位符，以后一篇一篇换成真内容。

// false：只显示已经写好正文的文章；true：把还没写的示例也显示出来（开发时预览用）
const SHOW_SAMPLES = false;
// 藏起来的文章 id（文件已挪到桌面「BTW旧稿」，这里留空）
const HIDDEN = [];

const LEVELS = {
  1: { name: '入门', cefr: 'A2', vocab: '约 1500 词', ielts: '大约相当于雅思 3.5–4 分' },
  2: { name: '初级', cefr: 'B1', vocab: '约 3000 词', ielts: '大约相当于雅思 4–5 分' },
  3: { name: '中级', cefr: 'B2', vocab: '约 5000 词', ielts: '大约相当于雅思 5.5–6.5 分' },
  4: { name: '高级', cefr: 'C1', vocab: '8000 词以上', ielts: '大约相当于雅思 7 分以上' },
};

// 按学科分（2026-10-23 改）：经济、金融、商业、博弈论合并成「商科」。读完一个学科，像读完一个大学专业
const THEMES = [
  { id: 'business',   name: '商科',     en: 'Business & Economics', tint: '#F1ECE4', desc: '经济、金融、商业、博弈论。价格、市场、钱和公司，以及每个人都在算计别人时会发生什么。' },
  { id: 'cs',         name: '计算机',   en: 'Computing',  tint: '#E6EBF2', desc: 'Python、数据分析、可视化。全英文，边读边动手。' },
  { id: 'math',       name: '数学',     en: 'Mathematics', tint: '#ECEEF0', desc: '概率、统计、证明。不背公式，看懂它为什么成立。' },
  { id: 'psychology', name: '心理学',   en: 'Psychology', tint: '#EEEAF3', desc: '人为什么会这样想、这样做，以及那些没被重复出来的著名实验。' },
  { id: 'history',    name: '历史',     en: 'History',    tint: '#EFEBE3', desc: '今天的世界是怎么一步步变成这样的。' },
  { id: 'art',        name: '艺术史',   en: 'Art History', tint: '#F2EBE6', desc: '一幅画为什么重要：怎么看、怎么画出来的、当时的人怎么看它。' },
  { id: 'law',        name: '法律',     en: 'Law',        tint: '#E8ECEF', desc: '规则从哪来、为什么这样定，用真实的案子讲。' },
  { id: 'politics',   name: '政治学',   en: 'Political Science', tint: '#ECE9EE', desc: '制度怎么设计、投票怎么算、权力怎么分。讲理论和历史，不评论时事。' },
  { id: 'society',    name: '社会学',   en: 'Sociology',  tint: '#F2EDE6', desc: '家庭、城市、阶层、人群。' },
  { id: 'geography',  name: '地理',     en: 'Geography',  tint: '#E7EFE8', desc: '山、河、气候和地图，怎么决定了人住在哪、国家怎么富起来。' },
  { id: 'biology',    name: '生物',     en: 'Biology',    tint: '#E5EEF1', desc: '细胞、基因、进化、身体。' },
  { id: 'chemistry',  name: '化学',     en: 'Chemistry',  tint: '#EAF0EE', desc: '东西是由什么组成的，为什么会变。' },
  { id: 'physics',    name: '物理',     en: 'Physics',    tint: '#E9ECF3', desc: '从一个苹果到整个宇宙。' },
  { id: 'people',     name: '人物',     en: 'Lives',      tint: '#F0EDE6', desc: '传记：一个人是怎么做成（或者搞砸）一件大事的。' },
  // 下面三个是第一批（已藏起来的）文章在用的
  { id: 'news',       name: '新闻',     en: 'News',       tint: '#EDEDEB', desc: '真实新闻。' },
  { id: 'work',       name: '职场文件', en: 'At Work',    tint: '#EAEFE9', desc: '会议纪要、合同、财报。' },
  { id: 'papers',     name: '论文',     en: 'Research',   tint: '#F0EEE8', desc: '期刊论文怎么读。' },
];

// ---------- 示例正文（Claude 原创），所有占位文章先共用它 ----------
const SAMPLE = {
  guide: '这一篇讲：为什么借钱要付利息。读完你会知道，利息其实是在为「等待」和「风险」付钱，也会明白银行是怎么靠利率差赚钱的。',
  paragraphs: [
    [
      ['Imagine you lend a friend 100 dollars today.', '想象一下，你今天借给朋友 100 美元。'],
      ['A year later, your friend gives you back exactly 100 dollars.', '一年后，朋友正好还你 100 美元。'],
      ['Did you lose anything?', '你有没有亏什么？'],
      ['Most people feel that they did, even if they cannot say what.', '大多数人觉得自己亏了，只是说不出亏在哪里。'],
    ],
    [
      ['First, you could not use that money for a whole year.', '第一，你整整一年都没法用这笔钱。'],
      ['Maybe you wanted to buy a new phone, or take a short trip.', '也许你本来想买部新手机，或者来一次短途旅行。'],
      ['Economists call this the opportunity cost of waiting.', '经济学家把这叫作「等待的机会成本」。'],
      ['Second, there was a risk that your friend would never pay you back.', '第二，朋友有可能永远不还你。'],
      ['You took that risk, and you received nothing for it.', '你承担了这个风险，却什么回报都没拿到。'],
    ],
    [
      ['Interest is the price that pays for both of these things.', '利息，就是为这两件事付的价钱。'],
      ['When a bank borrows your savings, it pays you a small amount of interest.', '银行借用你的存款时，会付给你一点利息。'],
      ['When the bank lends that money to a company, it charges a higher rate.', '银行再把这笔钱借给公司时，会收更高的利率。'],
      ['The difference between the two rates is how the bank earns its profit.', '两个利率之间的差，就是银行赚钱的方式。'],
    ],
    [
      ['So the next time you see an interest rate, ask two simple questions.', '所以下次你看到一个利率，可以问两个简单的问题。'],
      ['How long am I waiting, and how risky is the borrower?', '我要等多久？借钱的人风险有多大？'],
      ['Longer waits and riskier borrowers almost always mean higher interest.', '等得越久、借钱的人风险越高，利息几乎总是越高。'],
    ],
  ],
  questions: [
    {
      q: ["If you lend money to a big, safe company instead of a brand-new startup, would you ask for more or less interest? Why?", "如果你把钱借给一家又大又稳的公司，而不是一家刚成立的创业公司，你会要更多还是更少的利息？为什么？"],
      a: [
        ["Less.", "更少。"],
        ["A big, safe company is less likely to fail, so there is less risk that you will lose your money.", "大公司不太容易倒闭，你拿不回钱的风险更小。"],
        ["That is why new startups usually pay higher interest when they borrow.", "这就是为什么创业公司借钱通常要付更高的利息。"],
      ],
    },
    {
      q: ["Can you think of a time when you \"paid\" for waiting, even without money?", "你能想到一次你为「等待」付出代价的经历吗？不一定是钱。"],
      a: [
        ["There is no single right answer.", "没有标准答案。"],
        ["For example, if you waited in line for an hour to eat, you gave up an hour you could have used for something else.", "比如你排队一个小时才吃上饭，你就放弃了本来可以做别的事的一小时。"],
        ["That hour is your opportunity cost.", "这一个小时就是你的机会成本。"],
      ],
    },
  ],
};

// 示例正文的生词表（以后每篇文章都有自己的）
const GLOSSARY = {
  // 常用小词：词典里第一个意思常常是冷门的（比如 can 排在前面的是「装罐」），这里手动给最常用的意思
  can:   ['/kæn/', '能，会，可以'],
  could: ['/kʊd/', '能，可以（can 的过去式）；可能'],
  will:  ['/wɪl/', '将要，会'],
  would: ['/wʊd/', '会，将会（will 的过去式）；愿意'],
  may:   ['/meɪ/', '可能，也许；可以'],
  might: ['/maɪt/', '可能，也许'],
  must:  ['/mʌst/', '必须；一定'],
  should:['/ʃʊd/', '应该'],
  still: ['/stɪl/', '仍然，还是'],
  just:  ['/dʒʌst/', '只是；刚刚；正好'],
  even:  ['/ˈiːvn/', '甚至，连'],
  well:  ['/wel/', '好，很好地'],
  last:  ['/læst/', '最后的；上一个'],
  left:  ['/left/', '剩下的（leave 的过去式）；左边'],
  kind:  ['/kaɪnd/', '种类；kind of 有点'],
  mean:  ['/miːn/', '意思是，意味着'],
  means: ['/miːnz/', '意思是，意味着'],
  rest:  ['/rest/', '其余的部分；休息'],
  spring:['/sprɪŋ/', '春天；泉'],
  fall:  ['/fɔːl/', '落下，下降'],
  fine:  ['/faɪn/', '好的，没问题；罚款'],
  free:  ['/friː/', '免费的；自由的'],
  pay:   ['/peɪ/', '付钱'],
  bill:  ['/bɪl/', '账单'],
  book:  ['/bʊk/', '书；预订'],
  imagine:     ['/ɪˈmædʒɪn/', '想象'],
  lend:        ['/lend/', '借出（把东西借给别人）'],
  exactly:     ['/ɪɡˈzæktli/', '正好，确切地'],
  lose:        ['/luːz/', '失去，亏损'],
  whole:       ['/hoʊl/', '整个的，全部的'],
  trip:        ['/trɪp/', '旅行'],
  economist:   ['/ɪˈkɑːnəmɪst/', '经济学家'],
  opportunity: ['/ˌɑːpərˈtuːnəti/', '机会'],
  cost:        ['/kɔːst/', '成本，代价'],
  risk:        ['/rɪsk/', '风险'],
  receive:     ['/rɪˈsiːv/', '收到，得到'],
  interest:    ['/ˈɪntrəst/', '利息；兴趣'],
  price:       ['/praɪs/', '价格，代价'],
  bank:        ['/bæŋk/', '银行'],
  borrow:      ['/ˈbɑːroʊ/', '借入（向别人借）'],
  savings:     ['/ˈseɪvɪŋz/', '存款，积蓄'],
  amount:      ['/əˈmaʊnt/', '数量，金额'],
  company:     ['/ˈkʌmpəni/', '公司'],
  charge:      ['/tʃɑːrdʒ/', '收费，要价'],
  rate:        ['/reɪt/', '比率；利率'],
  difference:  ['/ˈdɪfrəns/', '差别，差额'],
  earn:        ['/ɜːrn/', '赚，挣得'],
  profit:      ['/ˈprɑːfɪt/', '利润'],
  simple:      ['/ˈsɪmpl/', '简单的'],
  risky:       ['/ˈrɪski/', '有风险的'],
  borrower:    ['/ˈbɑːroʊər/', '借款人'],
  almost:      ['/ˈɔːlmoʊst/', '几乎'],
  mean:        ['/miːn/', '意味着'],
};

// ---------- 连续剧 ----------
const SERIES = [
  {
    id: 'games', theme: 'business', level: 3,
    title: '博弈论', en: 'Game Theory',
    desc: '照大学博弈论课的顺序讲（参考耶鲁 ECON 159）：占优、纳什均衡、混合策略、承诺、重复博弈、信号、拍卖。每集都有收益矩阵要你自己解，也有真实的案子和数据。',
    episodes: [
      ['gt-dominance', '为什么聪明人会集体做蠢事', 'Dominance and the Prisoner’s Dilemma'],
      ['gt-guess', '猜「平均数的三分之二」', 'Iterated Dominance: How Many Steps Do People Think?'],
      ['gt-nash', '纳什均衡：谁都不想先改', 'Nash Equilibrium'],
      ['gt-focal', '没商量也能想到一块', 'Coordination and Focal Points'],
      ['gt-mixed', '点球往哪踢', 'Mixed Strategies'],
      ['gt-backward', '先后手和倒推', 'Sequential Games and Backward Induction'],
      ['gt-commit', '烧掉自己的船', 'Commitment and Credible Threats'],
      ['gt-repeated', '陌生人为什么也能合作', 'Repeated Games'],
      ['gt-signal', '文凭到底在证明什么', 'Signalling'],
      ['gt-lemons', '二手车市场为什么只剩烂车', 'Asymmetric Information'],
      ['gt-auction', '赢家的诅咒', 'Auctions and the Winner’s Curse'],
      ['gt-limits', '理论在哪里失灵', 'Where Game Theory Fails'],
    ],
  },
  {
    id: 'python', theme: 'cs', level: 3,
    title: 'Python 数据分析', en: 'Python for Data Analysis',
    desc: '全英文。从零开始，一直讲到用 pandas 处理真实数据、画图，最后用 Tableau 做看板。每集都有能照着敲的代码，也有真实的「代码出错」事件。',
    episodes: [
      ['py-basics', '为什么 0.1 + 0.2 不等于 0.3', 'Values, Types, and Why 0.1 + 0.2 ≠ 0.3'],
      ['py-loops', '早五年存钱，还是每月多存一倍', 'Loops: Compound Interest by Brute Force'],
      ['py-functions', '把重复的事写成函数', 'Functions'],
      ['py-dicts', '字典：用名字找数据', 'Dictionaries and Real Data'],
      ['py-pandas', '第一次用 pandas 读表格', 'Reading a Table with pandas'],
      ['py-groupby', '分组汇总：平均数在骗你吗', 'Grouping, Summaries and Simpson’s Paradox'],
      ['py-charts', '画一张不会误导人的图', 'Charts That Don’t Lie'],
      ['tableau-first', 'Tableau：第一个看板', 'Your First Tableau Dashboard'],
    ],
  },
  {
    id: 'looking', theme: 'art', level: 3,
    title: '怎么看一幅画', en: 'How to Look at a Painting',
    desc: '一集一幅名画，不需要美术基础。每集学一个看画的工具：谁付的钱、光往哪打、颜料是怎么来的、名字是谁起的、它后来经历了什么。',
    episodes: [
      ['art-nightwatch', '《夜巡》画的根本不是晚上', 'Rembrandt’s Night Watch'],
      ['art-pearl', '《戴珍珠耳环的少女》可能不是肖像', 'Vermeer’s Girl with a Pearl Earring'],
      ['art-arnolfini', '一面小镜子里藏着画家', 'Van Eyck’s Arnolfini Portrait'],
      ['art-wave', '一种进口的蓝色，和一个浪', 'Hokusai’s Great Wave'],
      ['art-impression', '「印象派」本来是一句骂人的话', 'Monet’s Impression, Sunrise'],
      ['art-monalisa', '《蒙娜丽莎》是被偷出名的', 'How the Mona Lisa Became Famous'],
      ['art-fountain', '一个小便池，凭什么是艺术', 'Duchamp’s Fountain'],
    ],
  },
  {
    id: 'world', theme: 'geography', level: 3,
    title: '地理：世界为什么长这样', en: 'Why the World Looks Like This',
    desc: '冷和暖、沙漠和雨林、河流和城市、地震和山。每集回答一个「为什么这里是这样」，用真实的数据和真实的科学争论。',
    episodes: [
      ['geo-climate', '伦敦比哈尔滨靠北，为什么暖和二十度', 'Why London Is Warmer Than Harbin'],
      ['geo-deserts', '大沙漠为什么都在北纬 30 度', 'Why the Great Deserts Sit at 30 Degrees'],
      ['geo-monsoon', '广东的雨为什么都下在夏天', 'The Monsoon'],
      ['geo-rivers', '文明为什么长在河边', 'Rivers and the First Cities'],
      ['geo-maps', '你从小看的地图是变形的', 'Every Map Lies'],
      ['geo-plates', '日本为什么总地震', 'Plate Tectonics'],
      ['geo-cities', '深圳为什么会长在那里', 'Why Cities Grow Where They Do'],
    ],
  },
  {
    id: 'stats', theme: 'math', level: 3,
    title: '概率与统计', en: 'Probability and Statistics',
    desc: '不背公式，用「想象 1,000 个人」的办法看懂概率。每集一个真实的大错：误诊、冤案、猜错的选举、被平均数骗的决定。',
    episodes: [
      ['math-bayes', '查出阳性，你真的得病了吗', 'Base Rates and Bayes’ Rule'],
      ['math-sampling', '1,000 人的调查，凭什么代表 14 亿人', 'Sampling: Why How Beats How Many'],
      ['math-average', '平均数会骗人', 'Averages, Medians and Outliers'],
      ['math-regression', '为什么「表扬完就退步」', 'Regression to the Mean'],
      ['math-correlation', '相关不等于因果', 'Correlation and Causation'],
      ['math-significance', '「显著」到底是什么意思', 'What “Significant” Really Means'],
    ],
  },
  {
    id: 'evolution', theme: 'biology', level: 3,
    title: '生物：进化是怎么运作的', en: 'How Evolution Works',
    desc: '从超级细菌讲到人类自己：进化不是「越变越好」，也不是很久以前的事，它现在就在你身体里发生。每集一个真实的研究。',
    episodes: [
      ['bio-resistance', '细菌不是「习惯」了抗生素', 'Antibiotic Resistance: Evolution You Can Watch'],
      ['bio-milk', '为什么大多数成年人喝不了牛奶', 'Lactose and Recent Human Evolution'],
      ['bio-eye', '眼睛是怎么一步步「长」出来的', 'How Complex Organs Evolve'],
      ['bio-ageing', '我们为什么会变老', 'Why We Age'],
      ['bio-genes', '你的 DNA 里有 8% 是病毒', 'Viruses in Our Genome'],
      ['bio-cooperation', '自私的基因，为什么造出了无私的动物', 'The Evolution of Cooperation'],
    ],
  },
  {
    id: 'chemistry', theme: 'chemistry', level: 3,
    title: '化学：东西为什么会变', en: 'Why Things Change',
    desc: '平衡、能量、熵、酸碱、反应速度。每集从一个改变了世界的真实反应讲起，把大学普通化学的核心概念讲透。',
    episodes: [
      ['chem-haber', '把空气变成面包的那个反应', 'Equilibrium and the Haber–Bosch Process'],
      ['chem-entropy', '冰为什么会在手里化掉', 'Energy, Entropy and Why Reactions Happen'],
      ['chem-acid', '胃酸为什么溶不掉你的胃', 'Acids, Bases and pH'],
      ['chem-rates', '为什么面粉厂会爆炸', 'Reaction Rates and Surface Area'],
      ['chem-batteries', '锂电池里到底在发生什么', 'Redox and Batteries'],
      ['chem-plastics', '塑料为什么几百年都不烂', 'Polymers'],
    ],
  },
  {
    id: 'physics', theme: 'physics', level: 3,
    title: '物理：从苹果到宇宙', en: 'From an Apple to the Universe',
    desc: '照大学物理的顺序：引力、运动、能量、波、光、电、相对论。每集都算一个真实的数，用它来推翻一个常见的误解。',
    episodes: [
      ['phys-moon', '月亮其实一直在往下掉', 'Newton, the Moon and Free Fall'],
      ['phys-tides', '为什么一天有两次涨潮', 'Tides and the Retreating Moon'],
      ['phys-energy', '一块巧克力能把你送上几楼', 'Energy and Its Conservation'],
      ['phys-sky', '天空为什么是蓝的，而不是紫的', 'Light Scattering and Colour'],
      ['phys-gps', '没有相对论，导航每天错 10 公里', 'Relativity in Your Phone'],
      ['phys-entropy', '时间为什么只往一个方向走', 'Entropy and the Arrow of Time'],
    ],
  },
  {
    id: 'lives', theme: 'people', level: 3,
    title: '人物：改变世界的人，和他们的代价', en: 'Lives That Changed the World',
    desc: '一集一个人：他们做成了什么，搞砸了什么，又是谁在什么时候发现的。前后几集的人物会互相牵连。',
    episodes: [
      ['life-midgley', '一个人，两项「安全」的发明', 'Thomas Midgley Jr.'],
      ['life-patterson', '测出地球年龄的人，和铅工业打了几十年', 'Clair Patterson'],
      ['life-semmelweis', '让医生洗手的人，被同行送进了疯人院', 'Ignaz Semmelweis'],
      ['life-franklin', 'DNA 双螺旋背后的那张照片', 'Rosalind Franklin'],
      ['life-lacks', '一个女人的细胞，活得比她久七十年', 'Henrietta Lacks'],
      ['life-turing', '破译密码的人，和他被判的「罪」', 'Alan Turing'],
    ],
  },
  {
    id: 'replication', theme: 'psychology', level: 3,
    title: '心理学：那些有名的实验，后来怎么样了', en: 'Famous Experiments, Revisited',
    desc: '教科书里最有名的心理学实验，几十年后被人翻出档案、重新做了一遍。哪些站住了，哪些塌了，又是怎么塌的。每集学一个检验研究的工具。',
    episodes: [
      ['psy-prison', '斯坦福监狱实验：狱警是被教着变狠的', 'The Stanford Prison Experiment'],
      ['psy-milgram', '三分之二的人按到了最高电压吗', 'Milgram’s Obedience Studies'],
      ['psy-marshmallow', '棉花糖实验测的是自控力吗', 'The Marshmallow Test'],
      ['psy-memory', '怎么让人「记起」没发生过的事', 'False Memories'],
      ['psy-power', '「权力姿势」为什么没能重复出来', 'Power Posing and the Replication Crisis'],
      ['psy-bystander', '38 个目击者，真的都袖手旁观了吗', 'The Bystander Effect and Kitty Genovese'],
    ],
  },
  {
    id: 'mind', theme: 'psychology', level: 2,
    title: '为什么人会做傻决定', en: 'Why We Make Bad Decisions',
    desc: '锚定效应、损失厌恶、从众心理。看懂自己，也看懂商家是怎么让你掏钱的。',
    episodes: [
      ['anchoring', '第一个数字说了算', 'Anchoring'],
      ['loss', '亏 100 块比赚 100 块更难受', 'Loss Aversion'],
      ['herd', '大家都买，我也买', 'Herd Behavior'],
      ['sunk', '已经花了的钱，别再想了', 'The Sunk Cost Trap'],
    ],
  },
  {
    id: 'trade', theme: 'history', level: 3,
    title: '改变世界的贸易', en: 'Trade That Changed the World',
    desc: '丝绸之路、香料、东印度公司、集装箱。贸易是怎么塑造今天的世界的。',
    episodes: [
      ['silk', '丝绸之路上到底卖什么', 'What Was Sold on the Silk Road'],
      ['spice', '为了香料打仗', 'Wars for Spice'],
      ['company', '第一家「跨国公司」', 'The First Multinational'],
      ['container', '一个铁箱子改变了全球化', 'The Box That Changed Trade'],
    ],
  },
  {
    id: 'office', theme: 'work', level: 3,
    title: '看懂职场英文', en: 'Reading at Work',
    desc: '商务邮件、会议纪要、合同、年报。用真实文件学结构、学常用句。',
    episodes: [
      ['email', '一封商务邮件长什么样', 'Anatomy of a Business Email'],
      ['minutes', '会议纪要：美联储是怎么开会的', 'Reading Meeting Minutes'],
      ['contract', '合同里最重要的几条', 'Key Clauses in a Contract'],
      ['annual', '年报：看懂一家公司', 'Reading an Annual Report'],
    ],
  },
];

// ---------- 单篇 ----------
const SINGLES = [
  // 简单英文版（正文里写 easyOf: 原文 id，阅读页会互相链接）
  ['math-bayes-easy', 'math', 1, '查出阳性，你真的得病了吗？（简单英文版）', 'A Positive Test: Are You Really Sick? (Easy English)', '', 600],
  ['phys-moon-easy', 'physics', 1, '月亮其实一直在往下掉（简单英文版）', 'The Moon Is Falling (Easy English)', '', 600],
  ['gt-dominance-easy', 'business', 2, '为什么聪明人会集体做蠢事（简单英文版）', 'Why Smart People Make Bad Choices Together (Easy English)', '', 600],
  ['life-midgley-easy', 'people', 2, '一个人，两项「安全」的发明（简单英文版）', 'One Man, Two “Safe” Inventions (Easy English)', '', 600],
  ['procrastination', 'psychology', 3, '为什么你总是拖到最后一天？', 'Why Do You Always Wait Until the Last Day?', '', 600],
  ['sleep-memory', 'biology', 3, '熬夜以后，背的单词为什么记不住？', 'Why Words Don’t Stick After an All-Nighter', '', 600],
  ['titanic', 'history', 3, '泰坦尼克号的救生艇为什么只够一半的人？', 'Why the Titanic Had Lifeboats for Only Half', '', 600],
  ['miranda', 'law', 3, '「你有权保持沉默」是从哪来的？', 'Where Does “You Have the Right to Remain Silent” Come From?', '', 600],
  ['milk-tea', 'business', 2, '为什么奶茶店总是开在一起？', 'Why Do Bubble Tea Shops Open Next to Each Other?', '', 600],
  ['aud-cny', 'business', 3, '澳元换人民币，汇率为什么天天在变？', 'Why Does the Australian Dollar Keep Moving?', '', 600],
  ['queues', 'society', 2, '网红店门口为什么总在排队？', 'Why Is There Always a Line Outside That Shop?', '', 600],
  ['luckin-case', 'business', 3, '瑞幸造过假，为什么还有人投？', 'Why Do Investors Still Back Luckin?', '', 1200],
  ['news-hard-1', 'news', 4, '各国央行为什么同时加息', 'Why Central Banks Raised Rates Together', '原汁原味的真实新闻。', 1100],
  ['coffee', 'business', 2, '一杯咖啡的价格里藏着什么', "What's Inside the Price of Coffee", '从农场到咖啡店，每一块钱去了哪里。', 650],
  ['nokia', 'business', 3, '诺基亚是怎么输掉的', 'How Nokia Lost', '一家巨头的十年。', 900],
  ['copyright', 'law', 3, '版权到底保护什么', 'What Copyright Actually Protects', '想法不受保护，表达才受保护。', 800],
  ['cities', 'society', 3, '为什么大城市越来越贵', 'Why Big Cities Keep Getting Expensive', '房价、工作和人。', 850],
];

// ---------- 把上面的数据整理成统一的文章列表 ----------
const ARTICLES = {};

function wordsToMinutes(words) { return Math.max(1, Math.round(words / 150)); }

SERIES.forEach(s => {
  s.episodes = s.episodes.map(([id, title, en], i) => {
    const words = 450 + ((i * 137) % 400);
    ARTICLES[id] = {
      id, title, en, theme: s.theme, level: s.level, series: s.id, ep: i + 1,
      words, minutes: wordsToMinutes(words),
      summary: '',
    };
    return id;
  });
});

SINGLES.forEach(([id, theme, level, title, en, summary, words]) => {
  ARTICLES[id] = { id, theme, level, title, en, summary, words, minutes: wordsToMinutes(words) };
});

// 给一篇文章装上真正的正文（js/content/ 里的每个文件调用它）。字数和阅读时间按正文自动算
function addContent(id, body) {
  const a = ARTICLES[id];
  a.body = body;
  a.words = body.paragraphs.filter(Array.isArray).flat().concat(body.paragraphs.filter(p => Array.isArray(p.box)).flatMap(p => p.box))
    .map(s => s[0]).join(' ').split(/\s+/).length;
  a.minutes = Math.max(1, Math.round(a.words / 130));
  // 「中文为主」的文章按汉字算：大约每分钟 400 字
  if (body.cn) a.minutes = Math.max(1, Math.round(body.paragraphs.map(p => typeof p === 'string' ? p : p.box || '').join('').length / 400));
  if (body.summary) a.summary = body.summary;
  // 卡片缩略图：文中第一张照片（示意图标了 thumb: false 的不算）
  const photo = body.paragraphs.find(p => p.img && p.img.thumb !== false);
  if (photo) a.thumb = photo.img.src;
}

