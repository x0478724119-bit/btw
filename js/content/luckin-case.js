// 单篇 · 商业。新格式：每句 [英文, 中文]，英文 [[term|中文]]、中文 {term} 标术语；三档（中文为主 / 英文为主 / 全英文）都从这一份生成
// 深度照商业见识手册：情境 → 材料 → 概念（先出现、紧接着解释）→ 算一算 → 怎么接
addContent('luckin-case', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "实习": "internship", "午饭": "lunch", "同事": "colleague", "新闻": "headline",
    "咖啡": "coffee", "纳斯达克": "Nasdaq", "股票": "stock", "投资人": "investors",
    "公司": "company", "顾客": "customers", "市场": "market", "门店": "stores",
    "新店": "new stores", "报告": "report", "视频": "videos", "客流": "customers",
    "商品": "items", "销售额": "sales", "罚款": "penalty", "董事长": "chairman",
    "交易所": "exchange", "生意": "business", "合伙人": "partner", "品牌": "brand",
    "咖啡豆": "coffee beans", "系统": "systems", "原料": "supplies", "小城市": "smaller cities",
    "品控": "quality", "营收": "revenues", "营业利润": "operating income", "美国证监会": "SEC",
    "大钲资本": "Centurium Capital", "差价": "difference", "浑水": "Muddy Waters", "瑞幸": "Luckin",
    "阿里": "Alibaba", "京东": "JD", "拼多多": "Pinduoduo", "美国": "US",
    "事实": "facts",
  },
  summary: '造过假、被摘牌，现在一年营收快 500 亿。用四个概念看懂这次翻身。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲真实事件，事实来源见下',
    facts: [
      ['瑞幸 2025 年第四季度及全年业绩公告（2026-02-26）', 'https://investor.lkcoffee.com/news-releases/news-release-details/luckin-coffee-announces-fourth-quarter-and-fiscal-year-2025'],
      ['CNBC：Luckin will likely price IPO at high end of range（2019-05-16，含 2018 年销售额和亏损）', 'https://www.cnbc.com/2019/05/16/starbucks-china-challenger-luckin-coffee-will-likely-price-ipo-at-high-end-of-range-or-above.html'],
      ['Reuters / TechNode：Luckin raises $561 million in U.S. IPO（2019-05-17）', 'https://technode.com/2019/05/17/starbucks-china-challenger-luckin-raises-561-in-us-ipo-reuters/'],
      ['Restaurant Business：Short seller questions Luckin Coffee’s growth（2020-02，浑水报告的调查方法）', 'https://www.restaurantbusinessonline.com/financing/short-seller-questions-luckin-coffees-growth'],
      ['美国证监会新闻稿：Luckin Coffee Agrees to Pay $180 Million Penalty（2020-12-16）', 'https://www.sec.gov/news/press-release/2020-319'],
      ['瑞幸 2023 年年报（Form 20-F）：摘牌后在场外市场以 LKNCY 交易', 'https://www.sec.gov/Archives/edgar/data/1767582/000110465924044514/lk-20231231x20f.htm'],
    ],
  },
  guide: '读完你会用四个概念看懂瑞幸：① 估值买的是未来；② 做空报告是怎么戳穿造假的；③ 股票出事不等于生意出事；④ 联营模式为什么能让它开店飞快。最后有三道计算、一段「午饭时怎么接」，还有三句能直接用的英文。顶部可以切换：中文为主 / 英文为主 / 全英文。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['It is your first week at an internship.', '实习第一周。'],
      ['Over lunch, a colleague sees a headline: Luckin’s sales last year were almost 50 billion yuan.', '午饭时，同事刷到一条新闻：瑞幸去年营收快 500 亿了。'],
      ['He turns to you and asks, “Didn’t Luckin fake its numbers? Why do people still invest in it?”', '他转头问你：「瑞幸不是造过假吗？怎么还有人投它？」'],
      ['You want an answer that sounds smart but doesn’t take sides.', '你想接一句既专业、又不站队的话。'],
    ],
    {
      img: {
        src: 'images/luckin.jpg', alt: 'A Luckin Coffee store front in Shanghai',
        caption: 'A Luckin Coffee store in Hongqiao, Shanghai, 2025', zh: '上海虹桥的一家瑞幸咖啡门店',
        credit: 'Photo: 源義信 · CC BY 4.0', link: 'https://commons.wikimedia.org/wiki/File:2025-02-15_Luckin_Coffee,_Hongqiao_Town.jpg',
      },
    },
    { h: 'Luckin in numbers, 2025', zh: '材料：瑞幸 2025 年的几个数字' },
    {
      table: {
        caption: 'Source: Luckin Coffee full-year 2025 results (26 Feb 2026)', zh: '来源：瑞幸 2025 年全年业绩公告',
        head: ['', '2025'],
        rows: [
          ['Net revenues 营收', 'about 49.3 billion yuan (+43%)'],
          ['Operating income 营业利润', 'about 5.07 billion yuan'],
          ['Stores 门店', '31,048'],
          ['…of which partnership stores 其中联营店', '10,814'],
          ['Monthly transacting customers 月均交易顾客', 'about 94.2 million'],
        ],
      },
    },
    [
      ['Compare that with 2018, when Luckin sold about 125 million US dollars of coffee and lost about 241 million.', '对照一下：2018 年，瑞幸卖了约 1.25 亿美元的咖啡，却亏了约 2.41 亿美元。'],
      ['It was losing almost twice as much as it sold.', '亏的几乎是卖的两倍。'],
    ],

    { h: '1. Investors buy the future', zh: '1. 估值买的是未来' },
    [
      ['Even so, in May 2019 Luckin listed on Nasdaq through an [[initial public offering (IPO)|首次公开发行]] and raised 561 million dollars.', '即便这样，2019 年 5 月瑞幸还是通过首次公开发行{initial public offering, IPO}在纳斯达克上市，募资 5.61 亿美元。'],
      ['An IPO is the first time a company sells its shares to the public.', 'IPO 就是一家公司第一次把股票卖给公众，也就是「上市」。'],
    ],
    [
      ['Investors were willing to buy because a company’s [[valuation|估值]] is a bet on the future.', '投资人愿意买，是因为一家公司的估值{valuation}押的是未来。'],
      ['Valuation means how much people think the whole company is worth.', '估值，就是大家觉得这整家公司值多少钱。'],
      ['Luckin’s story was simple: Chinese people drink very little coffee today, so the market could grow huge, and whoever wins the customers first wins the market.', '瑞幸的故事很简单：中国人现在喝的咖啡还很少，这个市场将来会非常大，谁先抢到顾客，谁就赢了。'],
      ['The losses were planned: investors’ money paid for coupons and new stores to grab [[market share|市场份额]], the part of all coffee sales that goes to Luckin.', '亏钱是计划好的：投资人的钱拿去发券、开新店，抢市场份额{market share}，也就是全部咖啡销售里瑞幸占的那一块。'],
    ],
    {
      box: [
        ['Why not list in mainland China?', '为什么不在 A 股上市？'],
        ['At that time, the mainland stock market generally wanted a company to be [[profitable|盈利的]] before it could list, while American exchanges cared more about growth.', '当时，A 股一般要求公司先盈利{profitable}才能上市；美国的交易所更看重增长。'],
        ['That is why Alibaba, JD and Pinduoduo all listed in the US.', '所以阿里、京东、拼多多都去了美国上市。'],
      ],
    },

    { h: '2. The short-seller report', zh: '2. 造假是怎么被戳穿的：做空报告' },
    [
      ['In January 2020, a [[short seller|做空机构]] called Muddy Waters published an anonymous report about Luckin.', '2020 年 1 月，一家叫浑水{Muddy Waters}的做空机构{short seller}公开了一份关于瑞幸的匿名报告。'],
    ],
    {
      box: [
        ['A short seller borrows a company’s shares, sells them, and buys them back later.', '做空机构会先借来一家公司的股票卖掉，过一段时间再买回来还掉。'],
        ['If the price has fallen, it keeps the difference as profit.', '如果股价跌了，中间的差价就是它赚的钱。'],
        ['So short sellers are paid to find problems that other investors miss.', '所以做空机构的生意，就是专门去找别人没发现的问题。'],
        ['Muddy Waters is one of the best-known short sellers in the US.', '浑水是美国最有名的做空机构之一。'],
      ],
    },
    [
      ['The people behind the report hired 92 full-time and about 1,400 part-time workers.', '这份报告背后的调查方，雇了 92 名全职、约 1,400 名兼职人员。'],
      ['They filmed 620 stores for 981 full days and counted the customers, cup by cup.', '他们在 620 家门店拍了 981 个整天的视频，一杯一杯地数客流。'],
      ['Their conclusion: in late 2019, the number of items each store sold per day had been inflated by at least 69% to 88%.', '结论是：2019 年下半年，每家店每天卖出的商品数被夸大了至少 69% 到 88%。'],
      ['Luckin denied it at first, but in April 2020 the company admitted that up to 2.2 billion yuan of its 2019 sales had been [[fabricated|编造的]], or made up.', '瑞幸一开始否认，但 2020 年 4 月，公司自己承认：2019 年最多有 22 亿元的销售额是编造{fabricated}的。'],
    ],

    { h: '3. The stock is not the business', zh: '3. 股票出事，不等于生意出事' },
    [
      ['At the end of June 2020, Nasdaq stopped trading Luckin’s shares, and the company was [[delisted|被摘牌]], which means removed from the exchange.', '2020 年 6 月底，纳斯达克停止交易瑞幸的股票，它被摘牌{delisted}了，也就是被移出了交易所。'],
      ['Its shares moved to the [[over-the-counter (OTC) market|场外市场]], where shares trade directly between buyers and sellers instead of on a big exchange.', '它的股票转到了场外市场{over-the-counter market, OTC}，在那里买卖双方直接交易，不经过大交易所。'],
      ['The chairman was voted out, and the company later paid a 180-million-dollar [[penalty|罚款]] to the US Securities and Exchange Commission (SEC).', '董事长被投票罢免，公司后来还向美国证监会（SEC）交了 1.8 亿美元罚款{penalty}。'],
    ],
    [
      ['But the stores stayed open, and customers kept buying.', '但门店一直开着，顾客一直在买。'],
      ['Centurium Capital, one of Luckin’s early investors, took control of the company.', '瑞幸的早期投资人之一大钲资本{Centurium Capital}接手控股。'],
      ['The stock showed how much investors trusted the company; the business depended on whether customers still wanted the coffee.', '股票反映的是投资人对公司的信任；生意靠的是顾客还愿不愿意买咖啡。'],
      ['Those two things can move apart.', '这两件事，可以朝不同的方向走。'],
    ],

    { h: '4. The partnership model', zh: '4. 翻身靠什么：联营模式' },
    [
      ['Of Luckin’s 31,048 stores, 10,814 are [[partnership stores|联营店]].', '瑞幸的 31,048 家店里，有 10,814 家是联营店{partnership stores}。'],
      ['In a partnership store, a local partner pays to open the store and runs it day to day.', '联营店是由当地的合伙人出钱开店，并负责日常经营。'],
      ['Luckin provides the brand, the coffee beans, the app and the systems.', '瑞幸提供品牌、咖啡豆、App 和整套系统。'],
      ['It sells supplies to the partner and takes a share of the store’s [[gross profit|毛利]] once it passes a certain level.', '瑞幸把原料卖给合伙人，门店毛利{gross profit}超过一定水平以后，再按比例抽成。'],
    ],
    [
      ['This makes Luckin [[asset-light|轻资产的]]: it does not have to pay for every new store itself.', '这让瑞幸变成轻资产{asset-light}：它不用为每一家新店自己掏钱。'],
      ['So it can expand very fast, especially in smaller cities.', '所以它能开得飞快，尤其是在小城市。'],
      ['The trade-off is that quality is harder to control, and partners close stores that don’t make money.', '代价是品控更难管，而且赚不到钱的合伙人会关店。'],
    ],

    { h: '5. Do the math', zh: '5. 用数字算一算' },
    {
      box: [
        ['[[Operating margin|营业利润率]] = operating income ÷ revenues = 5.07 ÷ 49.3 ≈ 10.3%.', '营业利润率{operating margin} = 营业利润 ÷ 营收 = 50.7 ÷ 493 ≈ 10.3%。'],
        ['Out of every 100 yuan of sales, Luckin keeps about 10 yuan as operating profit.', '也就是每卖 100 元，瑞幸大约留下 10 元营业利润。'],
      ],
    },
    {
      box: [
        ['Revenue per customer per month = 49.3 billion ÷ 12 months ÷ 94.2 million customers ≈ 43.6 yuan.', '每位顾客每月贡献的营收 = 493 亿 ÷ 12 个月 ÷ 9,420 万人 ≈ 43.6 元。'],
        ['At ten to fifteen yuan a cup, that is about three or four cups a month.', '按一杯十几块算，平均每人每月大约买三四杯。'],
      ],
    },
    {
      box: [
        ['Share of partnership stores = 10,814 ÷ 31,048 ≈ 35%.', '联营店占比 = 10,814 ÷ 31,048 ≈ 35%。'],
        ['Roughly one store in three was not paid for by Luckin.', '大约每三家店里，就有一家不是瑞幸自己出钱开的。'],
      ],
    },

    { h: '6. What to say over lunch', zh: '6. 被问到时怎么接' },
    [
      ['If someone asks whether they should buy the stock, don’t say yes or no.', '如果有人问该不该买这只股票，不要回答「该」或「不该」。'],
      ['That would be [[investment advice|投资建议]], and it is not your job to give it.', '那就是在给投资建议{investment advice}了，这不是你该做的事。'],
      ['The safest answer separates the stock from the business and sticks to facts.', '最稳的回答，是把「股票」和「生意」分开讲，只讲事实。'],
    ],
    {
      box: [
        ['“The fraud really hurt the stock, but the business kept going: sales were almost 50 billion last year, and about a third of the stores are partnership stores, so they grow fast.', '「造假那件事确实把股票打垮了，但生意一直在：去年营收快 500 亿，大概三分之一的店是联营的，所以开得很快。'],
        ['Whether to invest is your own call. I just think the turnaround is worth studying.”', '投不投是个人判断，我只是觉得这次翻身挺值得研究的。」'],
      ],
    },
  ],
  sayIt: [
    ['The fraud hit the stock, but the business itself held up.', '造假打垮了股票，但生意本身扛住了。'],
    ['About a third of their stores are partnership stores, so they can expand without putting up all the capital.', '它大约三分之一的店是联营店，所以扩张时不用自己掏全部的钱。'],
    ['I wouldn’t call it a buy or a sell, but the turnaround is worth studying.', '我不会说它该买还是该卖，但这次翻身很值得研究。'],
  ],
  quiz: [
    {
      q: ['Luckin’s operating income was about 5.07 billion yuan on revenues of about 49.3 billion. What is its [[operating margin|营业利润率]]?', '瑞幸营业利润约 50.7 亿元，营收约 493 亿元。它的营业利润率{operating margin}大约是多少？'],
      opts: [['About 1%', '约 1%'], ['About 10%', '约 10%'], ['About 50%', '约 50%']],
      a: 1,
      e: ['5.07 ÷ 49.3 ≈ 10.3%, so Luckin keeps about 10 yuan out of every 100 yuan of sales.', '50.7 ÷ 493 ≈ 10.3%，每卖 100 元大约留下 10 元。'],
    },
    {
      q: ['How did the Muddy Waters report find the problem?', '浑水那份报告是怎么发现问题的？'],
      opts: [['It checked Luckin’s bank records.', '查了瑞幸的银行记录'], ['It filmed stores and counted customers, cup by cup.', '在门店拍视频，一杯一杯地数客流'], ['It interviewed Luckin’s staff.', '采访了瑞幸的员工']],
      a: 1,
      e: ['It filmed 620 stores for 981 full days and found far fewer sales than Luckin reported.', '它在 620 家门店拍了 981 个整天，数出来的销量比瑞幸报的少很多。'],
    },
    {
      q: ['Why does the partnership model help Luckin open stores faster?', '为什么联营模式能让瑞幸开店更快？'],
      opts: [['Partnership stores don’t sell coffee.', '联营店不卖咖啡'], ['Partners pay to open the stores, so Luckin is [[asset-light|轻资产的]].', '开店的钱由合伙人出，瑞幸是轻资产{asset-light}'], ['Partnership stores pay no tax.', '联营店不用交税']],
      a: 1,
      e: ['Because partners put up the money, Luckin can open many stores without paying for each one.', '因为合伙人出钱，瑞幸不用为每家店掏钱，就能开很多店。'],
    },
    {
      q: ['A colleague asks, “Should I buy Luckin stock?” Which answer is best?', '同事问：「我该不该买瑞幸的股票？」哪种回答最合适？'],
      opts: [['“Yes, buy it now.”', '「该，赶紧买。」'], ['“Never touch a company that faked its numbers.”', '「造过假的公司千万别碰。」'], ['“The stock and the business are different stories. The business keeps growing, but whether to invest is your call.”', '「股票和生意要分开看。生意一直在增长，但投不投是你自己的判断。」']],
      a: 2,
      e: ['Stick to facts and logic, and don’t give [[investment advice|投资建议]].', '讲事实和逻辑，不给投资建议{investment advice}。'],
    },
  ],
  questions: [
    {
      q: ['If you had been an investor in 2019, what would you have wanted to check before buying Luckin shares?', '如果你是 2019 年的投资人，买瑞幸股票之前你会想先查什么？'],
      a: [
        ['There is no single right answer.', '没有标准答案。'],
        ['You might check whether a single store can make money, whether customers come back without coupons, and whether the sales numbers are real.', '比如：单店能不能赚钱、不发券顾客还会不会回来、销售数字是不是真的。'],
        ['Muddy Waters did exactly the last one.', '浑水做的，正是最后这一件。'],
      ],
    },
  ],
  words: {
    luckin:        ['', '瑞幸（咖啡品牌）'],
    nasdaq:        ['/ˈnæzdæk/', '纳斯达克（美国证券交易所）'],
    ipo:           ['/ˌaɪ piː ˈoʊ/', '首次公开发行（上市）'],
    initial:       ['/ɪˈnɪʃl/', '最初的；initial public offering 首次公开发行'],
    offering:      ['/ˈɔːfərɪŋ/', '发行'],
    valuation:     ['/ˌvæljuˈeɪʃn/', '估值'],
    profitable:    ['/ˈprɑːfɪtəbl/', '盈利的'],
    short:         ['/ʃɔːrt/', '做空；short seller 做空机构'],
    seller:        ['/ˈselər/', '卖方；short seller 做空机构'],
    muddy:         ['/ˈmʌdi/', 'Muddy Waters 浑水（美国做空机构）'],
    waters:        ['/ˈwɔːtərz/', 'Muddy Waters 浑水（美国做空机构）'],
    anonymous:     ['/əˈnɑːnɪməs/', '匿名的'],
    inflated:      ['/ɪnˈfleɪtɪd/', '被夸大的'],
    fabricated:    ['/ˈfæbrɪkeɪtɪd/', '编造的，伪造的'],
    delisted:      ['/diːˈlɪstɪd/', '被摘牌的（退市）'],
    'over-the-counter': ['/ˌoʊvər ðə ˈkaʊntər/', '场外交易的（不在大交易所里交易）'],
    otc:           ['/ˌoʊ tiː ˈsiː/', '场外市场（over-the-counter）'],
    sec:           ['/ˌes iː ˈsiː/', '美国证券交易委员会（美国证监会）'],
    penalty:       ['/ˈpenəlti/', '罚款'],
    centurium:     ['', '大钲资本（私募股权公司）'],
    partnership:   ['/ˈpɑːrtnərʃɪp/', '合伙；partnership store 联营店'],
    partner:       ['/ˈpɑːrtnər/', '合伙人'],
    gross:         ['/ɡroʊs/', '总的；gross profit 毛利'],
    'asset-light': ['/ˈæset laɪt/', '轻资产的'],
    'trade-off':   ['/ˈtreɪd ɔːf/', '取舍，代价'],
    margin:        ['/ˈmɑːrdʒɪn/', '利润率；operating margin 营业利润率'],
    operating:     ['/ˈɑːpəreɪtɪŋ/', '营业的，经营的'],
    advice:        ['/ədˈvaɪs/', '建议；investment advice 投资建议'],
    turnaround:    ['/ˈtɜːrnəraʊnd/', '扭转，翻身'],
    putting:       ['/ˈpʊtɪŋ/', 'put up (money) 出钱，投入资金'],
    held:          ['/held/', 'hold up 扛住（held 是过去式）'],
    call:          ['/kɔːl/', '决定；your call 你自己决定'],
    'take':        ['/teɪk/', 'take sides 站队'],
    sides:         ['/saɪdz/', 'take sides 站队'],
  },
});
