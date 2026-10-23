// 「月亮其实一直在往下掉」的简单英文版（入门 A2）：短句、常用词，保留「每秒掉 1.4 毫米」「远 60 倍，弱 3,600 倍」「宇航员在下落」
addContent('phys-moon-easy', {
  easyOf: 'phys-moon',
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "苹果": "apple", "月亮": "Moon", "地球": "Earth",
    "牛顿": "Newton", "朋友": "friend", "大炮": "cannon", "山顶": "mountain top",
    "地面": "ground", "宇航员": "astronauts", "空间站": "space station", "电梯": "lift",
    "火箭": "rockets", "数字": "numbers", "秘密": "secret", "毫米": "millimetres",
  },
  summary: '牛顿看到苹果落地，问的是：月亮为什么不掉下来？答案是：它一直在掉。简单英文版：短句子、常用词，一样能看懂那个漂亮的计算。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲物理和历史，事实来源见完整版；数字取约数',
    facts: [
      ['Newton, Principia (1687)，第三卷命题 4', 'https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica'],
      ['NASA：What Is Microgravity?', 'https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-microgravity-grades-5-8/'],
    ],
  },
  guide: '这是「物理：从苹果到宇宙」第 1 集的简单英文版。读完你会：① 知道牛顿那个苹果故事里真正的问题；② 明白月亮为什么一直在掉，却砸不到我们；③ 知道宇航员飘起来，并不是因为太空里没有重力。',
  paragraphs: [
    { h: 'The apple and the Moon', zh: '苹果和月亮' },
    [
      ['You know the story: Isaac Newton sees an apple fall from a tree.', '这个故事你知道：艾萨克·牛顿看到一个苹果从树上掉下来。'],
      ['The story is true. Newton told it to a friend when he was old.', '这个故事是真的。牛顿老了以后，亲口讲给一个朋友听过。'],
      ['But everyone already knew that apples fall.', '可是苹果会掉下来，人人早就知道。'],
      ['Newton asked a new question: the Earth pulls the apple, so does it also pull the Moon?', '牛顿问的是一个新问题：地球拉着苹果，那它是不是也拉着月亮？'],
      ['And if it does, why does the Moon not fall down?', '如果是的话，月亮为什么不掉下来？'],
    ],

    { h: 'The Moon is falling', zh: '月亮正在往下掉' },
    [
      ['Throw a ball. It goes forward, and it falls to the ground.', '扔一个球。它往前飞，然后掉到地上。'],
      ['Throw it faster. It goes farther before it falls.', '扔得更快，它会飞得更远才落地。'],
      ['Now think of a very big [[cannon|大炮]] on a very high mountain top.', '现在想象一座很高的山顶上，有一门很大的大炮{cannon}。'],
      ['It shoots a ball very, very fast.', '它把一个球打得非常非常快。'],
    ],
    [
      ['The ball falls, but the Earth is round.', '球在往下掉，可地球是圆的。'],
      ['So the ground also goes down under the ball.', '所以球下面的地面也在往下弯。'],
      ['If the ball is fast enough, it falls, and falls, and never hits the ground.', '如果球够快，它就一直掉、一直掉，永远落不到地上。'],
      ['It goes around the Earth.', '它就绕着地球转起来了。'],
    ],
    {
      box: [
        ['This is an [[orbit|轨道]]: something falls all the time, but it moves sideways fast enough to miss the ground.', '这就是轨道{orbit}：一个东西一直在往下掉，但它横着跑得够快，所以总落不到地上。'],
        ['The Moon is in an orbit.', '月亮就在一条轨道上。'],
        ['So the Moon is falling all the time.', '所以月亮一直都在往下掉。'],
      ],
    },

    { h: 'How fast does the Moon fall?', zh: '月亮掉得有多快？' },
    [
      ['Newton did the maths.', '牛顿把它算了出来。'],
      ['Every second, the Moon moves about 1 kilometre sideways.', '每一秒，月亮横着走大约 1 公里。'],
      ['In the same second, it falls about 1.4 millimetres toward the Earth.', '在同一秒里，它朝地球掉大约 1.4 毫米。'],
      ['That is about the size of a grain of rice.', '大概就是一粒米那么大。'],
    ],

    { h: 'Newton’s big idea', zh: '牛顿的大发现' },
    [
      ['An apple near the ground falls much faster than the Moon.', '地面附近的苹果，比月亮掉得快多了。'],
      ['In fact, it falls about 3,600 times faster.', '事实上，大约快 3,600 倍。'],
      ['Why 3,600?', '为什么是 3,600？'],
    ],
    [
      ['Here is the secret: the Moon is about 60 times farther from the centre of the Earth than the apple.', '秘密在这里：月亮离地心的距离，大约是苹果的 60 倍。'],
      ['Newton had an idea: when something is 2 times farther away, the pull is 4 times weaker.', '牛顿有一个想法：一个东西远 2 倍，拉力就弱 4 倍。'],
      ['When it is 10 times farther, the pull is 100 times weaker.', '远 10 倍，拉力就弱 100 倍。'],
      ['So 60 times farther means 60 × 60 = 3,600 times weaker.', '所以远 60 倍，就是弱 60 × 60 = 3,600 倍。'],
      ['The numbers matched.', '数字对上了。'],
    ],
    {
      box: [
        ['This rule is called the [[inverse square law|平方反比定律]].', '这条规律叫平方反比定律{inverse square law}。'],
        ['It showed something amazing: the force that pulls an apple is the same force that holds the Moon.', '它证明了一件很了不起的事：拉苹果的力，和拉住月亮的力，是同一个力。'],
        ['The sky and the ground follow the same rules.', '天上和地上，遵守的是同样的规律。'],
      ],
    },

    { h: 'Why astronauts float', zh: '宇航员为什么会飘起来' },
    [
      ['Many people think there is no [[gravity|重力]] in space.', '很多人以为，太空里没有重力{gravity}。'],
      ['That is not true.', '这不是真的。'],
      ['The International Space Station is about 400 kilometres up.', '国际空间站在大约 400 公里高的地方。'],
      ['Gravity there is still about 90% as strong as on the ground.', '那里的重力，仍然有地面上的大约 90%。'],
    ],
    [
      ['So why do astronauts float?', '那宇航员为什么会飘？'],
      ['Because they are falling, just like the Moon.', '因为他们在往下掉，就跟月亮一样。'],
      ['The space station and the astronauts fall around the Earth together, at the same speed.', '空间站和宇航员一起绕着地球往下掉，速度一样。'],
      ['You can feel a little of this in a lift when it suddenly goes down.', '电梯突然往下走的时候，你也能感觉到一点点这种感觉。'],
    ],

    { h: 'What to remember', zh: '记住这一点' },
    [
      ['An orbit is not floating. It is falling and missing.', '轨道不是飘着，而是一直在掉，又一直掉不到。'],
      ['That is why rockets need so much fuel: they must go sideways very fast, about 8 kilometres every second.', '这也是为什么火箭需要那么多燃料：它们必须横着飞得非常快，大约每秒 8 公里。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['The Moon is falling all the time.', '月亮一直都在往下掉。'],
    ['Astronauts float because they are falling, not because there is no gravity.', '宇航员会飘，是因为他们在下落，不是因为没有重力。'],
  ],
  quiz: [
    {
      q: ['Why does the Moon not hit the Earth?', '月亮为什么砸不到地球？'],
      opts: [['It falls, but it moves sideways fast enough to miss the Earth.', '它在掉，但它横着跑得够快，所以掉不到地球上'], ['There is no gravity near the Moon.', '月亮附近没有重力'], ['The Moon is very light.', '月亮很轻']],
      a: 0,
      e: ['That is what an orbit is.', '这就是轨道。'],
    },
    {
      q: ['Something is 3 times farther away. How much weaker is the pull?', '一个东西远 3 倍。拉力弱多少？'],
      opts: [['9 times', '9 倍'], ['3 times', '3 倍'], ['6 times', '6 倍']],
      a: 0,
      e: ['3 × 3 = 9. This is the inverse square law.', '3 × 3 = 9。这就是平方反比定律。'],
    },
    {
      q: ['Gravity at the space station is…', '空间站那里的重力……'],
      opts: [['about 90% of gravity on the ground.', '大约是地面的 90%'], ['zero.', '是零'], ['stronger than on the ground.', '比地面还强']],
      a: 0,
      e: ['Astronauts float because they are falling together with the station.', '宇航员飘起来，是因为他们和空间站一起在下落。'],
    },
  ],
  questions: [
    {
      q: ['Think about it. A friend says: “There is no gravity on the space station.” How would you explain it in two sentences?', '想一想。一个朋友说：「空间站上没有重力。」你会怎么用两句话给他解释？'],
      a: [
        ['There is gravity, about 90% as strong as on the ground.', '其实有重力，大约是地面的 90%。'],
        ['The astronauts float because they are falling around the Earth, together with the station.', '宇航员会飘，是因为他们和空间站一起在绕着地球下落。'],
      ],
    },
  ],
  words: {
    isaac:      ['/ˈaɪzək/', '艾萨克（牛顿的名字）'],
    cannon:     ['/ˈkænən/', '大炮'],
    sideways:   ['/ˈsaɪdweɪz/', '横向地'],
    orbit:      ['/ˈɔːrbɪt/', '轨道'],
    grain:      ['/ɡreɪn/', '一粒'],
    inverse:    ['/ˌɪnˈvɜːrs/', '相反的；inverse square law 平方反比定律'],
    astronauts: ['/ˈæstrənɔːts/', '宇航员'],
    gravity:    ['/ˈɡrævəti/', '重力，引力'],
  },
});
