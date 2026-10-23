// 单篇 · 法律。新格式（中英一对一对，三档都能读）
addContent('miranda', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "刑侦剧": "crime show", "警察": "police", "嫌疑人": "suspect", "法庭": "court",
    "证据": "evidence", "律师": "lawyer", "认罪书": "confession", "审讯": "questioning",
    "最高法院": "Supreme Court", "宪法": "Constitution", "证人": "witness", "权利": "rights",
    "原则": "principle", "法官": "judges", "酒吧": "bar", "斗殴": "fight",
    "受害者": "victims", "凤凰城": "Phoenix", "亚利桑那州": "Arizona", "米兰达": "Miranda",
    "投票": "vote", "理由": "reason", "法院": "court", "警告": "warning",
    "中国": "China", "刑事诉讼法": "Criminal Procedure Law",
    "手册": "manuals", "国会": "Congress", "代价": "cost", "捷径": "shortcut",
    "压力": "pressure", "房间": "room",
  },
  summary: '美剧里警察一抓人就念「你有权保持沉默」。这段话从哪来？最戏剧性的是那个让它出名的人后来的结局。',
  sayTitle: 'Say it in English',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲真实事件，事实来源见下',
    facts: [
      ['Wikipedia：Miranda v. Arizona', 'https://en.wikipedia.org/wiki/Miranda_v._Arizona'],
      ['History.com：Who is the Miranda warning named for?', 'https://history.com/news/who-is-the-miranda-warning-named-for'],
      ['National Constitution Center：Ernesto Miranda’s role in constitutional history', 'https://constitutioncenter.org/amp/blog/ernesto-mirandas-role-in-constitutional-history'],
      ['判决原文：Miranda v. Arizona, 384 U.S. 436 (1966)，讨论审讯手册的部分', 'https://supreme.justia.com/cases/federal/us/384/436/'],
      ['Dickerson v. United States, 530 U.S. 428 (2000)，7 比 2', 'https://supreme.justia.com/cases/federal/us/530/428/'],
    ],
  },
  guide: '读完你会知道：① 美剧里那段「你有权保持沉默」叫米兰达警告，来自 1966 年美国最高法院的一个案子；② 沉默权 1791 年就有了，为什么还非要当面念出来；③ 是什么让警察真的会照着念；④ 米兰达本人后来又被判了有罪，几年后在酒吧斗殴中被杀，而嫌疑人被抓时，警察给他念的正是米兰达警告。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['You are watching an American crime show.', '你在看一部美国刑侦剧。'],
      ['The police catch the suspect and say, “You have the right to remain silent. Anything you say can and will be used against you in a court of law.”', '警察抓住嫌疑人，说：「你有权保持沉默。你说的每一句话，都可能在法庭上被用作对你不利的证据。」'],
      ['You have heard it a hundred times. But where does it come from?', '这段话你听过一百遍了。可它到底是从哪来的？'],
    ],
    { img: {"src": "images/supreme-court.jpg", "alt": "The US Supreme Court building in Washington", "caption": "The US Supreme Court building, Washington, D.C.", "zh": "华盛顿的美国最高法院大楼", "credit": "Photo: Claire Anderson · CC0", "link": "https://commons.wikimedia.org/wiki/File:Supreme_Court_Building,_Washington_(Unsplash).jpg"} },

    { h: '1. A man named Miranda', zh: '1. 一个叫米兰达的人' },
    [
      ['In 1963, police in Phoenix, Arizona, arrested a man named Ernesto Miranda.', '1963 年，亚利桑那州凤凰城的警察逮捕了一个叫埃内斯托·米兰达的人。'],
      ['After about two hours of questioning, he signed a confession.', '经过大约两小时的审讯，他在认罪书上签了字。'],
      ['Nobody had told him that he did not have to answer, or that he could ask for a lawyer.', '没有人告诉过他：他可以不回答，也可以要求请律师。'],
      ['His confession was used in court, and he was found guilty.', '他的认罪书在法庭上被当作证据，他被判有罪。'],
    ],

    { h: '2. The Supreme Court steps in', zh: '2. 最高法院出手' },
    [
      ['Miranda’s lawyers appealed all the way to the US Supreme Court.', '米兰达的律师一路上诉到美国最高法院。'],
      ['In June 1966, in a 5–4 decision, the court ruled that his confession should not have been used.', '1966 年 6 月，最高法院以 5 比 4 的投票裁定：他的认罪书本不该被采用。'],
    ],

    { h: '3. Why say it out loud?', zh: '3. 为什么一定要念出来？' },
    [
      ['Here is the strange part: the right to stay silent was not new.', '奇怪的地方在这里：保持沉默的权利并不是新东西。'],
      ['The [[Fifth Amendment|第五修正案]] of the US Constitution, written in 1791, already said no one can be forced to be a witness against themselves.', '美国宪法第五修正案{Fifth Amendment}早在 1791 年就写了：任何人都不能被强迫做不利于自己的证人。'],
      ['So when Miranda was arrested in 1963, he already had this right, and had for more than 170 years.', '也就是说，1963 年米兰达被抓的时候，他本来就有这条权利，而且它已经存在了 170 多年。'],
      ['The problem was that he did not know it, and a right you do not know about is a right you cannot use.', '问题是他不知道。一条你不知道的权利，等于没有。'],
    ],
    {
      box: [
        ['This idea is called the [[right against self-incrimination|不被迫自证其罪的权利]].', '这个原则叫不被迫自证其罪的权利{right against self-incrimination}。'],
        ['To see why people give it up, the court read the training manuals police used at the time.', '为了弄清楚人为什么会放弃这条权利，法院去翻了当时警察用的审讯培训手册。'],
        ['The manuals taught officers to question a suspect alone, in an unfamiliar room, for hours, to act as if his guilt was already proven, and to pretend to be on his side.', '手册教警察：把嫌疑人单独带进一个陌生的房间，一问就是几个小时；表现得好像他有罪已经是定论；还要装作站在他那一边。'],
        ['The court concluded that the questioning room itself puts pressure on people, so a confession made there is often not truly free.', '法院的结论是：审讯的环境本身就会给人施加压力，在那里做出的认罪，往往不是真正自愿的。'],
        ['So the court said police must clearly explain a person’s rights before questioning them.', '所以法院说：审讯之前，警察必须把这个人的权利讲清楚。'],
        ['That explanation became known as the [[Miranda warning|米兰达警告]].', '这段说明后来就被叫作米兰达警告{Miranda warning}。'],
      ],
    },
    [
      ['The warning usually covers four points: you can stay silent, what you say can be used against you, you can have a lawyer, and if you cannot pay, one will be provided.', '这段警告一般包括四点：你可以保持沉默；你说的话可能被用作对你不利的证据；你可以请律师；如果你请不起，会给你指派一个。'],
      ['Each point answers one of those pressures: you learn you may say nothing, you learn the police are not on your side, and you get someone who is.', '每一点都对着一种压力：你知道了可以什么都不说；你知道了警察并不是在帮你；你还能叫来一个真正站在你这边的人。'],
    ],

    { h: '4. What makes police actually say it', zh: '4. 警察为什么会乖乖照念' },
    [
      ['A rule only works if breaking it costs something.', '一条规定，只有违反它要付出代价，才会真的管用。'],
      ['Here the cost is simple: if the police skip the warning, the confession usually cannot be used in court.', '这里的代价很简单：警察不念警告，认罪书通常就不能在法庭上用。'],
      ['Hours of questioning are wasted, so police have a strong reason to read the warning every time.', '几个小时的审讯就白费了，所以警察每次都有很强的理由照着念。'],
      ['There is one more reason behind all this: a forced confession is not reliable evidence.', '这背后还有一层理由：逼出来的认罪，本身就不是可靠的证据。'],
      ['Under enough pressure, even an innocent person may confess just to make the questioning stop.', '压力够大的时候，就算是无辜的人，也可能为了让审讯停下来而认罪。'],
      ['If a confession cannot be a shortcut, police have to find other evidence, and that is much harder to fake.', '认罪书当不了捷径，警察就只能去找别的证据，而这些证据要难造假得多。'],
    ],
    {
      box: [
        ['One more detail: this rule did not come from Congress. It came from the Supreme Court reading the Constitution.', '还有一个细节：这条规矩不是国会立的法，而是最高法院解释宪法时定下的。'],
        ['In 1968, Congress passed a law saying a confession could be used as long as it was voluntary, warning or not.', '1968 年，国会通过了一条法律：只要认罪是自愿的，有没有念警告都能用。'],
        ['In 2000, the Supreme Court rejected that law, 7–2: a rule that comes from the Constitution cannot be replaced by an ordinary law.', '2000 年，最高法院以 7 比 2 否定了这条法律：来自宪法的规矩，国会不能用一条普通法律换掉。'],
      ],
    },

    { h: '5. The twist', zh: '5. 反转' },
    [
      ['Winning at the Supreme Court did not set Miranda free.', '在最高法院赢了官司，并没有让米兰达重获自由。'],
      ['He was tried again, this time without his confession, and was found guilty again using other evidence.', '他被重新审判，这次没用他的认罪书，但凭其他证据，他再次被判有罪。'],
      ['That is exactly the idea from part 4: without the confession, the case had to stand on other evidence, and it did.', '这正是第 4 部分说的：认罪书不能用，案子就得靠别的证据撑住，而它撑住了。'],
      ['Years later, in 1976, he was stabbed to death in a fight in a Phoenix bar.', '多年以后的 1976 年，他在凤凰城一家酒吧的斗殴中被人刺死。'],
      ['When the police arrested a suspect, they read him his Miranda rights.', '警察逮捕嫌疑人的时候，给他念的正是米兰达警告。'],
    ],

    { h: '6. In China', zh: '6. 在中国' },
    [
      ['China’s Criminal Procedure Law has a similar principle.', '中国的《刑事诉讼法》里也有类似的原则。'],
      ['Since its 2012 revision, it has said that no one may be forced to prove their own guilt.', '2012 年修改之后，它明确写着：不得强迫任何人证实自己有罪。'],
    ],
  ],
  sayIt: [
    ['You have the right to remain silent.', '你有权保持沉默。'],
    ['No one should be forced to be a witness against themselves.', '任何人都不应该被强迫做不利于自己的证人。'],
  ],
  quiz: [
    {
      q: ['Why did the Supreme Court say Miranda’s confession should not have been used?', '最高法院为什么说米兰达的认罪书不该被采用？'],
      opts: [['He had not been told his rights before questioning.', '审讯前没人告诉他有哪些权利'], ['The police were too polite.', '警察太客气了'], ['He confessed in Spanish.', '他是用西班牙语认罪的']],
      a: 0,
      e: ['The court said the right only works if people know about it, so police must explain it before questioning.', '法院说，这条权利只有在人知道的时候才管用，所以警察必须在审讯前讲清楚。'],
    },
    {
      q: ['The right to stay silent already existed in 1791. Why did the court still require the warning?', '保持沉默的权利 1791 年就有了。法院为什么还要求念警告？'],
      opts: [['A right people do not know about is useless, and the questioning room itself puts pressure on them.', '人不知道的权利没有用，而且审讯的环境本身就会给人施压'], ['The old law had been cancelled.', '旧的法律被废除了'], ['Congress asked the court to do it.', '国会要求法院这么做']],
      a: 0,
      e: ['The court read police manuals and saw how questioning wears people down, so it made the right impossible to miss.', '法院翻了警察的审讯手册，看到审讯是怎么把人磨垮的，所以要让每个人都不可能不知道这条权利。'],
    },
    {
      q: ['What makes police actually read the warning?', '是什么让警察真的会去念警告？'],
      opts: [['If they skip it, the confession usually cannot be used in court.', '不念的话，认罪书通常不能在法庭上用'], ['They get a bonus for each warning.', '每念一次有奖金'], ['Suspects always ask for it.', '嫌疑人总会主动要求']],
      a: 0,
      e: ['Breaking the rule costs them their evidence, so following it is in their own interest.', '违反规定的代价是丢掉证据，所以照着念对警察自己也有利。'],
    },
    {
      q: ['What happened to Miranda after he won at the Supreme Court?', '米兰达在最高法院胜诉以后怎么样了？'],
      opts: [['He was freed and never tried again.', '被释放，再也没受审'], ['He was tried again and found guilty using other evidence.', '被重新审判，凭其他证据再次被判有罪'], ['He became a lawyer.', '成了律师']],
      a: 1,
      e: ['His confession could not be used, but other evidence was enough.', '他的认罪书不能用了，但其他证据已经足够。'],
    },
    {
      q: ['What does the [[right against self-incrimination|不被迫自证其罪的权利]] protect?', '不被迫自证其罪的权利{right against self-incrimination}保护的是什么？'],
      opts: [['The right not to be forced to prove your own guilt.', '不被强迫证明自己有罪的权利'], ['The right to leave prison early.', '提前出狱的权利'], ['The right to choose your judge.', '挑选法官的权利']],
      a: 0,
      e: ['No one can be forced to be a witness against themselves.', '任何人都不能被强迫做不利于自己的证人。'],
    },
  ],
  questions: [
    {
      q: ['The Supreme Court was split 5–4. What might the four judges who disagreed have worried about?', '最高法院是 5 比 4。投反对票的四位法官，可能在担心什么？'],
      a: [
        ['There is no single right answer.', '没有标准答案。'],
        ['They may have worried that fewer people would confess, making it harder for police to solve crimes.', '他们可能担心：认罪的人会变少，警察破案会更难。'],
        ['The debate is always a balance between protecting suspects and protecting victims.', '这类争论永远是在「保护嫌疑人」和「保护受害者」之间找平衡。'],
      ],
    },
  ],
  words: {
    suspect:       ['/ˈsʌspekt/', '嫌疑人'],
    remain:        ['/rɪˈmeɪn/', '保持'],
    silent:        ['/ˈsaɪlənt/', '沉默的'],
    miranda:       ['/mɪˈrændə/', '米兰达（人名；Miranda warning 米兰达警告）'],
    phoenix:       ['/ˈfiːnɪks/', '凤凰城（美国亚利桑那州首府）'],
    arizona:       ['/ˌærɪˈzoʊnə/', '亚利桑那州'],
    ernesto:       ['', '埃内斯托（人名）'],
    confession:    ['/kənˈfeʃn/', '认罪，供述'],
    guilty:        ['/ˈɡɪlti/', '有罪的'],
    appealed:      ['/əˈpiːld/', '上诉'],
    supreme:       ['/suːˈpriːm/', '最高的；Supreme Court 最高法院'],
    ruled:         ['/ruːld/', '裁定'],
    fifth:         ['/fɪfθ/', '第五；Fifth Amendment 第五修正案'],
    amendment:     ['/əˈmendmənt/', '修正案'],
    constitution:  ['/ˌkɑːnstɪˈtuːʃn/', '宪法'],
    witness:       ['/ˈwɪtnəs/', '证人'],
    'self-incrimination': ['/ˌself ɪnˌkrɪmɪˈneɪʃn/', '自证其罪'],
    twist:         ['/twɪst/', '反转'],
    tried:         ['/traɪd/', '受审，审判'],
    stabbed:       ['/stæbd/', '被刺'],
    criminal:      ['/ˈkrɪmɪnl/', '刑事的'],
    procedure:     ['/prəˈsiːdʒər/', '程序；Criminal Procedure Law 刑事诉讼法'],
    revision:      ['/rɪˈvɪʒn/', '修订'],
    guilt:         ['/ɡɪlt/', '罪行，有罪'],
    manuals:       ['/ˈmænjuəlz/', '手册'],
    unfamiliar:    ['/ˌʌnfəˈmɪliər/', '陌生的'],
    reliable:      ['/rɪˈlaɪəbl/', '可靠的'],
    innocent:      ['/ˈɪnəsnt/', '无辜的'],
    congress:      ['/ˈkɑːŋɡrəs/', '（美国）国会'],
    voluntary:     ['/ˈvɑːlənteri/', '自愿的'],
  },
});
