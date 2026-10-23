// 连续剧「生物：进化是怎么运作的」第 1 集。自然选择三要素、突变不是被药「教会」的、MEGA 培养皿实验、「吃完一整个疗程」的争论
addContent('bio-resistance', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "细菌": "bacteria", "抗生素": "antibiotics", "青霉素": "penicillin", "医生": "doctor",
    "病人": "patients", "身体": "body", "肠道": "gut", "药物": "drug",
    "剂量": "dose", "疗程": "course", "培养皿": "petri dish", "实验": "experiment",
    "摄像机": "camera", "视频": "video", "科学家": "scientists", "研究者": "researchers",
    "后代": "offspring", "祖先": "ancestors", "长颈鹿": "giraffes", "脖子": "necks",
    "达尔文": "Darwin", "突变": "mutations", "复制": "copying", "错误": "mistakes",
    "超级细菌": "superbugs", "诺贝尔奖": "Nobel Prize", "演讲": "lecture", "商店": "shops",
    "环境": "environment", "代价": "cost", "竞赛": "race", "医院": "hospitals",
  },
  summary: '细菌不会「习惯」抗生素，药也没有「教会」它们什么。耐药是一场就在你身体里发生的进化，快到哈佛的科学家用摄像机把它拍了下来。还有那句「抗生素一定要吃完一整个疗程」，证据其实没有你想的那么硬。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲生物学和真实研究，事实来源见下。本文不是用药建议，用药请遵医嘱',
    facts: [
      ['Baym et al., Spatiotemporal microbial evolution on antibiotic landscapes, Science 353 (2016)', 'https://www.science.org/doi/10.1126/science.aag0822'],
      ['AAAS：Scientists build giant petri dish to film bacteria gaining resistance（120 × 60 厘米、最高浓度、十几天、最强的突变体常常落在后面）', 'https://www.aaas.org/news/scientists-build-giant-petri-dish-film-bacteria-resistance'],
      ['Alexander Fleming, Penicillin, Nobel Lecture (1945)', 'https://www.nobelprize.org/prizes/medicine/1945/fleming/lecture/'],
      ['Llewelyn et al., The antibiotic course has had its day, BMJ 2017;358:j3418，以及反对意见的报道', 'https://pharmaceutical-journal.com/article/news/no-evidence-that-stopping-antibiotics-early-encourages-antibiotic-resistance-say-experts'],
    ],
  },
  guide: '这是「生物：进化是怎么运作的」第 1 集。读完你会：① 说清楚自然选择需要的三个条件，并且能用它解释任何「进化」的现象；② 改掉一个很常见的误解：药不会「教会」细菌耐药；③ 用一道乘法看懂为什么耐药几乎不可避免；④ 看懂一个把进化拍成视频的实验，以及它最出人意料的发现；⑤ 知道「吃完一整个疗程」这条规矩是从哪来的，现在的科学家为什么在吵它。（本文不是用药建议。）',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['Most people describe antibiotic resistance like this: if you take antibiotics too often, your body gets used to them, and they stop working.', '大多数人是这样描述抗生素耐药的：抗生素吃多了，身体就习惯了，药就不灵了。'],
      ['Almost every part of that sentence is wrong.', '这句话几乎每一部分都是错的。'],
      ['It is not your body that changes, it is the bacteria.', '变的不是你的身体，而是细菌。'],
      ['And the bacteria do not get used to anything: no single bacterium learns to resist the drug.', '细菌也没有「习惯」什么：没有哪一个细菌学会了抵抗药物。'],
      ['What happens is evolution, and it happens fast enough to watch.', '真正发生的是进化，而且快到可以亲眼看着它发生。'],
    ],

    { h: '1. Three conditions for natural selection', zh: '1. 自然选择的三个条件' },
    [
      ['In 1859, Charles Darwin described [[natural selection|自然选择]], and it needs only three things to be true.', '1859 年，查尔斯·达尔文描述了自然选择{natural selection}。它只需要三件事成立。'],
      ['First, [[variation|变异]]: individuals in a population are not all identical.', '第一，变异{variation}：一个群体里的个体并不完全一样。'],
      ['Second, [[inheritance|遗传]]: offspring tend to resemble their parents.', '第二，遗传{inheritance}：后代往往像它们的亲代。'],
      ['Third, [[differential survival|差别存活]]: some variants survive and reproduce more than others in a given environment.', '第三，差别存活{differential survival}：在某个环境里，有些变异的个体比别的存活和繁殖得更多。'],
      ['If all three are true, the population changes over generations, automatically, with nobody planning it.', '只要三条都成立，群体就会一代一代地改变，自动地，没有任何人在计划。'],
    ],
    {
      box: [
        ['The key word is population.', '关键词是「群体」。'],
        ['Individuals do not evolve: a bacterium is born with the genes it has and dies with them.', '个体不会进化：一个细菌生下来带着什么基因，死的时候还是那些基因。'],
        ['What evolves is the mix of individuals in the population, because some kinds leave more offspring than others.', '进化的是群体里各种个体的比例，因为有些类型留下的后代比别的多。'],
        ['The old textbook mistake about giraffes, that they stretched their necks and passed longer necks to their children, is exactly the “getting used to it” mistake in another form.', '教科书里关于长颈鹿的那个老错误，说长颈鹿伸长了脖子，就把更长的脖子传给了孩子，跟「习惯了」是同一个错误，只是换了个样子。'],
      ],
    },

    { h: '2. The drug does not create resistance', zh: '2. 耐药不是药「造」出来的' },
    [
      ['When a bacterium divides, it copies its DNA, and once in a while the copying makes a mistake.', '细菌分裂的时候会复制自己的 DNA，偶尔复制会出错。'],
      ['These random copying mistakes are called [[mutations|突变]].', '这些随机的复制错误叫突变{mutations}。'],
      ['Most do nothing or cause harm, but very occasionally one changes a protein in a way that makes a particular antibiotic work less well on that cell.', '大多数突变没什么影响，或者有害，但极偶尔，有一个突变改变了某种蛋白质，让某一种抗生素对这个细胞不那么管用了。'],
      ['The important point is when this happens: the mutations appear whether or not the drug is present.', '关键是它发生的时间：不管有没有药，这些突变都会出现。'],
    ],
    [
      ['Now add the drug.', '现在加入药物。'],
      ['It kills the ordinary bacteria, and the rare resistant ones survive.', '它杀死了普通的细菌，少数耐药的活了下来。'],
      ['With their competitors gone, the survivors have all the food and space, and within a day their offspring can make up most of the population.', '竞争者没了，幸存者独占了所有的食物和空间，一天之内，它们的后代就可能占到群体的大多数。'],
      ['The drug did not create the resistance; it removed everything that was not resistant.', '药并没有制造耐药性，它只是把所有不耐药的都清除掉了。'],
      ['Biologists call this a [[selection pressure|选择压力]].', '生物学家把这叫作选择压力{selection pressure}。'],
    ],

    { h: '3. Why resistance is almost guaranteed', zh: '3. 为什么耐药几乎是必然的' },
    [
      ['Here is a short calculation that changes how you see the problem.', '下面这个小计算，会改变你看待这个问题的方式。'],
      ['In good conditions in the laboratory, a common gut bacterium, E. coli, can divide about every 20 minutes.', '在实验室的理想条件下，一种常见的肠道细菌，大肠杆菌，大约每 20 分钟就能分裂一次。'],
      ['Start with one cell.', '从一个细胞开始。'],
      ['After one hour there are 8, after ten hours about 1 billion, because ten hours is 30 doublings and 2 to the power of 30 is about 1 billion.', '一小时后有 8 个，十小时后大约 10 亿个，因为十小时是 30 次翻倍，而 2 的 30 次方大约是 10 亿。'],
    ],
    {
      box: [
        ['Now suppose, as an example, that one particular resistance mutation appears in about 1 in every 100 million new cells.', '现在举个例子，假设某一种耐药突变，大约每 1 亿个新细胞里出现 1 个。'],
        ['In a population of 1 billion, that is about 10 resistant cells already present, before anyone has taken a single pill.', '在 10 亿个细胞的群体里，就已经有大约 10 个耐药的细胞了，而这时候还没有人吃过一片药。'],
        ['A serious infection can involve far more bacteria than that.', '一次严重的感染，涉及的细菌可能比这多得多。'],
        ['So the question is never whether a resistant mutant exists somewhere; it is whether the drug gives it a chance to take over.', '所以问题从来不是「有没有耐药的突变体」，而是「药给不给它机会去占领」。'],
      ],
    },

    { h: '4. Filming evolution', zh: '4. 把进化拍成视频' },
    [
      ['In 2016, researchers led by Michael Baym at Harvard Medical School built a giant petri dish, about 120 by 60 centimetres, and filled it with a jelly that bacteria can grow on.', '2016 年，哈佛医学院迈克尔·贝姆领导的研究者做了一个巨大的培养皿，大约 120 厘米长、60 厘米宽，里面铺满了细菌能在上面生长的胶状培养基。'],
      ['They divided it into bands, like a running track.', '他们把它分成一条条的带子，像跑道一样。'],
      ['The outer bands had no antibiotic, and each band towards the middle had more, up to thousands of times the dose that killed the original bacteria.', '最外面的带子没有抗生素，越往中间，每一条带子里的药越多，最多是能杀死原始细菌的剂量的几千倍。'],
      ['They put E. coli on the outer edge, placed a camera above it, and waited.', '他们把大肠杆菌放在最外边，在上方装了一台摄像机，然后开始等。'],
    ],
    [
      ['The bacteria spread across the first band and then stopped at the edge of the second, where the drug was too strong.', '细菌铺满了第一条带子，然后在第二条带子的边上停住了，因为那里的药太强了。'],
      ['Then, at a few points along the edge, a small group pushed across: a mutant had appeared that could survive there.', '接着，在边界上的几个地方，有一小群冲了过去：出现了一个能在那里活下来的突变体。'],
      ['The same thing happened at every band, and in just over ten days the bacteria had reached the strongest band in the middle.', '每一条带子都重复了同样的过程，十天多一点，细菌就到达了正中间药最强的那条带子。'],
      ['You can watch the video online: it looks like a branching tree growing inward, and each new branch is a new mutation.', '你可以在网上看这段视频：它看起来像一棵往里长的、不断分叉的树，每一根新的分叉就是一个新的突变。'],
    ],
    [
      ['The experiment also showed two things nobody had seen this clearly before.', '这个实验还展示了两件以前从没看得这么清楚的事。'],
      ['First, the bacteria could not jump straight from no drug to a very high dose; they needed the steps in between.', '第一，细菌没法从没有药直接跳到很高的剂量，它们需要中间那几级台阶。'],
      ['Low and medium levels of a drug are exactly where resistance builds up, one mutation at a time.', '药物浓度低和中等的地方，正是耐药一个突变一个突变积累起来的地方。'],
      ['Second, the most resistant mutants were often not the ones leading the race.', '第二，耐药性最强的突变体，常常并不是跑在最前面的那些。'],
      ['Many resistance mutations come with a [[fitness cost|适应代价]]: the cell grows more slowly, so a strongly resistant mutant can be overtaken by a weaker but faster one that happens to be at the front.', '很多耐药突变都带着适应代价{fitness cost}：细胞长得更慢，所以一个耐药性很强的突变体，可能被一个耐药性弱一些、但长得更快、正好在最前面的突变体超过。'],
      ['Evolution does not pick the “best” design; it picks whatever is good enough in the right place at the right time.', '进化并不挑「最好」的设计，它挑的是在对的时间、对的地点，够好的那一个。'],
    ],

    { h: '5. “Always finish the course”', zh: '5. 「一定要把疗程吃完」' },
    [
      ['Alexander Fleming, who discovered penicillin, warned about resistance in his Nobel Prize lecture in 1945.', '发现青霉素的亚历山大·弗莱明，1945 年在他的诺贝尔奖演讲里就警告过耐药的问题。'],
      ['He worried that when penicillin could be bought freely in shops, people would take too little of it, exposing their bacteria to doses that did not kill them, and so make them resistant.', '他担心，等到青霉素在商店里随便能买到，人们会吃得太少，让细菌接触到杀不死它们的剂量，从而让它们产生耐药。'],
      ['From worries like this came a rule almost everyone knows: always finish the full course of antibiotics, even if you feel better.', '从这样的担忧里，产生了一条几乎人人都知道的规矩：抗生素一定要吃完整个疗程，哪怕你已经觉得好了。'],
    ],
    [
      ['In 2017, a group of infectious disease experts argued in the British Medical Journal that this rule has very little evidence behind it.', '2017 年，一组传染病专家在《英国医学杂志》上发文，认为这条规矩背后的证据非常少。'],
      ['Their point was not that people should take less medicine; it was about which bacteria get selected.', '他们的意思不是让人少吃药，而是在讲哪些细菌会被选择出来。'],
      ['The bacteria causing your infection are not the only ones exposed to the drug.', '接触到药物的，不只是让你生病的那些细菌。'],
      ['Every day you keep taking it, the trillions of harmless bacteria in your gut and on your skin are under selection pressure too, and some of them carry resistance genes that they can pass to dangerous bacteria later.', '你每多吃一天，肠道里和皮肤上数以万亿计的无害细菌，也同样承受着选择压力，而它们当中有一些携带耐药基因，以后可能把这些基因传给危险的细菌。'],
      ['On this view, taking antibiotics for longer than needed may cause more resistance than stopping early.', '按照这个观点，抗生素吃得比需要的更久，引起的耐药可能比提前停药更多。'],
    ],
    [
      ['Other experts, including England’s Chief Medical Officer at the time, disagreed with changing the public message before more research was done.', '另一些专家，包括当时英格兰的首席医疗官，不同意在有更多研究之前就改变对公众的说法。'],
      ['Patients cannot easily tell whether an infection has really cleared, and for some infections, such as tuberculosis, long courses are clearly necessary.', '病人很难自己判断感染是不是真的好了，而且有些感染，比如结核病，明确需要很长的疗程。'],
      ['The current direction in medicine is toward shorter courses where trials show they work, decided by doctors, not by patients stopping on their own.', '现在医学的方向是：在临床试验证明有效的地方，用更短的疗程，由医生来决定，而不是病人自己停药。'],
      ['So the practical rule for you has not changed: take antibiotics exactly as your doctor prescribes, and ask whether a shorter course is possible.', '所以对你来说，实际的规矩没有变：严格按照医生开的方子吃，可以问问医生能不能用更短的疗程。'],
    ],
    {
      box: [
        ['What is interesting is how the reasoning changed.', '有意思的是推理是怎么变的。'],
        ['The old rule thought only about the bacteria causing the infection.', '旧的规矩只想到了引起感染的那些细菌。'],
        ['The newer view looks at the whole population of bacteria in your body as the thing that is evolving.', '新的观点把你身体里所有的细菌看成正在进化的那个群体。'],
        ['That is section 1 again: to understand evolution, always ask which population, and what is selecting it.', '这又回到了第 1 部分：想看懂进化，永远要问：是哪个群体？是什么在选择它？'],
      ],
    },

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['Bacteria can evolve in days because they divide every 20 minutes and number in billions.', '细菌能在几天之内进化，是因为它们每 20 分钟分裂一次，数量以十亿计。'],
      ['Humans have one generation every 25 years or so, and there are far fewer of us.', '人类大约 25 年才一代，数量也少得多。'],
      ['So is human evolution over, or can we see it too?', '那人类的进化是不是已经停了？还是我们也能看到它？'],
      ['Episode 2: why most adults in the world cannot digest milk, and why most people in northern Europe can.', '第 2 集：为什么世界上大多数成年人消化不了牛奶，北欧的大多数人却可以。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['Bacteria don’t get used to antibiotics; the drug selects the ones that were already resistant.', '细菌不是对抗生素「习惯」了，而是药把本来就耐药的那些挑了出来。'],
    ['Individuals don’t evolve, populations do.', '个体不会进化，群体才会。'],
    ['The question isn’t whether a resistant mutant exists, it’s whether we give it the chance to take over.', '问题不是有没有耐药的突变体，而是我们给不给它机会去占领。'],
  ],
  quiz: [
    {
      q: ['Which description of antibiotic resistance is correct?', '下面哪种对抗生素耐药的描述是对的？'],
      opts: [['Resistant mutants already exist; the drug kills the others, so the resistant ones take over.', '耐药的突变体本来就存在；药杀死了其他的，耐药的就占领了'], ['Your body gets used to the drug.', '你的身体习惯了这种药'], ['Each bacterium learns to resist after meeting the drug.', '每个细菌碰到药以后学会了抵抗']],
      a: 0,
      e: ['Mutations appear with or without the drug. The drug is the selection pressure.', '有没有药，突变都会出现。药是选择压力。'],
    },
    {
      q: ['Why does a billion-cell infection almost guarantee some resistant cells?', '为什么一次 10 亿个细菌的感染，几乎一定会有一些耐药的细胞？'],
      opts: [['Even a mutation that appears once in 100 million cells will be present about 10 times.', '就算一种突变每 1 亿个细胞才出现一次，也会有大约 10 个'], ['Bacteria choose to become resistant.', '细菌会主动选择变得耐药'], ['A billion is the number where bacteria become smart.', '10 亿是细菌变聪明的数量']],
      a: 0,
      e: ['Huge numbers turn rare events into certainties. This is why resistance is a numbers problem.', '巨大的数量把罕见的事件变成了必然。这就是为什么耐药是一个数量问题。'],
    },
    {
      q: ['In the giant petri dish, why were the most resistant mutants often not at the front?', '在巨型培养皿里，为什么耐药性最强的突变体常常不在最前面？'],
      opts: [['Resistance often slows growth, so faster but less resistant mutants overtook them.', '耐药常常让细菌长得慢，所以长得快、但耐药性弱一些的超过了它们'], ['The camera could not see them.', '摄像机拍不到它们'], ['They were killed by the drug.', '它们被药杀死了']],
      a: 0,
      e: ['This is the fitness cost of resistance. Evolution picks what is good enough in the right place at the right time.', '这就是耐药的适应代价。进化挑的是在对的时间、对的地点，够好的那一个。'],
    },
    {
      q: ['What was the main argument of the 2017 BMJ article?', '2017 年《英国医学杂志》那篇文章的主要观点是什么？'],
      opts: [['Taking antibiotics longer than needed may select resistance in the body’s harmless bacteria.', '抗生素吃得比需要的更久，可能在身体里无害的细菌中选择出耐药性'], ['Antibiotics no longer work.', '抗生素已经没用了'], ['Patients should never take antibiotics.', '病人永远不该吃抗生素']],
      a: 0,
      e: ['Others disagreed with changing public advice. In practice, follow your doctor’s prescription.', '也有人反对改变对公众的建议。实际操作中，请遵医嘱。'],
    },
  ],
  questions: [
    {
      q: ['Exercise 1. Explain why insects become resistant to insecticides on farms, using the three conditions from section 1. Then say what a farmer could do to slow it down.', '练习 1。用第 1 部分的三个条件，解释为什么农田里的害虫会对杀虫剂产生抗药性。再说说农民可以做什么来减慢这个过程。'],
      a: [
        ['Variation: a few insects carry genes that make the poison work less well on them. Inheritance: their offspring carry those genes. Differential survival: after spraying, mostly those insects survive and breed.', '变异：少数害虫带有让毒药对它们效果变差的基因。遗传：它们的后代也带着这些基因。差别存活：喷药以后，主要是这些害虫活下来繁殖。'],
        ['So each season the share of resistant insects rises, exactly as with bacteria.', '所以每一季，抗药害虫的比例都在上升，跟细菌一模一样。'],
        ['To slow it down, a farmer can switch between poisons that work in different ways, and leave some areas unsprayed so that non-resistant insects survive and breed with the resistant ones; both ideas are used in real farming.', '要减慢它，农民可以轮换使用作用方式不同的杀虫剂，也可以留一些地方不喷药，让不抗药的害虫活下来，跟抗药的一起繁殖。这两个办法在真实的农业里都在用。'],
      ],
    },
    {
      q: ['Exercise 2. In the giant petri dish, bacteria could not jump straight to the highest dose. What does this suggest about the danger of a drug being present at low levels for a long time, for example in a river near a factory or in farm animals?', '练习 2。在巨型培养皿里，细菌没法直接跳到最高的剂量。这说明药物长期以低浓度存在，比如工厂附近的河流里或者养殖的动物身上，会有什么危险？'],
      a: [
        ['Low levels of a drug do not kill most bacteria, but they do favour any mutant that is slightly more resistant.', '低浓度的药杀不死大多数细菌，却会偏向任何耐药性稍强一点的突变体。'],
        ['That gives bacteria the in-between steps they need to climb, one mutation at a time, toward high resistance.', '这就给了细菌它们需要的中间台阶，让它们一个突变一个突变地，往高耐药性爬。'],
        ['This is one reason many countries have restricted the use of antibiotics to make farm animals grow faster.', '这也是很多国家限制用抗生素来让养殖动物长得更快的原因之一。'],
      ],
    },
  ],
  words: {
    antibiotic:   ['/ˌæntibaɪˈɑːtɪk/', '抗生素'],
    antibiotics:  ['/ˌæntibaɪˈɑːtɪks/', '抗生素（复数）'],
    resistance:   ['/rɪˈzɪstəns/', '抗性，耐药性'],
    resistant:    ['/rɪˈzɪstənt/', '有抗性的，耐药的'],
    bacterium:    ['/bækˈtɪriəm/', '细菌（单数）'],
    bacteria:     ['/bækˈtɪriə/', '细菌'],
    darwin:       ['/ˈdɑːrwɪn/', '达尔文'],
    variation:    ['/ˌveriˈeɪʃn/', '变异'],
    inheritance:  ['/ɪnˈherɪtəns/', '遗传'],
    differential: ['/ˌdɪfəˈrenʃl/', '有差别的'],
    variants:     ['/ˈveriənts/', '变异体，变种'],
    offspring:    ['/ˈɔːfsprɪŋ/', '后代'],
    giraffes:     ['/dʒəˈræfs/', '长颈鹿'],
    mutations:    ['/mjuːˈteɪʃnz/', '突变'],
    mutation:     ['/mjuːˈteɪʃn/', '突变'],
    mutant:       ['/ˈmjuːtənt/', '突变体'],
    mutants:      ['/ˈmjuːtənts/', '突变体（复数）'],
    protein:      ['/ˈproʊtiːn/', '蛋白质'],
    coli:         ['/ˈkoʊlaɪ/', 'E. coli 大肠杆菌'],
    petri:        ['/ˈpiːtri/', 'petri dish 培养皿'],
    baym:         ['', '贝姆（研究者 Michael Baym）'],
    fitness:      ['/ˈfɪtnəs/', '适应度；fitness cost 适应代价'],
    fleming:      ['/ˈflemɪŋ/', '弗莱明（发现青霉素的科学家）'],
    penicillin:   ['/ˌpenɪˈsɪlɪn/', '青霉素'],
    infectious:   ['/ɪnˈfekʃəs/', '传染的'],
    tuberculosis: ['/tuːˌbɜːrkjəˈloʊsɪs/', '结核病'],
    prescribes:   ['/prɪˈskraɪbz/', '开处方'],
    insecticides: ['/ɪnˈsektɪsaɪdz/', '杀虫剂'],
    trillions:    ['/ˈtrɪljənz/', '数以万亿计'],
  },
});
