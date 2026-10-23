// 连续剧「Python 数据分析」第 2 集。for 循环、range、累加器、while 循环、用暴力计算检验一句理财「常识」
addContent('py-loops', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: { "代码": "code", "利率": "interest rate", "利息": "interest", "余额": "balance", "银行": "bank", "栅栏": "fence", "柱子": "posts", "建议": "advice", "文章": "articles", "电脑": "computer", "公式": "formula", "本金": "principal" },
  summary: '「早点开始存钱，比每个月多存更重要」，这句话你肯定听过。用十行 Python 算一下就会发现：它对不对，完全取决于利率。利率 3% 的时候，它错得离谱。第 2 集：循环，让电脑替你把一件事重复一万次。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲编程；文中所有数字都由文中的代码算出，代码可以随便用。这是算术，不是理财建议',
    facts: [
      ['Python 官方教程：for Statements、range()、while', 'https://docs.python.org/3/tutorial/controlflow.html'],
      ['Python 官方文档：round() 和浮点数', 'https://docs.python.org/3/library/functions.html#round'],
    ],
  },
  guide: '这是「Python 数据分析」第 2 集，全英文。读完你会：① 会写 for 循环和 while 循环，知道什么时候用哪个；② 会用「累加器」在循环里一点点算出总数；③ 用循环算复利，而不用背任何公式；④ 亲手检验一句流行的理财说法，发现它在什么利率下成立、什么利率下不成立；⑤ 认识编程里最常见的错误之一：差一错误（off-by-one）。所有数字都是文中的代码算出来的。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['You have probably heard this advice: starting to save early matters more than saving a lot.', '你大概听过这样的建议：早点开始存钱，比存很多钱更重要。'],
      ['Here is a concrete version.', '下面是一个具体的版本。'],
      ['Person A saves 1,000 yuan a month for 40 years. Person B starts ten years later and saves twice as much, 2,000 a month, for 30 years.', 'A 每个月存 1,000 元，存 40 年。B 晚十年开始，但每个月存两倍，2,000 元，存 30 年。'],
      ['Both earn the same interest. Who ends up with more?', '两人的利率一样。最后谁的钱更多？'],
      ['Most articles about this give one answer. By the end of this episode you will have the real answer, which is: it depends, and you will know exactly on what.', '大多数讲这件事的文章都只给一个答案。读完这一集，你会得到真正的答案：看情况。而且你会确切地知道，看的是什么情况。'],
    ],

    { h: '1. Doing something many times', zh: '1. 把一件事做很多次' },
    [
      ['A [[loop|循环]] tells Python to repeat some lines of code.', '循环{loop}是让 Python 重复执行几行代码。'],
      ['The most common kind is the for loop, which repeats once for each item in a sequence.', '最常见的是 for 循环，序列里有几项，它就重复几次。'],
    ],
    { code: 'for drink in ["tea", "coffee", "juice"]:\n    print("I like", drink)', out: 'I like tea\nI like coffee\nI like juice' },
    [
      ['Two details matter.', '有两个细节很重要。'],
      ['The line with for ends with a colon.', 'for 那一行要以冒号结尾。'],
      ['The lines to repeat are [[indented|缩进]], usually by four spaces; Python uses the indentation, not brackets, to know which lines belong to the loop.', '要重复的那几行要缩进{indented}，通常是四个空格；Python 靠缩进，而不是括号，来判断哪几行属于这个循环。'],
      ['To repeat something a fixed number of times, use range.', '要把一件事重复固定的次数，就用 range。'],
    ],
    { code: 'for month in range(3):\n    print("month", month)', out: 'month 0\nmonth 1\nmonth 2' },
    [
      ['range(3) gives 0, 1 and 2: three numbers, starting from 0 and stopping before 3.', 'range(3) 给出 0、1、2：三个数，从 0 开始，到 3 之前停下。'],
      ['Starting at 0 feels strange at first, and it causes one of the most common bugs in programming, which we will meet in section 5.', '从 0 开始一开始会觉得奇怪，它也会造成编程里最常见的 bug 之一，我们在第 5 部分会碰到。'],
    ],

    { h: '2. The accumulator', zh: '2. 累加器' },
    [
      ['To add things up inside a loop, you create a variable before the loop and update it each time round.', '想在循环里把东西加起来，就在循环之前先建一个变量，每转一圈就更新它一次。'],
      ['This pattern is called an [[accumulator|累加器]].', '这种写法叫累加器{accumulator}。'],
    ],
    { code: 'total = 0\nfor month in range(12):\n    total = total + 1000\nprint(total)', out: '12000' },
    [
      ['Remember episode 1: total = total + 1000 does not mean “total equals total plus 1000”, which would be impossible.', '记得第 1 集吗：total = total + 1000 的意思不是「total 等于 total 加 1000」，那是不可能的。'],
      ['It means: work out total + 1000, then move the label total to that new value.', '它的意思是：先算出 total + 1000，再把 total 这张标签挪到这个新值上。'],
    ],

    { h: '3. Compound interest without a formula', zh: '3. 不用公式算复利' },
    [
      ['Now add interest.', '现在加上利息。'],
      ['Suppose the bank pays 3% a year, added monthly, so each month your balance grows by 3% ÷ 12 = 0.25%.', '假设银行年利率 3%，按月计息，那么每个月你的余额增长 3% ÷ 12 = 0.25%。'],
      ['Each month, two things happen in order: last month’s balance earns interest, then you add your new 1,000.', '每个月，按顺序发生两件事：上个月的余额先产生利息，然后你再存进新的 1,000。'],
      ['That is exactly one line inside a loop.', '这正好就是循环里的一行代码。'],
    ],
    { code: 'total = 0\nfor month in range(12):\n    total = total * (1 + 0.03 / 12) + 1000\nprint(round(total, 2))', out: '12166.38' },
    [
      ['After one year you have paid in 12,000 and have 12,166.38.', '一年后你存进去 12,000，账上有 12,166.38。'],
      ['The extra 166.38 is interest, and part of it is interest on interest, which is what [[compound interest|复利]] means.', '多出来的 166.38 是利息，其中一部分是利息生的利息，这就是复利{compound interest}的意思。'],
      ['There is a formula for this, but you do not need it: the computer simply does what the bank does, one month at a time.', '这有现成的公式，但你用不着：电脑就是照着银行的做法，一个月一个月地算。'],
      ['This approach, letting the computer repeat a simple step many times instead of finding a clever formula, is called [[brute force|暴力计算]], and in data analysis it is often the clearest way to get a right answer.', '这种做法，不去找巧妙的公式，而是让电脑把一个简单的步骤重复很多次，叫作暴力计算{brute force}；在数据分析里，它常常是得到正确答案最清楚的办法。'],
    ],

    { h: '4. A function, and the real answer', zh: '4. 一个函数，和真正的答案' },
    [
      ['To compare A and B, we want to run the same calculation with different numbers.', '要比较 A 和 B，我们想用不同的数字跑同一个计算。'],
      ['So we wrap it in a [[function|函数]]: a named piece of code that takes inputs and gives back a result.', '所以我们把它包进一个函数{function}里：一段有名字的代码，接收输入，返回结果。'],
      ['Episode 3 is all about functions; for now, just read this one.', '第 3 集会专门讲函数；现在你只需要读懂这一个。'],
    ],
    { code: 'def grow(monthly, years, rate):\n    total = 0\n    for month in range(years * 12):\n        total = total * (1 + rate / 12) + monthly\n    return total\n\nprint(round(grow(1000, 40, 0.03)))   # Person A\nprint(round(grow(2000, 30, 0.03)))   # Person B', out: '926060\n1165474' },
    [
      ['At 3%, B ends up with about 240,000 more.', '利率 3% 的时候，B 最后多了大约 24 万。'],
      ['Saving twice as much beat starting ten years earlier, easily.', '每月多存一倍，轻松胜过早十年开始。'],
      ['So is the famous advice simply wrong? Let the loop answer that too, by trying every interest rate.', '那这句有名的建议就是错的吗？也让循环来回答：把每个利率都试一遍。'],
    ],
    { code: 'for rate in [0.01, 0.03, 0.05, 0.06, 0.07, 0.08]:\n    a = grow(1000, 40, rate)\n    b = grow(2000, 30, rate)\n    if a > b:\n        print(rate, "start early wins")\n    else:\n        print(rate, "save double wins")', out: '0.01 save double wins\n0.03 save double wins\n0.05 save double wins\n0.06 save double wins\n0.07 start early wins\n0.08 start early wins' },
    [
      ['The new word here is if: it runs the indented line only when the condition is true, and else runs otherwise.', '这里的新词是 if：条件成立时才执行缩进的那一行，否则就执行 else 下面的。'],
      ['The answer flips somewhere between 6% and 7%.', '答案在 6% 到 7% 之间的某个地方翻转了。'],
      ['Early saving wins only when the interest rate is high, because only then do the ten extra years of compounding outweigh paying in twice as much.', '只有利率高的时候，早存才会赢，因为只有那时，多出来的十年复利才能压过多存一倍的本金。'],
    ],
    {
      box: [
        ['This is the real lesson, and it is not about money.', '这才是真正的教训，而且它跟钱无关。'],
        ['Most articles that repeat the advice quietly assume a return of 7 to 10% a year, which is roughly what stock markets have averaged over long periods in some countries, with big risks along the way.', '大多数重复这句建议的文章，都悄悄假设了每年 7% 到 10% 的回报，这大致是某些国家的股市在很长时间里的平均水平，而且一路上风险很大。'],
        ['At a bank deposit rate of around 2 or 3%, the same advice is wrong by hundreds of thousands of yuan.', '换成 2% 或 3% 左右的银行存款利率，同样的建议就错了几十万元。'],
        ['A claim that sounds universal often hides one assumption, and a ten-line program can find it.', '一句听起来放之四海而皆准的话，常常藏着一个假设，而十行代码就能把它找出来。'],
        ['(This is arithmetic, not investment advice: real returns are uncertain, and inflation is ignored here.)', '（这是算术，不是理财建议：真实的回报是不确定的，这里也没有考虑通货膨胀。）'],
      ],
    },

    { h: '5. while, and the off-by-one trap', zh: '5. while，和「差一」的陷阱' },
    [
      ['A for loop is for when you know how many times to repeat.', 'for 循环用在你知道要重复多少次的时候。'],
      ['A while loop is for when you do not: it keeps going as long as a condition is true.', 'while 循环用在你不知道的时候：只要条件成立，它就一直转下去。'],
      ['How many months of saving 1,000 at 3% does it take to reach 500,000?', '每月存 1,000、利率 3%，要多少个月才能攒到 50 万？'],
    ],
    { code: 'total = 0\nmonths = 0\nwhile total < 500000:\n    total = total * (1 + 0.03 / 12) + 1000\n    months = months + 1\nprint(months, "months, about", round(months / 12, 1), "years")', out: '325 months, about 27.1 years' },
    [
      ['Without interest it would take 500 months, almost 42 years, so at 3% interest does the work of about 15 years of saving.', '不算利息的话，要 500 个月，差不多 42 年；所以 3% 的利息，大约顶了 15 年的存款。'],
      ['Notice where months = months + 1 is: inside the loop, after the deposit.', '注意 months = months + 1 放在哪里：在循环里面，存款之后。'],
      ['If you put it before the loop, or forget it, the loop either gives the wrong count or never ends.', '如果你把它放到循环前面，或者忘了写，循环要么数错，要么永远不会停。'],
    ],
    {
      box: [
        ['Counting one too many or one too few is called an [[off-by-one error|差一错误]].', '多数一个或者少数一个，叫差一错误{off-by-one error}。'],
        ['A classic puzzle: a fence 10 metres long has a post every metre. How many posts?', '一道经典题：一道 10 米长的栅栏，每隔一米立一根柱子。一共几根柱子？'],
        ['Most people say 10, but it is 11, because there is a post at both ends.', '大多数人会说 10 根，其实是 11 根，因为两头各有一根。'],
        ['range(10) gives ten numbers, 0 to 9; range(1, 11) gives 1 to 10; mixing these two up is the single most common way to get a loop slightly wrong.', 'range(10) 给出十个数，0 到 9；range(1, 11) 给出 1 到 10。把这两个搞混，是让循环出点小错最常见的方式。'],
        ['The fix is boring and reliable: test the loop on a tiny case you can count by hand, like 3 months, before trusting it with 480.', '解决办法无聊但可靠：在相信它能算 480 个月之前，先拿一个你能手算的小例子试一下，比如 3 个月。'],
      ],
    },

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['You just used a function, grow, without being told how functions work.', '你刚才用了一个函数 grow，却还没人告诉你函数是怎么工作的。'],
      ['Functions are how programmers stop repeating themselves, and they are also where a strange class of bugs hides: a function that quietly changes something outside itself.', '函数是程序员避免重复自己的办法，也是一类奇怪的 bug 藏身的地方：一个函数悄悄改变了它外面的东西。'],
      ['Remember the list from episode 1 that changed when you only touched its copy?', '还记得第 1 集里那个你只动了「副本」，它自己却变了的列表吗？'],
      ['Episode 3: functions, and the same bug in a more dangerous place.', '第 3 集：函数，以及同一个 bug 出现在一个更危险的地方。'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['Let’s just brute-force it: loop over every rate and see where the answer flips.', '直接暴力算吧：把每个利率循环一遍，看答案在哪里翻转。'],
    ['That advice only holds if you assume a return of around seven percent.', '那条建议只有在假设回报率大约 7% 的时候才成立。'],
    ['I think there’s an off-by-one error in the loop; let’s test it on three months first.', '我觉得循环里有个差一错误；先拿三个月试一下。'],
  ],
  quiz: [
    {
      q: ['What does range(4) give?', 'range(4) 给出的是什么？'],
      opts: [['0, 1, 2, 3', '0、1、2、3'], ['1, 2, 3, 4', '1、2、3、4'], ['0, 1, 2, 3, 4', '0、1、2、3、4']],
      a: 0,
      e: ['Four numbers, starting at 0 and stopping before 4.', '四个数，从 0 开始，到 4 之前停下。'],
    },
    {
      q: ['When should you use a while loop instead of a for loop?', '什么时候该用 while 循环，而不是 for 循环？'],
      opts: [['When you do not know in advance how many times to repeat.', '事先不知道要重复多少次的时候'], ['When the loop is very long.', '循环很长的时候'], ['When you are adding numbers.', '在做加法的时候']],
      a: 0,
      e: ['A while loop repeats until a condition becomes false, like reaching 500,000.', 'while 循环会一直重复到条件不再成立，比如攒到 50 万。'],
    },
    {
      q: ['At 3% interest, who ends up with more: A (1,000 a month for 40 years) or B (2,000 a month for 30 years)?', '利率 3% 时，谁最后钱更多：A（每月 1,000，存 40 年）还是 B（每月 2,000，存 30 年）？'],
      opts: [['B, by about 240,000 yuan.', 'B，多大约 24 万元'], ['A, because starting early always wins.', 'A，因为早开始永远赢'], ['They end up with the same.', '一样多']],
      a: 0,
      e: ['Early saving only wins above about 6–7%, where ten extra years of compounding outweigh double payments.', '只有利率高于大约 6%–7% 时，早存才会赢，那时多出来的十年复利才能压过双倍的本金。'],
    },
    {
      q: ['A loop over range(1, 10) is meant to count months 1 to 10. What is wrong?', '一个 range(1, 10) 的循环，本来想数第 1 到第 10 个月。哪里错了？'],
      opts: [['It stops at 9, an off-by-one error; it should be range(1, 11).', '它到 9 就停了，是差一错误；应该写 range(1, 11)'], ['It should start at 0.', '应该从 0 开始'], ['Nothing is wrong.', '没有错']],
      a: 0,
      e: ['range stops before its second number. Test on a small case you can count by hand.', 'range 会在第二个数之前停下。拿一个能手算的小例子测一下。'],
    },
  ],
  questions: [
    {
      q: ['Problem 1. Write a loop that prints how much you would have after each of the first 3 years, saving 1,000 a month at 3%. Check your first line against the 12,166.38 from section 3.', '练习 1。写一个循环，打印出每月存 1,000、利率 3% 时，前 3 年每年年底各有多少钱。用第 3 部分的 12,166.38 检查你的第一行。'],
      a: [
        ['One solution: for year in range(1, 4): print(year, round(grow(1000, year, 0.03))).', '一种写法：for year in range(1, 4): print(year, round(grow(1000, year, 0.03)))。'],
        ['It prints 1 12166, 2 24703 and 3 37621.', '它会打印 1 12166、2 24703 和 3 37621。'],
        ['Notice range(1, 4), not range(3): you want years 1, 2 and 3, and starting from 0 would print a useless year 0.', '注意是 range(1, 4)，不是 range(3)：你要的是第 1、2、3 年，从 0 开始会打印出一个没用的第 0 年。'],
      ],
    },
    {
      q: ['Problem 2. Find the break-even rate more precisely: start at rate = 0 and keep adding 0.001 while A still has less than B. What rate does the loop stop at?', '练习 2。更精确地找出那个翻转点：从 rate = 0 开始，只要 A 还比 B 少，就一直加 0.001。循环停在哪个利率？'],
      a: [
        ['rate = 0\nwhile grow(1000, 40, rate) < grow(2000, 30, rate):\n    rate = rate + 0.001\nprint(round(rate, 3))', 'rate = 0\nwhile grow(1000, 40, rate) < grow(2000, 30, rate):\n    rate = rate + 0.001\nprint(round(rate, 3))'],
        ['It prints 0.062, so the advice starts to hold at about 6.2% a year.', '它打印出 0.062，所以这条建议大约在年利率 6.2% 时开始成立。'],
        ['Note the round: adding 0.001 many times builds up exactly the tiny float errors from episode 1, so without it you would see something like 0.06200000000000004.', '注意那个 round：把 0.001 加很多次，正好会积累第 1 集讲的那种微小浮点误差，不加 round 的话，你会看到类似 0.06200000000000004 的东西。'],
      ],
    },
    {
      q: ['Problem 3. Another popular claim: “Someone who saves for only the first 10 years and then stops will beat someone who starts 10 years later and saves for 30 years.” Write a loop to test it at 3%, 7% and 10%, both over 40 years in total, 1,000 a month. What do you find?', '练习 3。另一种流行的说法：「只在前 10 年存钱、之后就不存的人，会赢过晚 10 年开始、连存 30 年的人。」写一个循环，在 3%、7%、10% 三种利率下检验它，总共都是 40 年，每月 1,000。你发现了什么？'],
      a: [
        ['Inside the monthly loop, add 1,000 only when month < 120 (the first 10 years); otherwise add nothing.', '在按月的循环里，只有 month < 120（前 10 年）时才加 1,000，否则什么都不加。'],
        ['At 3%, the early saver ends with about 343,000 and the late saver about 583,000: the claim is false.', '利率 3% 时，早存者最后约有 34.3 万，晚存者约有 58.3 万：这个说法不成立。'],
        ['At 7%, about 1.40 million against 1.22 million, and at 10%, about 4.06 million against 2.26 million: now it is true. Same claim, same code, and the answer depends entirely on one number.', '利率 7% 时，约 140 万对 122 万；10% 时，约 406 万对 226 万：这时它就成立了。同一个说法、同一段代码，答案完全取决于一个数字。'],
      ],
    },
  ],
  words: {
    loop:        ['/luːp/', '循环'],
    loops:       ['/luːps/', '循环（复数）'],
    indented:    ['/ɪnˈdentɪd/', '缩进的'],
    indentation: ['/ˌɪndenˈteɪʃn/', '缩进'],
    accumulator: ['/əˈkjuːmjəleɪtər/', '累加器'],
    compound:    ['/ˈkɑːmpaʊnd/', '复合的；compound interest 复利'],
    compounding: ['/kəmˈpaʊndɪŋ/', '复利累积'],
    brute:       ['/bruːt/', 'brute force 暴力计算'],
    def:         ['', 'def：定义函数的关键字'],
    outweigh:    ['/ˌaʊtˈweɪ/', '超过，胜过'],
    deposit:     ['/dɪˈpɑːzɪt/', '存款'],
    inflation:   ['/ɪnˈfleɪʃn/', '通货膨胀'],
    fence:       ['/fens/', '栅栏'],
    posts:       ['/poʊsts/', '柱子'],
  },
});
