// 连续剧「概率与统计」第 2 集。总体与样本、抽样框、选择偏差、无应答偏差、随机抽样、误差范围约 1/√n（1936 年《文学文摘》民调）
addContent('math-sampling', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: {
    "杂志": "magazine", "选票": "ballots", "选举": "election", "总统": "president",
    "选民": "voters", "电话簿": "telephone directories", "汽车": "cars", "订户": "subscribers",
    "名单": "lists", "调查": "survey", "民调": "poll", "样本": "sample",
    "汤": "soup", "勺子": "spoon", "锅": "pot", "人口": "population",
    "数字": "number", "百分点": "percentage points", "地铁站": "metro station",
    "公司": "company", "顾客": "customers", "评论": "reviews", "公式": "formula",
  },
  summary: '1936 年，美国一本杂志调查了 240 万人，预测错了总统大选，而且错了将近 20 个百分点；另一个只问了几万人的年轻人却猜对了。今天的民调问 1,000 个人就敢说代表 14 亿人。第 2 集：样本多大不重要，怎么选出来的才重要。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲统计和历史，事实来源见下',
    facts: [
      ['Squire, Why the 1936 Literary Digest poll failed, Public Opinion Quarterly 52 (1988)（用 1937 年盖洛普的调查分析：无应答偏差 + 抽样框的问题）', 'https://pdixon.stat.iastate.edu/stat587/resources/president-landon-and-the-1936-literary-digest-poll-were-automobile-and-telephone-owners-to-blame.pdf'],
      ['Lohr, Sampling: Design and Analysis（教科书，《文学文摘》案例）', 'https://www.gwern.net/doc/statistics/bias/2017-lohr.pdf'],
      ['AAPOR：关于 1936 年民调的讨论（盖洛普约 5 万人样本，对 Squire 方法的批评）', 'https://aapor.org/wp-content/uploads/2023/12/LOG_2008_01.pdf'],
      ['Wikipedia：1936 United States presidential election（罗斯福约 61% 普选票）', 'https://en.wikipedia.org/wiki/1936_United_States_presidential_election'],
    ],
  },
  guide: '这是「概率与统计」第 2 集。读完你会：① 分清总体、样本、抽样框；② 看懂史上最有名的一次民调失败，以及教科书上流行的解释为什么只说对了一半；③ 知道两种最常见的偏差：选择偏差和无应答偏差；④ 会用「1 除以根号 n」估算误差范围，明白为什么 1,000 人就够了；⑤ 明白为什么总人口是 1 万还是 14 亿，几乎不影响你需要的样本有多大。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['In 1936, Franklin Roosevelt was running for a second term as US president against Alf Landon.', '1936 年，富兰克林·罗斯福竞选连任美国总统，对手是阿尔夫·兰登。'],
      ['The Literary Digest, one of the most popular magazines in America, had correctly predicted several elections before.', '《文学文摘》是当时美国最受欢迎的杂志之一，之前几次大选都预测对了。'],
      ['That year it mailed out about 10 million ballots and got back about 2.4 million.', '那一年，它寄出了大约 1,000 万张选票，收回了大约 240 万张。'],
      ['It predicted that Landon would win, with 57% of the vote.', '它预测兰登会赢，得票率 57%。'],
      ['Roosevelt won about 61% of the vote and 46 of the 48 states, one of the biggest wins in American history.', '结果罗斯福拿下了大约 61% 的选票、48 个州里的 46 个，是美国历史上最大的胜利之一。'],
      ['The magazine went out of business soon afterwards.', '这本杂志不久之后就倒闭了。'],
    ],
    [
      ['Meanwhile, a young pollster named George Gallup, using a sample of tens of thousands of people, predicted that Roosevelt would win.', '与此同时，一个叫乔治·盖洛普的年轻民调专家，用一个几万人的样本，预测罗斯福会赢。'],
      ['How can 2.4 million answers be beaten by a sample a fraction of the size?', '240 万份答卷，怎么会输给一个只有它零头大的样本？'],
    ],

    { h: '1. Population, sample, frame', zh: '1. 总体、样本、抽样框' },
    [
      ['Three words do most of the work in this episode.', '这一集的大部分工作，靠三个词来完成。'],
      ['The [[population|总体]] is everyone you want to know about: here, everyone who would vote in 1936.', '总体{population}是你想了解的所有人：这里就是 1936 年所有会去投票的人。'],
      ['The [[sample|样本]] is the people you actually ask.', '样本{sample}是你真正去问的那些人。'],
      ['The [[sampling frame|抽样框]] is the list you pick your sample from.', '抽样框{sampling frame}是你用来挑选样本的那份名单。'],
      ['The goal is for the sample to look like the population, and the frame is where that most often goes wrong.', '目标是让样本看起来像总体，而最常出问题的地方，就是抽样框。'],
    ],
    [
      ['The Digest built its frame from its own subscribers, telephone directories and lists of car owners.', '《文学文摘》的抽样框来自它自己的订户、电话簿和汽车车主名单。'],
      ['In 1936, during the Great Depression, owning a telephone or a car was a sign of being better off than average.', '1936 年正值大萧条，有电话或者有汽车，说明你比一般人日子好过。'],
      ['Wealthier voters leaned toward Landon, so a frame full of them would lean toward Landon too.', '比较富裕的选民偏向兰登，所以一个满是他们的抽样框，也会偏向兰登。'],
      ['When the frame systematically leaves out part of the population, the result is [[selection bias|选择偏差]].', '如果抽样框系统性地漏掉了总体的一部分，结果就是选择偏差{selection bias}。'],
    ],

    { h: '2. The textbook story is only half the story', zh: '2. 教科书上的说法只对了一半' },
    [
      ['That is the explanation in most textbooks, and for a long time it was accepted without much checking.', '大多数教科书给的就是这个解释，而且很长时间里，大家都没怎么核实就接受了。'],
      ['In 1988, the political scientist Peverill Squire looked at a survey that Gallup had carried out in 1937, which asked people whom they had voted for and whether they had owned a car or a phone, and whether they had answered the Digest’s ballot.', '1988 年，政治学家佩弗里尔·斯奎尔研究了盖洛普 1937 年做的一项调查。那项调查问了人们投给了谁、有没有汽车或电话，以及有没有回寄《文学文摘》的选票。'],
      ['He found that even among people who owned cars and phones, Roosevelt had a majority.', '他发现，就算在有汽车和电话的人里，罗斯福也占多数。'],
      ['A biased frame alone could not explain a prediction that wrong.', '光是抽样框有偏差，解释不了错得这么离谱的预测。'],
    ],
    [
      ['The bigger problem was who sent the ballot back.', '更大的问题，是谁把选票寄了回来。'],
      ['Only about a quarter of the people who received a ballot returned it, and Landon supporters, angry and eager to be heard, were more likely to return theirs.', '收到选票的人里，只有大约四分之一寄了回来；而兰登的支持者心里有气、急着发声，更有可能把选票寄回来。'],
      ['When the people who answer differ from the people who do not, the result is [[nonresponse bias|无应答偏差]].', '当回答的人和不回答的人不一样时，结果就是无应答偏差{nonresponse bias}。'],
      ['Some researchers question parts of Squire’s method, but most now agree that nonresponse made the error far worse.', '也有研究者对斯奎尔的部分方法有疑问，但现在大多数人都同意：无应答让这个错误严重了很多。'],
    ],
    {
      box: [
        ['The lesson is the opposite of what intuition says.', '这个教训跟直觉正好相反。'],
        ['A huge sample does not cancel out bias; it measures the bias very precisely.', '巨大的样本并不能抵消偏差；它只会把偏差测得非常精确。'],
        ['2.4 million biased answers gave the magazine great confidence in the wrong number.', '240 万份有偏差的答卷，让这本杂志对一个错误的数字信心十足。'],
        ['You meet the same thing today in online reviews, app ratings and social media polls: the people who choose to answer are rarely typical.', '今天你在网上评论、App 评分和社交媒体投票里碰到的，也是同一回事：主动回答的人，很少是典型的人。'],
      ],
    },

    { h: '3. Why 1,000 people is enough', zh: '3. 为什么 1,000 个人就够了' },
    [
      ['Now the other half of the puzzle: how can a small sample work at all?', '现在是谜题的另一半：一个小样本怎么可能管用？'],
      ['The key is a [[random sample|随机样本]], where every person in the population has the same chance of being chosen.', '关键是随机样本{random sample}：总体里的每个人，被选中的机会都一样。'],
      ['Think of tasting soup.', '想想尝汤。'],
      ['If you stir the pot well, one spoonful tells you how salty the whole pot is, and it does not matter whether the pot holds one litre or a hundred.', '如果你把锅搅匀了，一勺就能告诉你整锅汤有多咸，不管这锅汤是一升还是一百升。'],
      ['If you do not stir it, even a hundred spoonfuls from the top can be wrong.', '如果你没搅，就算从最上面舀一百勺，也可能是错的。'],
      ['Random sampling is the stirring.', '随机抽样，就是那个「搅」。'],
    ],
    {
      box: [
        ['With a random sample, the size of the error is predictable.', '有了随机样本，误差有多大是可以预测的。'],
        ['A good rule of thumb for a poll is that the [[margin of error|误差范围]] is about 1 ÷ √n, where n is the number of people in the sample.', '对民调来说，一个好用的经验法则是：误差范围{margin of error}大约是 1 ÷ √n，n 是样本里的人数。'],
        ['For n = 1,000, √1,000 is about 31.6, so the margin is about 1 ÷ 31.6 ≈ 3%.', 'n = 1,000 时，√1,000 约是 31.6，所以误差范围约是 1 ÷ 31.6 ≈ 3%。'],
        ['This means that in about 95 out of 100 such polls, the true figure will be within about 3 percentage points of the poll’s figure.', '意思是：这样的民调做 100 次，大约有 95 次，真实的数字会落在民调数字上下 3 个百分点以内。'],
      ],
    },
    {
      table: {
        caption: 'Margin of error ≈ 1 ÷ √n (for a random sample)', zh: '误差范围 ≈ 1 ÷ √n（随机样本）',
        head: ['Sample size n', '√n', 'Margin of error'],
        rows: [
          ['100', '10', 'about ±10%'],
          ['1,000', 'about 32', 'about ±3%'],
          ['10,000', '100', 'about ±1%'],
          ['2,400,000', 'about 1,550', 'about ±0.06%'],
        ],
      },
    },
    [
      ['Notice two things in the table.', '注意表里的两件事。'],
      ['First, to cut the error in half, you need four times as many people, so after a thousand or so, extra people buy very little.', '第一，想把误差减半，你需要四倍的人，所以过了一千人左右，再多加人也换不来多少精度。'],
      ['Second, the size of the population does not appear anywhere.', '第二，总体有多大，在表里根本没有出现。'],
      ['A random sample of 1,000 is about as accurate for a city of 1 million as for a country of 1.4 billion, just as one spoonful works for any size of pot.', '一个 1,000 人的随机样本，对一座 100 万人的城市和一个 14 亿人的国家，准确程度差不多，就像一勺汤对任何大小的锅都管用。'],
    ],
    [
      ['Now put the Digest’s numbers into the table.', '现在把《文学文摘》的数字放进表里。'],
      ['With 2.4 million answers, the margin of error from chance alone would have been about 0.06%.', '有 240 万份答卷，光靠随机误差，误差范围大约只有 0.06%。'],
      ['The actual error was almost 20 percentage points, more than 300 times larger.', '实际的误差将近 20 个百分点，大了 300 多倍。'],
      ['The margin of error only measures random chance; it says nothing about bias.', '误差范围只衡量随机的偶然性，对偏差它什么也说不了。'],
    ],

    { h: '4. How to read a survey', zh: '4. 怎么读一份调查' },
    [
      ['You can now ask four questions about any survey you read.', '现在，你可以对读到的任何一份调查问四个问题。'],
      ['Who was the population they wanted to know about?', '他们想了解的总体是谁？'],
      ['What list, or frame, did they pick people from, and who does it leave out?', '他们是从哪份名单，也就是抽样框里挑人的？这份名单漏掉了谁？'],
      ['Who chose to answer, and why might they differ from those who did not?', '谁选择了回答？他们可能跟没回答的人有什么不同？'],
      ['Only then: how big was the sample?', '最后才问：样本有多大？'],
    ],
    [
      ['Most people ask only the last question.', '大多数人只问最后一个问题。'],
      ['The first three are where surveys usually fail.', '而调查通常栽在前三个问题上。'],
    ],

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['Even with a perfect random sample, you still have to summarise the answers, and the most common summary is the average.', '就算有一个完美的随机样本，你还是得把答案总结一下，而最常用的总结就是平均数。'],
      ['If the richest person in the world walks into a café with ten customers, the average customer becomes a billionaire.', '如果世界首富走进一家有十位顾客的咖啡馆，那么这里顾客的平均身家就成了亿万富翁。'],
      ['Nothing about the other ten has changed.', '可另外十个人什么都没变。'],
      ['Episode 3: averages, medians, and why “the average salary” is usually higher than what most people earn.', '第 3 集：平均数、中位数，以及为什么「平均工资」通常比大多数人挣的都高。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['A bigger sample doesn’t fix a biased sample.', '样本再大，也修不好有偏差的样本。'],
    ['Who chose to answer this survey, and who didn’t?', '谁选择回答了这份调查，谁没有？'],
    ['The margin of error only covers random chance, not bias.', '误差范围只管随机的偶然性，不管偏差。'],
  ],
  quiz: [
    {
      q: ['Why did 2.4 million ballots not save the Literary Digest?', '为什么 240 万张选票也没能救《文学文摘》？'],
      opts: [['A huge biased sample just measures the bias very precisely.', '巨大的有偏样本，只是把偏差测得很精确'], ['2.4 million was too small.', '240 万太少了'], ['The ballots were lost in the post.', '选票在邮寄中丢了']],
      a: 0,
      e: ['Size reduces random error, not bias.', '样本大小能减少随机误差，减少不了偏差。'],
    },
    {
      q: ['What is nonresponse bias?', '什么是无应答偏差？'],
      opts: [['When the people who answer differ from the people who do not.', '回答的人和不回答的人不一样'], ['When a survey has too few questions.', '调查的问题太少'], ['When people lie in their answers.', '人们在回答里撒谎']],
      a: 0,
      e: ['In 1936, Landon supporters were more likely to send their ballots back.', '1936 年，兰登的支持者更有可能把选票寄回来。'],
    },
    {
      q: ['A random sample of 1,000 people has a margin of error of about 3%. Roughly how many people do you need for about 1.5%?', '一个 1,000 人的随机样本，误差范围约 3%。要达到约 1.5%，大约需要多少人？'],
      opts: [['About 4,000', '大约 4,000'], ['About 2,000', '大约 2,000'], ['About 1,500', '大约 1,500']],
      a: 0,
      e: ['The margin shrinks with √n, so halving it needs four times the sample.', '误差范围随 √n 缩小，所以减半需要四倍的样本。'],
    },
    {
      q: ['Why does a national poll of 1.4 billion people not need a much bigger sample than a city poll?', '为什么一个 14 亿人的全国民调，并不需要比城市民调大得多的样本？'],
      opts: [['With random sampling, accuracy depends on the sample size, not the population size.', '随机抽样时，准确度取决于样本大小，而不是总体大小'], ['Because people in big countries agree more.', '因为大国的人意见更一致'], ['Because national polls are less accurate anyway.', '因为全国民调反正不准']],
      a: 0,
      e: ['One spoonful of well-stirred soup works for any size of pot.', '搅匀的汤，一勺对任何大小的锅都管用。'],
    },
  ],
  questions: [
    {
      q: ['Problem 1. A milk tea brand asks customers to rate a new drink by scanning a code on the cup. 5,000 people respond, and 82% say they love it. Using the four questions from section 4, explain what you can and cannot conclude.', '练习 1。一个奶茶品牌让顾客扫杯子上的码，给新品打分。5,000 人参与，82% 说很喜欢。用第 4 部分的四个问题，说说你能得出什么结论，不能得出什么结论。'],
      a: [
        ['Population: probably all potential customers, but the frame is only people who already bought the drink, which leaves out everyone who looked at it and chose something else.', '总体：大概是所有潜在顾客，可抽样框只有已经买了这款饮品的人，漏掉了所有看过它却选了别的的人。'],
        ['Response: people who bother to scan a code are likely to be the most enthusiastic, so there is probably strong nonresponse bias.', '回答：愿意费事去扫码的人，很可能是最热情的那些，所以大概有很强的无应答偏差。'],
        ['5,000 sounds large, but it only measures this biased group precisely. You can say “people who bought it and chose to rate it mostly liked it”, not “82% of customers love it”.', '5,000 听起来很多，但它只是把这个有偏差的群体测得很精确。你只能说「买了它并且主动打分的人大多喜欢」，而不能说「82% 的顾客都爱它」。'],
      ],
    },
    {
      q: ['Problem 2. A researcher wants to know what share of a city’s adults use public transport. She interviews 2,000 people at metro stations at 8 a.m. on weekdays. What is wrong, and how would you fix it?', '练习 2。一位研究者想知道一座城市的成年人里有多少人坐公共交通。她在工作日早上 8 点去地铁站采访了 2,000 人。哪里出了问题？你会怎么改？'],
      a: [
        ['The frame is people who are already at a metro station, so almost everyone in the sample uses public transport: the result will be close to 100% whatever the truth is.', '抽样框是已经在地铁站里的人，所以样本里几乎人人都坐公共交通：不管真实情况如何，结果都会接近 100%。'],
        ['Weekday mornings also leave out people who do not commute, such as retired people or people working from home.', '工作日早上，还漏掉了不通勤的人，比如退休的人或者在家办公的人。'],
        ['A better design picks people at random from a list that covers the whole adult population, such as households, and then tries hard to reach those who do not answer the first time.', '更好的设计是：从一份覆盖全体成年人的名单里随机挑人，比如按住户来抽，然后尽力去联系第一次没回应的人。'],
      ],
    },
  ],
  words: {
    roosevelt:   ['/ˈroʊzəvelt/', '罗斯福（美国总统）'],
    landon:      ['', '兰登（1936 年总统候选人 Alf Landon）'],
    literary:    ['/ˈlɪtəreri/', '文学的；Literary Digest《文学文摘》'],
    digest:      ['/ˈdaɪdʒest/', '文摘'],
    ballots:     ['/ˈbæləts/', '选票'],
    pollster:    ['/ˈpoʊlstər/', '民调专家'],
    gallup:      ['/ˈɡæləp/', '盖洛普（民调专家 George Gallup）'],
    sampling:    ['/ˈsæmplɪŋ/', '抽样'],
    subscribers: ['/səbˈskraɪbərz/', '订户'],
    directories: ['/dəˈrektəriz/', '名录；telephone directories 电话簿'],
    depression:  ['/dɪˈpreʃn/', '萧条；Great Depression 大萧条'],
    squire:      ['', '斯奎尔（政治学家 Peverill Squire）'],
    peverill:    ['', '佩弗里尔（人名）'],
    nonresponse: ['/ˌnɑːnrɪˈspɑːns/', '无应答'],
    spoonful:    ['/ˈspuːnfʊl/', '一勺'],
    spoonfuls:   ['/ˈspuːnfʊlz/', '几勺'],
    margin:      ['/ˈmɑːrdʒɪn/', '边缘；margin of error 误差范围'],
    thumb:       ['/θʌm/', 'rule of thumb 经验法则'],
    summarise:   ['/ˈsʌməraɪz/', '总结'],
    medians:     ['/ˈmiːdiənz/', '中位数'],
    billionaire: ['/ˌbɪljəˈner/', '亿万富翁'],
    enthusiastic:['/ɪnˌθuːziˈæstɪk/', '热情的'],
    commute:     ['/kəˈmjuːt/', '通勤'],
  },
});
