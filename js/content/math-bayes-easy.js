// 「查出阳性，你真的得病了吗」的简单英文版（入门 A2）：短句、常用词，保留「想象 1,000 个人」和萨莉·克拉克案
addContent('math-bayes-easy', {
  easyOf: 'math-bayes',
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "医生": "doctors", "女性": "women", "检查": "test", "癌症": "cancer",
    "阳性": "positive", "答案": "answer", "表格": "table", "数字": "numbers",
    "母亲": "mother", "婴儿": "babies", "法庭": "court", "监狱": "prison",
    "问题": "question", "错误": "mistake", "孩子": "children", "家庭": "family",
  },
  summary: '一项检查查出阳性，你真的得病的可能性有多大？大多数医生会答错。简单英文版：短句子、常用词，内容一样有料。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲概率和真实案例，事实来源见完整版',
    facts: [
      ['Gigerenzer et al., Helping Doctors and Patients Make Sense of Health Statistics (2007)', 'https://www.psychologicalscience.org/observer/helping-physicians-understand-screening-tests-will-improve-health-care'],
      ['Wikipedia：Sally Clark', 'https://en.wikipedia.org/wiki/Sally_Clark'],
    ],
  },
  guide: '这是「概率与统计」第 1 集的简单英文版。读完你会：① 用「想象 1,000 个人」算出一道很多医生都算错的题；② 明白「生病的人检查阳性」和「检查阳性的人生病」是两回事；③ 知道一个数字怎么在法庭上害了一位母亲。',
  paragraphs: [
    { h: 'A question for you', zh: '先问你一个问题' },
    [
      ['A woman goes to the doctor for a test.', '一位女性去医生那里做检查。'],
      ['The test looks for [[cancer|癌症]].', '这项检查是查癌症{cancer}的。'],
      ['The test is [[positive|阳性]].', '检查结果是阳性{positive}。'],
      ['She asks: “Do I have cancer?”', '她问：「我得癌症了吗？」'],
    ],
    [
      ['Here are the facts.', '已知的情况是这样的。'],
      ['1 in 100 women like her has cancer.', '像她这样的女性，100 个里有 1 个得了癌症。'],
      ['If a woman has cancer, the test is positive 90% of the time.', '如果一个女性有癌症，检查有 90% 的概率是阳性。'],
      ['If a woman does not have cancer, the test is still positive 9% of the time.', '如果一个女性没有癌症，检查仍然有 9% 的概率是阳性。'],
      ['What is your answer? Think for ten seconds.', '你的答案是多少？想十秒钟。'],
    ],
    [
      ['160 doctors answered this question.', '160 位医生回答过这个问题。'],
      ['Most of them said 90%.', '他们大多数人说 90%。'],
      ['The right answer is about 10%.', '正确答案大约是 10%。'],
    ],

    { h: 'Count 1,000 women', zh: '数一数 1,000 位女性' },
    [
      ['Percentages are hard. Counting people is easy.', '百分比很难。数人头很简单。'],
      ['Think of 1,000 women.', '想象 1,000 位女性。'],
    ],
    {
      table: {
        caption: '1,000 women take the test', zh: '1,000 位女性做了检查',
        head: ['', 'Positive', 'Negative', 'Total'],
        rows: [
          ['Have cancer', '9', '1', '10'],
          ['No cancer', '89', '901', '990'],
          ['Total', '98', '902', '1,000'],
        ],
      },
    },
    [
      ['10 women have cancer. The test is positive for 9 of them.', '有 10 位女性得了癌症。其中 9 位检查是阳性。'],
      ['990 women do not have cancer. But the test is positive for 89 of them too.', '有 990 位女性没有癌症。可她们当中也有 89 位检查是阳性。'],
      ['So 98 women get a positive test. Only 9 of them have cancer.', '所以一共 98 位女性检查是阳性。其中只有 9 位真的有癌症。'],
      ['9 out of 98 is about 1 in 10.', '98 个里有 9 个，大约是十分之一。'],
    ],
    {
      box: [
        ['This way of counting people is called [[natural frequencies|自然频数]].', '这种数人头的办法，叫自然频数{natural frequencies}。'],
        ['When doctors used it, most of them got the right answer.', '医生们用这个办法时，大多数人都答对了。'],
      ],
    },

    { h: 'Why do we get it wrong?', zh: '我们为什么会算错？' },
    [
      ['There are two different questions here.', '这里其实有两个不同的问题。'],
      ['Question 1: She has cancer. Is the test positive? Yes, 90% of the time.', '问题 1：她有癌症。检查是阳性吗？是的，90% 的情况下是。'],
      ['Question 2: The test is positive. Does she have cancer? Only about 10% of the time.', '问题 2：检查是阳性。她有癌症吗？只有大约 10% 的情况下有。'],
      ['The woman asks question 2. Our brain answers question 1.', '那位女性问的是问题 2，我们的大脑回答的却是问题 1。'],
    ],
    [
      ['Why are the answers so different?', '为什么两个答案差这么多？'],
      ['Because cancer is rare: only 1 in 100.', '因为癌症很少见：只有 100 个里 1 个。'],
      ['There are many healthy women, so the test makes many small mistakes.', '健康的女性很多，所以检查会犯很多小错误。'],
      ['How common something is at the start is called the [[base rate|基础比率]].', '一件事本来有多常见，叫基础比率{base rate}。'],
      ['Always ask about the base rate.', '永远要问一问基础比率。'],
    ],

    { h: 'A mother in court', zh: '法庭上的一位母亲' },
    [
      ['In 1999, in England, a mother named Sally Clark went to prison.', '1999 年，在英国，一位叫萨莉·克拉克的母亲进了监狱。'],
      ['Her two babies died suddenly, about one year apart.', '她的两个婴儿突然死去，相隔大约一年。'],
      ['She said they died of an illness, not because of her.', '她说孩子是因为一种病死的，不是因为她。'],
    ],
    [
      ['A famous doctor told the court: “One death like this happens in 1 in 8,500 families.', '一位有名的医生对法庭说：「这样的死亡，8,500 个家庭里才有 1 个。'],
      ['So two deaths happen in 1 in 73 million families.”', '所以两次死亡，7,300 万个家庭里才有 1 个。」'],
      ['The number sounded very big, and she went to prison.', '这个数字听起来很大，她就进了监狱。'],
    ],
    [
      ['The number had two mistakes.', '这个数字有两个错误。'],
      ['First, the two deaths were in the same family, with the same genes and the same home, so a second death was not so rare.', '第一，两次死亡发生在同一个家庭，有一样的基因、一样的家，所以第二次死亡并没有那么少见。'],
      ['Second, it is the same mistake as the doctors made with the cancer test.', '第二，它跟医生们在癌症检查那道题上犯的错误一模一样。'],
      ['The real question was: two babies died, so what is more likely, an illness or a murder?', '真正的问题是：两个婴儿死了，那么更可能是病，还是谋杀？'],
      ['Both are very rare. The court needed to compare them.', '两种都非常少见。法庭需要比较这两种可能。'],
    ],
    [
      ['In 2003, a higher court said the first decision was wrong, and she left prison.', '2003 年，上一级法院认定原来的判决是错的，她出狱了。'],
      ['She died in 2007.', '她在 2007 年去世了。'],
    ],

    { h: 'What to remember', zh: '记住这一点' },
    [
      ['When you hear “this test is 90% right”, ask two questions.', '当你听到「这项检查准确率 90%」，问两个问题。'],
      ['How common is the illness? And what happens to the healthy people?', '这种病本来有多常见？健康的人检查会怎样？'],
      ['Then think of 1,000 people, and count.', '然后想象 1,000 个人，数一数。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['How common is it to begin with?', '它本来有多常见？'],
    ['Let’s count 1,000 people.', '我们来数一数 1,000 个人。'],
  ],
  quiz: [
    {
      q: ['98 women have a positive test. How many of them have cancer?', '98 位女性检查是阳性。她们当中有几位有癌症？'],
      opts: [['About 9', '大约 9 位'], ['About 90', '大约 90 位'], ['All 98', '98 位全部']],
      a: 0,
      e: ['9 women with cancer and 89 healthy women all test positive.', '9 位有癌症的和 89 位健康的女性，检查都是阳性。'],
    },
    {
      q: ['What is the base rate?', '什么是基础比率？'],
      opts: [['How common something is at the start.', '一件事本来有多常见'], ['How good the test is.', '检查有多准'], ['How many doctors there are.', '有多少位医生']],
      a: 0,
      e: ['Here the base rate is 1 in 100.', '这里的基础比率是 100 个里 1 个。'],
    },
    {
      q: ['Why was “1 in 73 million” wrong?', '为什么「7,300 万分之一」是错的？'],
      opts: [['The two deaths were in the same family, and the court needed to compare illness with murder.', '两次死亡在同一个家庭里，而且法庭需要拿病和谋杀做比较'], ['73 million is too small.', '7,300 万太小了'], ['The doctor was not real.', '那位医生是假的']],
      a: 0,
      e: ['A small number alone does not tell you what happened.', '光有一个很小的数字，并不能告诉你发生了什么。'],
    },
  ],
  questions: [
    {
      q: ['Think about it. An app says: “Our test finds 95% of sick people.” What one question should you ask before you believe a positive result?', '想一想。一个 App 说：「我们的检查能发现 95% 的病人。」在相信一个阳性结果之前，你应该问哪一个问题？'],
      a: [
        ['Ask: how often is the test positive for healthy people, and how common is the illness?', '问：健康的人检查结果是阳性的概率有多大？这种病本来有多常见？'],
        ['If the illness is rare, many positive results will be wrong.', '如果这种病很少见，很多阳性结果都会是错的。'],
      ],
    },
  ],
  words: {
    positive:    ['/ˈpɑːzətɪv/', '阳性的；积极的'],
    negative:    ['/ˈneɡətɪv/', '阴性的；消极的'],
    percentages: ['/pərˈsentɪdʒɪz/', '百分比'],
    frequencies: ['/ˈfriːkwənsiz/', '频数'],
    rare:        ['/rer/', '少见的'],
    sally:       ['', '萨莉（人名）'],
    clark:       ['', '克拉克（人名）'],
    genes:       ['/dʒiːnz/', '基因'],
    murder:      ['/ˈmɜːrdər/', '谋杀'],
    decision:    ['/dɪˈsɪʒn/', '决定；判决'],
  },
});
