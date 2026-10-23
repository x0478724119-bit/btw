// 单篇 · 历史。新格式（中英一对一对，三档都能读）
addContent('titanic', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "渡轮": "ferry", "邮轮": "cruise ship", "救生艇": "lifeboats", "救生筏": "life rafts",
    "规定": "rule", "规则": "rule", "法律": "law", "船东": "owners",
    "船": "ship", "首航": "first voyage", "冰山": "iceberg", "吨位": "tonnage",
    "重量": "weight", "大小": "size", "技术": "technology", "公约": "convention",
    "座位": "seats", "位置": "space", "汽车": "cars", "无人机": "drones",
    "图片": "pictures", "英国": "Britain", "人数": "number of people", "纸面上": "on paper",
    "安全": "safety", "例子": "example", "晚上": "night",
  },
  summary: '泰坦尼克号的救生艇只够一半的人用，可它完全合法。一条过时的规则，是怎么害死 1,500 多人的？',
  sayTitle: 'Say it in English',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲真实事件，事实来源见下',
    facts: [
      ['Library of Congress Blogs：Failure to Update the Law – A Titanic Mistake（2012）', 'https://blogs.loc.gov/law/2012/04/failure-to-update-the-law-a-titanic-mistake/'],
      ['Wikipedia：Changes in safety practices after the sinking of the Titanic', 'https://en.wikipedia.org/wiki/Changes_in_safety_practices_after_the_sinking_of_the_Titanic'],
      ['Mental Floss：How the Titanic changed maritime safety', 'https://www.mentalfloss.com/history/titanic/how-titanic-changed-maritime-safety'],
    ],
  },
  guide: '读完你会知道：① 泰坦尼克号的救生艇比法律要求的还多，却只够船上一半的人用；② 原因是一条 1894 年的规则，按船的重量、而不是按人数来算救生艇；③「合规」不等于「安全」；④ 这次沉船直接催生了今天所有船都要遵守的海上安全公约。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['The next time you take a ferry or a cruise, look at the lifeboats.', '下次坐渡轮或者邮轮，留意一下救生艇。'],
      ['Today there is space for everyone on board, plus extra.', '今天，船上每个人都有位置，还有富余。'],
      ['That rule exists because of one night in April 1912.', '这条规定之所以存在，是因为 1912 年 4 月的一个晚上。'],
    ],
    { img: {"src": "images/titanic-lifeboat.jpg", "alt": "A crowded Titanic lifeboat on the open sea", "caption": "Collapsible D, the last lifeboat launched from the Titanic, 15 April 1912", "zh": "1912 年 4 月 15 日，泰坦尼克号放下的最后一艘救生艇（D 号折叠艇），摄于卡帕西亚号", "credit": "Photo: Louis Ogden · Public domain", "link": "https://commons.wikimedia.org/wiki/File:Titanic_lifeboat.jpg"} },

    { h: '1. Legal, but not enough', zh: '1. 合法，但不够' },
    [
      ['The Titanic carried more than 2,200 people on its first voyage.', '泰坦尼克号首航时，船上有 2,200 多人。'],
      ['It had 20 lifeboats with room for about 1,178 people.', '它有 20 艘救生艇，大约能坐 1,178 人。'],
      ['That was only about half of the people on board.', '这只够船上大约一半的人。'],
    ],
    [
      ['Yet the ship was not breaking any law.', '可这艘船并没有违反任何法律。'],
      ['In fact, it carried more lifeboat space than the rules required, which was room for only about 1,060 people.', '事实上，它的救生艇位置比规定要求的还多，当时规定只要求够大约 1,060 人。'],
    ],

    { h: '2. A rule written for smaller ships', zh: '2. 为小船写的规则' },
    [
      ['How could the law ask for so little?', '法律怎么会要求这么少？'],
      ['The British rules on lifeboats had not been updated since 1894.', '英国关于救生艇的规定，从 1894 年起就没更新过。'],
      ['They decided the number of lifeboats by a ship’s [[tonnage|吨位]], its size and weight, not by how many people were on board.', '它们按船的吨位{tonnage}，也就是船的大小和重量，来决定救生艇的数量，而不是按船上有多少人。'],
      ['The top category simply said “over 10,000 tons: 16 lifeboats”.', '最高一档只写着：「一万吨以上：16 艘救生艇。」'],
      ['The Titanic weighed more than 46,000 tons, but the table stopped long before ships that big existed.', '泰坦尼克号重达 46,000 多吨，但那张表在这么大的船出现之前就「到头」了。'],
    ],
    {
      box: [
        ['This is called [[regulatory lag|监管滞后]]: technology changes faster than the rules.', '这叫监管滞后{regulatory lag}：技术变得比规则快。'],
        ['The rule was not crazy when it was written. It just never caught up with ships four times bigger.', '这条规则写的时候并不荒唐，它只是一直没跟上大了四倍的船。'],
      ],
    },

    { h: '3. Compliance is not safety', zh: '3. 合规不等于安全' },
    [
      ['The owners met the rules, so on paper everything was fine.', '船东遵守了规定，所以纸面上一切都没问题。'],
      ['This is the difference between [[compliance|合规]], doing what the rules say, and real safety.', '这就是合规{compliance}和真正的安全之间的差别。合规，只是做到规则要求的。'],
      ['When the ship hit an iceberg and sank, more than 1,500 people died.', '当船撞上冰山沉没时，1,500 多人遇难。'],
    ],

    { h: '4. What changed', zh: '4. 之后改变了什么' },
    [
      ['Two years later, in 1914, countries agreed on the first International Convention for the [[Safety of Life at Sea (SOLAS)|国际海上人命安全公约]].', '两年后的 1914 年，各国签订了第一部国际海上人命安全公约{Safety of Life at Sea, SOLAS}。'],
      ['It required lifeboat space for everyone on board.', '它要求救生艇必须够船上每一个人用。'],
      ['Today’s rules go further: ships must have lifeboats or life rafts for 125% of the people on board.', '今天的规定更严：船上的救生艇或救生筏要够全船人数的 125%。'],
    ],
    {
      box: [
        ['Do the math: 1,178 seats ÷ about 2,200 people ≈ 54%.', '算一算：1,178 个座位 ÷ 约 2,200 人 ≈ 54%。'],
        ['Under today’s 125% rule, a ship with 2,200 people would need space for 2,750.', '按今天 125% 的规定，一艘载 2,200 人的船，要准备 2,750 个位置。'],
      ],
    },
  ],
  sayIt: [
    ['The rules hadn’t caught up with the technology.', '规则没跟上技术。'],
    ['Being compliant isn’t the same as being safe.', '合规不等于安全。'],
  ],
  quiz: [
    {
      q: ['Why did the Titanic have so few lifeboats?', '泰坦尼克号的救生艇为什么这么少？'],
      opts: [['The owners broke the law.', '船东违法了'], ['An old rule set lifeboats by ship size, not by number of people.', '一条老规则按船的大小、而不是按人数来定救生艇'], ['There was no room on the deck.', '甲板上没地方了']],
      a: 1,
      e: ['The 1894 rules used [[tonnage|吨位]] and topped out at “over 10,000 tons: 16 lifeboats”.', '1894 年的规定按吨位{tonnage}算，最高一档只到「一万吨以上：16 艘」。'],
    },
    {
      q: ['What does [[regulatory lag|监管滞后]] mean?', '监管滞后{regulatory lag}是什么意思？'],
      opts: [['Rules change faster than technology.', '规则变得比技术快'], ['Technology changes faster than the rules.', '技术变得比规则快'], ['Ships move slowly.', '船开得很慢']],
      a: 1,
      e: ['Ships grew four times bigger, but the lifeboat rule stayed the same.', '船大了四倍，救生艇的规则却没变。'],
    },
    {
      q: ['A ship carries 2,000 people. Under today’s 125% rule, how much lifeboat space does it need?', '一艘船载 2,000 人。按今天 125% 的规定，需要多少救生位置？'],
      opts: [['1,000', '1,000'], ['2,000', '2,000'], ['2,500', '2,500']],
      a: 2,
      e: ['2,000 × 125% = 2,500.', '2,000 × 125% = 2,500。'],
    },
  ],
  questions: [
    {
      q: ['Can you think of a modern rule that might not have caught up with new technology?', '你能想到一条可能没跟上新技术的现代规则吗？'],
      a: [
        ['There is no single right answer.', '没有标准答案。'],
        ['Possible examples are rules about AI-generated pictures, self-driving cars, or delivery drones.', '比如关于 AI 生成图片、自动驾驶汽车、外卖无人机的规定。'],
        ['In each case, the technology arrived before the law knew what to do with it.', '每一个例子里，都是技术先来了，法律还没想好怎么管。'],
      ],
    },
  ],
  words: {
    ferry:         ['/ˈferi/', '渡轮'],
    cruise:        ['/kruːz/', '邮轮旅行'],
    lifeboats:     ['/ˈlaɪfboʊts/', '救生艇'],
    voyage:        ['/ˈvɔɪɪdʒ/', '航行；first voyage 首航'],
    tonnage:       ['/ˈtʌnɪdʒ/', '吨位'],
    category:      ['/ˈkætəɡɔːri/', '类别，档'],
    regulatory:    ['/ˈreɡjələtɔːri/', '监管的；regulatory lag 监管滞后'],
    lag:           ['/læɡ/', '滞后'],
    compliance:    ['/kəmˈplaɪəns/', '合规'],
    compliant:     ['/kəmˈplaɪənt/', '合规的'],
    iceberg:       ['/ˈaɪsbɜːrɡ/', '冰山'],
    convention:    ['/kənˈvenʃn/', '公约'],
    solas:         ['/ˈsoʊləs/', '国际海上人命安全公约'],
    rafts:         ['/ræfts/', '筏子；life rafts 救生筏'],
    deck:          ['/dek/', '甲板'],
    drones:        ['/droʊnz/', '无人机'],
  },
});
