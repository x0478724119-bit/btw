// 「为什么聪明人会集体做蠢事」的简单英文版（初级 B1）：保留分数博弈、占优策略、承诺没用、演唱会、金球节目
addContent('gt-dominance-easy', {
  easyOf: 'gt-dominance',
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "同学": "classmate", "分数": "grade", "纸条": "paper", "表格": "table",
    "教授": "professor", "承诺": "promise", "演唱会": "concert", "体育馆": "stadium",
    "节目": "show", "奖金": "prize money", "球": "ball", "观众": "audience",
    "选择": "choice", "结果": "result", "工作人员": "staff",
  },
  summary: '你和一个陌生同学各写一个字母，决定你们俩的分数。几乎每个人都会写同一个字母，结果两个人都更差。简单英文版：短句子、常用词，博弈论的第一课。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲博弈论和真实事件，事实来源见完整版',
    facts: [
      ['Yale ECON 159 Game Theory（Ben Polak），第 1 讲', 'https://oyc.yale.edu/economics/econ-159'],
      ['Golden Balls「Nick 和 Ibrahim」那一集', 'https://www.radiolab.org/story/golden-rule'],
    ],
  },
  guide: '这是「博弈论」第 1 集的简单英文版。读完你会：① 把一个局面画成一张表；② 明白「占优策略」：不管别人怎么选，它都更好；③ 明白为什么人人都选了对自己最好的，结果大家都变差；④ 看懂电视节目里最漂亮的一招。',
  paragraphs: [
    { h: 'A game in class', zh: '课堂上的一个游戏' },
    [
      ['On the first day of a game theory class, the professor gives everyone a piece of paper.', '博弈论课的第一天，教授给每个人发了一张纸条。'],
      ['You write α or β on it. You cannot talk to anyone.', '你在上面写 α 或者 β，不能跟任何人说话。'],
      ['Then you are put with a classmate at random. You never learn who it is.', '然后你会被随机跟一个同学配成一对，你永远不会知道是谁。'],
      ['Your two letters decide both of your grades.', '你们俩写的字母，决定你们俩的分数。'],
    ],
    {
      table: {
        caption: 'Your grade, then your partner’s grade', zh: '先写你的分数，再写对方的分数',
        head: ['', 'Partner writes α', 'Partner writes β'],
        rows: [
          ['You write α', 'B−, B−', 'A, C'],
          ['You write β', 'C, A', 'B+, B+'],
        ],
      },
    },
    [
      ['What would you write? Decide before you read on.', '你会写什么？往下读之前先决定。'],
    ],

    { h: 'Look at your own grade', zh: '只看你自己的分数' },
    [
      ['Look at the table one column at a time.', '一列一列地看这张表。'],
      ['If your partner writes α: α gives you B−, β gives you C. So α is better.', '如果对方写 α：你写 α 得 B−，写 β 得 C。所以 α 更好。'],
      ['If your partner writes β: α gives you A, β gives you B+. So α is better again.', '如果对方写 β：你写 α 得 A，写 β 得 B+。α 还是更好。'],
      ['You do not need to guess. Whatever your partner does, α is better for you.', '你不用猜。不管对方怎么选，α 对你都更好。'],
    ],
    {
      box: [
        ['A choice that is better for you whatever the other person does is called a [[dominant strategy|占优策略]].', '不管别人怎么选，对你都更好的那个选择，叫占优策略{dominant strategy}。'],
        ['Here α is the dominant strategy.', '这里 α 就是占优策略。'],
      ],
    },
    [
      ['But here is the problem.', '可问题来了。'],
      ['Your partner thinks the same way and also writes α.', '对方也是这么想的，所以也写 α。'],
      ['You both get B−.', '你们俩都拿 B−。'],
      ['If you had both written β, you would both have B+.', '要是你们俩都写 β，本来都能拿 B+。'],
      ['Each person made the best choice for themselves, and both of you ended up worse.', '每个人都做了对自己最好的选择，结果两个人都变差了。'],
      ['This kind of game is called a [[prisoner’s dilemma|囚徒困境]].', '这种博弈叫囚徒困境{prisoner’s dilemma}。'],
    ],

    { h: 'Can a promise help?', zh: '事先说好有用吗？' },
    [
      ['What if you could talk first and agree to write β?', '要是你们能事先商量好，都写 β 呢？'],
      ['Then you are alone with your paper again.', '然后你又一个人拿着纸条了。'],
      ['If your partner keeps the promise, α still gives you an A.', '如果对方守约，你写 α 还是能拿 A。'],
      ['If your partner breaks the promise, α saves you from a C.', '如果对方毁约，写 α 能让你不拿 C。'],
      ['The promise changed the words, but it did not change the table.', '承诺改变了你们说的话，却没有改变那张表。'],
      ['To change what people do, you must change the table, not the words.', '想改变人们的做法，得改那张表，而不是改说的话。'],
    ],

    { h: 'You see this everywhere', zh: '这种事到处都是' },
    [
      ['At a concert, a few people in the front stand up to see better.', '演唱会上，前排几个人站起来，想看得更清楚。'],
      ['Then the people behind them must stand too.', '后面的人就也只好站起来。'],
      ['Soon the whole stadium is standing, and nobody sees better than before.', '很快整个体育馆的人都站着，谁也没比原来看得更清楚。'],
      ['Standing up is the dominant strategy, and everyone is more tired.', '站起来是占优策略，可每个人都更累了。'],
      ['The usual answer is a rule from outside: concert staff who ask people to sit down.', '通常的解决办法是来自外面的规则：场馆工作人员请大家坐下。'],
    ],

    { h: 'The best move on TV', zh: '电视上最漂亮的一招' },
    [
      ['A British TV show called Golden Balls ended with a game like this.', '英国有一档电视节目叫《金球》，最后一轮就是这样一个游戏。'],
      ['Two players each choose a ball: Split or Steal.', '两个人各选一个球：「分」或者「偷」。'],
      ['Both split: they share the prize money. One steals: the stealer takes everything. Both steal: nobody gets anything.', '都选「分」：平分奖金。一个人选「偷」：偷的人拿走全部。都选「偷」：谁也拿不到。'],
    ],
    [
      ['In one famous episode, the prize was 13,600 pounds.', '在有名的一集里，奖金是 13,600 英镑。'],
      ['A player named Nick said to the other player, Ibrahim: “I will steal. If you split, I will give you half after the show.”', '一个叫尼克的选手对另一个选手易卜拉欣说：「我会选『偷』。如果你选『分』，节目结束后我分你一半。」'],
      ['Ibrahim was very angry. The audience laughed.', '易卜拉欣气坏了。观众在笑。'],
      ['But think about it: if Nick steals, Ibrahim gets nothing from Steal, and maybe half from Split.', '可是想一想：如果尼克选「偷」，易卜拉欣选「偷」什么也拿不到；选「分」，也许还能拿到一半。'],
      ['So Ibrahim chose Split.', '所以易卜拉欣选了「分」。'],
      ['Then Nick opened his ball. He had chosen Split too, and they shared the money.', '然后尼克打开了自己的球。他也选了「分」，两个人平分了奖金。'],
      ['Nick did not change the rules. He changed what Ibrahim believed.', '尼克没有改规则。他改变的是易卜拉欣相信什么。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['That’s a dominant strategy: it’s better whatever the others do.', '这就是占优策略：不管别人怎么做，它都更好。'],
    ['A promise only helps if it changes the result.', '承诺只有改变了结果才有用。'],
  ],
  quiz: [
    {
      q: ['Why is α the “smart” choice in the grade game?', '在分数游戏里，为什么 α 是「聪明」的选择？'],
      opts: [['Whatever your partner writes, α gives you a better grade.', '不管对方写什么，α 给你的分数都更高'], ['α gives both people the best result.', 'α 给两个人的结果都最好'], ['Most people write α.', '大多数人写 α']],
      a: 0,
      e: ['That is a dominant strategy. But (α, α) is worse for both than (β, β).', '这就是占优策略。可 (α, α) 对两个人都比 (β, β) 差。'],
    },
    {
      q: ['Two people promise to write β. Why might it not work?', '两个人约好都写 β。为什么可能没用？'],
      opts: [['Alone with the paper, α is still better for each person.', '一个人拿着纸条时，α 对每个人仍然更好'], ['They forget the promise.', '他们忘了约定'], ['β is against the rules.', 'β 违反规则']],
      a: 0,
      e: ['The promise did not change the table.', '承诺没有改变那张表。'],
    },
    {
      q: ['What did Nick change on Golden Balls?', '在《金球》里，尼克改变了什么？'],
      opts: [['What Ibrahim believed.', '易卜拉欣相信什么'], ['The rules of the show.', '节目的规则'], ['The prize money.', '奖金的多少']],
      a: 0,
      e: ['Once Ibrahim believed Nick would steal, Split became the better choice for him.', '一旦易卜拉欣相信尼克会选「偷」，「分」对他来说就成了更好的选择。'],
    },
  ],
  questions: [
    {
      q: ['Think about it. Two coffee shops on the same street both lower their prices to win customers. Is this a prisoner’s dilemma? Why?', '想一想。同一条街上的两家咖啡店都降价抢客人。这是囚徒困境吗？为什么？'],
      a: [
        ['Often, yes. For each shop, lowering the price is better whatever the other shop does.', '常常是。对每家店来说，不管对方怎么做，降价都更好。'],
        ['But if both lower their prices, they both earn less than if they had both kept the old price.', '可是如果两家都降价，两家挣的都比都不降价时少。'],
      ],
    },
  ],
  words: {
    alpha:    ['/ˈælfə/', '希腊字母 α'],
    beta:     ['/ˈbeɪtə/', '希腊字母 β'],
    column:   ['/ˈkɑːləm/', '（表格的）一列'],
    dominant: ['/ˈdɑːmɪnənt/', '占优的'],
    strategy: ['/ˈstrætədʒi/', '策略'],
    dilemma:  ['/dɪˈlemə/', '困境'],
    stealer:  ['/ˈstiːlər/', '偷的人'],
    nick:     ['', '尼克（人名）'],
    ibrahim:  ['', '易卜拉欣（人名）'],
    golden:   ['/ˈɡoʊldən/', '金的；Golden Balls《金球》（英国电视节目）'],
  },
});
