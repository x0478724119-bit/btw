// 连续剧「物理：从苹果到宇宙」第 1 集。牛顿的月球检验：平方反比、向心加速度、牛顿大炮、轨道就是一直在下落、空间站里的失重
addContent('phys-moon', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "苹果": "apple", "月亮": "Moon", "地球": "Earth", "太阳": "Sun",
    "牛顿": "Newton", "引力": "gravity", "重力": "gravity", "速度": "speed",
    "加速度": "acceleration", "距离": "distance", "半径": "radius", "轨道": "orbit",
    "大炮": "cannon", "炮弹": "cannonball", "山顶": "mountaintop", "空气": "air",
    "宇航员": "astronauts", "空间站": "space station", "电梯": "lift", "体重秤": "scale",
    "毫米": "millimetres", "公里": "kilometres", "圆周运动": "circular motion",
    "直线": "straight line", "计算": "calculation", "规律": "law", "猜想": "guess",
    "朋友": "friend", "花园": "garden", "望远镜": "telescope", "潮汐": "tides",
  },
  summary: '牛顿看到苹果落地，问的不是「苹果为什么会掉」，而是「月亮为什么不掉」。他算出来的答案是：月亮其实一直在掉，每秒大约掉 1.4 毫米。空间站里的宇航员飘起来，也不是因为那里没有重力。第 1 集：引力，和人类第一次用一条规律同时解释天和地。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲物理和历史，事实来源见下；计算用的是标准天文数据，结果取约数',
    facts: [
      ['William Stukeley, Memoirs of Sir Isaac Newton’s Life (1752)：牛顿 1726 年讲的苹果故事', 'https://en.wikipedia.org/wiki/Isaac_Newton%27s_apple_tree'],
      ['Newton, Principia (1687)，第三卷命题 4：月球受的力就是重力', 'https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica'],
      ['NASA：What Is Microgravity?（空间站高度的重力约为地面的 90%）', 'https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-microgravity-grades-5-8/'],
      ['Wikipedia：Newton’s cannonball', 'https://en.wikipedia.org/wiki/Newton%27s_cannonball'],
    ],
  },
  guide: '这是「物理：从苹果到宇宙」第 1 集，会用到一点乘除法，每一步都写出来了。读完你会：① 知道牛顿那个苹果的故事里，真正的问题是什么；② 会算月亮的加速度，亲手验证「引力和距离的平方成反比」；③ 明白「轨道」其实就是一直在下落、却一直落不到地面；④ 用一道题算出发射卫星需要多快；⑤ 改掉一个常见的误解：宇航员失重，不是因为太空里没有重力。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['Everyone knows the story: Isaac Newton sees an apple fall and discovers gravity.', '这个故事人人都知道：艾萨克·牛顿看到一个苹果掉下来，发现了引力。'],
      ['The story is roughly true; Newton told it himself to a friend, William Stukeley, in 1726, near the end of his life.', '这个故事大致是真的：牛顿晚年，1726 年，亲口把它讲给朋友威廉·斯蒂克利听过。'],
      ['But the version everyone knows leaves out the actual question.', '可大家都知道的那个版本，漏掉了真正的问题。'],
      ['People had always known that apples fall; nobody needed Newton for that.', '苹果会掉下来，人们早就知道，用不着牛顿来告诉。'],
      ['What Newton asked was: if the pull of the Earth reaches the top of the tree, how far does it reach, and does it reach the Moon?', '牛顿问的是：既然地球的拉力能够到树顶，那它能够到多远？能不能够到月亮？'],
      ['And if it does, why does the Moon not fall?', '如果能，月亮为什么不掉下来？'],
    ],

    { h: '1. The Moon is falling', zh: '1. 月亮正在往下掉' },
    [
      ['Start with something everyday: throw a ball sideways and it curves down to the ground.', '从一件日常的事开始：把球横着扔出去，它会画一道弧线落到地上。'],
      ['Throw it harder, and it lands further away.', '扔得更用力，它就落得更远。'],
      ['Newton imagined a cannon on top of a very high mountain, high enough to be above the air, firing cannonballs sideways faster and faster.', '牛顿想象了一座极高的山，高到在空气之上，山顶上有一门大炮，把炮弹横着越打越快。'],
      ['Each cannonball falls toward the Earth, but the Earth is round, so the ground also curves away beneath it.', '每一颗炮弹都在朝地球下落，可地球是圆的，所以地面也在它下方弯了下去。'],
      ['At one particular speed, the ball falls exactly as fast as the ground curves away, and it never lands.', '到了某个特定的速度，炮弹下落的速度正好跟地面弯下去的速度一样，它就永远落不了地。'],
      ['It keeps falling around the Earth forever.', '它会绕着地球一直落下去，永远。'],
    ],
    {
      box: [
        ['That is what an [[orbit|轨道]] is: not floating, but falling continuously while moving sideways fast enough to keep missing the ground.', '这就是轨道{orbit}：不是飘着，而是一边不停地下落，一边横向飞得够快，快到一直落不到地面上。'],
        ['Without gravity, the Moon would move off in a straight line into space.', '没有引力，月亮就会沿着一条直线飞进太空。'],
        ['Gravity pulls it a little toward the Earth every second, bending the straight line into a circle.', '引力每一秒都把它往地球拉一点，把直线弯成了一个圆。'],
        ['So the Moon is falling all the time; it is just moving sideways too fast to ever hit us.', '所以月亮一直在往下掉，只是它横向跑得太快，永远砸不到我们。'],
      ],
    },

    { h: '2. How fast is the Moon falling?', zh: '2. 月亮掉得有多快？' },
    [
      ['Newton then did something nobody had done before: he calculated it.', '接着牛顿做了一件前人没做过的事：他把它算了出来。'],
      ['Any object moving in a circle is constantly being pulled toward the centre, and that pull gives it a [[centripetal acceleration|向心加速度]].', '任何做圆周运动的物体，都一直被往圆心拉，这个拉力给了它一个向心加速度{centripetal acceleration}。'],
      ['For a circle of radius r travelled once every time T, that acceleration is 4π² × r ÷ T².', '对一个半径为 r、每 T 时间转一圈的圆来说，这个加速度是 4π² × r ÷ T²。'],
      ['You only need two numbers about the Moon.', '关于月亮，你只需要两个数字。'],
    ],
    {
      table: {
        caption: 'Two numbers about the Moon', zh: '关于月亮的两个数字',
        head: ['', 'Value', 'In standard units'],
        rows: [
          ['Distance from Earth (r)', 'about 384,400 km', '3.844 × 10⁸ m'],
          ['Time for one orbit (T)', 'about 27.3 days', '2.36 × 10⁶ s'],
        ],
      },
    },
    [
      ['Put them in: 4π² is about 39.5, so the acceleration is 39.5 × 3.844 × 10⁸ ÷ (2.36 × 10⁶)².', '代进去：4π² 约等于 39.5，所以加速度是 39.5 × 3.844 × 10⁸ ÷ (2.36 × 10⁶)²。'],
      ['That comes to about 0.0027 metres per second per second.', '算出来大约是每秒每秒 0.0027 米。'],
      ['In one second, an object with that acceleration falls half of it, about 1.4 millimetres.', '有这个加速度的物体，一秒钟下落的距离是它的一半，大约 1.4 毫米。'],
      ['So every second, the Moon moves about a kilometre sideways and falls about 1.4 millimetres toward us.', '所以每一秒，月亮横着走大约一公里，同时朝我们掉大约 1.4 毫米。'],
    ],

    { h: '3. The test: one law for the sky and the ground', zh: '3. 检验：天上和地上是同一条规律' },
    [
      ['Now compare that with the apple.', '现在把它跟苹果比一比。'],
      ['Near the ground, falling objects speed up by about 9.8 metres per second every second: that is the acceleration due to gravity, g.', '在地面附近，下落的物体每秒钟速度增加大约 9.8 米每秒：这就是重力加速度 g。'],
      ['The Moon’s acceleration is about 3,600 times smaller.', '月亮的加速度要小大约 3,600 倍。'],
      ['Newton had a guess for why.', '牛顿对原因有一个猜想。'],
    ],
    [
      ['He suspected that gravity gets weaker with distance according to an [[inverse square law|平方反比定律]]: twice as far away, a quarter as strong; ten times as far, a hundredth as strong.', '他猜想，引力会随着距离变弱，遵循平方反比定律{inverse square law}：远两倍，强度变成四分之一；远十倍，强度变成百分之一。'],
      ['Distance here is measured from the centre of the Earth.', '这里的距离，是从地心算起的。'],
      ['The apple is about one Earth radius from the centre, and the Moon is about 60 Earth radii away.', '苹果离地心大约一个地球半径，月亮离地心大约 60 个地球半径。'],
      ['If the law is right, the Moon’s acceleration should be smaller by 60 × 60 = 3,600.', '如果这条规律是对的，月亮的加速度应该小 60 × 60 = 3,600 倍。'],
      ['9.8 ÷ 3,600 is about 0.0027, exactly what the Moon’s orbit says.', '9.8 ÷ 3,600 大约是 0.0027，正好就是月亮轨道算出来的数。'],
    ],
    {
      box: [
        ['This is why the apple story matters.', '这就是苹果的故事为什么重要。'],
        ['For two thousand years, people had believed that the heavens followed different rules from the Earth.', '两千年来，人们一直相信，天上的东西遵循的是跟地上不同的规则。'],
        ['With two measurements and one guess, Newton showed that the force that drops an apple in an English garden is the same force that holds the Moon in its orbit.', '靠两个测量值和一个猜想，牛顿证明了：让英国花园里的苹果掉下来的力，跟把月亮维持在轨道上的力，是同一个力。'],
        ['He published the calculation in 1687, in the Principia, and it became the model for all of physics since: write down a law, predict a number, and check it against the world.', '他在 1687 年的《自然哲学的数学原理》里发表了这个计算，从此它成了整个物理学的样板：写下一条规律，预测一个数字，再拿它去跟世界对照。'],
      ],
    },
    [
      ['A detail for honesty: when Newton first tried this, in the 1660s, the agreement was only rough, partly because the best value for the size of the Earth at the time was not accurate.', '为了诚实，补一个细节：牛顿 17 世纪 60 年代第一次尝试这个计算时，结果只是大致吻合，部分原因是当时对地球大小的最好测量还不准确。'],
      ['A good guess still needs good data before it becomes a law.', '一个好的猜想，还需要好的数据，才能变成一条定律。'],
    ],

    { h: '4. How fast to never land', zh: '4. 要多快才能永远落不了地' },
    [
      ['We can now answer the cannon question with the same idea.', '现在可以用同样的思路，回答那个大炮的问题。'],
      ['For something moving in a circle at speed v, the centripetal acceleration can also be written as v² ÷ r.', '对一个以速度 v 做圆周运动的物体，向心加速度也可以写成 v² ÷ r。'],
      ['For a cannonball skimming just above the Earth, the acceleration must equal g, and r is the Earth’s radius, about 6,371 kilometres.', '对一颗贴着地球飞的炮弹来说，这个加速度必须等于 g，r 就是地球半径，大约 6,371 公里。'],
      ['So v² = g × r = 9.8 × 6,371,000, and v is about 7,900 metres per second.', '所以 v² = g × r = 9.8 × 6,371,000，v 大约是每秒 7,900 米。'],
    ],
    [
      ['That is almost 8 kilometres every second, about 23 times the speed of sound.', '这差不多是每秒 8 公里，大约是声速的 23 倍。'],
      ['It is the reason rockets are so huge: almost all of their fuel is spent not on going up, but on going sideways fast enough.', '这就是火箭为什么那么巨大：它们几乎所有的燃料，都不是花在往上飞上，而是花在横向飞得足够快上。'],
      ['The International Space Station travels at about 7.7 kilometres per second and goes around the Earth in about an hour and a half.', '国际空间站的速度大约是每秒 7.7 公里，大约一个半小时绕地球一圈。'],
    ],
    { img: { src: 'images/iss.jpg', alt: 'The International Space Station above the blue Earth', caption: 'The International Space Station over the South Pacific, 2016. It is falling around the Earth at about 7.7 km per second.', zh: '2016 年，南太平洋上空的国际空间站。它正以每秒约 7.7 公里的速度绕着地球「下落」。', credit: 'Photo: NASA · Public domain', link: 'https://commons.wikimedia.org/wiki/File:ISS-46_International_Space_Station_over_the_South_Pacific.jpg' } },

    { h: '5. Why astronauts float', zh: '5. 宇航员为什么会飘起来' },
    [
      ['Ask most people why astronauts float in the space station and they will say: there is no gravity in space.', '问大多数人宇航员在空间站里为什么会飘，他们会说：太空里没有重力。'],
      ['Use the inverse square law to check.', '用平方反比定律检查一下。'],
      ['The station is about 400 kilometres up, so its distance from the centre of the Earth is about 6,771 kilometres instead of 6,371.', '空间站在大约 400 公里高的地方，所以它离地心大约 6,771 公里，而不是 6,371 公里。'],
      ['Gravity there is weaker by (6,371 ÷ 6,771)², which is about 0.89.', '那里的重力弱了 (6,371 ÷ 6,771)² 倍，大约是 0.89。'],
      ['So gravity at the space station is still almost 90% as strong as on the ground.', '所以空间站那里的重力，仍然有地面上的将近 90%。'],
    ],
    [
      ['Astronauts float for the same reason the Moon does not crash: they are falling.', '宇航员会飘，跟月亮不会砸下来是同一个原因：他们在下落。'],
      ['The station, the astronauts and everything inside are all falling around the Earth together, at the same rate.', '空间站、宇航员和里面的一切东西，都在以同样的速度一起绕着地球下落。'],
      ['Nothing pushes against anything else, so a scale under an astronaut’s feet would read zero.', '谁也不压着谁，所以宇航员脚下要是放一个体重秤，读数会是零。'],
      ['You have felt a tiny version of this at the top of a roller coaster, or in a lift that suddenly starts going down.', '你在过山车的最高点，或者电梯突然往下走的时候，就体验过它的一个小小的版本。'],
      ['This is why scientists call it [[free fall|自由落体]] or microgravity, not zero gravity.', '这就是为什么科学家把它叫作自由落体{free fall}或者微重力，而不是零重力。'],
    ],

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['If the Moon pulls on the Earth as the Earth pulls on the Moon, the oceans should feel it.', '既然地球拉着月亮，月亮也拉着地球，那海洋应该会感觉到。'],
      ['They do: that is what tides are.', '它们确实感觉到了：这就是潮汐。'],
      ['But there is a puzzle that the simple picture cannot explain: most coasts get two high tides a day, not one, and the second one is on the side of the Earth facing away from the Moon.', '可是有一个谜，简单的画面解释不了：大多数海岸一天有两次涨潮，而不是一次，而且第二次发生在地球背对着月亮的那一边。'],
      ['Why would the Moon pull water away from itself?', '月亮为什么会把水往远离自己的方向拉？'],
      ['Episode 2: tides, and why the Moon is slowly moving away from us.', '第 2 集：潮汐，以及月亮为什么在慢慢离我们远去。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['An orbit is just falling while moving sideways fast enough to keep missing the ground.', '轨道就是一边下落，一边横向跑得够快，快到一直落不到地面。'],
    ['Gravity follows an inverse square law: double the distance, a quarter of the pull.', '引力遵循平方反比定律：距离加倍，拉力变成四分之一。'],
    ['Astronauts aren’t weightless because there’s no gravity; they’re in free fall.', '宇航员失重不是因为没有重力，而是因为他们在自由落体。'],
  ],
  quiz: [
    {
      q: ['What was Newton’s real question in the apple story?', '在苹果的故事里，牛顿真正的问题是什么？'],
      opts: [['Whether the force pulling the apple also reaches the Moon.', '拉苹果的那个力，能不能也够到月亮'], ['Why apples fall.', '苹果为什么会掉'], ['Whether apples are heavier than leaves.', '苹果是不是比叶子重']],
      a: 0,
      e: ['Everyone knew apples fall. The question was whether the same force rules the sky.', '人人都知道苹果会掉。问题是同一个力是不是也管着天上。'],
    },
    {
      q: ['The Moon is about 60 Earth radii away. If gravity follows an inverse square law, how much weaker is it at the Moon than at the ground?', '月亮离地心大约 60 个地球半径。如果引力遵循平方反比定律，月亮那里的引力比地面弱多少？'],
      opts: [['About 3,600 times', '大约 3,600 倍'], ['About 60 times', '大约 60 倍'], ['About 120 times', '大约 120 倍']],
      a: 0,
      e: ['60 × 60 = 3,600, and 9.8 ÷ 3,600 ≈ 0.0027 m/s², matching the Moon’s orbit.', '60 × 60 = 3,600，9.8 ÷ 3,600 ≈ 0.0027 米每二次方秒，跟月亮轨道算出来的一致。'],
    },
    {
      q: ['Why do astronauts float in the space station?', '宇航员为什么会在空间站里飘起来？'],
      opts: [['They and the station are falling around the Earth together.', '他们和空间站在一起绕着地球下落'], ['There is no gravity 400 km up.', '400 公里高的地方没有重力'], ['The station has special machines that cancel gravity.', '空间站有抵消重力的特殊机器']],
      a: 0,
      e: ['Gravity there is about 90% of ground level. They are in free fall.', '那里的重力约为地面的 90%。他们处在自由落体中。'],
    },
    {
      q: ['Why do rockets need so much fuel?', '火箭为什么需要那么多燃料？'],
      opts: [['To reach about 8 km per second sideways, not just to go up.', '为了横向达到每秒约 8 公里，而不只是为了往上飞'], ['Because space is cold.', '因为太空很冷'], ['Because the air is very thick in space.', '因为太空里空气很稠密']],
      a: 0,
      e: ['Height alone is not enough; staying up means falling around the Earth fast enough.', '光有高度不够；要留在上面，就得足够快地绕着地球下落。'],
    },
  ],
  questions: [
    {
      q: ['Problem 1. The space station orbits about 6,771 km from the Earth’s centre, where gravity is about 0.89 × 9.8 ≈ 8.7 m/s². Use v² = g × r to estimate its speed, then estimate how long one orbit takes (the distance around is 2π × r).', '练习 1。空间站在离地心大约 6,771 公里的地方绕地球转，那里的重力约是 0.89 × 9.8 ≈ 8.7 米每二次方秒。用 v² = g × r 估算它的速度，再估算绕一圈要多久（一圈的长度是 2π × r）。'],
      a: [
        ['v² = 8.7 × 6,771,000 ≈ 5.9 × 10⁷, so v ≈ 7,700 m/s, about 7.7 km per second, which matches the real figure.', 'v² = 8.7 × 6,771,000 ≈ 5.9 × 10⁷，所以 v ≈ 7,700 米每秒，约每秒 7.7 公里，跟真实数据一致。'],
        ['The distance around is 2π × 6,771 km ≈ 42,500 km.', '一圈的长度是 2π × 6,771 公里 ≈ 42,500 公里。'],
        ['42,500 ÷ 7.7 ≈ 5,500 seconds, about 92 minutes: astronauts see about 16 sunrises a day.', '42,500 ÷ 7.7 ≈ 5,500 秒，大约 92 分钟：宇航员一天能看到大约 16 次日出。'],
      ],
    },
    {
      q: ['Problem 2. Mars has about half the radius of the Earth and about a tenth of its mass. Gravity at the surface depends on mass ÷ radius². Roughly how strong is gravity on the surface of Mars compared with the Earth?', '练习 2。火星的半径大约是地球的一半，质量大约是地球的十分之一。表面重力取决于「质量 ÷ 半径²」。火星表面的重力大约是地球的多少？'],
      a: [
        ['Mass is about 0.1 times; radius is about 0.5 times, so radius² is about 0.25 times.', '质量约为 0.1 倍；半径约为 0.5 倍，所以半径的平方约为 0.25 倍。'],
        ['0.1 ÷ 0.25 = 0.4, so gravity on Mars is about 40% of the Earth’s.', '0.1 ÷ 0.25 = 0.4，所以火星的重力大约是地球的 40%。'],
        ['The real value is about 38%, so this rough estimate is very close: someone who weighs 50 kg on a bathroom scale on Earth would read about 19 kg on Mars.', '真实值约为 38%，所以这个粗略估算非常接近：在地球上体重秤显示 50 公斤的人，在火星上大约显示 19 公斤。'],
      ],
    },
  ],
  words: {
    isaac:        ['/ˈaɪzək/', '艾萨克（牛顿的名字）'],
    stukeley:     ['', '斯蒂克利（牛顿的朋友 William Stukeley）'],
    cannon:       ['/ˈkænən/', '大炮'],
    cannonball:   ['/ˈkænənbɔːl/', '炮弹'],
    cannonballs:  ['/ˈkænənbɔːlz/', '炮弹（复数）'],
    orbit:        ['/ˈɔːrbɪt/', '轨道；绕……运行'],
    orbits:       ['/ˈɔːrbɪts/', '绕……运行；轨道'],
    centripetal:  ['/senˈtrɪpɪtl/', '向心的'],
    acceleration: ['/əkˌseləˈreɪʃn/', '加速度'],
    inverse:      ['/ˌɪnˈvɜːrs/', '相反的；inverse square law 平方反比定律'],
    radii:        ['/ˈreɪdiaɪ/', '半径（radius 的复数）'],
    radius:       ['/ˈreɪdiəs/', '半径'],
    principia:    ['/prɪnˈsɪpiə/', '《自然哲学的数学原理》（牛顿的书）'],
    skimming:     ['/ˈskɪmɪŋ/', '掠过，贴着……飞'],
    microgravity: ['/ˌmaɪkroʊˈɡrævəti/', '微重力'],
    roller:       ['/ˈroʊlər/', 'roller coaster 过山车'],
    coaster:      ['/ˈkoʊstər/', 'roller coaster 过山车'],
    tides:        ['/taɪdz/', '潮汐'],
    sunrises:     ['/ˈsʌnraɪzɪz/', '日出'],
  },
});
