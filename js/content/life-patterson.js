// 连续剧「人物」第 2 集。克莱尔·帕特森：用铅同位素测出地球年龄，发现到处都是铅，跟铅工业斗了几十年
addContent('life-patterson', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "地球": "Earth", "陨石": "meteorite", "陨石坑": "crater", "铀": "uranium",
    "实验室": "laboratory", "头发": "hair", "灰尘": "dust", "油漆": "paint",
    "水管": "pipes", "罐头": "cans", "海水": "seawater", "冰芯": "ice cores",
    "格陵兰": "Greenland", "南极": "Antarctica", "骨头": "bones", "秘鲁": "Peru",
    "科学家": "scientist", "导师": "supervisor", "经费": "funding", "委员会": "panel",
    "汽油": "petrol", "汽车": "cars", "尾气": "exhaust", "催化转化器": "catalytic converters",
    "孩子": "children", "牙齿": "teeth", "血液": "blood", "蜡烛": "candle",
    "沙漏": "hourglass", "时钟": "clock", "仪器": "instrument", "数据": "data",
  },
  summary: '1953 年，一个年轻科学家想测地球有多少岁，可他的数据怎么测都不对，因为实验室里到处都是铅，连他自己的头发里都有。测出地球 45.5 亿岁以后，他开始问：这些铅是从哪来的？接下来的三十年，他几乎一个人对抗整个铅工业。第 2 集：克莱尔·帕特森。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲人物和科学史，事实来源见下；图片为公有领域 / CC BY 2.0',
    facts: [
      ['Wikipedia：Clair Cameron Patterson（1953 年完成 Canyon Diablo 分析、1956 年发表 45.5 亿年、超净实验室、1965 年论文、冰芯和海水、秘鲁古骨头 700–1200 倍、罐头鱼、1971 年被排除在 NRC 小组外、血铅下降约 80%）', 'https://en.wikipedia.org/wiki/Clair_Cameron_Patterson'],
      ['Patterson, Age of meteorites and the earth, Geochimica et Cosmochimica Acta 10 (1956)', 'https://doi.org/10.1016/0016-7037(56)90036-9'],
      ['Patterson, Contaminated and natural lead environments of man, Archives of Environmental Health 11 (1965)', 'https://doi.org/10.1080/00039896.1965.10664229'],
      ['Needleman et al., Deficits in psychologic and classroom performance of children with elevated dentine lead levels, New England Journal of Medicine (1979)', 'https://www.nejm.org/doi/full/10.1056/NEJM197903293001301'],
    ],
  },
  guide: '这是「人物」第 2 集，接着第 1 集米奇利的故事。读完你会：① 看懂科学家是怎么用铀和铅当「时钟」，测出地球年龄的；② 明白为什么一块从天上掉下来的铁，是整个计算的关键；③ 知道「超净实验室」是怎么被逼出来的；④ 看懂这整个故事里最让人后背发凉的一点：大家一直当作「正常」的铅含量，本身就已经被污染了；⑤ 知道含铅汽油最后被淘汰，有一半原因跟健康毫无关系。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['In the early 1950s, nobody knew how old the Earth was.', '20 世纪 50 年代初，没有人知道地球有多少岁。'],
      ['The best estimates were around 3 billion years, and they did not agree with each other.', '最好的估计在 30 亿年左右，而且彼此还对不上。'],
      ['A graduate student at the University of Chicago, Clair Patterson, was given what sounded like a simple measuring job by his supervisor, Harrison Brown: measure the lead in some very old rocks.', '芝加哥大学一个叫克莱尔·帕特森的研究生，从导师哈里森·布朗那里接到一份听起来很简单的测量任务：测一测一些很古老的岩石里的铅。'],
      ['His numbers kept coming out wrong, always too high, no matter how carefully he worked.', '他测出来的数一直不对，总是偏高，不管他多小心都没用。'],
      ['The rocks were fine.', '岩石没问题。'],
      ['The problem was that there was lead on the glassware, in the water, in the air of the laboratory, and in his own hair.', '问题是，玻璃器皿上有铅，水里有铅，实验室的空气里有铅，连他自己的头发里都有铅。'],
    ],

    { h: '1. A clock made of uranium', zh: '1. 用铀做成的时钟' },
    [
      ['To date the Earth, Patterson used [[radioactive decay|放射性衰变]].', '为了测地球的年龄，帕特森用的是放射性衰变{radioactive decay}。'],
      ['Some atoms are unstable and slowly turn into other atoms, at a rate that never changes.', '有些原子不稳定，会慢慢变成别的原子，而且变的速度永远不变。'],
      ['Uranium slowly turns into lead: one type of uranium takes about 4.5 billion years for half of it to change, and another type takes about 700 million years.', '铀会慢慢变成铅：一种铀要大约 45 亿年才有一半发生变化，另一种铀大约要 7 亿年。'],
      ['That time is called the [[half-life|半衰期]].', '这段时间叫半衰期{half-life}。'],
    ],
    {
      box: [
        ['Think of an hourglass.', '想象一个沙漏。'],
        ['If you know how fast sand falls, and you can see how much has fallen, you know how long it has been running.', '如果你知道沙子落得多快，又能看到已经落下了多少，你就知道它已经走了多久。'],
        ['But you also need one more thing: how much sand was in the bottom when it started.', '可你还需要知道一件事：开始的时候，下面已经有多少沙子了。'],
        ['For the Earth, the “sand at the start” is the lead that existed when the solar system formed, before any uranium had decayed, and nobody had a sample of it.', '对地球来说，「一开始就在下面的沙子」，是太阳系形成时就已经存在的铅，那时候还没有任何铀发生衰变；而没有人有它的样品。'],
      ],
    },
    [
      ['Rocks on the Earth do not help, because the planet keeps melting, mixing and recycling its own surface.', '地球上的岩石帮不了忙，因为这颗行星一直在熔化、搅拌、回收自己的表面。'],
      ['No rock from the Earth’s very beginning survives unchanged.', '没有一块地球最初的岩石，能原封不动地留到今天。'],
      ['So Patterson looked to the sky.', '所以帕特森把目光投向了天空。'],
    ],

    { h: '2. A piece of iron from space', zh: '2. 一块来自太空的铁' },
    [
      ['Meteorites are pieces of rock and metal left over from the formation of the solar system, and most have not been melted or mixed since.', '陨石是太阳系形成时留下来的岩石和金属碎块，大多数从那以后就没有再熔化、再混合过。'],
      ['About 50,000 years ago, a large iron meteorite hit the desert in Arizona and blasted out a crater more than a kilometre wide.', '大约五万年前，一颗很大的铁陨石砸在亚利桑那州的沙漠上，炸出了一个一公里多宽的陨石坑。'],
      ['Fragments of it, called the Canyon Diablo meteorite, are scattered around the crater.', '它的碎片散落在陨石坑周围，叫作代亚布罗峡谷陨石。'],
    ],
    { img: { src: 'images/meteor-crater.jpg', alt: 'Aerial view of Meteor Crater in the Arizona desert', caption: 'Meteor Crater, Arizona, made by the impact that left the Canyon Diablo meteorite', zh: '亚利桑那州的陨石坑，代亚布罗峡谷陨石就是在这次撞击中留下的', credit: 'Photo: D. Roddy, USGS · Public domain', link: 'https://commons.wikimedia.org/wiki/File:Barringer_Crater_aerial_photo_by_USGS.jpg' } },
    [
      ['Here is the clever part.', '巧妙的地方在这里。'],
      ['Iron meteorites contain lead but almost no uranium.', '铁陨石里有铅，却几乎没有铀。'],
      ['With no uranium, no new lead could have been added for billions of years.', '没有铀，几十亿年来就不可能有新的铅加进去。'],
      ['So the lead inside the Canyon Diablo meteorite is very close to the original lead of the solar system: the sand in the bottom of the hourglass at the start.', '所以代亚布罗峡谷陨石里的铅，非常接近太阳系最初的铅：就是沙漏开始时下面的那堆沙子。'],
      ['Compare it with the lead in other meteorites and in today’s Earth, add the known speed of uranium decay, and you can calculate how long the clock has been running.', '拿它跟其他陨石里、跟今天地球上的铅做比较，再加上已知的铀衰变速度，你就能算出这个时钟已经走了多久。'],
    ],
    [
      ['The measurement needed incredibly small amounts of lead, so small that a speck of dust could ruin it.', '这个测量需要的铅，少得不可思议，少到一粒灰尘就能毁掉它。'],
      ['That is why Patterson’s numbers had been too high: he was measuring the laboratory, not the rock.', '这就是帕特森之前的数字总偏高的原因：他测的是实验室，而不是岩石。'],
      ['When he moved to the California Institute of Technology, he built a laboratory to fix this: filtered air, everything washed in acid, and no lead allowed in.', '他转到加州理工学院以后，建了一间实验室来解决这个问题：空气经过过滤，所有东西都用酸洗过，不许有一点铅进来。'],
      ['It is often described as one of the first [[clean rooms|超净室]], the ancestor of the rooms where computer chips are made today.', '它常被说成是最早的超净室{clean rooms}之一，也就是今天制造电脑芯片的那种房间的祖先。'],
    ],
    { img: { src: 'images/canyon-diablo.jpg', alt: 'A polished piece of the Canyon Diablo iron meteorite', caption: 'A piece of the Canyon Diablo iron meteorite', zh: '一块代亚布罗峡谷铁陨石', credit: 'Photo: James St. John · CC BY 2.0', link: 'https://commons.wikimedia.org/wiki/File:Canyon_Diablo_meteorite_(26186838044).jpg', thumb: false } },
    [
      ['In 1953 he finished the analysis, and in 1956 he published the result: the Earth is about 4.55 billion years old.', '1953 年他完成了分析，1956 年发表了结果：地球大约 45.5 亿岁。'],
      ['Almost seventy years later, that number has barely changed.', '差不多七十年后，这个数字几乎没有变过。'],
    ],

    { h: '3. The question that changed his life', zh: '3. 改变了他一生的那个问题' },
    [
      ['Most scientists would have stopped there, with one of the great results of the century.', '大多数科学家拿到这样一个世纪级的成果，就会停在这里了。'],
      ['Patterson could not stop thinking about the contamination.', '帕特森却忍不住一直在想污染的事。'],
      ['If there was that much lead in an ordinary laboratory, where did it come from, and how much of it was natural?', '如果一个普通的实验室里就有这么多铅，它是从哪来的？其中又有多少是天然的？'],
    ],
    [
      ['He started measuring lead in places where nature should have been left alone.', '他开始去测那些本该不受人类打扰的地方的铅。'],
      ['In the ocean, he found that surface water contained up to 20 times more lead than deep water.', '在海洋里，他发现表层海水的铅最多是深层海水的 20 倍。'],
      ['If lead came from rocks and rivers at a natural rate, that gap made no sense; it looked like lead was raining down from the air.', '如果铅是以天然的速度从岩石和河流里来的，这个差距说不通；看起来更像是铅从空气里落了下来。'],
      ['In ice cores drilled from Greenland and Antarctica, where each layer of ice records a year of snow, lead rose steadily after leaded petrol was introduced.', '在从格陵兰和南极钻出来的冰芯里，每一层冰记录着一年的雪；冰芯显示，含铅汽油问世以后，铅一路上升。'],
      ['He estimated that humans were releasing more than 100 times as much lead into the environment as nature did.', '他估计，人类释放到环境里的铅，是自然释放量的 100 多倍。'],
    ],

    { h: '4. “Normal” was not normal', zh: '4. 「正常」并不正常' },
    [
      ['Here is the part that should make you uncomfortable.', '下面这部分，应该会让你不太舒服。'],
      ['At the time, doctors and the lead industry agreed on a “normal” level of lead in human blood, and said that harm only began well above it.', '当时，医生和铅工业都认同一个人体血液里铅的「正常」水平，并且说，只有远高于这个水平才会有害。'],
      ['But that normal level had been measured in modern people living in a world full of leaded petrol, lead paint and lead pipes.', '可这个「正常水平」，测的是生活在一个到处都是含铅汽油、含铅油漆和铅水管的世界里的现代人。'],
      ['Nobody had measured people who lived before all that.', '没有人测过生活在这一切出现之前的人。'],
    ],
    [
      ['Patterson did.', '帕特森测了。'],
      ['With colleagues, he measured lead in the skeletons of people buried in Peru about 1,600 years ago, using the same clean methods.', '他和同事用同样的超净方法，测了大约 1,600 年前埋葬在秘鲁的人的骨头里的铅。'],
      ['Modern bones contained roughly 700 to 1,200 times more lead.', '现代人的骨头里的铅，大约是他们的 700 到 1,200 倍。'],
      ['He also showed that the lead solder used to seal food cans was pushing lead in canned fish to levels thousands of times higher than in fresh fish.', '他还发现，用来封罐头的铅焊料，让罐头鱼里的铅比新鲜鱼高出好几千倍。'],
    ],
    {
      box: [
        ['This idea is sometimes called a [[shifting baseline|基线偏移]]: when the starting point you compare against has already changed, you cannot see how much has changed.', '这种情况有时被叫作基线偏移{shifting baseline}：当你拿来做比较的起点本身已经变了，你就看不出到底变了多少。'],
        ['Everyone was asking “is this level higher than normal?”, and the answer was no, because “normal” was already polluted.', '大家都在问「这个水平比正常高吗」，答案是不高，因为「正常」本身就已经被污染了。'],
        ['It is the same mistake Patterson made in his first laboratory, measuring the room instead of the rock, made by a whole society.', '这跟帕特森在第一间实验室里犯的错误一模一样：测的是房间，而不是岩石；只不过这一次，是整个社会都犯了。'],
      ],
    },

    { h: '5. The fight', zh: '5. 那场斗争' },
    [
      ['The lead industry’s most important scientist was Robert Kehoe, who worked for the Ethyl Corporation, the company from episode 1.', '铅工业最重要的科学家是罗伯特·基欧，他为乙基公司工作，也就是第 1 集里那家公司。'],
      ['Kehoe’s position was the burden of proof from episode 1: show me evidence that today’s levels cause harm, and until then, there is nothing to worry about.', '基欧的立场，就是第 1 集讲的举证责任：拿出证据证明今天的水平有害，在那之前，就没什么好担心的。'],
      ['Patterson’s answer was that this was the wrong question: humans had never before lived with this much lead, so the burden should be on those who were adding it.', '帕特森的回答是：这个问题本身就问错了。人类从来没有在这么多铅的环境里生活过，所以举证责任应该在那些往环境里加铅的人身上。'],
    ],
    [
      ['After he published his 1965 paper, contracts and funding from several organisations, including the US Public Health Service, dried up.', '他发表 1965 年那篇论文以后，好几个机构的合同和经费都断了，其中包括美国公共卫生署。'],
      ['In 1971, he was left off a national panel on lead in the air, although he was the leading expert on the subject.', '1971 年，一个全国性的空气铅污染专家小组没有让他参加，虽然他是这个领域最权威的专家。'],
      ['He kept publishing anyway.', '他还是照样发表论文。'],
    ],

    { h: '6. How lead actually lost', zh: '6. 铅最后是怎么输的' },
    [
      ['The victory came partly from a direction nobody had planned.', '胜利有一部分来自一个谁也没计划过的方向。'],
      ['In 1970, the US passed a law to cut the smog coming from car exhaust.', '1970 年，美国通过了一部法律，要减少汽车尾气造成的烟雾。'],
      ['The solution was the [[catalytic converter|催化转化器]], a device in the exhaust pipe that turns the worst gases into less harmful ones.', '解决办法是催化转化器{catalytic converter}，一个装在排气管里、把最有害的气体变成危害较小的气体的装置。'],
      ['Lead destroys catalytic converters.', '而铅会毁掉催化转化器。'],
      ['So, starting with the 1975 models, new American cars had to run on unleaded petrol, for a reason that had nothing to do with people’s brains.', '所以从 1975 年的车型开始，美国的新车必须使用无铅汽油，原因跟人的大脑毫无关系。'],
    ],
    [
      ['The health evidence caught up too.', '健康方面的证据也跟上来了。'],
      ['In 1979, a study by the doctor Herbert Needleman measured lead in children’s baby teeth and found that children with more lead did worse on intelligence tests and in class.', '1979 年，医生赫伯特·尼德曼做了一项研究，测量孩子乳牙里的铅，发现铅多的孩子在智力测试和课堂表现上都更差。'],
      ['Leaded petrol was largely gone from American cars by 1986 and fully banned in 1996.', '到 1986 年，美国的汽车基本不再用含铅汽油，1996 年全面禁止。'],
      ['By the late 1990s, the average level of lead in Americans’ blood had fallen by roughly 80%.', '到 20 世纪 90 年代末，美国人血液里铅的平均水平下降了大约 80%。'],
      ['Patterson died in 1995, the year before the final ban.', '帕特森 1995 年去世，就在全面禁令的前一年。'],
    ],

    { h: 'What to take from his life', zh: '从他的一生里能带走什么' },
    [
      ['Patterson’s two great discoveries were the same discovery.', '帕特森一生的两大发现，其实是同一个发现。'],
      ['To measure the age of the Earth, he had to learn what was really in his samples and what came from the room around them.', '为了测地球的年龄，他必须弄清楚，样品里真正有什么，哪些又是周围房间带进来的。'],
      ['To see the lead poisoning of the planet, he applied the same question to the whole world: what is really natural, and what did we add?', '为了看出整个星球的铅中毒，他把同一个问题用在了整个世界上：什么是真正天然的？什么是我们加进去的？'],
      ['The most useful habit in science, and in any analysis of data, may be the boring one: before you trust a number, ask what it is being compared with.', '科学里，以及任何数据分析里，最有用的习惯也许是最无聊的那一个：在相信一个数字之前，先问它是跟什么比出来的。'],
    ],

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['Patterson saw an invisible contamination that everyone around him had stopped noticing.', '帕特森看见了一种周围所有人都已经视而不见的、看不见的污染。'],
      ['A hundred years earlier, a doctor in Vienna saw another one: something on doctors’ own hands that was killing mothers after childbirth.', '一百年前，维也纳的一位医生也看见了一种：医生自己手上的某种东西，正在让产妇在分娩后死去。'],
      ['He had the data to prove it, and the medical world ignored him.', '他手里有能证明这一点的数据，医学界却没有理他。'],
      ['Episode 3: Ignaz Semmelweis, and why being right is not the same as being believed.', '第 3 集：伊格纳兹·塞麦尔维斯，以及为什么「说得对」不等于「被相信」。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['Before you trust a number, ask what it’s being compared with.', '在相信一个数字之前，先问它是跟什么比出来的。'],
    ['That’s a shifting baseline: the “normal” we’re comparing against has already changed.', '这就是基线偏移：我们拿来比较的「正常」本身已经变了。'],
    ['We were measuring the room, not the sample.', '我们测的是房间，而不是样品。'],
  ],
  quiz: [
    {
      q: ['Why was an iron meteorite the key to dating the Earth?', '为什么一块铁陨石是测出地球年龄的关键？'],
      opts: [['It contains lead but almost no uranium, so its lead is close to the solar system’s original lead.', '它有铅却几乎没有铀，所以它的铅接近太阳系最初的铅'], ['It is the oldest rock on Earth.', '它是地球上最古老的岩石'], ['It contains a lot of uranium.', '它含有大量的铀']],
      a: 0,
      e: ['Like knowing how much sand was in the bottom of the hourglass at the start.', '就像知道沙漏开始时下面已经有多少沙子。'],
    },
    {
      q: ['Why did Patterson’s first measurements keep coming out too high?', '帕特森最初的测量结果为什么总是偏高？'],
      opts: [['Lead from the laboratory itself was getting into his samples.', '实验室本身的铅混进了他的样品'], ['His rocks were too young.', '他的岩石太年轻'], ['His instrument was broken.', '他的仪器坏了']],
      a: 0,
      e: ['He was measuring the room, not the rock, until he built a clean room.', '在建起超净室之前，他测的是房间，而不是岩石。'],
    },
    {
      q: ['What is the “shifting baseline” problem in this story?', '这个故事里的「基线偏移」问题指的是什么？'],
      opts: [['The “normal” blood lead level had been measured in people already exposed to modern lead.', '「正常」的血铅水平，测的是已经暴露在现代铅污染里的人'], ['Lead levels went down over time.', '铅的水平随时间下降了'], ['Scientists used different units.', '科学家们用的单位不一样']],
      a: 0,
      e: ['Ancient Peruvian bones showed modern levels were roughly 700 to 1,200 times higher.', '秘鲁古人的骨头显示，现代人的铅大约是他们的 700 到 1,200 倍。'],
    },
    {
      q: ['Why did new American cars from 1975 have to use unleaded petrol?', '为什么美国 1975 年以后的新车必须用无铅汽油？'],
      opts: [['Lead destroys the catalytic converters needed to meet new smog rules.', '铅会毁掉为了达到新的烟雾标准而必须装的催化转化器'], ['Unleaded petrol was cheaper.', '无铅汽油更便宜'], ['Patterson won a court case.', '帕特森打赢了一场官司']],
      a: 0,
      e: ['The first big push came from engineering, not health. The health evidence followed.', '第一波大的推动来自工程，而不是健康，健康方面的证据随后才跟上。'],
    },
  ],
  questions: [
    {
      q: ['Think about it. Find a “normal” number you rely on in your own life or work, for example a normal default rate, a normal reading score, or a normal amount of screen time. What was it compared with when it was decided? Could its baseline have shifted?', '想一想。找一个你在生活或工作里依赖的「正常」数字，比如正常的逾期率、正常的阅读分数、正常的屏幕使用时间。它当初是跟什么比出来的？它的基线有没有可能已经偏移了？'],
      a: [
        ['There is no single right answer.', '没有唯一答案。'],
        ['For example, a “normal” loan default rate may have been calculated during years when the economy was unusually strong, so a rate that looks high today may actually be ordinary.', '比如，一个「正常」的贷款逾期率，可能是在经济特别好的几年里算出来的，所以今天看起来偏高的逾期率，其实可能很普通。'],
        ['Patterson’s method is a good test: look for a sample from before the change, measured the same way, and compare.', '帕特森的方法是个很好的检验：去找一个变化发生之前的样本，用同样的方法测量，再做比较。'],
      ],
    },
  ],
  words: {
    patterson:   ['', '帕特森（科学家 Clair Patterson）'],
    clair:       ['', '克莱尔（人名）'],
    harrison:    ['', '哈里森（人名）'],
    glassware:   ['/ˈɡlæswer/', '玻璃器皿'],
    radioactive: ['/ˌreɪdioʊˈæktɪv/', '放射性的'],
    decay:       ['/dɪˈkeɪ/', '衰变；腐烂'],
    decayed:     ['/dɪˈkeɪd/', '衰变了'],
    uranium:     ['/jʊˈreɪniəm/', '铀'],
    hourglass:   ['/ˈaʊərɡlæs/', '沙漏'],
    meteorites:  ['/ˈmiːtiəraɪts/', '陨石（复数）'],
    meteorite:   ['/ˈmiːtiəraɪt/', '陨石'],
    crater:      ['/ˈkreɪtər/', '陨石坑'],
    canyon:      ['/ˈkænjən/', '峡谷'],
    diablo:      ['', '代亚布罗（Canyon Diablo 代亚布罗峡谷）'],
    fragments:   ['/ˈfræɡmənts/', '碎片'],
    speck:       ['/spek/', '一小粒'],
    contamination:['/kənˌtæmɪˈneɪʃn/', '污染'],
    skeletons:   ['/ˈskelɪtnz/', '骨骼'],
    solder:      ['/ˈsɑːdər/', '焊料'],
    baseline:    ['/ˈbeɪslaɪn/', '基线'],
    kehoe:       ['', '基欧（科学家 Robert Kehoe）'],
    smog:        ['/smɑːɡ/', '烟雾'],
    catalytic:   ['/ˌkætəˈlɪtɪk/', '催化的；catalytic converter 催化转化器'],
    converter:   ['/kənˈvɜːrtər/', '转化器'],
    converters:  ['/kənˈvɜːrtərz/', '转化器（复数）'],
    unleaded:    ['/ʌnˈledɪd/', '无铅的'],
    needleman:   ['', '尼德曼（医生 Herbert Needleman）'],
    vienna:      ['/viˈenə/', '维也纳'],
    semmelweis:  ['', '塞麦尔维斯（医生 Ignaz Semmelweis）'],
    childbirth:  ['/ˈtʃaɪldbɜːrθ/', '分娩'],
  },
});
