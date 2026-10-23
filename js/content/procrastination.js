// 单篇 · 心理。新格式（中英一对一对，三档都能读）
addContent('procrastination', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "周日晚上": "Sunday night", "周末": "weekend", "雅思": "IELTS", "作文": "essay",
    "心理学家": "psychologists", "经济学家": "economists", "感受": "feelings", "思想实验": "thought experiment",
    "交易": "deal", "诱惑": "temptation", "吸引力": "pull", "分数": "score",
    "回报": "reward", "痛苦": "pain", "塞壬": "Sirens", "海妖": "sea monster",
    "歌声": "singing", "水手": "sailors", "礁石": "rocks", "船员": "crew",
    "蜂蜡": "beeswax", "耳朵": "ears", "命令": "orders", "桅杆": "mast",
    "桨": "oar", "船": "ship", "朋友": "friend", "口语练习课": "speaking class",
    "游戏": "game", "手机": "phone", "代价": "cost", "绳子": "ropes",
    "截止日期": "deadline", "参与者": "participants", "错误": "error", "论文": "paper",
    "研究者": "researchers", "研究": "study", "实验": "experiment", "结论": "conclusion",
    "定论": "proof", "面子": "pride", "老师": "teacher", "咖啡": "coffee",
    "考试": "exam", "决定": "decision", "奥德修斯": "Odysseus", "荷马": "Homer",
    "奥德赛": "Odyssey", "美分": "cents", "美元": "dollar", "例子": "example",
  },
  summary: '为什么「明天的我」总被寄予厚望？顺便看一个有名的心理学实验是怎么翻车的。',
  sayTitle: 'Say it in English',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲真实研究，事实来源见下',
    facts: [
      ['Ariely & Wertenbroch (2002). Procrastination, Deadlines, and Performance. Psychological Science（Duke 学者页面）', 'https://scholars.duke.edu/publication/810365'],
      ['Hyndman & Bisin：对这项研究的重复实验（结果没能重复出来）', 'https://bpb-us-e1.wpmucdn.com/wp.nyu.edu/dist/c/16384/files/2025/04/ssrn-5053636.pdf'],
      ['Association for Psychological Science：Self-imposed deadlines don’t stop procrastination', 'https://www.psychologicalscience.org/news/self-imposed-deadlines-dont-stop-procrastination-heres-what-might.html'],
    ],
  },
  guide: '读完你会知道：① 拖延不是懒，而是大脑对「现在」和「以后」的估价不一样（现时偏差）；② 对付它最有用的办法是「预先承诺」，把自己的后路提前堵上；③ 一个很有名的截止日期实验，后来别人重做没做出来。这件事本身也是一课：一项研究不等于定论。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['It is Sunday night.', '周日晚上。'],
      ['You planned to write two IELTS essays this weekend, and you have written none.', '你本来计划这个周末写两篇雅思作文，结果一篇都没写。'],
      ['You tell yourself, “Tomorrow I’ll start early.”', '你对自己说：「明天我早点开始。」'],
      ['You have said this before.', '这句话你以前也说过。'],
      ['So why does the “tomorrow you” always seem so much more reliable than the “today you”?', '那为什么「明天的你」总显得比「今天的你」靠谱得多？'],
    ],

    { h: '1. Present bias', zh: '1. 现时偏差' },
    [
      ['Psychologists and economists call this [[present bias|现时偏差]].', '心理学家和经济学家把这叫作现时偏差{present bias}。'],
      ['It means we give too much weight to how we feel right now, and too little to how we will feel later.', '意思是：我们太看重自己此刻的感受，又太不在乎以后的感受。'],
    ],
    {
      box: [
        ['Try this thought experiment.', '做个思想实验。'],
        ['Would you rather have 100 yuan today or 110 yuan in a week? Many people take the 100 yuan now.', '你想要今天的 100 元，还是一周后的 110 元？很多人会拿今天的 100 元。'],
        ['Now: 100 yuan in 52 weeks, or 110 yuan in 53 weeks? Most people happily wait the extra week.', '换一下：52 周后的 100 元，还是 53 周后的 110 元？大多数人会很乐意多等一周。'],
        ['Look closely: the two choices are really the same deal.', '仔细看：这两组选择其实是同一笔交易。'],
        ['In both, you wait one extra week to get 10 extra yuan.', '两组都是：多等一周，多拿 10 元。'],
        ['A perfectly logical person would choose the same way both times.', '一个完全理性的人，两次应该做出同样的选择。'],
      ],
    },
    [
      ['So why do so many people switch?', '那为什么这么多人会改变选择？'],
      ['When both choices are far away, we compare them calmly: one more week for 10 more yuan sounds fair, so we wait.', '两个选项都很遥远的时候，我们会冷静地比较：多等一周换 10 块，挺划算，那就等。'],
      ['But when one choice is “right now”, getting something immediately feels much bigger than it really is.', '可一旦其中一个是「马上就能拿到」，立刻到手的感觉就会被放大，显得比实际更诱人。'],
      ['That extra pull of “now” is exactly what present bias means.', '「现在」多出来的这股吸引力，正是现时偏差的意思。'],
    ],
    [
      ['Writing an essay is the same problem turned around.', '写作文是同一个问题，只是方向反过来。'],
      ['The pain comes now, but the reward, a better score, comes weeks later.', '痛苦在现在，回报（更高的分数）在几周以后。'],
      ['So the present you keeps passing the job to the future you, who is imagined as calmer, more rested and more disciplined.', '所以现在的你总把活推给未来的你，而你想象中的未来的你更冷静、更有精神、也更自律。'],
    ],

    { h: '2. Precommitment', zh: '2. 预先承诺' },
    [
      ['If you know your future self will be tempted, you can make a [[precommitment|预先承诺]]: a choice now that limits your choices later.', '如果你知道未来的自己会经不住诱惑，就可以做一个预先承诺{precommitment}：现在就做一个决定，把以后的选择提前限制住。'],
      ['The oldest example is from Homer’s Odyssey.', '最古老的例子来自荷马的《奥德赛》。'],
      ['The Sirens were creatures whose beautiful singing made sailors steer toward them, until their ships crashed on the rocks.', '塞壬是一种海妖，她们的歌声太美，水手听了就会把船往她们那边开，最后撞上礁石。'],
      ['Odysseus wanted to hear the song, but he knew that once he heard it, he would want to turn the ship toward the rocks too.', '奥德修斯想听这首歌，但他知道，自己一旦听到，也会想把船开向礁石。'],
    ],
    [
      ['So before they reached the Sirens, he made a plan in two parts.', '所以在船靠近塞壬之前，他定了一个分两步的计划。'],
      ['First, his crew filled their ears with beeswax, so they could not hear the song, and could not hear his orders either.', '第一步，让船员用蜂蜡把耳朵堵上。这样他们听不到歌声，也听不到他的命令。'],
      ['Second, he had himself tied tightly to the mast, so his hands could not reach the steering oar.', '第二步，让人把他牢牢绑在桅杆上，这样他的手够不到掌舵的桨。'],
      ['When the singing began, he shouted at the crew to untie him and turn toward the rocks.', '歌声响起时，他冲船员大喊，让他们给他松绑、把船开向礁石。'],
      ['Nobody heard him, and he could not do it himself, so the ship sailed safely past.', '没有人听得见，他自己也动不了，于是船安全地开了过去。'],
    ],
    { img: {"src": "images/sirens.jpg", "alt": "Painting of Ulysses tied to the mast while Sirens circle his ship", "caption": "Ulysses and the Sirens, John William Waterhouse, 1891 (Ulysses is the Latin name for Odysseus)", "zh": "沃特豪斯《尤利西斯与塞壬》（1891）：被绑在桅杆上的就是奥德修斯（尤利西斯是他的拉丁名）", "credit": "Painting: John William Waterhouse · Public domain", "link": "https://commons.wikimedia.org/wiki/File:John_William_Waterhouse_-_Ulysses_and_the_Sirens_(1891).jpg"} },
    [
      ['The “present” Odysseus, who would be tempted later, could not undo what the earlier, calmer Odysseus had decided.', '后来那个经不住诱惑的「当下的」奥德修斯，推翻不了之前那个冷静的奥德修斯已经做好的决定。'],
      ['That is the whole idea of precommitment.', '这就是预先承诺的全部意思。'],
    ],
    [
      ['Modern versions are less dramatic.', '现代版就没那么戏剧化了。'],
      ['You can tell a friend you will send them your essay by Tuesday, book a speaking practice you must pay for even if you skip it, or delete a game from your phone during exam month.', '你可以跟朋友说周二前把作文发给他，约一节不去也要付钱的口语练习课，或者考试那个月把游戏从手机上删掉。'],
      ['Each one works like the ropes on the mast: it makes doing nothing more costly, or even impossible, for the future you.', '每一种做法，都像桅杆上的绳子：让未来的你「什么都不做」的代价变大，甚至做不到。'],
    ],

    { h: '3. The famous experiment that didn’t hold up', zh: '3. 那个没站住的有名实验' },
    [
      ['In 2002, Dan Ariely and Klaus Wertenbroch published a well-known study on deadlines.', '2002 年，丹·艾瑞里和克劳斯·韦滕布罗赫发表了一项很有名的截止日期研究。'],
      ['People proofread three texts, earning ten cents for each error they found and losing a dollar for each day they were late.', '参与者要校对三篇文章，每找出一个错误赚 10 美分，每迟交一天扣 1 美元。'],
      ['The paper reported that people who got evenly spaced deadlines did best, people with one final deadline did worst, and people who set their own deadlines were in between.', '论文的结论是：被安排了均匀截止日期的人做得最好，只有一个最终期限的人做得最差，自己定截止日期的人在中间。'],
    ],
    [
      ['The study was cited for years.', '这项研究被引用了很多年。'],
      ['But when other researchers recently tried to [[replicate|重复验证]] it, which means running the same experiment again, they did not get the same results.', '但最近别的研究者尝试重复验证{replicate}它，也就是把同样的实验再做一遍，结果没有得出同样的结论。'],
      ['Evenly spaced deadlines did not stand out the way the original paper said.', '均匀的截止日期，并没有像原论文说的那样明显更好。'],
    ],
    {
      box: [
        ['The lesson is not that deadlines are useless.', '这件事的教训，不是「截止日期没用」。'],
        ['It is that one study, however famous, is not proof.', '而是：一项研究，不管多有名，都不等于定论。'],
        ['Present bias itself is supported by many studies; the question is which tricks really beat it.', '现时偏差本身有很多研究支持；还没定论的是，哪些办法真的能打败它。'],
      ],
    },

    { h: '4. Use it this week', zh: '4. 这周就能用' },
    [
      ['Turn one big deadline into small ones that someone else can see.', '把一个大截止日期，拆成几个别人看得见的小截止日期。'],
      ['For example: one IELTS essay to a friend by Tuesday night, another by Friday night.', '比如：周二晚上前把一篇雅思作文发给朋友，周五晚上前再发一篇。'],
      ['Then make skipping cost something you care about, even if it is just your pride.', '再让「跳过」付出一点你在乎的代价，哪怕只是面子。'],
    ],
  ],
  sayIt: [
    ['I always think future me will be more disciplined. That’s present bias.', '我总以为未来的自己会更自律。这就是现时偏差。'],
    ['I’ve told my friend I’ll send her the essay by Tuesday, so I can’t back out now.', '我已经跟朋友说了周二前把作文发给她，现在没法反悔了。'],
  ],
  quiz: [
    {
      q: ['Which choice shows [[present bias|现时偏差]] most clearly?', '哪个选择最明显地体现了现时偏差{present bias}？'],
      opts: [
        ['Choosing 100 yuan today over 110 yuan next week, but 110 yuan in 53 weeks over 100 yuan in 52 weeks.', '今天的 100 元和下周的 110 元选前者，52 周后的 100 元和 53 周后的 110 元却选后者'],
        ['Always choosing the bigger amount.', '永远选钱多的那个'],
        ['Always choosing the money that comes sooner.', '永远选来得早的那个'],
      ],
      a: 0,
      e: ['The wait is the same one week, but people only refuse to wait when the choice involves “now”.', '多等的都是一周，人们只在牵涉「现在」的时候不愿意等。'],
    },
    {
      q: ['Why did Odysseus ask his crew to tie him to the mast?', '奥德修斯为什么让船员把他绑在桅杆上？'],
      opts: [['To punish himself.', '为了惩罚自己'], ['To stop his future self from giving in to the Sirens.', '为了不让未来的自己被塞壬的歌声诱惑'], ['Because the ship was sinking.', '因为船要沉了']],
      a: 1,
      e: ['It is a [[precommitment|预先承诺]]: a decision now that limits his choices later.', '这是一种预先承诺{precommitment}：现在做决定，提前限制以后的选择。'],
    },
    {
      q: ['What happened when researchers tried to [[replicate|重复验证]] the 2002 deadline study?', '研究者尝试重复验证{replicate} 2002 年那项截止日期研究时，发生了什么？'],
      opts: [['They got the same results.', '得出了同样的结果'], ['They did not get the same results.', '没有得出同样的结果'], ['They were not allowed to try.', '不被允许做']],
      a: 1,
      e: ['Evenly spaced deadlines did not stand out the way the original paper said, which is why one study is not proof.', '均匀截止日期并没有像原论文说的那样明显更好，所以一项研究不等于定论。'],
    },
  ],
  questions: [
    {
      q: ['What is one precommitment you could make for your next exam?', '为了下一次考试，你可以做一个什么样的预先承诺？'],
      a: [
        ['There is no single right answer.', '没有标准答案。'],
        ['A good precommitment is specific, has a date, and makes skipping cost something.', '好的预先承诺要具体、有日期，而且让「跳过」付出代价。'],
        ['For example: “I’ll send my teacher two essays by Friday, or I’ll buy her a coffee.”', '比如：「周五前把两篇作文发给老师，做不到就请她喝咖啡。」'],
      ],
    },
  ],
  words: {
    reliable:      ['/rɪˈlaɪəbl/', '可靠的，靠谱的'],
    present:       ['/ˈpreznt/', '现在的；present bias 现时偏差'],
    bias:          ['/ˈbaɪəs/', '偏差，偏见'],
    weight:        ['/weɪt/', '分量；give weight to 看重'],
    disciplined:   ['/ˈdɪsəplɪnd/', '自律的'],
    precommitment: ['/ˌpriːkəˈmɪtmənt/', '预先承诺'],
    tempted:       ['/ˈtemptɪd/', '受诱惑的'],
    homer:         ['/ˈhoʊmər/', '荷马（古希腊诗人）'],
    odyssey:       ['/ˈɑːdəsi/', '《奥德赛》'],
    odysseus:      ['/əˈdɪsiəs/', '奥德修斯（《奥德赛》主角）'],
    sirens:        ['/ˈsaɪrənz/', '塞壬（用歌声引诱水手的海妖）'],
    steer:         ['/stɪr/', '驾驶（船）'],
    mast:          ['/mæst/', '桅杆'],
    beeswax:       ['/ˈbiːzwæks/', '蜂蜡'],
    oar:           ['/ɔːr/', '桨；steering oar 舵桨'],
    untie:         ['/ʌnˈtaɪ/', '解开，松绑'],
    undo:          ['/ʌnˈduː/', '撤销，推翻'],
    creatures:     ['/ˈkriːtʃərz/', '生物，怪物'],
    crew:          ['/kruː/', '船员'],
    dramatic:      ['/drəˈmætɪk/', '戏剧性的'],
    ariely:        ['', '艾瑞里（行为经济学家）'],
    proofread:     ['/ˈpruːfriːd/', '校对'],
    evenly:        ['/ˈiːvnli/', '均匀地'],
    spaced:        ['/speɪst/', '间隔开的'],
    cited:         ['/ˈsaɪtɪd/', '被引用'],
    replicate:     ['/ˈreplɪkeɪt/', '重复（实验），复现'],
    proof:         ['/pruːf/', '证明，定论'],
    pride:         ['/praɪd/', '面子，自尊'],
    'back':        ['/bæk/', 'back out 反悔，退出'],
  },
});
