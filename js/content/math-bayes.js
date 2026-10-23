// 连续剧「概率与统计」第 1 集。条件概率、基础比率、贝叶斯、自然频数、检察官谬误（Sally Clark 案）
addContent('math-bayes', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "医生": "doctors", "病人": "patient", "癌症": "cancer", "检查": "test",
    "阳性": "positive", "阴性": "negative", "乳腺癌": "breast cancer", "女性": "women",
    "概率": "probability", "百分比": "percentages", "表格": "table", "数字": "numbers",
    "法庭": "court", "陪审团": "jury", "律师": "lawyer", "儿科医生": "paediatrician",
    "婴儿": "babies", "母亲": "mother", "谋杀": "murder", "证据": "evidence",
    "统计学家": "statisticians", "监狱": "prison", "公式": "formula", "直觉": "intuition",
    "人群": "population", "家庭": "family", "基因": "genes", "讲座": "lecture",
  },
  summary: '一项检查准确率 90%，你查出来是阳性。你真的得病的可能性有多大？大多数医生会说 90%，正确答案大约是 10%。同一个错误，1999 年让一位母亲以谋杀罪进了监狱。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲概率和真实案例，事实来源见下；乳腺 X 光的数字是 Gigerenzer 用的教学数字',
    facts: [
      ['Gigerenzer et al., Helping Doctors and Patients Make Sense of Health Statistics, Psychological Science in the Public Interest (2007)', 'https://www.psychologicalscience.org/observer/helping-physicians-understand-screening-tests-will-improve-health-care'],
      ['Cochrane 摘要：Helping doctors to understand screening tests（160 位妇科医生，最常见的答案是 90%）', 'https://abstracts.cochrane.org/2008-freiburg/helping-doctors-understand-screening-tests'],
      ['Wikipedia：Sally Clark（1 in 73 million、两次上诉、2003 年撤销定罪）', 'https://en.wikipedia.org/wiki/Sally_Clark'],
      ['Wikipedia：Prosecutor’s fallacy', 'https://en.wikipedia.org/wiki/Prosecutor%27s_fallacy'],
    ],
  },
  guide: '这是「概率与统计」第 1 集，不需要会任何公式。读完你会：① 明白「检查准确率 90%」和「阳性的人 90% 得病」是两件完全不同的事；② 学会用「想象 1,000 个人」的办法，几秒钟算对一道连医生都常算错的题；③ 知道什么是基础比率、条件概率，看得懂 P(A|B) 这种写法；④ 看懂贝叶斯公式在说什么；⑤ 看懂一个真实的冤案：统计数字是怎么在法庭上把一位母亲送进监狱的。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['A woman in her forties goes for a routine breast cancer screening, and the result is positive.', '一位四十多岁的女性去做常规的乳腺癌筛查，结果是阳性。'],
      ['Here is what is known about this test and this group of women.', '关于这项检查和这一群女性，已知的情况是这样的。'],
      ['About 1% of them have breast cancer.', '她们当中大约 1% 的人有乳腺癌。'],
      ['If a woman has cancer, the test is positive 90% of the time.', '如果一个女性有癌症，检查有 90% 的概率是阳性。'],
      ['If she does not, the test is still positive 9% of the time.', '如果她没有，检查仍有 9% 的概率是阳性。'],
      ['She asks her doctor: so what is the chance that I actually have cancer?', '她问医生：那我真的得癌症的可能性有多大？'],
      ['Write down your own answer before reading on.', '往下读之前，先写下你自己的答案。'],
    ],
    [
      ['The psychologist Gerd Gigerenzer gave this question to 160 gynaecologists, doctors who deal with exactly these tests.', '心理学家格尔德·吉仁泽把这道题给了 160 位妇科医生，他们正是天天跟这种检查打交道的人。'],
      ['Their most common answer was 90%.', '他们最常见的答案是 90%。'],
      ['The correct answer is about 10%.', '正确答案大约是 10%。'],
      ['Nine out of ten women with this result do not have cancer.', '拿到这个结果的女性里，十个有九个并没有癌症。'],
    ],

    { h: '1. Imagine 1,000 women', zh: '1. 想象 1,000 位女性' },
    [
      ['Percentages make this problem hard.', '是百分比让这道题变难了。'],
      ['Counting people makes it easy.', '换成数人头，它就变简单了。'],
      ['Imagine 1,000 women just like her.', '想象有 1,000 位跟她一样的女性。'],
    ],
    {
      table: {
        caption: '1,000 women screened (natural frequencies)', zh: '1,000 位接受筛查的女性（自然频数）',
        head: ['', 'Test positive', 'Test negative', 'Total'],
        rows: [
          ['Have cancer', '9', '1', '10'],
          ['No cancer', '89', '901', '990'],
          ['Total', '98', '902', '1,000'],
        ],
      },
    },
    [
      ['1% of 1,000 is 10 women with cancer, and 90% of those 10, so 9, test positive.', '1,000 的 1% 是 10 位有癌症的女性，这 10 位里的 90%，也就是 9 位，检查是阳性。'],
      ['That leaves 990 women without cancer, and 9% of them, about 89, also test positive.', '剩下 990 位没有癌症的女性，她们当中的 9%，大约 89 位，检查也是阳性。'],
      ['So 98 women in total test positive, and only 9 of them have cancer.', '所以一共有 98 位女性检查是阳性，其中只有 9 位真的有癌症。'],
      ['9 out of 98 is about 9%, roughly one in ten.', '98 个里面 9 个，大约 9%，差不多十分之一。'],
    ],
    {
      box: [
        ['Counting imagined people like this is called using [[natural frequencies|自然频数]].', '像这样数想象出来的人，叫作使用自然频数{natural frequencies}。'],
        ['Gigerenzer found that when the same information was given to doctors as natural frequencies instead of percentages, most of them got the right answer.', '吉仁泽发现，把同样的信息用自然频数而不是百分比告诉医生，大多数医生都能答对。'],
        ['In a separate group of 150 gynaecologists, only 21% understood the chance correctly before a one-hour lecture on this method, and 87% after it.', '在另一组 150 位妇科医生里，听一小时讲这个方法的讲座之前，只有 21% 的人正确理解了这个概率，听完以后是 87%。'],
        ['The doctors were not bad at maths; the format of the numbers was hiding the answer.', '医生们并不是数学差，而是数字的呈现方式把答案藏起来了。'],
      ],
    },

    { h: '2. Why intuition says 90%', zh: '2. 直觉为什么说是 90%' },
    [
      ['The trap is that two different questions sound almost the same.', '陷阱在于，两个不同的问题听起来几乎一样。'],
      ['Question one: if a woman has cancer, how likely is a positive test? The answer is 90%.', '问题一：如果一个女性有癌症，检查阳性的可能性有多大？答案是 90%。'],
      ['Question two: if a woman has a positive test, how likely is cancer? The answer is about 10%.', '问题二：如果一个女性检查是阳性，她有癌症的可能性有多大？答案大约是 10%。'],
      ['The patient is asking question two, and intuition hands her the answer to question one.', '病人问的是问题二，直觉却塞给她问题一的答案。'],
    ],
    {
      box: [
        ['A [[conditional probability|条件概率]] is the probability of something given that something else is true.', '条件概率{conditional probability}是：在另一件事成立的前提下，某件事发生的概率。'],
        ['It is written P(A | B), read as “the probability of A given B”.', '写作 P(A | B)，读作「在 B 的条件下 A 的概率」。'],
        ['P(positive | cancer) = 90%, but P(cancer | positive) ≈ 10%.', 'P(阳性 | 癌症) = 90%，但 P(癌症 | 阳性) ≈ 10%。'],
        ['Swapping the two sides of the bar is one of the most common and most expensive mistakes in reasoning.', '把竖线两边对调，是推理中最常见、代价也最大的错误之一。'],
      ],
    },
    [
      ['What makes the two numbers so different is the [[base rate|基础比率]]: how common the condition is in the first place.', '让这两个数差这么多的，是基础比率{base rate}：这种情况本来有多常见。'],
      ['Because only 1% of women have cancer, the 990 healthy women are a huge group, and even a small 9% error rate among them produces far more false alarms than there are real cases.', '因为只有 1% 的女性有癌症，990 位健康女性是一个很大的群体，就算她们当中只有 9% 被误判，产生的假警报也远远多于真病例。'],
      ['Ignoring how common something is before looking at the evidence is called [[base rate neglect|忽视基础比率]].', '在看证据之前，忽视一件事本来有多常见，这叫忽视基础比率{base rate neglect}。'],
    ],

    { h: '3. Bayes’ rule, without fear', zh: '3. 不用怕的贝叶斯公式' },
    [
      ['The general rule for turning P(B | A) into P(A | B) was worked out in the 1700s and is named after the English minister Thomas Bayes.', '把 P(B | A) 变成 P(A | B) 的一般规则，是 18 世纪推出来的，以英国牧师托马斯·贝叶斯的名字命名。'],
      ['In words, it says: the chance of the cause given the evidence equals the number of true cases that produce this evidence, divided by all the cases that produce this evidence.', '用文字说，它是：在看到证据的前提下，原因成立的概率，等于「产生这个证据的真实情况」除以「所有产生这个证据的情况」。'],
      ['That is exactly the 9 out of 98 you just calculated.', '这正是你刚才算出来的「98 个里 9 个」。'],
    ],
    {
      box: [
        ['In symbols, [[Bayes’ rule|贝叶斯公式]] is P(A | B) = P(B | A) × P(A) ÷ P(B).', '写成符号，贝叶斯公式{Bayes’ rule}是 P(A | B) = P(B | A) × P(A) ÷ P(B)。'],
        ['Here P(cancer | positive) = 0.9 × 0.01 ÷ 0.098 ≈ 0.092.', '代进去：P(癌症 | 阳性) = 0.9 × 0.01 ÷ 0.098 ≈ 0.092。'],
        ['P(A) is called the [[prior|先验概率]], what you believed before the evidence, and P(A | B) is the [[posterior|后验概率]], what you should believe after it.', 'P(A) 叫先验概率{prior}，是看到证据之前你相信的程度；P(A | B) 叫后验概率{posterior}，是看到证据之后你应该相信的程度。'],
        ['The formula and the table of 1,000 women always give the same answer; the table is just easier to get right.', '公式和那张 1,000 位女性的表格，给出的答案永远一样；只是表格更不容易出错。'],
      ],
    },
    [
      ['Bayes also tells you what to do next.', '贝叶斯还告诉你下一步该怎么做。'],
      ['After the first positive result, the woman’s chance is about 9%, so that becomes her new prior.', '第一次阳性以后，她得病的可能性约是 9%，这就成了她新的先验概率。'],
      ['If a second, independent test is also positive, the same reasoning raises it much further.', '如果第二次独立的检查也是阳性，同样的推理会把这个概率大大提高。'],
      ['This is why a positive screening result usually leads to more tests, not straight to treatment.', '这就是为什么筛查结果阳性以后，通常是去做更多检查，而不是直接开始治疗。'],
    ],

    { h: '4. One in 73 million', zh: '4. 七千三百万分之一' },
    [
      ['In 1999, an English lawyer named Sally Clark was convicted of murdering her two baby sons, who had died suddenly as infants, about a year apart.', '1999 年，一位名叫萨莉·克拉克的英国律师被判谋杀了她的两个儿子。两个孩子都在婴儿时突然死亡，相隔大约一年。'],
      ['Her defence was that both had died of sudden infant death syndrome, the unexplained death of an apparently healthy baby.', '她的辩护是：两个孩子都死于婴儿猝死综合征，也就是看起来健康的婴儿不明原因的死亡。'],
      ['A famous paediatrician, Professor Roy Meadow, told the jury that for a family like hers, the chance of one such death was about 1 in 8,500.', '一位有名的儿科医生罗伊·梅多教授告诉陪审团：对她这样的家庭来说，发生一次这种死亡的概率大约是 8,500 分之一。'],
      ['So the chance of two, he said, was 1 in 8,500 times 1 in 8,500: about 1 in 73 million.', '所以，他说，发生两次的概率是 8,500 分之一乘以 8,500 分之一：大约七千三百万分之一。'],
      ['A number like that sounds like proof, and she was sent to prison.', '这样一个数字听起来就像铁证，她被送进了监狱。'],
    ],
    [
      ['The number contained two mistakes.', '这个数字里有两个错误。'],
      ['The first: multiplying the two chances assumes the deaths are [[independent|独立的]], like two separate coin tosses.', '第一个：把两个概率相乘，是假设两次死亡是独立的{independent}，就像两次互不相干的抛硬币。'],
      ['But families share genes and homes, so if one baby in a family dies this way, a second death in the same family is more likely than in a random family, not equally likely.', '可一家人有相同的基因、住在同一个家里，所以如果一个家庭里有一个婴儿这样去世，同一个家庭里再发生一次的可能性，比随便一个家庭要高，而不是一样高。'],
      ['The real chance of two deaths was much higher than 1 in 73 million.', '两次死亡的真实概率，比七千三百万分之一高得多。'],
    ],
    [
      ['The second mistake is the same one the doctors made with the mammogram.', '第二个错误，跟医生们在乳腺 X 光那道题上犯的一样。'],
      ['Even if two natural deaths really were that rare, 1 in 73 million is P(two deaths | innocent).', '就算两次自然死亡真的那么罕见，七千三百万分之一也只是 P(两次死亡 | 无辜)。'],
      ['The jury needed P(innocent | two deaths), and that is not the same thing.', '陪审团需要的是 P(无辜 | 两次死亡)，这不是同一回事。'],
      ['To get it, you must compare two explanations of the same evidence: two natural deaths, or a mother who murders two of her babies.', '要算出它，你必须比较同一个证据的两种解释：两次自然死亡，或者一位母亲谋杀了自己的两个孩子。'],
      ['Both are extremely rare, and what matters is which one is rarer.', '两种都极其罕见，关键是哪一种更罕见。'],
      ['Confusing the chance of the evidence if innocent with the chance of innocence given the evidence is known as the [[prosecutor’s fallacy|检察官谬误]].', '把「如果无辜，出现这个证据的概率」当成「出现这个证据时，无辜的概率」，这叫检察官谬误{prosecutor’s fallacy}。'],
    ],
    [
      ['The Royal Statistical Society publicly stated that the figure had no statistical basis.', '英国皇家统计学会公开表示，这个数字没有统计学依据。'],
      ['Sally Clark’s convictions were overturned in 2003, after it emerged that medical evidence pointing to a natural cause for one of the deaths had not been shared with the defence.', '2003 年，萨莉·克拉克的定罪被撤销，因为有证据显示：一份指向其中一个孩子是自然死亡的医学报告，当初没有交给辩方。'],
      ['She had spent more than three years in prison.', '她已经在监狱里待了三年多。'],
      ['She died in 2007.', '她于 2007 年去世。'],
    ],
    {
      box: [
        ['The lesson is not that statistics are dangerous.', '教训不是「统计很危险」。'],
        ['The number 1 in 73 million was wrong, and it was also answering the wrong question.', '七千三百万分之一这个数字本身是错的，而且它回答的也是一个错误的问题。'],
        ['Whenever someone tells you how unlikely the evidence is, ask: unlikely compared to what other explanation?', '每当有人告诉你「这个证据出现的可能性有多小」，都要问一句：跟别的什么解释比起来小？'],
      ],
    },

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['Everything here depended on knowing the base rate, like “1% of women in this group have cancer”.', '这一集的一切，都建立在知道基础比率的前提上，比如「这一群女性里有 1% 得了癌症」。'],
      ['But where do numbers like that come from, and how sure can we be about them?', '可这样的数字是从哪来的？我们对它能有多确定？'],
      ['A survey of 1,000 people can tell you something about 1.4 billion, and a survey of 2.4 million people once got an American election badly wrong.', '一份 1,000 人的调查，能告诉你 14 亿人的一些情况；而一份 240 万人的调查，曾经把一次美国大选猜得错得离谱。'],
      ['Episode 2: sampling, and why the size of a sample matters much less than how it was chosen.', '第 2 集：抽样，以及为什么样本有多大，远不如样本是怎么选出来的重要。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['A 90% accurate test doesn’t mean a positive result is 90% likely to be right.', '准确率 90% 的检查，不代表阳性结果有 90% 的可能是对的。'],
    ['What’s the base rate? How common is this to begin with?', '基础比率是多少？这件事本来有多常见？'],
    ['Unlikely compared to what? We need to compare the explanations, not just the evidence.', '跟什么比起来不太可能？我们要比较的是几种解释，不只是证据本身。'],
  ],
  quiz: [
    {
      q: ['A test is positive 90% of the time when someone is ill. Which statement follows?', '一项检查，在人生病时有 90% 是阳性。下面哪句话成立？'],
      opts: [['P(positive | ill) = 90%; we cannot know P(ill | positive) without the base rate.', 'P(阳性 | 生病) = 90%；不知道基础比率，就算不出 P(生病 | 阳性)'], ['A positive result means a 90% chance of being ill.', '阳性就意味着 90% 的概率生病'], ['A negative result means a 10% chance of being ill.', '阴性就意味着 10% 的概率生病']],
      a: 0,
      e: ['The two directions of a conditional probability can be very different, and the base rate decides how different.', '条件概率的两个方向可以差得很远，差多远由基础比率决定。'],
    },
    {
      q: ['If the disease were much rarer, say 1 in 1,000, with the same test, what would happen to P(ill | positive)?', '如果这种病罕见得多，比如 1,000 个人里 1 个，检查还是同一个，P(生病 | 阳性) 会怎样？'],
      opts: [['It would fall, because false alarms from the healthy majority would swamp the few real cases.', '会下降，因为大量健康人里的假警报会淹没少数真病例'], ['It would stay at 90%.', '还是 90%'], ['It would rise.', '会上升']],
      a: 0,
      e: ['The rarer the condition, the larger the share of positives that are false.', '病越罕见，阳性里假阳性的比例就越大。'],
    },
    {
      q: ['Why was multiplying 1 in 8,500 by itself wrong in the Sally Clark case?', '在萨莉·克拉克案里，为什么把 8,500 分之一自己乘自己是错的？'],
      opts: [['The two deaths were not independent: families share genes and homes.', '两次死亡并不独立：一家人有相同的基因和生活环境'], ['8,500 was too small a number.', '8,500 这个数太小了'], ['Probabilities can never be multiplied.', '概率永远不能相乘']],
      a: 0,
      e: ['Multiplying is only correct for independent events. Here a first death makes a second more likely.', '只有独立事件才能直接相乘。这里第一次死亡会让第二次更可能发生。'],
    },
    {
      q: ['What is the prosecutor’s fallacy?', '什么是检察官谬误？'],
      opts: [['Treating P(evidence | innocent) as if it were P(innocent | evidence).', '把 P(证据 | 无辜) 当成 P(无辜 | 证据)'], ['Hiding evidence from the defence.', '对辩方隐瞒证据'], ['Using too many statistics in court.', '在法庭上用了太多统计数字']],
      a: 0,
      e: ['It is the same swap the doctors made with P(positive | cancer) and P(cancer | positive).', '这跟医生们把 P(阳性 | 癌症) 和 P(癌症 | 阳性) 对调，是同一种错误。'],
    },
  ],
  questions: [
    {
      q: ['Problem 1. A rare disease affects 1 in 1,000 people. A test catches 99% of real cases and gives a false positive for 2% of healthy people. Use 100,000 imagined people to find P(ill | positive).', '练习 1。一种罕见病，1,000 个人里有 1 个人得。检查能查出 99% 的真病例，对健康人有 2% 的假阳性。用想象中的 100,000 个人，算出 P(生病 | 阳性)。'],
      a: [
        ['Out of 100,000 people, 100 are ill, and 99 of them test positive.', '100,000 人里，有 100 人生病，其中 99 人阳性。'],
        ['99,900 are healthy, and 2% of them, 1,998, test positive.', '99,900 人健康，其中 2%，也就是 1,998 人，也是阳性。'],
        ['So P(ill | positive) = 99 ÷ (99 + 1,998) ≈ 4.7%: even with a test that catches 99% of cases, fewer than one in twenty positives is real.', '所以 P(生病 | 阳性) = 99 ÷ (99 + 1,998) ≈ 4.7%：就算检查能查出 99% 的病例，阳性里真的有病的也不到二十分之一。'],
      ],
    },
    {
      q: ['Problem 2. The woman in the opening example takes a second, independent test of the same kind, and it is also positive. Using 9% as her new prior, what is her chance of cancer now? (Hint: imagine 1,000 women whose chance is 9%.)', '练习 2。开头那位女性又做了一次同样的、独立的检查，又是阳性。用 9% 作为她新的先验概率，她现在得癌症的可能性是多少？（提示：想象 1,000 位得病概率为 9% 的女性。）'],
      a: [
        ['Out of 1,000 such women, 90 have cancer and 81 of them (90%) test positive.', '1,000 位这样的女性里，90 位有癌症，其中 81 位（90%）阳性。'],
        ['910 do not, and about 82 of them (9%) test positive.', '910 位没有，其中大约 82 位（9%）阳性。'],
        ['So her chance is 81 ÷ (81 + 82) ≈ 50%: one more positive test moved her from about 1 in 10 to about 1 in 2, which is why doctors order a second test.', '所以她的概率是 81 ÷ (81 + 82) ≈ 50%：多一次阳性，就把她从大约十分之一推到了大约二分之一，这就是医生为什么要再查一次。'],
      ],
    },
    {
      q: ['Problem 3. A company says: “Our fraud detection system flags 95% of fraudulent transactions.” You work in risk. What one number do you need before you can say how useful the flags are, and why?', '练习 3。一家公司说：「我们的反欺诈系统能标记出 95% 的欺诈交易。」你在做风控。要判断这些标记有多大用，你还需要哪一个数字？为什么？'],
      a: [
        ['You need the false positive rate, together with how rare fraud is (the base rate).', '你需要假阳性率，再加上欺诈本来有多罕见（基础比率）。'],
        ['If fraud is 1 transaction in 1,000 and the system also flags 1% of honest transactions, then most flags will be honest customers.', '如果欺诈是每 1,000 笔交易里 1 笔，而系统也会把 1% 的正常交易标记出来，那么大部分被标记的都是正常客户。'],
        ['“95% of fraud is caught” is P(flag | fraud); what your team lives with every day is P(fraud | flag).', '「95% 的欺诈被抓住」是 P(标记 | 欺诈)；你的团队每天真正面对的，是 P(欺诈 | 标记)。'],
      ],
    },
  ],
  words: {
    screening:      ['/ˈskriːnɪŋ/', '筛查'],
    mammogram:      ['/ˈmæməɡræm/', '乳腺 X 光片'],
    gigerenzer:     ['', '吉仁泽（德国心理学家 Gerd Gigerenzer）'],
    gerd:           ['', '格尔德（人名）'],
    gynaecologists: ['/ˌɡaɪnəˈkɑːlədʒɪsts/', '妇科医生'],
    frequencies:    ['/ˈfriːkwənsiz/', '频数，频率'],
    conditional:    ['/kənˈdɪʃənl/', '有条件的；conditional probability 条件概率'],
    neglect:        ['/nɪˈɡlekt/', '忽视'],
    bayes:          ['/beɪz/', '贝叶斯（英国数学家、牧师）'],
    prior:          ['/ˈpraɪər/', '先验（概率）；之前的'],
    posterior:      ['/pɑːˈstɪriər/', '后验（概率）'],
    convicted:      ['/kənˈvɪktɪd/', '被定罪'],
    convictions:    ['/kənˈvɪkʃnz/', '定罪'],
    overturned:     ['/ˌoʊvərˈtɜːrnd/', '推翻，撤销'],
    infants:        ['/ˈɪnfənts/', '婴儿'],
    syndrome:       ['/ˈsɪndroʊm/', '综合征'],
    paediatrician:  ['/ˌpiːdiəˈtrɪʃn/', '儿科医生'],
    meadow:         ['/ˈmedoʊ/', '梅多（人名）；草地'],
    jury:           ['/ˈdʒʊri/', '陪审团'],
    independent:    ['/ˌɪndɪˈpendənt/', '独立的'],
    prosecutor:     ['/ˈprɑːsɪkjuːtər/', '检察官'],
    fallacy:        ['/ˈfæləsi/', '谬误'],
    statistical:    ['/stəˈtɪstɪkl/', '统计的'],
    swamp:          ['/swɑːmp/', '淹没'],
    fraudulent:     ['/ˈfrɔːdʒələnt/', '欺诈的'],
  },
});
