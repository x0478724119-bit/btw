// 连续剧「好看的生物，为什么长这样」第 1 集。燕凤蝶：鳞翅、透明的「窗」、长尾巴的诱饵假说（Chotard 2022、Barber 2015）、喝泥水（puddling）
addContent('nature-dragontail', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "蝴蝶": "butterfly", "翅膀": "wings", "尾巴": "tails",
    "蜻蜓": "dragonfly", "鳞片": "scales", "颜色": "colour", "玻璃": "glass",
    "鸟": "birds", "蝙蝠": "bats", "飞蛾": "moth", "蜥蜴": "lizard",
    "泥水": "mud", "溪边": "streams", "研究者": "researchers", "实验": "experiment",
    "雄蝶": "males", "雌蝶": "females", "叶子": "leaf", "云南": "Yunnan",
    "香港": "Hong Kong", "东南亚": "Southeast Asia", "声呐": "sonar", "猎手": "hunter",
  },
  summary: '燕凤蝶只有三四厘米大，翅膀上开着透明的「窗」，拖着两条长长的尾巴，飞起来像蜻蜓一样悬停。它为什么长成这样？研究者把蝴蝶的尾巴剪掉做实验，发现尾巴可能是一个「可以丢掉的诱饵」。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲生物学和真实研究，事实来源见下；照片为 CC BY 4.0',
    facts: [
      ['Wikipedia：Lamproptera curius（白燕凤蝶的形态和分布）', 'https://en.wikipedia.org/wiki/Lamproptera_curius'],
      ['香港土力工程处 · 生态日志：Butterfly in Tailcoat（透明的翅、悬停飞行、在溪边和路边水洼聚集、在香港罕见）', 'https://sslo.cedd.gov.hk/en/exploring-more/nature-conservation/eco-logs/companions-from-the-sky/butterfly-in-tailcoat/index.html'],
      ['Chotard et al., Evidence of attack deflection suggests adaptive evolution of wing tails in butterflies, Proceedings of the Royal Society B (2022)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9130794'],
      ['Barber et al., Moth tails divert bat attack: evolution of acoustic deflection, PNAS (2015)', 'https://www.pnas.org/doi/10.1073/pnas.1421926112'],
      ['Siddique, Gomard & Hölscher, The role of random nanostructures for the omnidirectional anti-reflection properties of the glasswing butterfly, Nature Communications (2015)', 'https://www.kit.edu/kit/english/pi_2015_037_nature--low-reflection-wings-make-butterflies-nearly-invisible.php'],
    ],
  },
  guide: '这是「好看的生物，为什么长这样」第 1 集，一位读者点名想看燕凤蝶。读完你会：① 知道蝴蝶翅膀的颜色从哪来，燕凤蝶翅膀上的「窗」为什么是透明的；② 知道「透明」其实很难做到，有的蝴蝶用上了纳米结构；③ 看懂两个真实实验：鸟专啄蝴蝶的尾巴，蝙蝠专咬飞蛾的尾巴；④ 知道蝴蝶为什么爱聚在水洼边喝泥水，而且来喝的大多是雄蝶。',
  paragraphs: [
    { h: 'A butterfly that flies like a dragonfly', zh: '一只像蜻蜓一样飞的蝴蝶' },
    [
      ['In the forests of South and Southeast Asia, including Yunnan and southern China, there is a butterfly that does not look like a butterfly.', '在南亚和东南亚的森林里，包括中国云南和南方一带，有一种蝴蝶长得不太像蝴蝶。'],
      ['Its wings are only about three to four centimetres across.', '它的翅膀张开只有三四厘米宽。'],
      ['Part of each front wing is clear, like a small glass window.', '每片前翅上都有一块是透明的，像一扇小小的玻璃窗。'],
      ['From its back wings hang two very long tails with white tips.', '后翅上垂下两条很长的尾巴，尾尖是白色的。'],
      ['It beats its wings very fast and can hang still in the air, like a dragonfly.', '它扇翅膀扇得飞快，能像蜻蜓一样停在半空中。'],
      ['It is called the [[dragontail|燕凤蝶]], because it hangs in the air like a dragonfly.', '它叫燕凤蝶{dragontail}，英文名的意思是「龙尾」，因为它能像蜻蜓一样停在半空。'],
    ],
    { img: { src: 'images/dragontail.jpg', alt: 'A white dragontail butterfly resting on a green leaf, showing its long white-tipped tails', caption: 'A white dragontail (Lamproptera curius) resting on a leaf', zh: '停在叶子上的白燕凤蝶，可以看到两条白色尖头的长尾巴', credit: 'Photo: Lorensonowal · CC BY 4.0', link: 'https://commons.wikimedia.org/wiki/File:Close_wing_basking_position_of_Lamproptera_curius_(Fabricius,_1787)_-_White_Dragontail_WLB_DSC_9074.jpg' } },
    [
      ['Three things about it look strange: the windows, the tails, and where you usually find it, drinking from wet mud.', '它有三个地方看起来很奇怪：那扇「窗」、那两条尾巴，还有你通常碰到它的地方：在湿泥上喝水。'],
      ['Each one has a reason, and one of them has been tested with scissors.', '每一样都有原因，其中一个原因，研究者是拿剪刀做实验验证的。'],
    ],

    { h: '1. Wings made of scales', zh: '1. 翅膀是鳞片拼出来的' },
    [
      ['Butterflies and moths belong to a group called [[Lepidoptera|鳞翅目]], which means “scale wings” in Greek.', '蝴蝶和飞蛾属于一个叫鳞翅目{Lepidoptera}的类群，这个名字在希腊语里的意思是「鳞片翅膀」。'],
      ['If you touch a butterfly’s wing, the coloured dust on your finger is thousands of tiny scales.', '如果你摸过蝴蝶的翅膀，手指上沾到的那层彩色粉末，就是成千上万片细小的鳞片。'],
      ['They overlap like roof tiles, and almost all the colour of a butterfly comes from them.', '它们像屋顶的瓦片一样层层叠叠，蝴蝶几乎所有的颜色都来自它们。'],
      ['Underneath, the wing itself is a thin, clear membrane, a bit like plastic film.', '在鳞片下面，翅膀本身是一层薄薄的透明膜，有点像保鲜膜。'],
    ],
    [
      ['So the dragontail’s windows are simple to explain: in those patches, there are no scales.', '所以燕凤蝶的「窗」很好解释：那几块地方没有鳞片。'],
      ['You are looking straight through the membrane.', '你看到的，就是直接透过去的那层膜。'],
    ],
    {
      box: [
        ['The surprising part is that being see-through is harder than it sounds.', '让人意外的是：做到「透明」，比听起来难得多。'],
        ['A smooth clear surface still reflects light, which is why a glass window shines and gives itself away.', '一个光滑的透明表面仍然会反光，这就是为什么玻璃窗会亮闪闪的，一眼就能看出来。'],
        ['A Central American butterfly called the glasswing has almost completely clear wings, and in 2015 researchers looked at them under a powerful microscope.', '中美洲有一种叫「玻璃翼蝶」的蝴蝶，翅膀几乎完全透明。2015 年，研究者用高倍显微镜看了它的翅膀。'],
        ['The clear parts are covered in tiny, randomly sized pillars, far thinner than a hair, which stop most of the shine.', '透明的部分上长满了大小不一的极细小柱子，比头发丝细得多，它们挡住了大部分的反光。'],
        ['Depending on the angle, these wings reflect only about 2 to 5% of the light.', '根据角度不同，这种翅膀只反射大约 2% 到 5% 的光。'],
        ['Nobody has checked whether the dragontail’s small windows work the same way; it is an open question.', '燕凤蝶那几扇小窗是不是也这样，还没有人研究过，这是一个没有答案的问题。'],
      ],
    },

    { h: '2. Why such long tails?', zh: '2. 为什么尾巴这么长？' },
    [
      ['Butterfly books often say the dragontail uses its tails to steer during its fast, dragonfly-like flight.', '蝴蝶图鉴里常说，燕凤蝶用尾巴在像蜻蜓一样的快速飞行中掌握方向。'],
      ['That may be true, but as far as we know, nobody has tested it.', '这也许是真的，但据我们所知，还没有人做实验检验过。'],
      ['There is another idea, and for other butterflies and moths, it has been tested.', '还有另一个想法，而在别的蝴蝶和飞蛾身上，它已经被检验过了。'],
    ],
    [
      ['A bird that wants to eat a butterfly needs to hit the body.', '一只想吃蝴蝶的鸟，需要啄中蝴蝶的身体。'],
      ['If it bites a wing tail instead, the butterfly loses a small piece of wing and flies away.', '如果它啄到的是翅膀上的尾巴，蝴蝶只是丢掉一小块翅膀，然后飞走。'],
      ['So a long, eye-catching tail could work as a [[decoy|诱饵]]: something that pulls the attack away from the part that matters.', '所以一条又长又显眼的尾巴，可能是一个诱饵{decoy}：把攻击从要紧的部位引开。'],
      ['Biologists call this [[attack deflection|攻击转移]].', '生物学家把这叫作攻击转移{attack deflection}。'],
    ],
    [
      ['In 2022, a team of French researchers tested it on the sail swallowtail, a European cousin of the dragontail with long tails of its own.', '2022 年，一组法国研究者在旖凤蝶身上检验了这个想法。旖凤蝶是燕凤蝶在欧洲的「亲戚」，也有长长的尾巴。'],
      ['First, they caught 138 wild butterflies and looked at the damage on their wings.', '首先，他们抓了 138 只野生的旖凤蝶，查看它们翅膀上的伤。'],
      ['65 had damaged wings, and every single one of those had at least one damaged tail.', '其中 65 只翅膀受过伤，而这 65 只，每一只都至少有一条尾巴受过伤。'],
      ['Then they offered model butterflies, made with real wings, to a common bird, the great tit.', '然后，他们用真的翅膀做成蝴蝶模型，拿给一种常见的鸟，大山雀。'],
      ['43 of the birds’ 59 strikes landed on the back wings, where the tails are, not on the body.', '大山雀一共啄了 59 下，其中 43 下落在有尾巴的后翅上，而不是身体上。'],
      ['Finally, they found that the vein inside the tail was weaker than the others, so the tail breaks off easily, like a lizard dropping its tail.', '最后，他们发现尾巴里的那根翅脉比别的翅脉更脆弱，所以尾巴很容易断掉，就像蜥蜴断尾一样。'],
    ],
    {
      box: [
        ['The same trick works against a completely different hunter.', '同样的招数，对付一种完全不同的猎手也管用。'],
        ['The luna moth of North America has long, twisting tails, and it flies at night, when bats hunt by [[echolocation|回声定位]]: they make sounds and listen to the echoes.', '北美的月形天蚕蛾有又长又卷的尾巴，它在夜里飞，而蝙蝠在夜里靠回声定位{echolocation}捕猎：发出声音，再听回声。'],
        ['As the moth flies, its tails spin and send back echoes, like a fake target on a radar screen.', '天蚕蛾飞的时候，尾巴会转起来，把声音反射回去，就像雷达屏幕上的一个假目标。'],
        ['In a 2015 experiment, bats aimed at the tails in more than half of their attacks, and moths with tails survived much better than moths whose tails had been cut off.', '在 2015 年的一项实验里，蝙蝠一半以上的攻击都冲着尾巴去，有尾巴的天蚕蛾比被剪掉尾巴的活得好得多。'],
        ['The researchers estimated that the tails gave a survival advantage of about 47%, about the same as having ears that can hear bats coming.', '研究者估计，尾巴带来的生存优势大约是 47%，跟长了能听见蝙蝠的耳朵差不多。'],
      ],
    },
    [
      ['Nobody has done this experiment on the dragontail yet.', '还没有人在燕凤蝶身上做过这个实验。'],
      ['But it would not be hard: count the damaged tails on wild dragontails, and see where birds strike.', '不过做起来并不难：数一数野生燕凤蝶尾巴上的伤，再看看鸟都啄在哪里。'],
      ['It is the kind of question a student with a camera and some patience could help answer.', '这正是一个有相机、有耐心的学生就能帮忙回答的问题。'],
    ],

    { h: '3. Why drink from mud?', zh: '3. 为什么要喝泥水？' },
    [
      ['If you want to see a dragontail, the best place is often not a flower but a wet patch of mud by a stream or a road.', '如果你想看燕凤蝶，最好的地方往往不是花丛，而是溪边或者路边的一块湿泥。'],
      ['Many butterflies do this, and it is called [[puddling|聚集吸水]].', '很多蝴蝶都会这样，这叫聚集吸水{puddling}。'],
    ],
    { img: { src: 'images/dragontail-mud.jpg', alt: 'A white dragontail with wings open on wet mud, showing the clear windows in its front wings', caption: 'A white dragontail drinking from wet mud. Note the clear windows in the front wings.', zh: '在湿泥上喝水的白燕凤蝶。注意前翅上透明的「窗」', credit: 'Photo: Gayatri Dutta · CC BY 4.0', link: 'https://commons.wikimedia.org/wiki/File:Open_wing_position_of_Lamproptera_curius_Fabricius,_1787_%E2%80%93_White_Dragontail_2.jpg', thumb: false } },
    [
      ['They are not just thirsty.', '它们不只是渴了。'],
      ['Flower nectar is full of sugar but contains very little salt, especially sodium, which nerves and muscles need.', '花蜜里满是糖，却几乎没有盐分，尤其缺钠，而神经和肌肉都离不开钠。'],
      ['Wet mud, and sometimes animal sweat or urine, is a rich source of it.', '湿泥，有时候还有动物的汗水和尿，是钠的丰富来源。'],
    ],
    [
      ['In most butterflies that have been studied, the ones drinking from mud are almost all males.', '在研究过的大多数蝴蝶里，来喝泥水的几乎都是雄蝶。'],
      ['When they mate, males pass a package of sperm and nutrients to the female, and sodium is part of it.', '交配的时候，雄蝶会把一个装着精子和营养的「礼包」交给雌蝶，钠就是其中的一部分。'],
      ['The female then puts that sodium into her eggs.', '雌蝶再把这些钠放进自己的卵里。'],
      ['So a male drinking from a puddle is, in a sense, collecting a gift for his future partner.', '所以，一只在水洼边喝水的雄蝶，某种意义上是在给未来的伴侣攒礼物。'],
    ],

    { h: 'What to take away', zh: '这一集带走什么' },
    [
      ['Every strange feature of an animal is a question: what problem does this solve?', '动物身上每一个奇怪的特征，都是一个问题：它解决了什么麻烦？'],
      ['Sometimes the answer has been tested, like tails as decoys in other butterflies.', '有时候答案已经被检验过，比如别的蝴蝶身上「尾巴当诱饵」。'],
      ['Sometimes it is still just a good guess, like the dragontail’s tails, and that is where new science starts.', '有时候它还只是一个不错的猜测，比如燕凤蝶的尾巴，而新的科学正是从这里开始的。'],
    ],

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['The dragontail’s windows are clear because they have no scales.', '燕凤蝶的「窗」是透明的，因为那里没有鳞片。'],
      ['But some butterflies are the brightest blue in the forest, and if you grind their scales into powder, the powder is not blue at all.', '可有些蝴蝶是森林里最亮的蓝色，你要是把它们的鳞片磨成粉，粉末根本不是蓝的。'],
      ['Episode 2: the morpho butterfly, and colour without any blue pigment.', '第 2 集：大闪蝶，以及没有一点蓝色色素的蓝色。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['The tails might work as a decoy that birds attack instead of the body.', '这对尾巴可能是一个诱饵，让鸟去啄它，而不是啄身体。'],
    ['Butterfly colour comes from thousands of tiny scales.', '蝴蝶的颜色来自成千上万片细小的鳞片。'],
    ['That has been tested in other species, but not in this one yet.', '这在别的物种身上检验过，但在这一种身上还没有。'],
  ],
  quiz: [
    {
      q: ['Why are the dragontail’s “windows” clear?', '燕凤蝶的「窗」为什么是透明的？'],
      opts: [['Those patches have no scales, so you see the clear membrane.', '那几块没有鳞片，你看到的是透明的膜'], ['They are made of glass.', '它们是玻璃做的'], ['They are holes in the wing.', '它们是翅膀上的洞']],
      a: 0,
      e: ['Almost all butterfly colour comes from scales; without them, the wing is see-through.', '蝴蝶几乎所有的颜色都来自鳞片，没有鳞片，翅膀就是透明的。'],
    },
    {
      q: ['What did the 2022 study of sail swallowtails find?', '2022 年那项旖凤蝶研究发现了什么？'],
      opts: [['Damaged butterflies all had damaged tails, and birds struck the tail area most.', '受过伤的蝴蝶尾巴全都受过伤，鸟最常啄有尾巴的地方'], ['Birds never attacked the tails.', '鸟从来不啄尾巴'], ['Tails made butterflies fly slower.', '尾巴让蝴蝶飞得更慢']],
      a: 0,
      e: ['The tail vein is also weak, so the tail breaks off and the butterfly escapes.', '尾巴里的翅脉也更脆弱，所以尾巴断掉，蝴蝶就逃走了。'],
    },
    {
      q: ['Why do luna moth tails confuse bats?', '为什么月形天蚕蛾的尾巴能骗过蝙蝠？'],
      opts: [['The spinning tails send back echoes, like a fake target.', '转动的尾巴会反射回声，像一个假目标'], ['The tails glow in the dark.', '尾巴在黑暗里发光'], ['The tails smell bad.', '尾巴气味难闻']],
      a: 0,
      e: ['Bats hunt by echolocation, so a false echo pulls the attack away from the body.', '蝙蝠靠回声定位捕猎，一个假的回声就能把攻击从身体上引开。'],
    },
    {
      q: ['Why do butterflies, mostly males, drink from wet mud?', '为什么蝴蝶，而且大多是雄蝶，会去喝湿泥里的水？'],
      opts: [['To get sodium, part of which they pass to females when mating.', '为了获取钠，其中一部分会在交配时交给雌蝶'], ['Because flowers are closed.', '因为花都关了'], ['To cool down their wings.', '为了给翅膀降温']],
      a: 0,
      e: ['Nectar has lots of sugar but very little salt.', '花蜜里糖很多，盐分却很少。'],
    },
  ],
  questions: [
    {
      q: ['Think about it. Design a simple study to test whether the dragontail’s tails work as a decoy. What would you count or record, and what result would support the idea?', '想一想。设计一个简单的研究，检验燕凤蝶的尾巴是不是诱饵。你会数什么、记录什么？什么样的结果能支持这个想法？'],
      a: [
        ['One simple design copies the 2022 study: photograph many wild dragontails and record where their wings are damaged.', '一个简单的设计是照搬 2022 年那项研究：给很多野生燕凤蝶拍照，记录它们的翅膀哪里受了伤。'],
        ['If damage is far more common on the tails than on other parts of the wing, and the butterflies are still alive, that supports the decoy idea.', '如果尾巴上的伤远比翅膀其他地方多，而这些蝴蝶仍然活着，就支持诱饵这个想法。'],
        ['A stronger test would compare how often birds catch real dragontails with and without tails, but that needs careful, ethical design.', '更有力的检验，是比较鸟抓有尾巴和没尾巴的燕凤蝶的成功率，但这需要仔细、合乎伦理的设计。'],
      ],
    },
  ],
  words: {
    dragontail:   ['/ˈdræɡənteɪl/', '燕凤蝶（英文名「龙尾」）'],
    dragontails:  ['/ˈdræɡənteɪlz/', '燕凤蝶（复数）'],
    lepidoptera:  ['/ˌlepɪˈdɑːptərə/', '鳞翅目'],
    scales:       ['/skeɪlz/', '鳞片'],
    membrane:     ['/ˈmembreɪn/', '膜'],
    glasswing:    ['/ˈɡlæswɪŋ/', '玻璃翼蝶'],
    pillars:      ['/ˈpɪlərz/', '柱子'],
    decoy:        ['/ˈdiːkɔɪ/', '诱饵'],
    deflection:   ['/dɪˈflekʃn/', '偏转；attack deflection 攻击转移'],
    swallowtail:  ['/ˈswɑːloʊteɪl/', '凤蝶；sail swallowtail 旖凤蝶'],
    tit:          ['/tɪt/', '山雀；great tit 大山雀'],
    vein:         ['/veɪn/', '（翅）脉'],
    luna:         ['/ˈluːnə/', 'luna moth 月形天蚕蛾'],
    echolocation: ['/ˌekoʊloʊˈkeɪʃn/', '回声定位'],
    puddling:     ['/ˈpʌdlɪŋ/', '（蝴蝶）聚集吸水'],
    nectar:       ['/ˈnektər/', '花蜜'],
    sodium:       ['/ˈsoʊdiəm/', '钠'],
    sperm:        ['/spɜːrm/', '精子'],
    morpho:       ['/ˈmɔːrfoʊ/', '大闪蝶'],
    pigment:      ['/ˈpɪɡmənt/', '色素'],
    yunnan:       ['', '云南'],
  },
});
