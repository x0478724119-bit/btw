// 连续剧「心理学：那些有名的实验，后来怎么样了」第 1 集。斯坦福监狱实验：情境论、需求特征、自我选择、BBC 监狱研究
addContent('psy-prison', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "心理学家": "psychologist", "心理学": "psychology", "实验": "experiment", "大学生": "college students",
    "狱警": "guards", "囚犯": "prisoners", "监狱": "prison", "地下室": "basement",
    "墨镜": "sunglasses", "制服": "uniforms", "警棍": "batons", "编号": "numbers",
    "教科书": "textbooks", "电影": "film", "广告": "advert", "报纸": "newspaper",
    "录音": "recordings", "档案": "archives", "研究生": "graduate student", "女朋友": "girlfriend",
    "考试": "exam", "演员": "actor", "领导者": "leaders", "团体": "group",
    "电视台": "TV channel", "士兵": "soldiers", "法庭": "court", "证人": "witness",
    "性格": "personality", "环境": "situation", "规则": "rules", "结论": "conclusion",
  },
  summary: '1971 年，斯坦福大学把 24 个普通大学生分成狱警和囚犯，六天后实验被迫叫停，因为「狱警」变得越来越残忍。它成了心理学最有名的实验：好人放进坏环境，就会变坏。可几十年后公开的录音显示，狱警是被人教着变狠的。第 1 集：斯坦福监狱实验。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲心理学史和真实研究，事实来源见下',
    facts: [
      ['Wikipedia：Stanford prison experiment（日期、75 人报名选 24 人、每天 15 美元、海军研究办公室资助、第 6 天停止、Maslach、发表处、各方批评和 Zimbardo 的回应）', 'https://en.wikipedia.org/wiki/Stanford_prison_experiment'],
      ['Le Texier, Debunking the Stanford Prison Experiment, American Psychologist 74 (2019)', 'https://doi.org/10.1037/amp0000401'],
      ['Carnahan & McFarland, Revisiting the Stanford Prison Experiment: Could participant self-selection have led to the cruelty? Personality and Social Psychology Bulletin (2007)', 'https://doi.org/10.1177/0146167206292689'],
      ['Reicher & Haslam, Rethinking the psychology of tyranny: The BBC prison study, British Journal of Social Psychology (2006)', 'https://doi.org/10.1348/014466605X48998'],
      ['Ben Blum, The Lifespan of a Lie, Medium (2018)（Korpi 和 Jaffe 的访谈与录音）', 'https://gen.medium.com/the-lifespan-of-a-lie-d869212b1f62'],
    ],
  },
  guide: '这是「心理学：那些有名的实验，后来怎么样了」第 1 集。读完你会：① 知道斯坦福监狱实验当年是怎么做的，它为什么那么有名；② 学会三个检查任何实验都用得上的问题：参与者是怎么来的、他们以为研究者想要什么、研究者自己在扮演什么角色；③ 看懂几十年后的档案和录音推翻了什么，又没推翻什么；④ 知道 2002 年 BBC 用同样的设计重做了一次，结果完全相反；⑤ 明白为什么「环境让人变坏」这个结论本身，在法庭上也会被拿来用。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['In August 1971, a psychologist at Stanford University named Philip Zimbardo placed an advert in a local newspaper.', '1971 年 8 月，斯坦福大学一位名叫菲利普·津巴多的心理学家，在当地报纸上登了一则广告。'],
      ['It asked for male college students for a psychological study of prison life, paying 15 dollars a day for one to two weeks.', '广告招募男大学生，参加一项「关于监狱生活的心理学研究」，每天 15 美元，为期一到两周。'],
      ['75 men applied, and after personality tests the team picked 24 who seemed the most normal and stable.', '有 75 人报名，经过性格测试，研究团队挑出了看起来最正常、最稳定的 24 个人。'],
      ['A coin flip decided who would be a guard and who would be a prisoner.', '抛硬币决定谁当狱警，谁当囚犯。'],
    ],
    [
      ['The “prison” was a basement corridor in the psychology building.', '这座「监狱」是心理学系大楼地下室里的一条走廊。'],
      ['Prisoners were arrested at home by real local police, wore smocks with numbers instead of names, and had a chain on one ankle.', '囚犯是被当地真警察从家里「逮捕」来的，穿着印有编号、没有名字的罩衫，一只脚踝上拴着链子。'],
      ['Guards wore uniforms and mirrored sunglasses, and carried wooden batons.', '狱警穿着制服，戴着反光墨镜，拿着木头警棍。'],
      ['Zimbardo himself acted as the prison’s superintendent.', '津巴多本人担任这座监狱的「典狱长」。'],
    ],
    [
      ['The study was planned for two weeks.', '实验原计划进行两周。'],
      ['It was stopped after six days, because the guards had become so cruel: stripping prisoners, forcing them to clean toilets with their bare hands, waking them at night for counts.', '六天后就被叫停了，因为狱警变得太残忍了：扒光囚犯的衣服，逼他们徒手刷马桶，半夜把他们叫醒点名。'],
      ['One prisoner broke down after about a day and a half and had to be released.', '一个囚犯大约一天半之后就崩溃了，只好放他走。'],
      ['What finally ended it was a young psychologist, Christina Maslach, who was also Zimbardo’s girlfriend; she saw the prisoners being marched to the toilet with bags over their heads and told him it was wrong.', '最后让实验结束的，是一位年轻的心理学家克里斯蒂娜·马斯拉克，她也是津巴多的女朋友。她看到囚犯头上套着袋子、被押着去上厕所，就告诉津巴多：这是错的。'],
    ],

    { h: '1. The famous conclusion', zh: '1. 那个有名的结论' },
    [
      ['Zimbardo’s conclusion became one of the most quoted ideas in psychology.', '津巴多的结论，成了心理学里被引用最多的观点之一。'],
      ['Ordinary, healthy young men, randomly given power over others, turned cruel within days, without anyone telling them to.', '普通、健康的年轻人，被随机地赋予了支配别人的权力，几天之内就变得残忍了，而且没有任何人叫他们这么做。'],
      ['So, he argued, evil is less about bad people than about bad situations.', '所以，他认为，作恶主要不是因为坏人，而是因为坏的环境。'],
    ],
    {
      box: [
        ['This view is called [[situationism|情境论]]: behaviour depends more on the situation a person is in than on their personality.', '这种观点叫情境论{situationism}：一个人的行为，更多取决于他所处的情境，而不是他的性格。'],
        ['Its opposite is explaining behaviour by [[dispositions|个人特质]], the lasting traits of the individual.', '跟它相反的，是用个人特质{dispositions}，也就是一个人长期稳定的性格来解释行为。'],
        ['The experiment was in almost every introductory psychology textbook for decades, was turned into films, and was presented to the US Congress as evidence about real prisons.', '几十年来，这个实验几乎出现在每一本心理学入门教科书里，被拍成了电影，还被拿到美国国会，当作关于真实监狱的证据。'],
      ],
    },
    [
      ['Notice one thing before going on.', '往下读之前，先注意一件事。'],
      ['The study was never published in a major peer-reviewed psychology journal in the normal way; the first reports appeared in a navy research magazine, a criminology journal and the New York Times Magazine.', '这项研究从来没有按常规方式发表在一本主要的、经过同行评审的心理学期刊上；最早的报告登在一本海军研究杂志、一本犯罪学期刊和《纽约时报杂志》上。'],
      ['Its fame came mostly from Zimbardo’s own descriptions and from film footage, not from other scientists checking the data.', '它的名气主要来自津巴多自己的讲述和影像资料，而不是其他科学家对数据的检验。'],
    ],

    { h: '2. Three questions to ask any experiment', zh: '2. 对任何实验都该问的三个问题' },
    [
      ['Over the next fifty years, critics asked three questions that you can use on any study you read about.', '在之后的五十年里，批评者问了三个问题；你读到任何研究，都可以拿它们来问一问。'],
    ],
    [
      ['Question one: who signed up?', '问题一：是谁报的名？'],
      ['Random assignment to guard or prisoner was good design, but everyone had first chosen to answer an advert about “prison life”.', '随机分配谁当狱警、谁当囚犯，这个设计是好的；可每一个人，都是先自己选择了去回应一则关于「监狱生活」的广告。'],
      ['In 2007, two psychologists placed two versions of the advert: one with the words “prison life” and one without.', '2007 年，两位心理学家登了两个版本的广告：一个有「监狱生活」这几个字，一个没有。'],
      ['People who answered the prison version scored higher on tests of aggressiveness, authoritarianism and narcissism, and lower on empathy.', '回应「监狱」版本的人，在攻击性、威权倾向和自恋的测试上得分更高，在同理心上得分更低。'],
      ['This is called [[self-selection|自我选择]]: when people choose whether to take part, the group is not a random slice of humanity, even if the roles inside it are assigned at random.', '这叫自我选择{self-selection}：当人们自己决定参不参加时，这群人就不是人类的一个随机切片，就算群体内部的角色是随机分配的也一样。'],
    ],
    [
      ['Question two: what did the participants think the researchers wanted?', '问题二：参与者以为研究者想要什么？'],
      ['People in experiments are not passive objects; they try to work out what the study is about and often try to be good participants.', '实验里的人不是被动的物体；他们会努力琢磨这项研究是关于什么的，而且常常想做一个「好的」参与者。'],
      ['Cues in a study that tell participants how they are expected to behave are called [[demand characteristics|需求特征]].', '研究中那些暗示参与者「应该怎么表现」的线索，叫需求特征{demand characteristics}。'],
      ['Uniforms, mirrored sunglasses, real police arrests and a professor playing superintendent are very strong cues about what a “guard” is supposed to be.', '制服、反光墨镜、真警察的逮捕、一位教授亲自扮演典狱长，这些都是非常强烈的线索，告诉你「狱警」应该是什么样子的。'],
    ],
    [
      ['Question three: what role was the researcher playing?', '问题三：研究者自己在扮演什么角色？'],
      ['A scientist should observe; Zimbardo was also running the prison.', '科学家本该只是观察；可津巴多同时还在管理这座监狱。'],
      ['He later admitted that he had become so absorbed in the superintendent role that he lost sight of the people suffering in front of him.', '他后来承认，自己太投入典狱长这个角色了，以至于忘了眼前这些正在受苦的人。'],
      ['When the person measuring the result is also creating it, you cannot easily tell which one you are seeing.', '当测量结果的人同时也在制造结果时，你就很难分清自己看到的到底是哪一个。'],
    ],

    { h: '3. What the archives showed', zh: '3. 档案揭示了什么' },
    [
      ['In the 2010s, Stanford put the study’s recordings and documents online, and a French researcher named Thibault Le Texier went through them.', '2010 年代，斯坦福大学把这项研究的录音和文件放到了网上，一位名叫蒂博·勒泰谢的法国研究者把它们仔细翻了一遍。'],
      ['His 2019 article in the American Psychological Association’s main journal argued that the guards’ behaviour was not spontaneous.', '他 2019 年发表在美国心理学会主要期刊上的文章认为：狱警的行为并不是自发的。'],
    ],
    [
      ['Before the study, the guards were given an orientation session in which the team described the kind of fear and powerlessness they wanted the prisoners to feel.', '实验开始前，狱警参加了一次培训，研究团队在会上描述了他们希望囚犯感受到的那种恐惧和无力。'],
      ['In one recording, the student who played the warden, David Jaffe, presses a guard who is not being harsh enough to be “tough”, telling him that the study depends on it.', '在一段录音里，扮演监狱长的学生戴维·贾菲，催促一个不够凶的狱警要「强硬」一点，告诉他整个研究都靠这个了。'],
      ['The most famous cruel guard, Dave Eshelman, said he had been deliberately acting, and that he modelled himself on a brutal prison officer in the film Cool Hand Luke.', '最有名的那个残忍狱警，戴夫·埃舍尔曼说，他是在故意演戏，模仿的是电影《铁窗喋血》里一个残暴的狱警。'],
      ['And the prisoner who broke down after a day and a half, Douglas Korpi, said in a 2017 interview that he had faked it, because he wanted to leave and study for an exam.', '而那个一天半后就崩溃的囚犯道格拉斯·科尔皮，在 2017 年的一次采访中说，他是装的，因为他想出去复习考试。'],
    ],
    [
      ['Be fair to both sides here.', '这里要对双方都公平。'],
      ['Zimbardo rejected these criticisms, called Korpi’s new account a lie, and pointed out that some guards were cruel without being pushed.', '津巴多否认了这些批评，说科尔皮的新说法是撒谎，还指出有些狱警并没有被催促，照样很残忍。'],
      ['It is also true that several guards never became cruel at all, which the original story rarely mentioned.', '同样属实的是，有好几个狱警自始至终都没有变残忍，而最初的故事很少提到这一点。'],
      ['The fairest summary is: what happened in the basement was real, but it was not the clean test of “ordinary people left alone in a bad situation” that it was sold as.', '最公允的总结是：地下室里发生的事是真的，但它并不是像宣传的那样，是一次「普通人被单独放进坏环境」的干净检验。'],
    ],

    { h: '4. The BBC does it again', zh: '4. BBC 又做了一次' },
    [
      ['A single study can never settle a question; the real test is whether it can be repeated, called [[replication|重复验证]].', '一项研究永远不能一锤定音；真正的检验是它能不能被重复做出来，这叫重复验证{replication}。'],
      ['Zimbardo’s study was never properly replicated, partly because it would be unethical today.', '津巴多的研究一直没有被正式重复过，部分原因是今天再做是违反伦理的。'],
      ['In 2002, the psychologists Alex Haslam and Stephen Reicher ran something close to it, filmed for the BBC, with an independent ethics committee able to stop it at any time.', '2002 年，心理学家亚历克斯·哈斯拉姆和斯蒂芬·赖歇尔做了一个跟它很接近的研究，由 BBC 拍摄，有一个独立的伦理委员会随时可以叫停。'],
      ['The key difference: the guards were given no instructions about how to behave, only that they were in charge.', '关键的区别在于：除了告诉狱警由他们负责以外，没有给他们任何关于该怎么做的指示。'],
    ],
    [
      ['The guards did not become cruel.', '狱警并没有变残忍。'],
      ['Many felt uncomfortable with power and could not agree on how to use it.', '很多人对权力感到不自在，也没法就怎么使用它达成一致。'],
      ['The prisoners, meanwhile, developed a strong shared identity, organised, and challenged the guards until the system collapsed.', '与此同时，囚犯们形成了强烈的共同身份，组织起来，挑战狱警，直到整个制度垮掉。'],
      ['Then something darker happened: some participants began to support a new, much harsher regime proposed by a few of them.', '接着，更阴暗的事情发生了：一些参与者开始支持其中几个人提出的一套新的、严酷得多的制度。'],
    ],
    {
      box: [
        ['Haslam and Reicher concluded that people do not slide automatically into roles.', '哈斯拉姆和赖歇尔的结论是：人们并不会自动滑进角色里。'],
        ['Tyranny happens when people come to identify with a group and its leaders, and when leaders tell them that being harsh is the right thing to do.', '暴政之所以发生，是因为人们开始认同一个团体和它的领导者，而领导者又告诉他们，严厉才是对的。'],
        ['Read that way, Le Texier’s archive and the BBC study point in the same direction: in Stanford, too, there was a leader telling the guards what was expected, and it was the experimenter.', '这样读的话，勒泰谢的档案和 BBC 的研究指向了同一个方向：在斯坦福，其实也有一个领导者在告诉狱警该怎么做，那个人就是做实验的人。'],
      ],
    },

    { h: '5. Why the story matters outside the lab', zh: '5. 这个故事为什么在实验室外也重要' },
    [
      ['In 2004, photographs showed American soldiers abusing prisoners at Abu Ghraib prison in Iraq.', '2004 年，一批照片曝光了美军士兵在伊拉克阿布格莱布监狱虐待囚犯。'],
      ['Zimbardo testified in court as an expert witness for one of the soldiers, arguing that the situation, not just the individual, explained the abuse.', '津巴多作为专家证人，为其中一名士兵出庭作证，认为是情境，而不只是个人，造成了这些虐待。'],
      ['The soldier was still sentenced to eight years.', '那名士兵仍然被判了八年。'],
    ],
    [
      ['This shows why the scientific details matter.', '这说明了为什么科学上的细节很重要。'],
      ['If bad situations alone turn good people cruel, individuals carry less responsibility.', '如果光靠坏的环境就能让好人变残忍，那个人要承担的责任就小了。'],
      ['If, as the newer evidence suggests, cruelty grows when people identify with a group and leaders encourage it, then responsibility lies both with the individuals who choose to follow and with the leaders who set the rules, all the way up.', '如果像新的证据显示的那样，残忍是在人们认同一个团体、领导者又鼓励它的时候才滋长的，那么责任既在选择跟随的个人身上，也在制定规则的领导者身上，一直往上追。'],
      ['The question is not situation or personality; it is who is shaping the situation, and why people go along with them.', '问题不是「环境还是性格」，而是：是谁在塑造这个环境？人们为什么会跟着他走？'],
    ],

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['If the guards in Stanford were partly following instructions, a much bigger question opens up: how far will ordinary people go when an authority tells them to?', '如果斯坦福的狱警在一定程度上是在听指示，那就引出了一个大得多的问题：当权威叫普通人去做一件事时，他们会走多远？'],
      ['Ten years before Zimbardo, a psychologist at Yale tested exactly that, with a machine that appeared to give electric shocks.', '在津巴多之前十年，耶鲁大学的一位心理学家正好检验了这个问题，用的是一台看起来能放电击的机器。'],
      ['Its famous number, that about two-thirds of people went all the way to the maximum shock, is real, but it comes from one version of an experiment that was run in more than twenty versions.', '它那个有名的数字，大约三分之二的人一直按到了最高电压，是真的；但它只来自一个实验的其中一个版本，而这个实验一共做了二十多个版本。'],
      ['Episode 2: Stanley Milgram, and what the other versions show.', '第 2 集：斯坦利·米尔格拉姆，以及其他版本揭示了什么。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['Who signed up for this study, and could that explain the result?', '是谁报名参加了这项研究？这能不能解释结果？'],
    ['The participants may have been doing what they thought the researchers wanted.', '参与者可能是在做他们以为研究者想要的事。'],
    ['It’s not situation or personality; it’s who shapes the situation.', '不是环境还是性格的问题，而是谁在塑造环境。'],
  ],
  quiz: [
    {
      q: ['Roles in the Stanford study were assigned by coin flip. Why could self-selection still bias the result?', '斯坦福实验的角色是抛硬币分配的。为什么自我选择仍然可能让结果有偏差？'],
      opts: [['Everyone had chosen to answer an advert about prison life, which attracted people higher in aggression.', '每个人都是自己选择回应「监狱生活」广告的，而这则广告吸引的是攻击性更强的人'], ['The coin was not fair.', '硬币不公平'], ['Guards were paid more than prisoners.', '狱警的报酬比囚犯高']],
      a: 0,
      e: ['Random assignment inside a group does not make the group itself representative.', '在群体内部随机分配，并不能让这个群体本身具有代表性。'],
    },
    {
      q: ['What are demand characteristics?', '什么是需求特征？'],
      opts: [['Cues that tell participants how they are expected to behave.', '暗示参与者「应该怎么表现」的线索'], ['The money participants demand.', '参与者要求的报酬'], ['The personality traits of the participants.', '参与者的性格特征']],
      a: 0,
      e: ['Uniforms, sunglasses and a professor as superintendent all signalled what a “guard” should be.', '制服、墨镜、教授当典狱长，都在暗示「狱警」应该是什么样子。'],
    },
    {
      q: ['What did the 2002 BBC prison study find?', '2002 年 BBC 的监狱研究发现了什么？'],
      opts: [['Without instructions, guards did not become cruel; tyranny grew when people identified with a group and its leaders.', '没有指示时，狱警没有变残忍；人们认同一个团体和它的领导者时，暴政才滋长'], ['The guards became even crueller than at Stanford.', '狱警比斯坦福的还残忍'], ['Nothing happened at all.', '什么都没发生']],
      a: 0,
      e: ['It supports the idea that leadership and group identity, not roles alone, drive cruelty.', '它支持这样一种看法：推动残忍的是领导和群体认同，而不只是角色本身。'],
    },
    {
      q: ['Which is the fairest summary of the Stanford prison experiment today?', '今天对斯坦福监狱实验最公允的总结是哪一个？'],
      opts: [['Real cruelty happened, but it was not a clean test of ordinary people left alone in a bad situation.', '残忍是真的发生了，但它不是对「普通人被单独放进坏环境」的干净检验'], ['It was completely made up.', '它完全是编造的'], ['It proves anyone becomes evil in a uniform.', '它证明了任何人穿上制服都会变坏']],
      a: 0,
      e: ['Coaching, self-selection and demand characteristics all muddy the conclusion; Zimbardo disputed the criticisms.', '指导、自我选择和需求特征都让结论变得模糊；津巴多对这些批评有异议。'],
    },
  ],
  questions: [
    {
      q: ['Exercise. A company runs a study and finds that employees who join its optional leadership course are promoted faster. It concludes that the course works. Use this episode’s three questions to explain what else could explain the result, and how you would design a better test.', '练习。一家公司做了个研究，发现参加了公司自愿报名的领导力课程的员工，升职更快。公司的结论是：这门课有效。用这一集的三个问题，说说还有什么可能解释这个结果，以及你会怎么设计一个更好的检验。'],
      a: [
        ['Who signed up: people who volunteer for a leadership course are probably already more ambitious, which alone could explain faster promotion. This is self-selection.', '谁报的名：自愿报名领导力课程的人，很可能本来就更有上进心，光这一点就能解释升职更快。这就是自我选择。'],
        ['What did people think was wanted: managers who know someone took the course may expect more from them and notice them more, a kind of demand characteristic in the workplace. And the people running the course may also be the people deciding promotions.', '人们以为想要的是什么：知道某人上过这门课的经理，可能对他期望更高、更留意他，这是职场里的一种需求特征。而且办课程的人，也可能正是决定升职的人。'],
        ['A better test: among the employees who want to take the course, randomly choose who gets it this year and who gets it next year, and have promotions decided by people who do not know who took it.', '更好的检验：在想上这门课的员工里，随机决定谁今年上、谁明年上，再让不知道谁上过课的人来决定升职。'],
      ],
    },
  ],
  words: {
    zimbardo:      ['/zɪmˈbɑːrdoʊ/', '津巴多（心理学家 Philip Zimbardo）'],
    smocks:        ['/smɑːks/', '罩衫'],
    ankle:         ['/ˈæŋkl/', '脚踝'],
    batons:        ['/bəˈtɑːnz/', '警棍'],
    superintendent:['/ˌsuːpərɪnˈtendənt/', '主管；（这里）典狱长'],
    stripping:     ['/ˈstrɪpɪŋ/', '剥光（衣服）'],
    maslach:       ['', '马斯拉克（心理学家 Christina Maslach）'],
    situationism:  ['/ˌsɪtʃuˈeɪʃənɪzəm/', '情境论'],
    dispositions:  ['/ˌdɪspəˈzɪʃnz/', '性格倾向，个人特质'],
    introductory:  ['/ˌɪntrəˈdʌktəri/', '入门的'],
    criminology:   ['/ˌkrɪmɪˈnɑːlədʒi/', '犯罪学'],
    footage:       ['/ˈfʊtɪdʒ/', '影像资料'],
    authoritarianism:['/əˌθɔːrəˈteriənɪzəm/', '威权主义'],
    narcissism:    ['/ˈnɑːrsɪsɪzəm/', '自恋'],
    empathy:       ['/ˈempəθi/', '同理心'],
    orientation:   ['/ˌɔːriənˈteɪʃn/', '培训，入职介绍'],
    texier:        ['', '勒泰谢（法国研究者 Thibault Le Texier）'],
    thibault:      ['', '蒂博（人名）'],
    jaffe:         ['', '贾菲（人名）'],
    eshelman:      ['', '埃舍尔曼（人名）'],
    korpi:         ['', '科尔皮（人名）'],
    spontaneous:   ['/spɑːnˈteɪniəs/', '自发的'],
    replication:   ['/ˌreplɪˈkeɪʃn/', '重复验证'],
    unethical:     ['/ʌnˈeθɪkl/', '不道德的'],
    haslam:        ['', '哈斯拉姆（心理学家 Alex Haslam）'],
    reicher:       ['', '赖歇尔（心理学家 Stephen Reicher）'],
    regime:        ['/reɪˈʒiːm/', '制度，政权'],
    tyranny:       ['/ˈtɪrəni/', '暴政'],
    ghraib:        ['', 'Abu Ghraib 阿布格莱布（伊拉克监狱）'],
    milgram:       ['/ˈmɪlɡrəm/', '米尔格拉姆（心理学家 Stanley Milgram）'],
  },
});
