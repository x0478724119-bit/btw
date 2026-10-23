// 单篇 · 金融。新格式（中英一对一对，三档都能读）。文中汇率是举例用的假设数字
addContent('aud-cny', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "学费": "tuition", "澳元": "Australian dollars", "人民币": "yuan", "汇率": "exchange rate",
    "课程": "course", "账单": "bill", "价格": "price", "菜价": "vegetable prices",
    "货币": "currency", "投资者": "investors", "银行": "banks", "债券": "bonds",
    "铁矿石": "iron ore", "煤": "coal", "天然气": "gas", "原材料": "raw materials",
    "出口商品": "export", "买家": "buyer", "矿企": "miners", "美元": "US dollar",
    "坏消息": "bad news", "经济": "economy", "风险": "risk", "中国": "China",
    "澳大利亚": "Australia", "全世界": "world", "家里": "family",
  },
  summary: '同样 4 万澳元的学费，汇率差一点，就差出一万多块人民币。汇率到底是被什么推着走的？',
  sayTitle: 'Say it in English',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲金融概念；文中汇率是为了好算举的例子，不是实时数据',
    facts: [
      ['Reserve Bank of Australia：Exchange rates（澳大利亚央行汇率页面）', 'https://www.rba.gov.au/statistics/frequency/exchange-rates.html'],
      ['Australian Government DFAT：Australia’s trade with China（中国是澳大利亚最大的贸易伙伴）', 'https://www.dfat.gov.au/geo/china'],
    ],
  },
  guide: '读完你会知道：① 汇率就是「一种钱用另一种钱标的价格」，跟菜价一样，由买的人和卖的人决定；② 推动澳元的三股力量：利率、铁矿石这类大宗商品、市场情绪；③ 为什么澳元常被叫作「商品货币」。中间有一道算学费的题，汇率是举例用的数字。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['Your university fees are 40,000 Australian dollars a year, and your family pays them in Chinese yuan.', '你一年的学费是 4 万澳元，家里用人民币来付。'],
      ['One month the rate is 4.7 yuan for one Australian dollar; a few months later it is 5.0.', '某个月汇率是 1 澳元换 4.7 元人民币；几个月后变成了 5.0。'],
      ['Nothing about your course changed, but the bill did.', '你的课程什么都没变，账单却变了。'],
    ],
    { img: {"src": "images/exchange-board.jpg", "alt": "A currency exchange counter with a board of rates, including AUD", "caption": "A currency exchange counter in London, 2025. AUD is the fourth line.", "zh": "2025 年伦敦的一个换汇柜台，第四行就是澳元（AUD）", "credit": "Photo: Bex Walton · CC BY 4.0", "link": "https://commons.wikimedia.org/wiki/File:Exchange_counter_Foreign_Exchange_News_-_2025-06-14.jpg"} },
    {
      box: [
        ['Do the math (example rates): 40,000 × 4.7 = 188,000 yuan; 40,000 × 5.0 = 200,000 yuan.', '算一算（举例用的汇率）：40,000 × 4.7 = 188,000 元；40,000 × 5.0 = 200,000 元。'],
        ['A change of just 0.3 in the rate means a difference of 12,000 yuan.', '汇率只差 0.3，学费就差了 12,000 元。'],
      ],
    },

    { h: '1. An exchange rate is just a price', zh: '1. 汇率就是一个价格' },
    [
      ['An [[exchange rate|汇率]] is the price of one currency in terms of another.', '汇率{exchange rate}就是用一种货币标出来的另一种货币的价格。'],
      ['Like the price of vegetables, it moves with [[supply and demand|供求]]: when more people want to buy Australian dollars, the price goes up.', '它跟菜价一样，随供求{supply and demand}变化：想买澳元的人多了，澳元就涨。'],
      ['So the real question is: what makes people want more or fewer Australian dollars?', '所以真正的问题是：什么让人们想要更多、或者更少的澳元？'],
    ],

    { h: '2. Force one: interest rates', zh: '2. 第一股力量：利率' },
    [
      ['Big investors move money to where it earns more.', '大投资者会把钱挪到赚得更多的地方。'],
      ['If Australia’s [[interest rates|利率]] rise compared with other countries, saving in Australian dollars becomes more attractive.', '如果澳大利亚的利率{interest rates}比别的国家涨得多，存澳元就更划算了。'],
      ['Investors buy Australian dollars to put them in Australian banks and bonds, and the price rises.', '投资者买进澳元，存进澳大利亚的银行、买澳大利亚的债券，澳元就涨了。'],
    ],

    { h: '3. Force two: iron ore', zh: '3. 第二股力量：铁矿石' },
    [
      ['Australia sells huge amounts of [[commodities|大宗商品]], raw materials like iron ore, coal and gas, to the rest of the world.', '澳大利亚向全世界卖出大量大宗商品{commodities}，也就是铁矿石、煤、天然气这类原材料。'],
      ['Iron ore is its biggest export, and China, which uses it to make steel, is its biggest customer.', '铁矿石是它最大的出口商品，而用铁矿石炼钢的中国，是它最大的买家。'],
      ['To pay Australian miners, buyers need Australian dollars.', '要付钱给澳大利亚的矿企，买家就得先换成澳元。'],
      ['So when China builds more and iron ore prices rise, demand for Australian dollars usually rises too.', '所以当中国大兴土木、铁矿石涨价时，对澳元的需求通常也会上升。'],
    ],
    {
      box: [
        ['That is why the Australian dollar is often called a [[commodity currency|商品货币]].', '这就是为什么澳元常被叫作「商品货币」{commodity currency}。'],
        ['Its value often moves with the prices of the things Australia digs out of the ground.', '它的价值，常常跟着澳大利亚从地里挖出来的东西的价格走。'],
      ],
    },

    { h: '4. Force three: mood', zh: '4. 第三股力量：市场情绪' },
    [
      ['When investors are worried about the world economy, they often sell riskier currencies like the Australian dollar and buy “safe” ones like the US dollar.', '当投资者担心全球经济时，他们常常卖出澳元这种风险较高的货币，买进美元这种「避险」货币。'],
      ['So bad news far away can push the Australian dollar down, even if nothing changes in Australia.', '所以远在别处的坏消息，也可能让澳元下跌，哪怕澳大利亚本身什么都没变。'],
    ],
  ],
  sayIt: [
    ['The Aussie dollar is a commodity currency; it often follows iron ore prices.', '澳元是商品货币，常常跟着铁矿石价格走。'],
    ['A small move in the exchange rate can make a big difference to tuition.', '汇率动一点点，学费就会差很多。'],
  ],
  quiz: [
    {
      q: ['Fees are 40,000 Australian dollars. How much more do you pay if the rate goes from 4.7 to 5.0 yuan?', '学费 4 万澳元。汇率从 4.7 变成 5.0，要多付多少人民币？'],
      opts: [['3,000 yuan', '3,000 元'], ['12,000 yuan', '12,000 元'], ['30,000 yuan', '30,000 元']],
      a: 1,
      e: ['40,000 × 0.3 = 12,000 yuan.', '40,000 × 0.3 = 12,000 元。'],
    },
    {
      q: ['Why is the Australian dollar called a [[commodity currency|商品货币]]?', '为什么澳元被叫作商品货币{commodity currency}？'],
      opts: [['It is made of metal.', '它是金属做的'], ['Its value often moves with the prices of iron ore, coal and gas.', '它的价值常跟着铁矿石、煤、天然气的价格走'], ['It can only buy commodities.', '它只能买大宗商品']],
      a: 1,
      e: ['Buyers of Australian raw materials need Australian dollars to pay for them.', '买澳大利亚原材料的人，得先换澳元才能付钱。'],
    },
    {
      q: ['If Australia’s [[interest rates|利率]] rise compared with other countries, what usually happens to the Australian dollar?', '如果澳大利亚的利率{interest rates}比别国涨得多，澳元通常会怎样？'],
      opts: [['It goes up.', '上涨'], ['It goes down.', '下跌'], ['Nothing changes.', '没有变化']],
      a: 0,
      e: ['Investors buy Australian dollars to earn the higher interest.', '投资者会买进澳元，去赚更高的利息。'],
    },
  ],
  questions: [
    {
      q: ['If you knew you had to pay fees in six months, what could your family do about exchange-rate risk?', '如果你知道半年后要交学费，家里可以怎么应对汇率风险？'],
      a: [
        ['There is no single right answer, and this is not financial advice.', '没有标准答案，这也不是理财建议。'],
        ['One common idea is to change the money in several smaller parts over a few months, instead of all on one day.', '一个常见的思路是：分几个月、分几次换，而不是在某一天一次换完。'],
        ['That way you don’t bet everything on a single day’s rate.', '这样就不会把全部押在某一天的汇率上。'],
      ],
    },
  ],
  words: {
    fees:          ['/fiːz/', '费用；university fees 学费'],
    australian:    ['/ɔːˈstreɪliən/', '澳大利亚的'],
    yuan:          ['/juˈɑːn/', '元（人民币单位）'],
    exchange:      ['/ɪksˈtʃeɪndʒ/', '交换；exchange rate 汇率'],
    currency:      ['/ˈkɜːrənsi/', '货币'],
    supply:        ['/səˈplaɪ/', '供应；supply and demand 供求'],
    demand:        ['/dɪˈmænd/', '需求'],
    bonds:         ['/bɑːndz/', '债券'],
    commodities:   ['/kəˈmɑːdətiz/', '大宗商品'],
    commodity:     ['/kəˈmɑːdəti/', '大宗商品；commodity currency 商品货币'],
    ore:           ['/ɔːr/', '矿石；iron ore 铁矿石'],
    iron:          ['/ˈaɪərn/', '铁'],
    coal:          ['/koʊl/', '煤'],
    export:        ['/ˈekspɔːrt/', '出口（商品）'],
    steel:         ['/stiːl/', '钢'],
    miners:        ['/ˈmaɪnərz/', '矿企，矿工'],
    aussie:        ['/ˈɑːzi/', '澳大利亚的（口语）'],
    tuition:       ['/tuˈɪʃn/', '学费'],
  },
});
