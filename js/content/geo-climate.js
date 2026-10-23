// 连续剧「地理：世界为什么长这样」第 1 集。纬度、海洋和陆地的比热、盛行西风、墨西哥湾流的争论（Seager et al. 2002）
addContent('geo-climate', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "伦敦": "London", "哈尔滨": "Harbin", "北京": "Beijing", "马德里": "Madrid",
    "纽约": "New York", "温哥华": "Vancouver", "欧洲": "Europe", "北美": "North America",
    "纬度": "latitude", "赤道": "equator", "太阳": "sun", "阳光": "sunlight",
    "海洋": "ocean", "大海": "sea", "陆地": "land", "海水": "seawater",
    "冬天": "winter", "夏天": "summer", "气温": "temperature",
    "气候": "climate", "教科书": "textbooks", "模型": "model", "论文": "paper",
    "落基山脉": "Rocky Mountains", "大西洋": "Atlantic", "太平洋": "Pacific", "西海岸": "west coast",
    "东海岸": "east coast", "沙滩": "beach", "暖气": "radiator", "科学家": "scientists",
  },
  summary: '伦敦比哈尔滨还靠北，冬天却比哈尔滨暖和二十多度。课本上说是因为墨西哥湾流，可 2002 年的一篇论文算了一遍，发现功劳大部分不是它的。第 1 集：决定一个地方冷暖的三样东西。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲地理和气候研究，事实来源见下；气温为长期平均的约数',
    facts: [
      ['Seager et al., Is the Gulf Stream responsible for Europe’s mild winters? Quarterly Journal of the Royal Meteorological Society (2002)', 'https://ocp.ldeo.columbia.edu/res/div/ocp/gs/pubs/Seager_etal_QJ_2002.pdf'],
      ['Columbia 大学 Lamont-Doherty 地球观测站：The Source of Europe’s Mild Climate（Seager 写的科普版）', 'https://ocp.ldeo.columbia.edu/res/div/ocp/gs/index.shtml'],
      ['Scientific American：New Simulations Question the Gulf Stream’s Role in Tempering Europe’s Winters', 'https://www.scientificamerican.com/article/new-simulations-question-gulf-stream-role-tempering-europes-winters/'],
      ['各城市 1 月平均气温：Wikipedia 各城市词条的 Climate 表（长期平均，取整）', 'https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature'],
    ],
  },
  guide: '这是「地理：世界为什么长这样」第 1 集。读完你会：① 知道纬度为什么决定冷暖，又为什么不够用；② 明白海洋为什么像一个巨大的暖气片；③ 知道「盛行西风」是什么，为什么大陆的西海岸冬天暖、东海岸冬天冷；④ 看懂一场真实的科学争论：欧洲的暖冬到底是不是墨西哥湾流的功劳；⑤ 能用这三样东西解释北京为什么比同纬度的马德里冷那么多。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['Look at a globe and find London and Harbin.', '拿一个地球仪，找到伦敦和哈尔滨。'],
      ['London is at about 51 degrees north, and Harbin at about 46: London is further from the equator.', '伦敦大约在北纬 51 度，哈尔滨大约在北纬 46 度：伦敦离赤道更远。'],
      ['Yet in January, London averages about 5°C, while Harbin averages about −17°C.', '可是到了 1 月，伦敦平均大约 5°C，哈尔滨平均大约 −17°C。'],
      ['The city further north is more than twenty degrees warmer.', '更靠北的那座城市，反而暖和了二十多度。'],
    ],
    {
      table: {
        caption: 'Average January temperature (long-term averages, rounded)', zh: '1 月平均气温（长期平均，取整）',
        head: ['City', 'Latitude', 'January'],
        rows: [
          ['London', '51°N', '5°C'],
          ['Harbin', '46°N', '−17°C'],
          ['Vancouver', '49°N', '4°C'],
          ['Madrid', '40°N', '6°C'],
          ['New York', '41°N', '1°C'],
          ['Beijing', '40°N', '−3°C'],
        ],
      },
    },
    [
      ['Most of us learned the answer at school: a warm ocean current called the Gulf Stream carries heat from the tropics to Europe.', '大多数人在学校里学过答案：一股叫墨西哥湾流的暖流，把热带的热量带到了欧洲。'],
      ['In 2002, a team of climate scientists tested that answer carefully, and found that it explains only a small part of the difference.', '2002 年，一组气候科学家仔细检验了这个答案，发现它只能解释这个差距里很小的一部分。'],
      ['To see what does, we need the three things that decide how warm a place is.', '要知道真正的原因，我们需要先了解决定一个地方冷暖的三样东西。'],
    ],

    { h: '1. Latitude: how much sunlight arrives', zh: '1. 纬度：照到多少阳光' },
    [
      ['[[Latitude|纬度]] measures how far north or south of the equator a place is, from 0 degrees at the equator to 90 at the poles.', '纬度{latitude}衡量一个地方在赤道以北或以南多远，从赤道的 0 度到两极的 90 度。'],
      ['Near the equator, the midday sun is high and its light hits the ground almost straight on.', '在赤道附近，正午的太阳很高，阳光几乎是垂直照到地面上的。'],
      ['Further north, the same beam of sunlight arrives at a low angle and is spread over a larger area, like a torch shone at a slant.', '越往北，同样一束阳光照下来的角度越低，铺开的面积也越大，就像斜着照的手电筒。'],
      ['In winter the effect is stronger, because the days are also short.', '冬天这个效果更强，因为白天也更短。'],
      ['So latitude sets the basic pattern: further from the equator, colder.', '所以纬度定下了基本格局：离赤道越远，越冷。'],
    ],
    [
      ['But look at the table again.', '可是再看一遍那张表。'],
      ['Madrid and Beijing are at almost the same latitude and receive almost the same sunlight, and Beijing’s January is about nine degrees colder.', '马德里和北京几乎在同一个纬度，照到的阳光也几乎一样多，北京的 1 月却冷了大约九度。'],
      ['Latitude decides how much heat arrives from the sun; something else decides how much of it a place keeps.', '纬度决定了太阳送来多少热量；可一个地方能留住多少，是由别的东西决定的。'],
    ],

    { h: '2. The ocean is a giant radiator', zh: '2. 海洋是一个巨大的暖气片' },
    [
      ['On a summer day at the beach, the sand burns your feet while the sea still feels cool.', '夏天去海边，沙子烫脚，海水却还是凉的。'],
      ['At night the sand is cold, and the water feels almost warm.', '到了晚上，沙子凉了，海水摸起来反而有点暖。'],
      ['Water has a very high [[heat capacity|热容]]: it takes a lot of energy to warm it up, and it gives that energy back slowly as it cools.', '水的热容{heat capacity}非常高：要很多能量才能把它加热，冷却的时候又会把这些能量慢慢放出来。'],
      ['Seawater is also constantly mixed, so the heat it absorbs goes down tens of metres instead of staying in a thin surface layer like on land.', '海水还一直在翻动，所以它吸收的热量会传到几十米深，而不像陆地那样只停留在表面薄薄的一层。'],
    ],
    [
      ['Over a whole year, this makes the ocean behave like a giant radiator.', '放到一整年来看，这让海洋就像一个巨大的暖气片。'],
      ['In summer it soaks up heat and stays cooler than the land.', '夏天，它吸收热量，比陆地凉快。'],
      ['In winter it slowly releases that stored heat and stays warmer than the land.', '冬天，它慢慢放出储存的热量，比陆地暖和。'],
      ['Places close to the sea have a [[maritime climate|海洋性气候]]: mild winters and cool summers.', '靠海的地方是海洋性气候{maritime climate}：冬天温和，夏天凉爽。'],
      ['Places far from the sea have a [[continental climate|大陆性气候]]: hot summers and very cold winters.', '离海远的地方是大陆性气候{continental climate}：夏天炎热，冬天非常冷。'],
    ],
    [
      ['But this cannot be the whole answer either.', '可这也不可能是全部答案。'],
      ['New York and Beijing are both near the sea, and both have cold winters.', '纽约和北京都离海不远，冬天却都很冷。'],
      ['Being near the ocean only helps if the air from the ocean actually reaches you.', '靠海只有在海上的空气真的吹到你这里时，才帮得上忙。'],
    ],

    { h: '3. Which way the wind blows', zh: '3. 风往哪边吹' },
    [
      ['Between about 30 and 60 degrees north, where most of Europe, northern China and the United States lie, the winds mostly blow from west to east.', '在北纬大约 30 度到 60 度之间，也就是欧洲大部分、中国北方和美国所在的地方，风大多是从西往东吹的。'],
      ['These are called the [[westerlies|西风带]], and they are named after the direction they come from.', '这叫西风带{westerlies}，风是按它吹来的方向命名的。'],
      ['Now put the pieces together.', '现在把几块拼起来。'],
    ],
    [
      ['A city on the west coast of a continent receives wind that has just crossed thousands of kilometres of ocean.', '大陆西海岸的城市，吹来的风刚刚越过几千公里的海洋。'],
      ['In winter that air has been warmed by the ocean radiator, so the city is mild: London, Paris, and also Vancouver on the Pacific.', '冬天，这股空气被海洋这个暖气片加热过，所以城市很温和：伦敦、巴黎，还有太平洋边上的温哥华。'],
      ['A city on the east coast receives wind that has just crossed thousands of kilometres of frozen land.', '大陆东海岸的城市，吹来的风刚刚越过几千公里冰冻的陆地。'],
      ['The ocean is right next to it, but the wind is blowing the wrong way: New York, Beijing and Harbin.', '海就在旁边，可风吹的方向不对：纽约、北京、哈尔滨都是这样。'],
    ],
    {
      box: [
        ['This gives a general rule: in the middle latitudes, the west coasts of continents have mild winters, and the east coasts have cold ones.', '由此得出一条普遍规律：在中纬度地区，大陆的西海岸冬天温和，东海岸冬天寒冷。'],
        ['Notice Vancouver in the table.', '注意表里的温哥华。'],
        ['It is at nearly the same latitude as Harbin and is about twenty degrees warmer in January, and there is no Gulf Stream in the Pacific.', '它跟哈尔滨的纬度差不多，1 月却暖和二十度左右，而太平洋里并没有墨西哥湾流。'],
        ['Whatever makes Vancouver mild cannot be the Gulf Stream, and it is probably the same thing that makes London mild.', '不管是什么让温哥华这么暖和，都不可能是墨西哥湾流，而且很可能就是让伦敦暖和的那个东西。'],
      ],
    },
    [
      ['Northern China has an extra problem.', '中国北方还多了一个问题。'],
      ['In winter, a huge mass of very cold, heavy air builds up over Siberia and Mongolia, and it flows outward toward the coast as the winter monsoon.', '冬天，西伯利亚和蒙古上空会堆起一大团又冷又重的空气，它作为冬季风向海岸方向流出来。'],
      ['So Beijing and Harbin are not just missing the ocean’s warmth: they are directly in the path of some of the coldest air on Earth.', '所以北京和哈尔滨不只是缺了海洋的温暖：它们正好挡在地球上最冷的一股空气的去路上。'],
    ],

    { h: '4. So what does the Gulf Stream do?', zh: '4. 那墨西哥湾流到底干了什么？' },
    [
      ['The Gulf Stream is real, and it does carry a lot of heat north across the Atlantic.', '墨西哥湾流是真的，它确实把大量的热量带过了大西洋往北送。'],
      ['The question the scientists asked was narrower: how much of the winter difference between Europe and the east coast of North America does it explain?', '科学家们问的问题更窄：欧洲和北美东海岸冬天的温差，有多少是它造成的？'],
      ['The team, led by Richard Seager at Columbia University, did two things.', '这个团队由哥伦比亚大学的理查德·西格领导，他们做了两件事。'],
    ],
    [
      ['First, they measured where the heat that the Atlantic gives off in winter actually comes from.', '第一，他们测量了大西洋冬天放出的热量，到底是从哪来的。'],
      ['Most of it turned out to be heat the ocean had stored locally during the summer, the radiator effect from section 2, not heat carried in from the tropics by currents.', '结果发现，大部分是海洋夏天在当地储存起来的热量，也就是第 2 部分说的暖气片效应，而不是洋流从热带运来的热量。'],
      ['Second, they ran a climate model of the atmosphere in two versions: one where the ocean could move heat around, and one where the ocean was just a still layer of water that could store heat but not carry it.', '第二，他们把大气的气候模型跑了两个版本：一个版本里海洋可以把热量运来运去；另一个版本里，海洋只是一层不动的水，能储存热量，却不能运送热量。'],
      ['The winter temperature difference between Europe and North America came out essentially the same in both.', '欧洲和北美冬天的温差，在两个版本里算出来基本一样。'],
    ],
    [
      ['They also found an unexpected player: the Rocky Mountains.', '他们还发现了一个意想不到的角色：落基山脉。'],
      ['When the westerlies hit the Rockies, the flow of air starts to bend north and south in a long wave.', '西风撞上落基山脉以后，气流开始一南一北地拐弯，形成一道很长的波。'],
      ['That wave tends to pull cold air down from the Arctic onto eastern North America, and push mild air up from the southwest onto Europe.', '这道波往往把北极的冷空气往下拉到北美东部，又把西南方向的温和空气往上推到欧洲。'],
      ['When they removed the mountains from the model, the contrast between the two sides of the Atlantic became much weaker.', '他们在模型里把这些山去掉以后，大西洋两岸的冷暖差别就弱了很多。'],
    ],
    {
      box: [
        ['This is a good example of how science actually works.', '这是一个很好的例子，说明科学实际上是怎么运作的。'],
        ['The textbook story was not invented: the Gulf Stream does carry heat, and many experts still argue that it matters more for places further north, such as Norway, and for sea ice in the Arctic.', '教科书里的说法不是编出来的：墨西哥湾流确实运送热量，而且很多专家至今仍然认为，对更北的地方，比如挪威，以及对北极的海冰来说，它的作用更大。'],
        ['What changed was the size of the effect and the cause of the London–Harbin gap.', '改变的是这个效应有多大，以及伦敦和哈尔滨差距的真正原因。'],
        ['A story can be true and still be the wrong explanation for the thing you are trying to explain.', '一个说法可以是真的，却仍然不是你要解释的那件事的正确解释。'],
      ],
    },

    { h: '5. Use it on a map', zh: '5. 拿着它去看地图' },
    [
      ['You now have three questions that explain most of the winter map of the world.', '你现在有了三个问题，能解释世界冬季气温地图的大部分。'],
      ['How far from the equator is it?', '它离赤道多远？'],
      ['How close is it to the sea?', '它离海多近？'],
      ['And does the wind come from the sea or from the land?', '风是从海上吹来的，还是从陆地上吹来的？'],
    ],
    [
      ['Try them on Madrid and Beijing.', '用它们试试马德里和北京。'],
      ['Same latitude, so the same sunlight.', '纬度一样，所以阳光一样。'],
      ['Madrid sits on a high, dry plateau in the middle of Spain, but the winter winds reaching it come mainly off the Atlantic, so it stays mild.', '马德里在西班牙中部一块又高又干的高原上，但吹到那里的冬风主要来自大西洋，所以依然温和。'],
      ['Beijing is near the sea, but its winter wind comes from Siberia, so it is colder by about nine degrees.', '北京离海不远，可它冬天的风来自西伯利亚，所以冷了大约九度。'],
    ],

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['The westerlies did most of the work in this episode, but we have not asked why the wind blows from the west in the first place.', '这一集里大部分功劳都是西风的，可我们还没问过：风为什么偏偏从西边吹来？'],
      ['The same answer explains why the world’s great deserts, the Sahara, the Arabian and the Australian, all sit at about 30 degrees from the equator.', '同一个答案，还能解释为什么世界上的几大沙漠，撒哈拉、阿拉伯和澳大利亚的沙漠，都在离赤道大约 30 度的地方。'],
      ['Episode 2: the giant circulation of air that wraps around the planet.', '第 2 集：环绕整个地球的那套巨大的空气环流。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['West coasts in the mid-latitudes tend to have mild winters because the wind comes off the ocean.', '中纬度的西海岸冬天往往比较温和，因为风是从海上吹来的。'],
    ['The ocean works like a giant radiator: it stores heat in summer and releases it in winter.', '海洋就像一个巨大的暖气片：夏天储存热量，冬天释放热量。'],
    ['That explanation is true, but it doesn’t explain this.', '那个解释本身没错，可它解释不了这件事。'],
  ],
  quiz: [
    {
      q: ['Madrid and Beijing are at almost the same latitude. Why is Beijing so much colder in January?', '马德里和北京几乎在同一纬度。为什么北京 1 月冷得多？'],
      opts: [['Beijing’s winter wind comes from frozen Siberia, while Madrid’s comes mainly from the Atlantic.', '北京冬天的风来自冰冻的西伯利亚，马德里的主要来自大西洋'], ['Beijing gets less sunlight.', '北京的阳光更少'], ['Madrid is closer to the equator by 20 degrees.', '马德里离赤道近 20 度']],
      a: 0,
      e: ['Same sunlight, different wind. Latitude decides what arrives; wind and sea decide what is kept.', '阳光一样，风不一样。纬度决定送来多少，风和海决定留住多少。'],
    },
    {
      q: ['Why is Vancouver the strongest evidence against the simple Gulf Stream story?', '为什么温哥华是反驳「全靠墨西哥湾流」最有力的证据？'],
      opts: [['It is about as far north as Harbin and much milder, with no Gulf Stream nearby.', '它跟哈尔滨差不多靠北，却温和得多，而且附近没有墨西哥湾流'], ['It is colder than London.', '它比伦敦冷'], ['It is on the Atlantic.', '它在大西洋边上']],
      a: 0,
      e: ['A west coast with westerly winds off the ocean is mild even without a Gulf Stream.', '有西风从海上吹来的西海岸，就算没有墨西哥湾流也很温和。'],
    },
    {
      q: ['What did Seager’s team find about the heat the Atlantic gives off in winter?', '西格的团队发现，大西洋冬天放出的热量主要是什么？'],
      opts: [['Mostly heat stored locally during summer, not heat carried from the tropics.', '主要是夏天在当地储存的热量，而不是从热带运来的'], ['Mostly heat from undersea volcanoes.', '主要来自海底火山'], ['Mostly heat from cities.', '主要来自城市']],
      a: 0,
      e: ['That is the radiator effect. The ocean does not need to move heat to keep Europe mild in winter.', '这就是暖气片效应。海洋不需要把热量运来运去，也能让欧洲冬天温和。'],
    },
    {
      q: ['Which statement best describes the current scientific view?', '下面哪句话最准确地描述了现在的科学看法？'],
      opts: [['The Gulf Stream carries real heat, but winds and mountains explain most of the Europe–North America winter gap.', '墨西哥湾流确实运送热量，但欧洲和北美冬季温差的大部分要靠风和山脉来解释'], ['The Gulf Stream does not exist.', '墨西哥湾流不存在'], ['The Gulf Stream explains everything.', '墨西哥湾流能解释一切']],
      a: 0,
      e: ['Many scientists still think the current matters more further north and for Arctic sea ice. The debate is about size, not existence.', '很多科学家仍然认为，这股洋流对更北的地方和北极海冰影响更大。争论的是影响有多大，而不是它存不存在。'],
    },
  ],
  questions: [
    {
      q: ['Exercise 1. Seattle and Montreal are both at about 46–47 degrees north. Which one would you expect to have the colder winter, and why? Use the three questions from section 5.', '练习 1。西雅图和蒙特利尔都在北纬 46–47 度左右。你觉得哪个冬天更冷？为什么？用第 5 部分的三个问题来回答。'],
      a: [
        ['Same latitude, so about the same sunlight.', '纬度一样，所以阳光差不多。'],
        ['Seattle is on the west coast of North America, so its winter wind comes off the Pacific; Montreal is in the east, far inland, and its wind crosses the frozen continent.', '西雅图在北美西海岸，冬天的风从太平洋吹来；蒙特利尔在东边、深入内陆，风要越过冰冻的大陆。'],
        ['So Montreal should be much colder, and it is: its January average is around −9°C, while Seattle’s is around 5°C.', '所以蒙特利尔应该冷得多，事实也是这样：它 1 月平均大约 −9°C，西雅图大约 5°C。'],
      ],
    },
    {
      q: ['Exercise 2. Summers work the other way round. Would you expect London or Harbin to have the hotter July? Explain using heat capacity.', '练习 2。夏天的情况正好相反。你觉得伦敦和哈尔滨哪个 7 月更热？用热容来解释。'],
      a: [
        ['Harbin, because it has a continental climate.', '哈尔滨，因为它是大陆性气候。'],
        ['Land heats up quickly in summer, while London’s air comes off an ocean that is still relatively cool.', '陆地夏天升温很快，而伦敦的空气来自一片还比较凉的海洋。'],
        ['In fact Harbin’s July averages about 23°C and London’s about 19°C, so Harbin is hotter, but the bigger difference is the swing: about 40 degrees between January and July in Harbin, and only about 14 in London. The size of that yearly swing is the clearest sign of a continental climate.', '实际上哈尔滨 7 月平均约 23°C，伦敦约 19°C，哈尔滨确实更热；但更大的差别在于冷热的幅度：哈尔滨从 1 月到 7 月相差大约 40 度，伦敦只有 14 度左右。一年里冷热差得多大，才是大陆性气候最明显的标志。'],
      ],
    },
  ],
  words: {
    harbin:      ['', '哈尔滨'],
    madrid:      ['', '马德里'],
    vancouver:   ['/vænˈkuːvər/', '温哥华'],
    seattle:     ['/siˈætl/', '西雅图'],
    montreal:    ['/ˌmɑːntriˈɔːl/', '蒙特利尔'],
    latitude:    ['/ˈlætɪtuːd/', '纬度'],
    equator:     ['/ɪˈkweɪtər/', '赤道'],
    tropics:     ['/ˈtrɑːpɪks/', '热带'],
    gulf:        ['/ɡʌlf/', '海湾；Gulf Stream 墨西哥湾流'],
    torch:       ['/tɔːrtʃ/', '手电筒'],
    slant:       ['/slænt/', '倾斜'],
    radiator:    ['/ˈreɪdieɪtər/', '暖气片'],
    capacity:    ['/kəˈpæsəti/', '容量；heat capacity 热容'],
    maritime:    ['/ˈmærɪtaɪm/', '海洋的，海上的'],
    continental: ['/ˌkɑːntɪˈnentl/', '大陆的'],
    westerlies:  ['/ˈwestərliz/', '西风带'],
    siberia:     ['/saɪˈbɪriə/', '西伯利亚'],
    mongolia:    ['/mɑːŋˈɡoʊliə/', '蒙古'],
    monsoon:     ['/mɑːnˈsuːn/', '季风'],
    seager:      ['', '西格（气候科学家 Richard Seager）'],
    columbia:    ['/kəˈlʌmbiə/', '哥伦比亚（大学）'],
    rockies:     ['/ˈrɑːkiz/', '落基山脉'],
    arctic:      ['/ˈɑːrktɪk/', '北极（的）'],
    plateau:     ['/plæˈtoʊ/', '高原'],
    sahara:      ['/səˈhærə/', '撒哈拉（沙漠）'],
    circulation: ['/ˌsɜːrkjəˈleɪʃn/', '环流，循环'],
    contrast:    ['/ˈkɑːntræst/', '对比，差别'],
  },
});
