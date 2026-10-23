// 单篇 · 社会。新格式（中英一对一对，三档都能读）
addContent('queues', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "奶茶店": "tea shops", "长队": "long line", "队伍": "line", "喜茶": "Heytea",
    "上海": "Shanghai", "报道": "reports", "黄牛": "scalpers", "店家": "shop",
    "杯数": "cups", "心理学家": "psychologists", "好评": "review", "经济学家": "economists",
    "信息": "information", "信心": "confidence", "创始人": "founder", "顾客": "customers",
    "软肋": "weak point", "常客": "regulars", "理由": "reasons", "茶": "tea",
    "中国日报": "China Daily", "公司": "company", "杯": "cup",
  },
  summary: '2017 年喜茶在上海开店，最长排到 7 个小时，有人花 100 元找人代买一杯二十几块的茶。人为什么会跟着排？',
  sayTitle: 'Say it in English',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲真实事件，事实来源见下',
    facts: [
      ['China Daily：喜茶相关报道（2018-01，排队时长和黄牛代买）', 'https://www.chinadaily.com.cn/a/201801/01/WS5a49a88ea31008cf16da47c5_4.html'],
      ['The Economist：A new leaf（喜茶的排队和限购）', 'https://econ.st/2HcqVSG'],
    ],
  },
  guide: '读完你会知道：① 「社会认同」：拿不准的时候，我们会照着别人做；② 「信息瀑布」：每个人都只看前面的人，于是一条长队会越来越长；③ 排队对店家也不全是好事，喜茶的创始人后来把排队称作公司的「阿喀琉斯之踵」。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['You walk past two tea shops.', '你路过两家奶茶店。'],
      ['One has a long line outside; the other is empty.', '一家门口排着长队，另一家空空的。'],
      ['You have never tried either. Which one do you trust?', '两家你都没喝过。你更相信哪一家？'],
      ['Most people pick the one with the line, sometimes without thinking about it at all.', '大多数人会选排队的那家，有时候想都不想。'],
    ],
    { img: {"src": "images/iphone-line.jpg", "alt": "People lining up outside a phone store", "caption": "Lining up for the first iPhone, San Francisco, 2007", "zh": "2007 年旧金山，排队买第一代 iPhone 的人", "credit": "Photo: Jennifer Woodard Maderazo · CC BY 2.0", "link": "https://commons.wikimedia.org/wiki/File:Line_outside_AT%26T_store_before_iPhone_launch,_San_Francisco,_2007.jpg"} },

    { h: '1. A real line', zh: '1. 一条真实的长队' },
    [
      ['When Heytea opened its first Shanghai store in 2017, people lined up for hours.', '2017 年喜茶在上海开第一家店时，人们排了好几个小时的队。'],
      ['Reports at the time described waits of three to five hours, and China Daily said some people waited up to seven.', '当时的报道说要排三到五个小时，《中国日报》说有人排了长达七个小时。'],
      ['Scalpers joined in: some people paid around 100 yuan for a drink that cost about 25 yuan, just to skip the queue.', '黄牛也来了：有人花 100 元左右，买一杯标价 25 元上下的茶，只为不用排队。'],
      ['The shop limited how many cups each person could buy to stop them.', '店家为了对付黄牛，限制了每人能买的杯数。'],
    ],

    { h: '2. Social proof', zh: '2. 社会认同' },
    [
      ['Why do we trust the busy shop?', '我们为什么相信人多的店？'],
      ['Psychologists call it [[social proof|社会认同]]: when we are not sure what to do, we copy what other people are doing.', '心理学家把这叫作社会认同{social proof}：拿不准的时候，我们会照着别人做。'],
      ['A long line feels like a review written by everyone in it: “This must be good.”', '一条长队，就像队伍里每个人一起写的好评：「这家肯定好喝。」'],
    ],

    { h: '3. The information cascade', zh: '3. 信息瀑布' },
    [
      ['The strange part is that the people in line may know no more than you.', '奇怪的是，队伍里的人可能并不比你知道得多。'],
      ['The first few people joined for their own reasons; everyone after them joined partly because of the line.', '最前面几个人排队有自己的理由；后面的人排，一部分只是因为前面有人在排。'],
      ['Economists call this an [[information cascade|信息瀑布]]: each person follows the people ahead, so the line grows even if nobody has new information.', '经济学家把这叫作信息瀑布{information cascade}：每个人都跟着前面的人，于是即使没人掌握新的信息，队伍也会越来越长。'],
    ],
    {
      box: [
        ['A cascade can also stop suddenly.', '瀑布也可能突然停住。'],
        ['If a few people say the tea is not worth the wait, the crowd’s confidence can disappear as fast as it came.', '只要有几个人说「不值得排」，大家的信心可能来得快、去得也快。'],
      ],
    },

    { h: '4. Not all good news for the shop', zh: '4. 对店家也不全是好事' },
    [
      ['Some people accused Heytea of [[“hunger marketing”|饥饿营销]], creating lines on purpose, which the company denied.', '有人指责喜茶在搞饥饿营销{“hunger marketing”}，故意制造排队，公司否认了。'],
      ['Long lines also annoyed customers and invited scalpers.', '长队也惹恼了顾客，还招来了黄牛。'],
      ['Its founder, Nie Yunchen, later called the lines the company’s “Achilles’ heel”, its weak point.', '创始人聂云宸后来把排队称作公司的「阿喀琉斯之踵」，也就是它的软肋。'],
    ],
  ],
  sayIt: [
    ['A long line is a kind of social proof.', '长队本身就是一种社会认同。'],
    ['People join the queue partly because there’s already a queue.', '人们排队，一部分只是因为已经有人在排。'],
  ],
  quiz: [
    {
      q: ['What is [[social proof|社会认同]]?', '什么是社会认同{social proof}？'],
      opts: [['Proving your identity with an ID card.', '用身份证证明身份'], ['Copying what others do when we are not sure.', '拿不准时照着别人做'], ['Writing online reviews.', '在网上写评价']],
      a: 1,
      e: ['A long line works like a review from everyone in it.', '一条长队，就像队伍里每个人写的好评。'],
    },
    {
      q: ['In an [[information cascade|信息瀑布]], why does the line keep growing?', '在信息瀑布{information cascade}里，队伍为什么会越来越长？'],
      opts: [['Everyone has tasted the tea before.', '每个人都喝过这家的茶'], ['Each person follows the people ahead, even without new information.', '每个人都跟着前面的人，哪怕没有新信息'], ['The shop pays people to wait.', '店家花钱请人排队']],
      a: 1,
      e: ['People partly join because others already joined.', '人们排队，一部分只是因为别人已经在排。'],
    },
    {
      q: ['Why did Heytea limit how many cups each person could buy?', '喜茶为什么限制每人能买的杯数？'],
      opts: [['To stop scalpers.', '为了对付黄牛'], ['Because it ran out of cups.', '因为杯子不够了'], ['To make the tea healthier.', '为了让茶更健康']],
      a: 0,
      e: ['Scalpers were reselling a 25-yuan drink for about 100 yuan.', '黄牛把一杯 25 元的茶炒到 100 元左右。'],
    },
  ],
  questions: [
    {
      q: ['Have you ever joined a line just because it was long? How would you decide next time?', '你有没有因为队伍长就去排过？下次你会怎么判断？'],
      a: [
        ['There is no single right answer.', '没有标准答案。'],
        ['One way is to ask what the people in line actually know: are they regulars, or did they also just see the line?', '一个办法是想想：队伍里的人到底知道什么？他们是常客，还是也只是看到有人在排？'],
      ],
    },
  ],
  words: {
    heytea:        ['', '喜茶（茶饮品牌）'],
    scalpers:      ['/ˈskælpərz/', '黄牛（倒卖的人）'],
    queue:         ['/kjuː/', '队伍；排队'],
    social:        ['/ˈsoʊʃl/', '社会的；social proof 社会认同'],
    proof:         ['/pruːf/', '证明；social proof 社会认同'],
    review:        ['/rɪˈvjuː/', '评价，好评'],
    cascade:       ['/kæˈskeɪd/', '瀑布；information cascade 信息瀑布'],
    confidence:    ['/ˈkɑːnfɪdəns/', '信心'],
    accused:       ['/əˈkjuːzd/', '指责'],
    hunger:        ['/ˈhʌŋɡər/', '饥饿；hunger marketing 饥饿营销'],
    annoyed:       ['/əˈnɔɪd/', '惹恼'],
    founder:       ['/ˈfaʊndər/', '创始人'],
    achilles:      ['/əˈkɪliːz/', '阿喀琉斯；Achilles’ heel 致命弱点，软肋'],
    heel:          ['/hiːl/', '脚后跟；Achilles’ heel 软肋'],
    regulars:      ['/ˈreɡjələrz/', '常客'],
  },
});
