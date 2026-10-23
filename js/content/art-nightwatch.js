// 连续剧「怎么看一幅画」第 1 集。伦勃朗《夜巡》：群像订件、明暗对照、清漆、1715 年被裁、2021 年 AI 复原
addContent('art-nightwatch', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "这幅画": "this painting", "画家": "painter", "博物馆": "museum", "队长": "captain",
    "副队长": "lieutenant", "民兵": "militia", "火枪": "musket", "鼓手": "drummer",
    "旗手": "flag bearer", "小女孩": "girl", "死鸡": "dead chicken", "爪子": "claws",
    "影子": "shadow", "清漆": "varnish", "画布": "canvas",
    "市政厅": "town hall", "柱子": "columns", "复制品": "copy", "名字": "names",
    "盾牌": "shield", "毕业照": "class photo", "订单": "commission", "顾客": "clients",
    "颜料": "paint", "面包刀": "bread knife", "强酸": "acid", "照片": "photos",
    "阿姆斯特丹": "Amsterdam", "伦敦": "London", "荷兰": "the Netherlands", "主角": "main characters",
  },
  summary: '阿姆斯特丹最有名的一幅画叫《夜巡》，可它画的根本不是晚上；你在博物馆里看到的，也不是伦勃朗画的完整版本。这一集学会看一幅画的第一套问题：谁付的钱、光往哪打、它后来经历了什么。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲艺术史，事实来源见下；画作图片均为公有领域',
    facts: [
      ['Wikipedia：The Night Watch（原名、1,600 荷兰盾、1715 年裁切、2021 年复原、几次破坏）', 'https://en.wikipedia.org/wiki/The_Night_Watch'],
      ['Rijksmuseum：Operation Night Watch', 'https://www.rijksmuseum.nl/en/stories/operation-night-watch'],
      ['Rijksmuseum 藏品页：Militia Company of District II under the Command of Captain Frans Banninck Cocq', 'https://www.rijksmuseum.nl/en/collection/SK-C-5'],
    ],
  },
  guide: '这是「怎么看一幅画」第 1 集。不需要任何美术基础。读完你会：① 知道《夜巡》为什么根本不是夜景；② 明白「群像」这种画是怎么下单、怎么收钱的，为什么伦勃朗的画法在当时很冒险；③ 会用「明暗对照」看懂画家怎么指挥你的眼睛；④ 知道这幅画在 1715 年被人裁掉了一圈，我们又是怎么知道的；⑤ 学会站在任何一幅画前面都能问的三个问题。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['The most famous painting in the Netherlands hangs in the Rijksmuseum in Amsterdam, and it is called The Night Watch.', '荷兰最有名的一幅画挂在阿姆斯特丹国立博物馆，名叫《夜巡》。'],
      ['Thousands of people stand in front of it every day and see a group of armed men stepping out of the darkness.', '每天都有成千上万的人站在它面前，看到一群拿着武器的人从黑暗里走出来。'],
      ['Three things about it are not what they seem.', '关于这幅画，有三件事跟看上去的不一样。'],
      ['It is not set at night, it is not the size Rembrandt painted it, and the people in it paid to be there.', '它画的不是晚上，它不是伦勃朗画的那么大，而且画里的人是付了钱才进去的。'],
    ],
    { img: { src: 'images/night-watch.jpg', alt: 'Rembrandt’s Night Watch: a militia company led by a captain in black and a lieutenant in yellow', caption: 'Rembrandt, Militia Company of District II under the Command of Captain Frans Banninck Cocq (“The Night Watch”), 1642. Rijksmuseum, Amsterdam', zh: '伦勃朗《第二区民兵连，队长弗兰斯·班宁·科克》（俗称《夜巡》），1642 年，阿姆斯特丹国立博物馆', credit: 'Painting: Rembrandt · Public domain', link: 'https://commons.wikimedia.org/wiki/File:The_Nightwatch_by_Rembrandt_-_Rijksmuseum.jpg' } },

    { h: '1. Who paid for it', zh: '1. 谁付的钱' },
    [
      ['The first question to ask about any old painting is: who paid for it, and what did they want?', '看任何一幅老画，第一个该问的问题是：谁付的钱？他们想要什么？'],
      ['This painting was a [[commission|委托订单]]: around 1639, Captain Frans Banninck Cocq and members of his militia company ordered a picture of themselves.', '这幅画是一个委托订单{commission}：大约 1639 年，队长弗兰斯·班宁·科克和他民兵连里的成员，订了一幅他们自己的画。'],
      ['Rembrandt was paid about 1,600 guilders, with roughly 100 coming from each man in the picture, a very large sum at the time.', '伦勃朗拿到了大约 1,600 荷兰盾，画里的每个人大约出 100，这在当时是一大笔钱。'],
      ['The militia companies were groups of citizens who guarded the city, and by the 1600s they were as much social clubs as fighting units.', '民兵连是负责保卫城市的市民队伍，到 17 世纪，它们既是作战单位，也差不多是社交俱乐部。'],
      ['Their large group portraits hung in the halls where they met and held banquets.', '他们的大幅群像就挂在他们开会、聚餐的大厅里。'],
    ],
    {
      box: [
        ['This kind of painting is called a [[group portrait|群像]].', '这种画叫群像{group portrait}。'],
        ['Think of it as a very expensive class photo: everyone has paid, so everyone expects to be clearly visible.', '把它想成一张非常贵的毕业照：每个人都付了钱，所以每个人都希望自己被看得清清楚楚。'],
        ['Most group portraits of the time solved this the safe way, with rows of men looking out at you, each face given roughly equal space and light.', '当时大多数群像都用最稳妥的办法：一排排人看着你，每张脸分到差不多一样的位置和光。'],
      ],
    },
    [
      ['Rembrandt did something riskier.', '伦勃朗做了一件更冒险的事。'],
      ['He painted a moment of action: the captain gives the order to march, and the company starts to move.', '他画的是一个动作的瞬间：队长下令出发，整个连开始动起来。'],
      ['Men are loading muskets, a flag is being raised, a drummer is beating his drum, a dog is barking.', '有人在装火枪，有人在举旗，鼓手在打鼓，还有一只狗在叫。'],
      ['The result is far more alive than a row of faces, and the price was paid by the clients: some of the men who paid are half hidden in shadow, or covered by someone else’s arm.', '结果比一排排的脸生动得多，可代价由顾客承担：有些付了钱的人，半张脸藏在影子里，或者被别人的胳膊挡住了。'],
      ['Around 1715, a shield with eighteen names was painted onto the background, perhaps so that everyone could at least be identified.', '大约 1715 年，背景上加画了一块写着十八个名字的盾牌，也许是为了让每个人至少能被认出来。'],
    ],

    { h: '2. How Rembrandt moves your eyes', zh: '2. 伦勃朗怎么指挥你的眼睛' },
    [
      ['Look at the picture again and notice where your eyes go first.', '再看一遍这幅画，留意你的眼睛先去了哪里。'],
      ['Almost everyone looks at the two men in front: the captain dressed in black with a red sash, and his lieutenant dressed in pale yellow.', '几乎每个人都会先看前面那两个人：穿黑衣、系红色饰带的队长，和穿浅黄色衣服的副队长。'],
      ['Then the eye jumps to a small girl in gold, on the left behind them, who is lit almost as brightly as the officers.', '然后视线会跳到他们左后方一个穿金色衣服的小女孩身上，她被照得几乎跟两位军官一样亮。'],
    ],
    {
      box: [
        ['The technique is called [[chiaroscuro|明暗对照]], from the Italian words for “light” and “dark”: strong contrasts between bright areas and deep shadow.', '这种手法叫明暗对照{chiaroscuro}，来自意大利语里「明」和「暗」两个词：亮的地方和深的影子之间对比强烈。'],
        ['Our eyes go to the brightest area first, so a painter who controls the light controls the order in which you read the picture.', '我们的眼睛会先去最亮的地方，所以控制了光的画家，也就控制了你看这幅画的顺序。'],
        ['Rembrandt was the master of it, and here he uses light to choose the main characters, not just to show what things look like.', '伦勃朗是这方面的大师。在这里，他用光来挑选主角，而不只是为了画出东西长什么样。'],
      ],
    },
    [
      ['Two details reward a closer look.', '有两个细节值得凑近看。'],
      ['The captain’s left hand is stretched out toward you, and its shadow falls on the lieutenant’s yellow coat, which makes the hand seem to come out of the canvas.', '队长的左手朝你伸出来，它的影子落在副队长的黄色外衣上，让这只手看起来像是伸出了画布。'],
      ['The girl carries a dead chicken at her belt, and the chicken’s claws were the emblem of this militia company: she is less a real child than a walking symbol of the group.', '小女孩腰间挂着一只死鸡，鸡的爪子正是这个民兵连的标志：与其说她是一个真实的小孩，不如说她是这个团体会走路的标志。'],
    ],
    { img: { src: 'images/night-watch-girl.jpg', alt: 'Detail of the brightly lit girl in gold in the Night Watch', caption: 'Detail: the girl in gold, lit almost as brightly as the officers', zh: '局部：穿金色衣服的小女孩，被照得几乎跟两位军官一样亮', credit: 'Painting: Rembrandt · Public domain', link: 'https://commons.wikimedia.org/wiki/File:Rembrandt_Night_Watch_Girl.jpg', thumb: false } },

    { h: '3. Why it is called The Night Watch', zh: '3. 它为什么叫《夜巡》' },
    [
      ['Rembrandt never called it that.', '伦勃朗从来没有这样叫过它。'],
      ['The museum’s official title is long and plain: Militia Company of District II under the Command of Captain Frans Banninck Cocq.', '博物馆给它的正式名字又长又直白：《第二区民兵连，队长弗兰斯·班宁·科克》。'],
      ['Oil paintings were usually covered with a clear [[varnish|清漆]] to protect them and make the colours shine.', '油画通常会刷一层透明的清漆{varnish}，用来保护画面，也让颜色更亮。'],
      ['Over the centuries, that varnish darkened and turned brown, and layers of dirt built up on top of it.', '几百年下来，这层清漆变暗、发黄发褐，上面还积了一层层灰尘。'],
      ['By the late 1700s the scene looked so dark that people assumed it took place at night, and the nickname stuck.', '到 18 世纪末，画面已经暗到大家以为画的是晚上，这个外号就这么留了下来。'],
      ['When the dark varnish was removed in the 1940s, it became clear that this is a daytime scene, with light falling from the upper left.', '20 世纪 40 年代把那层发暗的清漆去掉以后，人们才看清楚：这是白天的场景，光从左上方照下来。'],
    ],
    [
      ['This is a general lesson about old paintings.', '这是关于老画的一个普遍教训。'],
      ['What you see in a museum is not exactly what the painter made; it is the painting plus centuries of chemistry, accidents and repairs.', '你在博物馆里看到的，并不完全是画家画出来的东西，而是这幅画，加上几百年的化学变化、意外和修补。'],
      ['Even our names for famous works often come from later viewers, not from the artists.', '就连很多名画的名字，也常常是后来的观众起的，而不是画家自己。'],
    ],

    { h: '4. The painting that was cut', zh: '4. 被裁掉的那一圈' },
    [
      ['In 1715 the painting was moved to Amsterdam’s town hall.', '1715 年，这幅画被搬到了阿姆斯特丹市政厅。'],
      ['It did not fit the wall it was meant for, probably the space between two columns.', '它跟要挂的那面墙尺寸不合，很可能是两根柱子之间的那块地方。'],
      ['So someone cut it down on all four sides.', '于是有人把它的四边都裁掉了一截。'],
      ['The biggest loss was on the left, where two figures disappeared completely.', '损失最大的是左边，两个人物从此彻底消失。'],
      ['Nobody knows what happened to the pieces that were cut off.', '被裁下来的那几条画布去了哪里，没有人知道。'],
    ],
    [
      ['We know what was lost because of a much smaller copy made in the 1600s, attributed to the painter Gerrit Lundens, which is now in the National Gallery in London.', '我们之所以知道丢了什么，是因为有一幅 17 世纪画的、小得多的复制品，被认为出自画家赫里特·伦登斯之手，现在收藏在伦敦国家美术馆。'],
      ['Compare the two, and look at how much space the original gave to the left side and to the area above the heads.', '把两幅放在一起对比，看看原画在左边和头顶上方留了多少空间。'],
      ['In the full version, the captain and lieutenant are not in the centre of the picture; they are stepping forward from the right of centre, which made the march feel like it was moving.', '在完整版里，队长和副队长并不在画面正中间，而是从中线偏右的位置往前走，这让整支队伍更有「正在前进」的感觉。'],
      ['The cut pushed them into the middle and made the composition stiffer.', '裁切把他们推到了中间，构图也变得更呆板了。'],
    ],
    { img: { src: 'images/night-watch-lundens.jpg', alt: 'A smaller 17th-century copy of the Night Watch showing the parts later cut away', caption: 'Copy after Rembrandt, attributed to Gerrit Lundens, before 1715. It shows the left side and the top that were later cut away. National Gallery, London', zh: '伦登斯（传）临摹的《夜巡》，1715 年之前。它保留了原画后来被裁掉的左边和上方。伦敦国家美术馆', credit: 'Painting: attributed to Gerrit Lundens · Public domain', link: 'https://commons.wikimedia.org/wiki/File:Lundens_-_Nachtwache-Kopie.jpg', thumb: false } },
    [
      ['In 2021, the Rijksmuseum used this copy and a type of artificial intelligence called a neural network to recreate the missing strips in Rembrandt’s own style, and hung them around the original for a few months.', '2021 年，阿姆斯特丹国立博物馆利用这幅复制品，和一种叫神经网络的人工智能，按伦勃朗自己的画风把缺掉的那几条重新画了出来，在原画四周挂了几个月。'],
      ['They were then taken down on purpose, so that nobody would confuse the reconstruction with the real painting.', '之后又特意撤了下来，免得有人把复原的部分当成真画。'],
    ],

    { h: '5. A painting is also a survivor', zh: '5. 一幅画，也是一个幸存者' },
    [
      ['The Night Watch has also been attacked three times.', '《夜巡》还被人袭击过三次。'],
      ['In 1911 a man tried to cut it, but the thick old varnish protected it.', '1911 年，有人想划破它，结果被那层厚厚的旧清漆挡住了。'],
      ['In 1975 a man slashed the canvas with a bread knife, and the repair took about four years.', '1975 年，有人用面包刀在画布上划了好几道，修复花了大约四年。'],
      ['In 1990 a man sprayed acid on it, which only got through the varnish and was cleaned off.', '1990 年，有人往画上喷强酸，好在只渗进了清漆层，后来被清理掉了。'],
      ['The same varnish that gave the painting its wrong name also saved it twice.', '给这幅画带来错误名字的那层清漆，也救了它两次。'],
    ],
    [
      ['Since 2019 the museum has been studying and restoring it in a glass room in the gallery, in front of visitors, under the name Operation Night Watch.', '从 2019 年起，博物馆在展厅里搭了一间玻璃房，当着观众的面研究和修复这幅画，项目叫「夜巡行动」。'],
      ['They photographed it in so much detail that the final image has about 45 billion pixels, enough to see individual cracks in the paint.', '他们拍得极其精细，最后的照片大约有 450 亿像素，连颜料上的一道道裂纹都看得见。'],
      ['They even found a chemical compound in the paint that had never been seen in an old oil painting before.', '他们甚至在颜料里发现了一种从来没在老油画里出现过的化合物。'],
    ],

    { h: 'Three questions for any painting', zh: '站在任何一幅画前面，都能问的三个问题' },
    [
      ['You can take this episode to any museum.', '这一集学到的东西，你可以带去任何一家博物馆。'],
      ['First: who paid for it, and what did they want it to do?', '第一：谁付的钱？他们希望这幅画起什么作用？'],
      ['Second: where is the light, and in what order does it make you look?', '第二：光在哪里？它让你按什么顺序看？'],
      ['Third: what has happened to it since it was painted?', '第三：它画完以后，经历了什么？'],
    ],

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['The Night Watch is a picture of real, named men who paid to be painted.', '《夜巡》画的是真实的、有名有姓的人，他们付钱请人画自己。'],
      ['The next painting in this series is just as famous, but nobody knows who the girl in it was, and that may be exactly the point.', '这个系列的下一幅画同样有名，可没有人知道画里的女孩是谁，而这也许正是关键所在。'],
      ['Episode 2: Vermeer’s Girl with a Pearl Earring, and why it may not be a portrait at all.', '第 2 集：维米尔的《戴珍珠耳环的少女》，以及它为什么可能根本不是一幅肖像。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['It’s a group portrait, so every face was paid for.', '这是一幅群像，所以每张脸都是付过钱的。'],
    ['Notice how the light tells you where to look first.', '注意看，光在告诉你先看哪里。'],
    ['What we see today isn’t quite what the painter made; it’s been varnished, cut and restored.', '我们今天看到的，并不完全是画家画的样子：它刷过清漆、被裁过，也修复过。'],
  ],
  quiz: [
    {
      q: ['Why is the painting called The Night Watch?', '这幅画为什么叫《夜巡》？'],
      opts: [['Darkened varnish and dirt made it look like a night scene, so later viewers gave it that name.', '清漆变暗、积了灰尘，看起来像夜景，后来的人就这么叫了'], ['Rembrandt named it after a night patrol.', '伦勃朗按一次夜间巡逻给它起的名'], ['It shows the city at midnight.', '它画的是午夜的城市']],
      a: 0,
      e: ['After the dark varnish was removed in the 1940s, it was clear that it is a daytime scene.', '20 世纪 40 年代去掉发暗的清漆后，人们看清这是白天的场景。'],
    },
    {
      q: ['What was risky about Rembrandt’s approach for a paid group portrait?', '在一幅付费群像里，伦勃朗的画法冒险在哪里？'],
      opts: [['Some men who paid ended up partly hidden in shadow or behind others.', '有些付了钱的人，最后半藏在影子里或者被别人挡住了'], ['He used too few colours.', '他用的颜色太少'], ['He painted it too small.', '他画得太小了']],
      a: 0,
      e: ['A group portrait is like a paid class photo; an action scene does not give every face equal space.', '群像就像一张付费的毕业照；而动作场面不会给每张脸同样的位置。'],
    },
    {
      q: ['How do we know what the painting looked like before it was cut in 1715?', '我们怎么知道这幅画 1715 年被裁之前是什么样子？'],
      opts: [['A smaller 17th-century copy, attributed to Gerrit Lundens, shows the full composition.', '一幅 17 世纪画的、小一些的复制品（传为伦登斯所作）保留了完整构图'], ['The cut pieces were found in the town hall.', '在市政厅找到了被裁掉的部分'], ['Rembrandt left a written description.', '伦勃朗留下了文字描述']],
      a: 0,
      e: ['The cut pieces were never found. The 2021 reconstruction was based on the Lundens copy.', '被裁的部分一直没有找到。2021 年的复原就是根据伦登斯的复制品做的。'],
    },
    {
      q: ['What is chiaroscuro used for in this painting?', '在这幅画里，明暗对照是用来做什么的？'],
      opts: [['To choose the main characters and control the order in which you look.', '挑选主角，并控制你看画的顺序'], ['To make the painting look old.', '让画看起来很旧'], ['To save on expensive paint.', '节省昂贵的颜料']],
      a: 0,
      e: ['Our eyes go to the brightest areas first: the two officers and the girl in gold.', '我们的眼睛会先去最亮的地方：两位军官和穿金色衣服的小女孩。'],
    },
  ],
  questions: [
    {
      q: ['Exercise 1. Put the two images side by side: the painting today and the Lundens copy. Describe in two or three sentences what changed in the composition when the edges were cut.', '练习 1。把两张图放在一起：今天的原画和伦登斯的复制品。用两三句话描述，四边被裁掉以后，构图发生了什么变化。'],
      a: [
        ['In the copy there is open space on the left and above the heads, and the two officers stand to the right of centre, as if the group is moving forward out of a wider scene.', '复制品里，左边和头顶上方都有空间，两位军官站在中线偏右的位置，像是整支队伍正从一个更宽的场景里往前走。'],
        ['After the cut, the officers sit almost in the middle and the group fills the frame more tightly.', '裁切以后，两位军官几乎在正中间，人群把画框塞得更满。'],
        ['The picture feels less like a march that is just starting and more like a crowded, posed scene.', '画面没那么像一支刚出发的队伍了，更像一个拥挤的、摆好姿势的场景。'],
      ],
    },
    {
      q: ['Exercise 2. Think of a group photo you have been in, such as a graduation or company photo. If you had paid for it, what would you have wanted from the photographer? How does that help explain why most group portraits of the 1600s look so stiff?', '练习 2。想一张你拍过的合照，比如毕业照或公司合照。如果是你出的钱，你会希望摄影师怎么拍？这怎么帮你理解，为什么 17 世纪大多数群像看起来都那么呆板？'],
      a: [
        ['There is no single right answer. Most people would want their face to be clear, well lit and not hidden.', '没有唯一答案。大多数人会希望自己的脸清楚、光线好、不被挡住。'],
        ['When many clients each pay the same amount, the safest design is rows of equal faces, which is exactly the stiff style of most group portraits.', '当很多顾客各自出同样的钱，最稳妥的设计就是一排排同样大小的脸，这正是大多数群像那种呆板的风格。'],
        ['Rembrandt’s choice was artistically better and commercially riskier: a good example of how the person paying shapes what art looks like.', '伦勃朗的选择在艺术上更好，在生意上更冒险：这是一个很好的例子，说明出钱的人会影响艺术长成什么样。'],
      ],
    },
  ],
  words: {
    rijksmuseum:  ['/ˈraɪksmjuːˌziːəm/', '阿姆斯特丹国立博物馆'],
    rembrandt:    ['/ˈrembrænt/', '伦勃朗（荷兰画家）'],
    banninck:     ['', '班宁（人名）'],
    cocq:         ['', '科克（人名）'],
    frans:        ['', '弗兰斯（人名）'],
    militia:      ['/məˈlɪʃə/', '民兵'],
    commission:   ['/kəˈmɪʃn/', '委托（创作）订单；佣金'],
    guilders:     ['/ˈɡɪldərz/', '荷兰盾（旧货币）'],
    banquets:     ['/ˈbæŋkwɪts/', '宴会'],
    portrait:     ['/ˈpɔːrtrət/', '肖像'],
    portraits:    ['/ˈpɔːrtrəts/', '肖像（复数）'],
    muskets:      ['/ˈmʌskɪts/', '火枪'],
    sash:         ['/sæʃ/', '饰带，腰带'],
    lieutenant:   ['/luːˈtenənt/', '副队长；中尉'],
    chiaroscuro:  ['/kiˌɑːrəˈskjʊroʊ/', '明暗对照（法）'],
    emblem:       ['/ˈembləm/', '标志，徽章'],
    varnish:      ['/ˈvɑːrnɪʃ/', '清漆'],
    varnished:    ['/ˈvɑːrnɪʃt/', '刷过清漆的'],
    nickname:     ['/ˈnɪkneɪm/', '外号'],
    attributed:   ['/əˈtrɪbjuːtɪd/', '被认为出自（某人之手）'],
    lundens:      ['', '伦登斯（荷兰画家 Gerrit Lundens）'],
    gerrit:       ['', '赫里特（人名）'],
    composition:  ['/ˌkɑːmpəˈzɪʃn/', '构图'],
    reconstruction:['/ˌriːkənˈstrʌkʃn/', '复原，重建'],
    slashed:      ['/slæʃt/', '划破'],
    pixels:       ['/ˈpɪksəlz/', '像素'],
    compound:     ['/ˈkɑːmpaʊnd/', '化合物'],
    vermeer:      ['/vərˈmɪər/', '维米尔（荷兰画家）'],
    earring:      ['/ˈɪrɪŋ/', '耳环'],
  },
});
