// 单篇 · 经济。新格式（中英一对一对，三档都能读）
addContent('milk-tea', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "奶茶店": "bubble tea shops", "城市": "city", "街角": "corner", "对手": "rival",
    "经济学家": "economist", "海滩": "beach", "冰淇淋": "ice cream", "游客": "swimmers",
    "价格": "price", "生意": "business", "顾客": "customers", "竞争者": "competitors",
    "竞争": "competition", "位置": "position", "手机店": "phone shops", "婚纱店": "wedding dress shops",
    "加油站": "petrol stations", "火锅店": "hotpot restaurants", "火锅": "hotpot", "街": "street",
    "摊": "stand", "中间": "middle", "地方": "place",
  },
  summary: '一条街上三家奶茶店挨着开，不是老板们傻。一个 1929 年的经济学模型，用海滩上的冰淇淋摊就讲清楚了。',
  sayTitle: 'Say it in English',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲经济学模型',
    facts: [
      ['Hotelling, H. (1929). Stability in Competition. The Economic Journal, 39(153), 41–57', 'https://doi.org/10.2307/2224214'],
    ],
  },
  guide: '读完你会知道：① 一个 1929 年的模型（霍特林模型）解释了为什么竞争对手总爱挤在一起；② 挤在一起对店家好，对顾客却不一定最好；③ 另一个原因叫「集聚效应」：店扎堆，顾客反而更愿意来。最后有一道小题，让你自己算算顾客要走多远。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['Walk down a busy street in any Chinese city and you may see three bubble tea shops side by side.', '走在中国随便哪座城市的热闹街上，你可能会看到三家奶茶店挨着开。'],
      ['It looks strange. Wouldn’t each shop do better on its own corner, far from the others?', '这看起来很奇怪：每家店各占一个街角、离对手远一点，不是更好吗？'],
      ['An American economist named Harold Hotelling explained this in 1929, using an ice cream beach.', '1929 年，一位叫哈罗德·霍特林的美国经济学家，用一片卖冰淇淋的海滩解释了这件事。'],
    ],
    { img: {"src": "images/milk-tea-street.jpg", "alt": "A row of shops on a street in Changsha, including two tea chains side by side", "caption": "Mixue and Goodme on the same street, Changsha, 2025", "zh": "长沙县的一条街：蜜雪冰城和古茗开在同一排", "credit": "Photo: Huangdan2060 · CC BY 4.0", "link": "https://commons.wikimedia.org/wiki/File:Mixue_Ice_Cream_%26_Tea,_Goodme_Bubble_Tea_in_Changsha_20250218.jpg"} },

    { h: '1. Two ice cream sellers on a beach', zh: '1. 海滩上的两个冰淇淋摊' },
    [
      ['Imagine a straight beach, one kilometer long, with swimmers spread evenly along it.', '想象一片笔直的海滩，一公里长，游客均匀地分布在沙滩上。'],
      ['Two people sell the same ice cream at the same price, so each swimmer walks to the nearest seller.', '两个人卖一模一样的冰淇淋，价格也一样，所以每个游客都会走去离自己最近的那个摊。'],
    ],
    [
      ['If the sellers stand at the two quarter points, each one gets half the beach.', '如果两个摊分别站在四分之一和四分之三的位置，各分到一半海滩的生意。'],
      ['But then one seller moves a little toward the middle.', '可这时，其中一个摊往中间挪了一点。'],
      ['Now it is closer to more swimmers and wins some of the other seller’s customers.', '它离更多游客近了，抢走了对方的一部分顾客。'],
      ['The other seller moves too, and soon both are standing back to back in the middle of the beach.', '另一个摊也跟着挪，很快，两个摊就背靠背站在了海滩正中间。'],
    ],
    {
      box: [
        ['This result is called [[Hotelling’s law|霍特林定律]]: competitors who sell similar things tend to end up very close together.', '这个结论叫霍特林定律{Hotelling’s law}：卖相似东西的竞争者，最后往往会挤到一起。'],
        ['Neither seller can gain by moving away, so they stay put.', '谁先离开中间谁就吃亏，所以两个摊都待着不动。'],
      ],
    },

    { h: '2. Good for the shops, worse for you', zh: '2. 对店家好，对你未必' },
    [
      ['Here is the twist: the middle is not the best place for the swimmers.', '反转在这里：中间并不是对游客最好的位置。'],
      ['When the sellers stood at the quarter points, nobody had to walk more than 250 meters.', '两个摊站在四分之一位置时，没有人要走超过 250 米。'],
      ['With both in the middle, people at the ends now walk 500 meters.', '两个摊都挤到中间以后，海滩两头的人要走 500 米。'],
      ['The competition made the shops’ positions safer, but the customers’ walk longer.', '竞争让店家的位置更安全了，却让顾客走的路更长了。'],
    ],

    { h: '3. Another reason: clusters attract crowds', zh: '3. 另一个原因：扎堆反而招人' },
    [
      ['Real streets add one more reason, called the [[agglomeration effect|集聚效应]].', '真实的街道还有另一个原因，叫集聚效应{agglomeration effect}。'],
      ['When many tea shops gather in one place, people know they will find a choice there, so more of them come.', '很多奶茶店聚在一个地方，大家知道去那儿一定有得挑，所以来的人更多。'],
      ['The same thing explains why phone shops, wedding dress shops and car dealers often line up on the same street.', '这也解释了为什么手机店、婚纱店、汽车 4S 店常常开在同一条街上。'],
    ],
  ],
  sayIt: [
    ['It’s Hotelling’s law: competitors end up right next to each other.', '这就是霍特林定律：竞争对手最后都挤在一起。'],
    ['Clustering brings in more customers for everyone.', '扎堆能给每家店都带来更多客人。'],
  ],
  quiz: [
    {
      q: ['On Hotelling’s beach, where do the two ice cream sellers end up?', '在霍特林的海滩上，两个冰淇淋摊最后会在哪里？'],
      opts: [['At the two ends of the beach.', '海滩两头'], ['Back to back in the middle.', '背靠背在正中间'], ['Wherever the most shade is.', '哪里阴凉在哪里']],
      a: 1,
      e: ['Each one keeps moving toward the middle to win more customers, until neither can gain by moving.', '每个摊都往中间挪去抢客人，直到谁挪都占不到便宜。'],
    },
    {
      q: ['The beach is 1,000 meters long. With both sellers in the middle, how far does someone at the very end walk?', '海滩长 1,000 米。两个摊都在正中间时，站在最边上的人要走多远？'],
      opts: [['250 meters', '250 米'], ['500 meters', '500 米'], ['1,000 meters', '1,000 米']],
      a: 1,
      e: ['The middle is 500 meters from each end.', '正中间离两头都是 500 米。'],
    },
    {
      q: ['What is the [[agglomeration effect|集聚效应]]?', '什么是集聚效应{agglomeration effect}？'],
      opts: [['Shops close when too many open nearby.', '附近开太多店就会倒闭'], ['Shops that gather together attract more customers.', '店聚在一起反而能吸引更多顾客'], ['Prices always fall to zero.', '价格永远会跌到零']],
      a: 1,
      e: ['People go where they know they will find a choice.', '大家会去知道「有得挑」的地方。'],
    },
  ],
  questions: [
    {
      q: ['Why do you think petrol stations or hotpot restaurants often sit right next to each other?', '你觉得加油站或者火锅店为什么常常挨着开？'],
      a: [
        ['There is no single right answer.', '没有标准答案。'],
        ['Hotelling’s law explains part of it: no one wants to give the busy spot to a rival.', '霍特林定律能解释一部分：谁都不想把热闹的位置让给对手。'],
        ['The agglomeration effect explains the rest: a street known for hotpot draws hotpot lovers.', '剩下的可以用集聚效应解释：一条出了名的火锅街，自然会吸引爱吃火锅的人。'],
      ],
    },
  ],
  words: {
    bubble:        ['/ˈbʌbl/', '泡泡；bubble tea 奶茶（珍珠奶茶）'],
    harold:        ['', '哈罗德（人名）'],
    hotelling:     ['/hoʊˈtelɪŋ/', '霍特林（经济学家）；Hotelling’s law 霍特林定律'],
    evenly:        ['/ˈiːvnli/', '均匀地'],
    spread:        ['/spred/', '分布，散开'],
    quarter:       ['/ˈkwɔːrtər/', '四分之一'],
    'stay':        ['/steɪ/', 'stay put 待着不动'],
    put:           ['/pʊt/', 'stay put 待着不动'],
    agglomeration: ['/əˌɡlɑːməˈreɪʃn/', '集聚；agglomeration effect 集聚效应'],
    clusters:      ['/ˈklʌstərz/', '群，簇'],
    clustering:    ['/ˈklʌstərɪŋ/', '扎堆，聚集'],
    dealers:       ['/ˈdiːlərz/', '经销商'],
    shade:         ['/ʃeɪd/', '阴凉处'],
    hotpot:        ['/ˈhɑːtpɑːt/', '火锅'],
    petrol:        ['/ˈpetrəl/', '汽油；petrol station 加油站'],
    rival:         ['/ˈraɪvl/', '对手'],
  },
});
