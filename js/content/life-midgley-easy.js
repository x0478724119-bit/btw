// 「一个人，两项『安全』的发明」的简单英文版（初级 B1）：保留爆震、选铅不选乙醇、记者会、氟利昂、臭氧层、举证责任
addContent('life-midgley-easy', {
  easyOf: 'life-midgley',
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "汽油": "petrol", "发动机": "engine", "汽车": "cars", "工程师": "engineer",
    "工厂": "factory", "工人": "workers", "记者": "reporters", "冰箱": "fridges",
    "乙醇": "ethanol", "专利": "patent", "公司": "company", "科学家": "scientists",
    "绳子": "ropes", "历史学家": "historian", "证据": "evidence", "孩子": "children",
    "阳光": "sunlight", "南极": "Antarctica", "气体": "gases", "发明": "inventions",
  },
  summary: '他发明了两样东西，当时都被说成是「安全」的进步：一样让汽车跑得更顺，一样让冰箱不再毒死人。后来人们才发现代价有多大。简单英文版：短句子、常用词。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲人物和历史，事实来源见完整版',
    facts: [
      ['Wikipedia：Thomas Midgley Jr.', 'https://en.wikipedia.org/wiki/Thomas_Midgley_Jr.'],
      ['UNEP / Al Jazeera：leaded petrol ended globally (2021)', 'https://www.aljazeera.com/news/2021/8/30/un-hails-milestone-as-use-of-leaded-petrol-ended-globally'],
    ],
  },
  guide: '这是「人物」第 1 集的简单英文版。读完你会：① 知道含铅汽油是为了解决什么问题；② 知道为什么最后选了铅，而不是同样管用的乙醇；③ 知道氟利昂为什么一开始是「救命的发明」，后来又伤了臭氧层；④ 学会一个问题：证明「它安全」和证明「它危险」，责任在谁？',
  paragraphs: [
    { h: 'A man in front of reporters', zh: '记者面前的一个人' },
    [
      ['In October 1924, an engineer stood in front of reporters.', '1924 年 10 月，一位工程师站在记者面前。'],
      ['He poured a liquid on his hands and breathed it in for about a minute.', '他把一种液体倒在手上，又吸了大约一分钟。'],
      ['The liquid was used in a new kind of petrol, and it contained lead.', '这种液体被用在一种新型汽油里，里面含有铅。'],
      ['That month, workers at a factory that made it had started to die.', '就在那个月，生产它的一家工厂里，工人开始接连死去。'],
      ['He wanted to show that it was safe.', '他想证明它是安全的。'],
      ['He did not tell the reporters that he had been sick from lead the year before.', '他没告诉记者，前一年他自己刚因为铅生过病。'],
      ['His name was Thomas Midgley.', '他叫托马斯·米奇利。'],
    ],
    { img: { src: 'images/midgley.jpg', alt: 'Portrait of Thomas Midgley Jr.', caption: 'Thomas Midgley Jr. (1889–1944)', zh: '小托马斯·米奇利（1889–1944）', credit: 'Photo: Blank & Stoller, N.Y. · No known copyright restrictions', link: 'https://commons.wikimedia.org/wiki/File:Portrait_of_Thomas_Midgley_Jr..jpg', thumb: false } },

    { h: 'The problem: engine knock', zh: '难题：发动机爆震' },
    [
      ['In the 1920s, car engines had a problem.', '20 世纪 20 年代，汽车发动机有一个难题。'],
      ['Sometimes the fuel exploded too early and made a loud knocking sound.', '有时候燃料爆炸得太早，发出很响的敲击声。'],
      ['This [[engine knock|发动机爆震]] wasted fuel and could break the engine.', '这种发动机爆震{engine knock}既浪费燃料，又可能弄坏发动机。'],
      ['Midgley worked for the car company General Motors, and his job was to stop it.', '米奇利在汽车公司通用汽车工作，他的任务就是解决它。'],
      ['In 1921, he found that a little lead in the petrol stopped the knocking.', '1921 年，他发现往汽油里加一点铅，敲击声就没了。'],
    ],

    { h: 'Why lead, not ethanol?', zh: '为什么是铅，而不是乙醇？' },
    [
      ['Here is something surprising.', '下面这件事让人意外。'],
      ['Midgley’s team knew that ethanol, the alcohol in beer, also stopped the knocking.', '米奇利的团队知道，乙醇，也就是啤酒里的酒精，也能止住敲击声。'],
      ['But anyone could make ethanol, so no company could own it.', '可乙醇谁都能做，所以没有哪家公司能独占它。'],
      ['The lead product could get a [[patent|专利]], so the company could make money from every bottle.', '含铅的产品能申请专利{patent}，公司卖出的每一瓶都能赚钱。'],
      ['Many historians think that is why lead won.', '很多历史学家认为，这就是铅赢了的原因。'],
      ['The company even kept the word “lead” out of the product’s name.', '公司甚至把「铅」这个字从产品名字里拿掉了。'],
    ],

    { h: 'Who has to prove it?', zh: '谁来证明？' },
    [
      ['In 1925, the US government studied the new petrol for a short time.', '1925 年，美国政府对这种新汽油做了一次很短的研究。'],
      ['It found no clear evidence of danger, so the petrol went back on sale.', '研究没有找到明确的危险证据，于是汽油重新开卖了。'],
      ['Notice what happened: the company did not have to prove the petrol was safe.', '注意发生了什么：公司不用证明汽油是安全的。'],
      ['Other people had to prove it was dangerous.', '反倒是别人得证明它是危险的。'],
      ['This question, who has to prove it, is called the [[burden of proof|举证责任]].', '这个问题，也就是「谁来证明」，叫举证责任{burden of proof}。'],
    ],
    [
      ['The evidence did come, but it took many years.', '证据最后还是来了，只是花了很多年。'],
      ['Lead from cars got into the air, the soil and people’s blood all over the world.', '汽车排出的铅进入了全世界的空气、土壤和人们的血液。'],
      ['Even a little lead can harm children’s brains.', '就算一点点铅，也会伤害孩子的大脑。'],
      ['China stopped selling leaded petrol in 2000. The last country stopped in 2021, about 100 years after Midgley’s discovery.', '中国在 2000 年停止销售含铅汽油。最后一个国家在 2021 年停止，差不多是米奇利那次发现的 100 年后。'],
    ],

    { h: 'The second invention', zh: '第二项发明' },
    [
      ['In the 1920s, fridges used dangerous gases.', '20 世纪 20 年代，冰箱用的是危险的气体。'],
      ['When a fridge leaked, people near it could get sick or die.', '冰箱一漏气，旁边的人就可能生病甚至死亡。'],
      ['Around 1930, Midgley’s team made a new gas called Freon.', '大约在 1930 年，米奇利的团队做出了一种新的气体，叫氟利昂。'],
      ['It was not poisonous and did not burn.', '它没有毒，也不会燃烧。'],
      ['This time, it really did save lives.', '这一次，它是真的救了人命。'],
    ],
    [
      ['But Freon almost never changes, so it stays in the air for many years.', '可氟利昂几乎从不变化，所以它会在空气里待很多年。'],
      ['Slowly it goes very high, up to the [[ozone layer|臭氧层]], which protects us from strong sunlight.', '它慢慢飘到很高的地方，一直飘到臭氧层{ozone layer}，那里保护我们不受强烈阳光的伤害。'],
      ['There, sunlight breaks it, and it damages the ozone.', '在那里，阳光把它拆开，它就开始破坏臭氧。'],
      ['In 1985, scientists found a big hole in the ozone over Antarctica.', '1985 年，科学家在南极上空的臭氧层里发现了一个大洞。'],
      ['In 1987, countries agreed to stop using these gases. The ozone is slowly getting better.', '1987 年，各国约定停用这类气体。臭氧层正在慢慢恢复。'],
    ],

    { h: 'What to remember', zh: '记住这一点' },
    [
      ['Midgley was not trying to do harm. One of his inventions really did save lives.', '米奇利并不是想害人。他的一项发明确实救过人命。'],
      ['But both inventions had the same problem: the harm was slow, hard to see, and spread over the whole world.', '可两项发明有同一个问题：伤害来得很慢、很难看见，而且分散在全世界。'],
      ['When something new arrives, ask: who has to prove it is safe?', '有新东西出现时，问一问：该由谁来证明它是安全的？'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['Who has to prove it’s safe?', '该由谁来证明它是安全的？'],
    ['The harm was slow and hard to see.', '这种伤害来得慢，又很难看见。'],
  ],
  quiz: [
    {
      q: ['What problem was leaded petrol meant to solve?', '含铅汽油原本是为了解决什么问题？'],
      opts: [['Engine knock', '发动机爆震'], ['Cars that were too slow', '汽车太慢'], ['Petrol that smelled bad', '汽油味道难闻']],
      a: 0,
      e: ['A little lead stopped the fuel from exploding too early.', '加一点铅，燃料就不会太早爆炸。'],
    },
    {
      q: ['Why did the company choose lead, not ethanol?', '公司为什么选了铅，而不是乙醇？'],
      opts: [['Lead could be patented, so the company could own it.', '铅可以申请专利，公司能独占它'], ['Ethanol did not work.', '乙醇没用'], ['Ethanol was more dangerous.', '乙醇更危险']],
      a: 0,
      e: ['Anyone could make ethanol.', '乙醇谁都能做。'],
    },
    {
      q: ['Why did Freon damage the ozone layer?', '氟利昂为什么破坏了臭氧层？'],
      opts: [['It almost never changes, so it lasts long enough to reach the ozone layer.', '它几乎从不变化，所以能一直飘到臭氧层'], ['It burns in the sky.', '它在天上燃烧'], ['It is poisonous to plants.', '它对植物有毒']],
      a: 0,
      e: ['What made it safe in a kitchen made it dangerous high in the sky.', '让它在厨房里安全的特性，也让它在高空变得危险。'],
    },
  ],
  questions: [
    {
      q: ['Think about it. Think of something new that people argue about today. Who has to prove it is safe now: the people who make it, or the people who worry about it?', '想一想。想一个今天大家在争论的新东西。现在是谁在负责证明它安全：做它的人，还是担心它的人？'],
      a: [
        ['There is no single right answer.', '没有唯一答案。'],
        ['For new medicines, the makers must prove they are safe first. For many apps and new products, the critics usually have to prove harm.', '新药要先由生产商证明安全。很多 App 和新产品，通常是批评的人得证明它有害。'],
      ],
    },
  ],
  words: {
    midgley:   ['/ˈmɪdʒli/', '米奇利（人名）'],
    poured:    ['/pɔːrd/', '倒'],
    liquid:    ['/ˈlɪkwɪd/', '液体'],
    knock:     ['/nɑːk/', '敲击；engine knock 发动机爆震'],
    knocking:  ['/ˈnɑːkɪŋ/', '敲击（声）'],
    ethanol:   ['/ˈeθənɔːl/', '乙醇，酒精'],
    patent:    ['/ˈpætnt/', '专利'],
    burden:    ['/ˈbɜːrdn/', '负担；burden of proof 举证责任'],
    freon:     ['/ˈfriːɑːn/', '氟利昂'],
    poisonous: ['/ˈpɔɪzənəs/', '有毒的'],
    ozone:     ['/ˈoʊzoʊn/', '臭氧'],
    leaked:    ['/liːkt/', '漏了'],
  },
});
