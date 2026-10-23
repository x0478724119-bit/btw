// 连续剧「博弈论」第 2 集。对应 ECON 159 第 2–3 讲：逐步剔除劣势策略、共同知识、真实的人想几层（level-k）
addContent('gt-guess', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "报纸": "newspaper", "读者": "readers", "平均数": "average", "奖品": "prize",
    "商务舱": "business-class", "机票": "tickets", "比赛": "contest", "照片": "photos",
    "股票": "shares", "股市": "stock market", "数字": "number", "实验": "experiment",
    "答案": "answer", "对手": "opponent", "经济学家": "economist", "参赛者": "entrants",
    "范围": "range", "整数": "whole numbers", "均衡": "equilibrium", "泡沫": "bubble",
    "人群": "crowd", "选美": "beauty contest", "推理": "reasoning",
  },
  summary: '1997 年，《金融时报》请读者猜一个数：所有人猜的数的平均数的三分之二。数学上的「正确答案」是 0，可猜 0 的人一定输。这一集讲：真实的人到底会往下想几层。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲博弈论和真实实验，事实来源见下',
    facts: [
      ['课程结构：Yale ECON 159 Game Theory（Ben Polak），第 2–3 讲', 'https://oyc.yale.edu/economics/econ-159'],
      ['Wikipedia：Guess 2/3 of the average（Politiken 2005 年：19,196 人参加，平均数约 33，获胜数 21.6）', 'https://en.wikipedia.org/wiki/Guess_2/3_of_the_average'],
      ['Thaler 1997 年在《金融时报》办的比赛：平均数 18.91，获胜数约 13，奖品是两张商务舱机票', 'https://aperiodical.com/2015/08/new-york-times-puzzle-is-pure-game-theory/'],
      ['Rosemarie Nagel, Unraveling in Guessing Games: An Experimental Study, American Economic Review 85(5), 1995', 'https://extranet.parisschoolofeconomics.eu/docs/guesnerie-roger/nagel95.pdf'],
      ['Keynes, The General Theory of Employment, Interest and Money (1936), 第 12 章「选美比赛」', 'https://en.wikipedia.org/wiki/Keynesian_beauty_contest'],
    ],
  },
  guide: '这是「博弈论」第 2 集。上一集的工具是「占优」：不用猜别人，就知道自己该怎么做。这一集碰到的是：没有哪个数是占优的，你必须猜别人会怎么猜。读完你会：① 会用「逐步剔除劣势策略」一层层把答案推到 0；② 分清「每个人都理性」和「理性是共同知识」；③ 看懂两万人真实猜出来的数，知道大多数人只想一到两层（level-k）；④ 明白为什么「最理性」的答案在现实里会输。文末 3 道练习题。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['In 1997, the economist Richard Thaler ran a contest in the Financial Times.', '1997 年，经济学家理查德·塞勒在《金融时报》上办了一个比赛。'],
      ['Readers could send in any whole number from 0 to 100.', '读者可以寄来 0 到 100 之间的任何一个整数。'],
      ['The winner would be the person whose number was closest to two-thirds of the average of all the numbers sent in.', '谁的数字最接近「所有人寄来的数字的平均数的三分之二」，谁就赢。'],
      ['The prize was two business-class tickets to North America.', '奖品是两张飞往北美的商务舱机票。'],
      ['Pick your number now, before reading on.', '往下读之前，先选好你的数字。'],
    ],
    [
      ['Notice what is different from episode 1.', '注意它跟第 1 集有什么不一样。'],
      ['In the grade game, α was best whatever your partner did.', '在分数博弈里，不管搭档怎么选，α 都是最好的。'],
      ['Here, no number is best whatever others do: if everyone else picks 60, you want 40; if everyone else picks 3, you want 2.', '这里没有哪个数在任何情况下都最好：如果别人都猜 60，你该猜 40；如果别人都猜 3，你该猜 2。'],
      ['Your best answer depends entirely on what you think the others will pick.', '你的最佳答案，完全取决于你认为别人会猜什么。'],
    ],

    { h: '1. Keynes’s beauty contest', zh: '1. 凯恩斯的「选美比赛」' },
    [
      ['This kind of game has a famous ancestor.', '这类博弈有一个有名的「祖先」。'],
      ['In 1936, John Maynard Keynes described a newspaper contest in which readers looked at a set of photos and chose the faces they found prettiest.', '1936 年，凯恩斯描述过一个报纸比赛：读者看一组照片，选出自己觉得最漂亮的脸。'],
      ['The prize went to those whose choices were closest to the most popular choices overall.', '奖品给那些选择最接近大众选择的人。'],
      ['So the smart reader does not pick the faces they like best, but the faces they think others will like.', '所以聪明的读者不会选自己最喜欢的脸，而是选自己认为别人会喜欢的脸。'],
      ['A smarter reader picks the faces they think others will think others will like, and so on.', '更聪明的读者，会选自己认为「别人认为别人会喜欢」的脸，以此类推。'],
    ],
    [
      ['Keynes was not writing about beauty.', '凯恩斯写的其实不是选美。'],
      ['He was writing about the stock market, where many professional investors try to guess not what a company is worth, but what other investors will soon think it is worth.', '他写的是股市：很多职业投资者想猜的不是一家公司值多少钱，而是别的投资者很快会觉得它值多少钱。'],
      ['The guessing game strips that idea down to a single number you can measure.', '猜数游戏把这个想法简化成了一个可以测量的数字。'],
    ],

    { h: '2. Peeling the game layer by layer', zh: '2. 一层一层剥开' },
    [
      ['Start with something you can be sure of.', '先从一件能确定的事开始。'],
      ['Even if every single person picks 100, the average is 100, and two-thirds of it is about 66.7.', '就算每个人都猜 100，平均数也只是 100，它的三分之二约是 66.7。'],
      ['So the target can never be above 66.7.', '所以目标数永远不会超过 66.7。'],
      ['That means a number like 80 can never be closer to the target than 67 is.', '这意味着，像 80 这样的数，永远不可能比 67 更接近目标。'],
      ['In episode 1’s language, every number above 67 is [[dominated|劣势的]] by 67.', '用第 1 集的话说，所有大于 67 的数，都是被 67 占优的劣势策略{dominated}。'],
      ['A rational player never picks above 67.', '一个理性的人，永远不会猜大于 67 的数。'],
    ],
    [
      ['Now the second layer.', '现在是第二层。'],
      ['If you know that everyone else is rational, you know nobody picks above 67.', '如果你知道其他人也都是理性的，你就知道没有人会猜大于 67 的数。'],
      ['Then the average is at most 67, so the target is at most about 44.', '那么平均数最多是 67，目标数最多约是 44。'],
      ['So, once you take that into account, numbers above 44 are dominated too.', '所以把这一点考虑进去以后，大于 44 的数也成了劣势策略。'],
      ['If you know that they know that everyone is rational, the limit falls to about 30, then 20, then 13, then 9, and it keeps shrinking.', '如果你知道「他们也知道大家都理性」，上限就降到约 30，再到 20、13、9，一直缩下去。'],
      ['At the end of this process, only one number survives: 0.', '这个过程走到底，只剩下一个数：0。'],
    ],
    {
      box: [
        ['This method is called [[iterated elimination of dominated strategies|逐步剔除劣势策略]]: remove the dominated strategies, look at the smaller game that remains, and repeat.', '这个方法叫逐步剔除劣势策略{iterated elimination of dominated strategies}：先去掉劣势策略，看剩下的那个更小的博弈，然后重复。'],
        ['Each round needs one more level of knowledge.', '每多剔除一轮，都需要多一层「知道」。'],
        ['Round 1 needs “I am rational”; round 2 needs “I know you are rational”; round 3 needs “I know that you know that I am rational”.', '第 1 轮只需要「我是理性的」；第 2 轮需要「我知道你是理性的」；第 3 轮需要「我知道你知道我是理性的」。'],
        ['Getting all the way to 0 needs rationality to be [[common knowledge|共同知识]]: everyone knows it, everyone knows that everyone knows it, and so on forever.', '一路推到 0，需要理性是共同知识{common knowledge}：每个人都知道，每个人都知道每个人都知道，如此无限下去。'],
      ],
    },
    [
      ['This is the key point of the episode.', '这是这一集最关键的一点。'],
      ['“Everyone is rational” and “rationality is common knowledge” are very different statements.', '「每个人都是理性的」和「理性是共同知识」，是两句非常不一样的话。'],
      ['A room full of perfectly rational people can still fail to reach 0, if each of them is unsure whether the others are sure.', '一屋子完全理性的人，仍然可能推不到 0，只要每个人都不确定别人是否确定。'],
    ],

    { h: '3. What real people guessed', zh: '3. 真实的人猜了多少' },
    {
      table: {
        caption: 'Real results of the two-thirds game', zh: '真实的「平均数的三分之二」比赛结果',
        head: ['Contest', 'Entrants', 'Average guess', 'Winning number'],
        rows: [
          ['Financial Times, 1997', 'about 1,500', '18.9', 'about 13'],
          ['Politiken (Denmark), 2005', '19,196', 'about 33', '21.6'],
        ],
      },
    },
    [
      ['Nobody won with 0, and the winners were not even close to 0.', '没有人靠 0 赢，获胜的数字离 0 还远着呢。'],
      ['The German economist Rosemarie Nagel ran this game in a laboratory in the 1990s and looked closely at the numbers people chose.', '德国经济学家罗斯玛丽·纳格尔在 20 世纪 90 年代把这个游戏搬进实验室，仔细看了人们选的数字。'],
      ['The choices were not spread out evenly: they bunched up around 33 and around 22.', '选择并不是均匀分布的：它们扎堆在 33 附近和 22 附近。'],
    ],
    [
      ['Those two numbers are not random.', '这两个数不是随便来的。'],
      ['Imagine a player who does not think strategically at all and picks randomly; on average, such players pick 50.', '想象一种完全不做策略思考、随便乱猜的人，这种人平均起来会猜 50。'],
      ['A player who thinks one step ahead, “others will pick about 50, so I pick two-thirds of 50”, chooses about 33.', '往前想一步的人：「别人大概猜 50，所以我猜 50 的三分之二」，就会选 33 左右。'],
      ['A player who thinks two steps ahead, “others will think one step and pick 33”, chooses about 22.', '往前想两步的人：「别人会想一步、猜 33」，就会选 22 左右。'],
    ],
    {
      box: [
        ['This idea is called [[level-k thinking|k 层思考]]: a level-0 player does not reason, a level-1 player best-responds to level-0, a level-2 player best-responds to level-1, and so on.', '这个想法叫 k 层思考{level-k thinking}：第 0 层的人不推理；第 1 层的人针对第 0 层做出最佳回应；第 2 层的人针对第 1 层做出最佳回应；以此类推。'],
        ['A [[best response|最佳回应]] is the choice that gives you the highest payoff given what you believe the others will do.', '最佳回应{best response}是：在你认为别人会怎么做的前提下，给你收益最高的那个选择。'],
        ['The peaks at 33 and 22 suggest that in the laboratory most people thought one or two steps, rarely more.', '33 和 22 的两个高峰说明：在实验室里，大多数人只想了一到两步，很少更多。'],
        ['Be careful with this reading: some researchers argue that many players are not reasoning in levels at all, and the peaks may partly come from a smaller number of people.', '这个解读要小心：也有研究者认为，很多人根本不是按「层」在推理，这两个高峰可能部分来自少数一些人。'],
      ],
    },

    { h: '4. Why the “right” answer loses', zh: '4. 为什么「正确答案」会输' },
    [
      ['Here is the uncomfortable result.', '让人不舒服的结论来了。'],
      ['0 is the answer that perfect logic produces, and anyone who picks 0 in a real contest loses.', '0 是完美逻辑推出来的答案，可在真实的比赛里，猜 0 的人一定会输。'],
      ['Being more rational than everyone else is not an advantage if you assume everyone else is as rational as you.', '如果你假设别人跟你一样理性，那比别人更理性并不是优势。'],
      ['The winning skill is not maximum logic; it is guessing correctly how much logic the crowd will use, and going exactly one step further.', '赢的本事不是逻辑做到最满，而是准确猜到人群会用多少逻辑，然后正好比他们多走一步。'],
    ],
    [
      ['Look at the table again with this in mind.', '带着这个想法再看一遍那张表。'],
      ['Take a player who thinks exactly two steps and picks 22.', '拿一个正好想了两步、猜 22 的人来说。'],
      ['In the Danish contest, 22 was almost exactly the winning number, 21.6.', '在丹麦的比赛里，22 几乎正好就是获胜数字 21.6。'],
      ['In the Financial Times contest, where the crowd as a whole went much lower, 22 was far too high: the winner was about 13.', '在《金融时报》的比赛里，读者整体猜得低得多，22 就高得离谱了：获胜数字约是 13。'],
      ['The same reasoning nearly won in Copenhagen and lost badly in London.', '同样的推理，在哥本哈根差点赢了，在伦敦却输得很惨。'],
      ['The right answer is not a property of the game alone; it depends on who is playing.', '正确答案不只是博弈本身的性质，它还取决于谁在玩。'],
    ],
    [
      ['Nagel also had groups play the game several times in a row, telling them the result after each round.', '纳格尔还让同一组人连着玩好几轮，每轮结束后告诉他们结果。'],
      ['Each round the numbers fell, and over several rounds they moved steadily toward 0.', '每一轮数字都在降，几轮下来，稳步朝着 0 走。'],
      ['People did not reach 0 by pure thought, but they learned their way toward it.', '人们没能靠纯粹的思考推到 0，却一步步学着靠近了它。'],
      ['This is a pattern we will see again: theory often predicts badly the first time and much better once people have experience.', '这个规律我们以后还会再见到：理论第一次往往预测得很差，人们有了经验以后就准得多。'],
    ],

    { h: '5. Where you meet this game', zh: '5. 你会在哪里碰到这个博弈' },
    [
      ['Any time the right move depends on guessing what others will guess, you are in a beauty contest.', '只要「该怎么做」取决于「猜别人会怎么猜」，你就在玩一场选美比赛。'],
      ['In a stock market bubble, an investor may know a share is overpriced and still buy it, betting that others will pay even more.', '在股市泡沫里，投资者可能明知一只股票太贵，照样买进，赌的是别人会出更高的价。'],
      ['The question is never “is this too expensive?” but “how many steps ahead of me is the crowd thinking?”', '问题从来不是「这贵不贵」，而是「人群比我多想了几步」。'],
      ['In a negotiation, assuming the other side is either naive or a genius are both mistakes; the useful question is which level they are on.', '在谈判里，假设对方很天真，或者假设对方是天才，都是错的；有用的问题是：对方在第几层。'],
    ],

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['Iterated elimination took us all the way to one answer here, but many games have nothing to eliminate.', '在这个游戏里，逐步剔除一路把我们带到了唯一的答案，可很多博弈根本没有可剔除的东西。'],
      ['Think of two friends deciding which restaurant to meet at: no choice is dominated, and elimination tells you nothing.', '想想两个朋友决定在哪家餐厅见面：没有哪个选择是劣势的，剔除法什么也告诉不了你。'],
      ['We need a tool that works even when nothing can be thrown away.', '我们需要一个工具，在什么都扔不掉的时候也能用。'],
      ['There is a clue in this episode: 0 has a special property, because if everyone picks 0, nobody wants to change their number.', '这一集里其实藏着线索：0 有一个特别的性质，如果每个人都猜 0，就没有人想改自己的数。'],
      ['A situation where nobody wants to change is called a Nash equilibrium, and it is the subject of episode 3.', '一个「没有人想改」的局面，叫纳什均衡，它是第 3 集的主题。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['The question isn’t what this is worth, it’s what everyone else thinks it’s worth.', '问题不是它值多少，而是别人觉得它值多少。'],
    ['Everyone being rational isn’t enough; it has to be common knowledge.', '光是每个人都理性还不够，理性还得是共同知识。'],
    ['Don’t be the most rational person in the room; be one step ahead of the room.', '别做屋里最理性的那个人，要做比屋里的人多想一步的那个人。'],
  ],
  quiz: [
    {
      q: ['Why can a rational player rule out every number above 67 without knowing anything about the others?', '为什么一个理性的人，不需要知道别人的任何情况，就能排除所有大于 67 的数？'],
      opts: [['Because the target can never be above about 66.7, so 67 always beats a higher number.', '因为目标数永远不会超过约 66.7，所以 67 永远比更大的数好'], ['Because most people pick low numbers.', '因为大多数人猜的数都比较小'], ['Because 67 is two-thirds of 100.', '因为 67 是 100 的三分之二']],
      a: 0,
      e: ['This step uses only your own rationality. Every step after it needs beliefs about others.', '这一步只用到你自己的理性。之后的每一步，都需要对别人有判断。'],
    },
    {
      q: ['Ten perfect logicians play, but none is sure the others are perfect logicians. Will they all pick 0?', '十个完美的逻辑学家来玩，但没有人确定别人也是完美的逻辑学家。他们会都猜 0 吗？'],
      opts: [['Not necessarily: reaching 0 needs rationality to be common knowledge, not just true.', '不一定：推到 0 需要理性是共同知识，光是事实上理性不够'], ['Yes, because they are all rational.', '会，因为他们都理性'], ['No, logicians always pick 50.', '不会，逻辑学家总是猜 50']],
      a: 0,
      e: ['Each round of elimination needs one more level of “I know that you know”.', '每多剔除一轮，都需要多一层「我知道你知道」。'],
    },
    {
      q: ['In Nagel’s experiment, choices bunched near 33 and 22. What is the usual explanation?', '在纳格尔的实验里，选择扎堆在 33 和 22 附近。通常的解释是什么？'],
      opts: [['Many people reasoned one or two steps ahead of a random guesser.', '很多人比「随便乱猜的人」多想了一到两步'], ['33 and 22 are lucky numbers.', '33 和 22 是幸运数字'], ['People misunderstood the rules.', '人们看错了规则']],
      a: 0,
      e: ['Level 1 picks two-thirds of 50 (about 33); level 2 picks two-thirds of 33 (about 22). Some researchers doubt this reading.', '第 1 层猜 50 的三分之二（约 33）；第 2 层猜 33 的三分之二（约 22）。也有研究者对这个解读有保留。'],
    },
    {
      q: ['You join a contest where you believe most players are first-time players with little interest in strategy. What is the best approach?', '你参加一个比赛，你认为大多数人是第一次玩、也不太想动脑。最好的思路是？'],
      opts: [['Estimate how many steps they will think and go about one step further.', '估计他们会想几步，然后比他们多想一步左右'], ['Pick 0, because it is the logical answer.', '猜 0，因为它是逻辑上的答案'], ['Pick 50, because it is in the middle.', '猜 50，因为它在中间']],
      a: 0,
      e: ['The winning number depends on who is playing, not only on the game.', '获胜的数字取决于谁在玩，不只取决于博弈本身。'],
    },
  ],
  questions: [
    {
      q: ['Problem 1. Change the game: the winner is closest to half of the average, and numbers go from 0 to 100. Which numbers are removed in the first round of elimination? In the second? Where does it end?', '练习 1。把游戏改成：最接近平均数的一半的人赢，数字范围 0 到 100。第一轮剔除掉哪些数？第二轮呢？最后停在哪里？'],
      a: [
        ['Round 1: the target is at most 50, so every number above 50 is dominated by 50.', '第 1 轮：目标数最多是 50，所以所有大于 50 的数都被 50 占优。'],
        ['Round 2: if nobody picks above 50, the target is at most 25, so numbers above 25 go.', '第 2 轮：如果没人猜大于 50，目标数最多是 25，所以大于 25 的数被剔除。'],
        ['Then 12.5, 6.25, and so on: it ends at 0, and it gets there faster than with two-thirds, because each round cuts more.', '接着是 12.5、6.25……最后停在 0。比三分之二的版本推得更快，因为每一轮砍掉的更多。'],
      ],
    },
    {
      q: ['Problem 2. You believe half the players are level 0 (they average 50) and half are level 1 (they pick 33.3). Ignoring your own effect on the average, what should you pick?', '练习 2。你认为一半人是第 0 层（平均猜 50），一半人是第 1 层（猜 33.3）。不考虑你自己对平均数的影响，你该猜多少？'],
      a: [
        ['The expected average is (50 + 33.3) ÷ 2 ≈ 41.7.', '预计的平均数是 (50 + 33.3) ÷ 2 ≈ 41.7。'],
        ['Two-thirds of 41.7 is about 27.8, so you should pick about 28.', '41.7 的三分之二约是 27.8，所以你该猜 28 左右。'],
        ['Notice that this is neither a level-1 nor a level-2 answer: your best response depends on the mix of people, not on one “level” you belong to.', '注意，这既不是第 1 层也不是第 2 层的答案：你的最佳回应取决于人群的组成，而不是你属于哪一「层」。'],
      ],
    },
    {
      q: ['Problem 3. A harder one. Now the target is two-thirds of the average plus 10. Numbers still go from 0 to 100. Where does iterated elimination end?', '练习 3。难一点的。现在目标数是「平均数的三分之二再加 10」，范围还是 0 到 100。逐步剔除最后停在哪里？'],
      a: [
        ['Round 1: the target is at most two-thirds of 100 plus 10, about 76.7, so numbers above 77 are dominated.', '第 1 轮：目标数最多是 100 的三分之二加 10，约 76.7，所以大于 77 的数是劣势的。'],
        ['The process stops at the number x where x equals two-thirds of x plus 10.', '这个过程会停在一个数 x 上：x 等于 x 的三分之二加 10。'],
        ['Solving x = (2/3)x + 10 gives x/3 = 10, so x = 30: if everyone picks 30, the target is exactly 30, and nobody wants to move. This is your first Nash equilibrium.', '解 x = (2/3)x + 10，得 x/3 = 10，所以 x = 30。如果每个人都猜 30，目标数正好是 30，谁也不想改。这就是你算出的第一个纳什均衡。'],
      ],
    },
  ],
  words: {
    thaler:       ['/ˈtɑːlər/', '塞勒（经济学家，2017 年诺贝尔奖）'],
    keynes:       ['/keɪnz/', '凯恩斯（英国经济学家）'],
    maynard:      ['', '梅纳德（凯恩斯的名字）'],
    ancestor:     ['/ˈænsestər/', '祖先'],
    prettiest:    ['/ˈprɪtiɪst/', '最漂亮的'],
    peeling:      ['/ˈpiːlɪŋ/', '剥开'],
    dominated:    ['/ˈdɑːmɪneɪtɪd/', '被占优的，劣势的'],
    iterated:     ['/ˈɪtəreɪtɪd/', '反复的，逐步的'],
    elimination:  ['/ɪˌlɪmɪˈneɪʃn/', '剔除，消除'],
    rational:     ['/ˈræʃənl/', '理性的'],
    rationality:  ['/ˌræʃəˈnæləti/', '理性'],
    nagel:        ['', '纳格尔（德国经济学家 Rosemarie Nagel）'],
    rosemarie:    ['', '罗斯玛丽（人名）'],
    politiken:    ['', '《政治报》（丹麦报纸）'],
    laboratory:   ['/ˈlæbrətɔːri/', '实验室'],
    naive:        ['/naɪˈiːv/', '天真的'],
    overpriced:   ['/ˌoʊvərˈpraɪst/', '定价过高的'],
    logicians:    ['/loʊˈdʒɪʃnz/', '逻辑学家'],
    entrants:     ['/ˈentrənts/', '参赛者'],
    equilibrium:  ['/ˌiːkwɪˈlɪbriəm/', '均衡'],
    nash:         ['/næʃ/', '纳什（数学家 John Nash）'],
  },
});
