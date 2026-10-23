// 连续剧「Python 数据分析」第 1 集。全英文（enOnly），代码块可以照着敲
addContent('py-basics', {
  // 中文夹英文：这些中文名词会显示成英文（鼠标停上去看中文）。英文里 [[术语|中文]] 标过的会自动加进来
  swap: { "代码": "code", "电脑": "computer", "程序": "program", "编程语言": "programming language", "导弹": "missile", "时钟": "clock", "士兵": "soldiers", "报告": "report", "内存": "memory", "文件": "file", "标签": "label", "盒子": "box", "银行": "banks", "计算器": "calculator" },
  summary: '在 Python 里输入 0.1 + 0.2，得到的不是 0.3。这不是 Python 的 bug，1991 年，同一个问题让一枚导弹拦截失败，28 个人因此丧命。第 1 集：值、类型、变量，和电脑到底是怎么存数字的。',
  source: {
    name: 'BTW 原创',
    license: '用自己的话讲编程和真实事件，代码可以随便用；事实来源见下',
    facts: [
      ['Python 官方教程：Floating Point Arithmetic: Issues and Limitations', 'https://docs.python.org/3/tutorial/floatingpoint.html'],
      ['美国政府问责局 GAO：Patriot Missile Defense: Software Problem Led to System Failure at Dhahran, Saudi Arabia（IMTEC-92-26，1992）', 'https://www.gao.gov/products/IMTEC-92-26'],
      ['GAO 报告全文镜像（100 小时误差 0.3433 秒、偏 687 米、28 人遇难）', 'https://cs.nyu.edu/exact/resource/mirror/patriot.htm'],
      ['Python 官方文档：decimal 模块', 'https://docs.python.org/3/library/decimal.html'],
    ],
  },
  guide: '这是「Python 数据分析」第 1 集，全英文（悬停句子看中文）。读完你会：① 会在电脑或网页上运行 Python；② 分清整数、小数、字符串三种值，知道为什么 "2" + "2" 等于 "22"；③ 明白变量是「标签」不是「盒子」，这会决定你以后少踩多少坑；④ 真正理解电脑为什么算不准 0.1 + 0.2，以及一枚导弹是怎么因此失手的；⑤ 知道处理钱的时候该怎么办。代码框里的代码都可以照着敲。',
  paragraphs: [
    { h: 'The situation', zh: '今天的情境' },
    [
      ['Open Python and type this.', '打开 Python，输入下面这一行。'],
    ],
    { code: '>>> 0.1 + 0.2', out: '0.30000000000000004' },
    [
      ['This is not a bug in Python, and it is not a bug in your computer.', '这不是 Python 的 bug，也不是你电脑的 bug。'],
      ['Almost every programming language gives the same answer, because they all store numbers the same way.', '几乎所有编程语言都会给出同样的答案，因为它们存数字的方式都一样。'],
      ['By the end of this episode you will know exactly why, and why it once cost 28 lives.', '读完这一集，你会确切地知道为什么，以及它为什么曾经让 28 个人丧命。'],
    ],
    {
      box: [
        ['How to run the code: install Python from python.org and open the program called IDLE, or use any online Python notebook in your browser.', '怎么运行代码：从 python.org 安装 Python，打开一个叫 IDLE 的程序；或者在浏览器里用任何一个在线的 Python 笔记本。'],
        ['The “>>>” is the [[prompt|提示符]]: Python is waiting for you to type. Do not type the arrows yourself.', '「>>>」是提示符{prompt}：表示 Python 在等你输入。箭头本身不用敲。'],
      ],
    },

    { h: '1. Values and their types', zh: '1. 值和它们的类型' },
    [
      ['Everything Python works with is a [[value|值]], and every value has a [[type|类型]].', 'Python 处理的每样东西都是一个值{value}，每个值都有一个类型{type}。'],
      ['The type decides what you can do with the value.', '类型决定了你能对这个值做什么。'],
      ['You will use three types in almost every program.', '你几乎在每个程序里都会用到三种类型。'],
    ],
    { code: '>>> type(7)\n>>> type(7.5)\n>>> type("7")', out: "<class 'int'>\n<class 'float'>\n<class 'str'>" },
    [
      ['An [[int|整数]] (integer) is a whole number, like 7 or −120.', '整数{int}（integer）就是没有小数部分的数，比如 7 或者 −120。'],
      ['A [[float|浮点数]] is a number with a decimal point, like 7.5; the name comes from the way the decimal point can “float” to different positions.', '浮点数{float}是带小数点的数，比如 7.5；这个名字来自它存储时小数点可以「浮动」到不同位置。'],
      ['A [[string|字符串]] (str) is text, written inside quotation marks, like "7" or "hello".', '字符串{string}（str）是文字，写在引号里，比如 "7" 或者 "hello"。'],
    ],
    { code: '>>> 2 + 2\n>>> "2" + "2"\n>>> "2" * 3', out: "4\n'22'\n'222'" },
    [
      ['The same symbol means different things for different types.', '同一个符号，对不同的类型意思不一样。'],
      ['For numbers, + adds; for strings, + joins them together, which is called [[concatenation|拼接]].', '对数字来说，+ 是相加；对字符串来说，+ 是把它们接在一起，这叫拼接{concatenation}。'],
      ['This matters the first time you read data from a file: numbers often arrive as strings, and your “total” of 2 and 2 becomes 22 without any error message.', '你第一次从文件里读数据时就会碰到这个问题：数字经常是以字符串的形式读进来的，2 加 2 的「总和」就变成了 22，而且不会有任何报错。'],
    ],
    { code: '>>> int("2") + int("2")', out: '4' },

    { h: '2. Variables are labels, not boxes', zh: '2. 变量是标签，不是盒子' },
    [
      ['A [[variable|变量]] is a name that refers to a value.', '变量{variable}是一个指向某个值的名字。'],
      ['You create one with = , which in Python means “let this name refer to this value”, not “is equal to”.', '你用 = 来创建变量。在 Python 里它的意思是「让这个名字指向这个值」，而不是「等于」。'],
    ],
    { code: '>>> price = 25\n>>> cups = 3\n>>> price * cups', out: '75' },
    [
      ['Many beginners imagine a variable as a box with a value inside.', '很多初学者把变量想象成一个盒子，值装在里面。'],
      ['That picture works for numbers, and fails badly for lists.', '这个画面对数字没问题，换成列表就会错得很厉害。'],
      ['A [[list|列表]] is a value that holds several values in order, written in square brackets.', '列表{list}是一个按顺序装着好几个值的值，用方括号写。'],
      ['Predict what the last line prints before you run it.', '运行之前，先猜猜最后一行会打印出什么。'],
    ],
    { code: '>>> mine = ["tea", "coffee"]\n>>> yours = mine\n>>> yours.append("juice")\n>>> mine', out: "['tea', 'coffee', 'juice']" },
    [
      ['You only changed yours, but mine changed too.', '你只改了 yours，可 mine 也跟着变了。'],
      ['The line yours = mine did not copy the list into a second box.', 'yours = mine 这一行并没有把列表复制到第二个盒子里。'],
      ['It stuck a second label on the same list.', '它只是在同一个列表上又贴了一张标签。'],
      ['There is one list in memory and two names pointing at it, so a change through either name is a change to that one list.', '内存里只有一个列表，有两个名字指着它，所以通过任何一个名字去改，改的都是这同一个列表。'],
    ],
    { code: '>>> yours = mine.copy()   # now there really are two lists', out: '' },
    {
      box: [
        ['The label picture also explains why numbers seem to behave differently.', '标签这个画面，也能解释为什么数字看起来表现得不一样。'],
        ['After a = 5 and b = a, the line b = b + 1 does not change the number 5; it creates a new value 6 and moves the label b to it.', '执行 a = 5 和 b = a 以后，b = b + 1 这一行并没有改变 5 这个数；它造了一个新的值 6，然后把标签 b 挪了过去。'],
        ['Numbers and strings cannot be changed in place, so they are called [[immutable|不可变的]]; lists can, so they are [[mutable|可变的]].', '数字和字符串不能在原地修改，所以叫不可变的{immutable}；列表可以，所以叫可变的{mutable}。'],
        ['Almost every confusing bug a beginner meets with lists comes from forgetting this.', '初学者在列表上碰到的让人摸不着头脑的 bug，几乎都来自忘了这一点。'],
      ],
    },

    { h: '3. Why 0.1 + 0.2 is not 0.3', zh: '3. 为什么 0.1 + 0.2 不等于 0.3' },
    [
      ['Start with something you already know.', '先从你已经知道的事开始。'],
      ['Write one-third as a decimal: 0.3333…, and the 3s never end.', '把三分之一写成小数：0.3333……，3 永远写不完。'],
      ['If you can only write ten digits, you must stop somewhere, and your number is slightly wrong.', '如果你只能写十位数字，就必须在某个地方停下，你的数就会差一点点。'],
      ['Add three of those rounded thirds and you get 0.9999999999, not 1.', '把三个这样四舍五入过的三分之一加起来，你得到的是 0.9999999999，而不是 1。'],
    ],
    [
      ['Computers do not count in tens; they count in twos, which is called [[binary|二进制]].', '电脑不是按十进位数的，它按二进位数，这叫二进制{binary}。'],
      ['In binary, a fraction can be written exactly only if its bottom number is made of 2s, like one-half, one-quarter or three-eighths.', '在二进制里，只有分母全由 2 组成的分数才能被精确写出来，比如二分之一、四分之一、八分之三。'],
      ['One-tenth has a 5 in its bottom number, so in binary it repeats forever: 0.000110011001100…', '十分之一的分母里有一个 5，所以在二进制里它会无限循环：0.000110011001100……'],
      ['For the computer, 0.1 is exactly what one-third is for you.', '对电脑来说，0.1 就跟三分之一对你来说一模一样。'],
    ],
    [
      ['A Python float keeps 53 binary digits and then rounds.', 'Python 的浮点数保留 53 位二进制数字，然后四舍五入。'],
      ['So the value stored for 0.1 is not 0.1 but the closest number that fits, which is very slightly more.', '所以存进去的 0.1 并不是 0.1，而是能放得下的最接近的那个数，比 0.1 稍微大一点点。'],
      ['The same happens to 0.2, and the two tiny errors add up to a number just above 0.3.', '0.2 也一样，两个微小的误差加在一起，结果就比 0.3 稍微大了一点。'],
      ['You can ask Python to show you what it really stored.', '你可以让 Python 把它真正存的数给你看。'],
    ],
    { code: '>>> from decimal import Decimal\n>>> Decimal(0.1)', out: "Decimal('0.1000000000000000055511151231257827021181583404541015625')" },
    {
      box: [
        ['The general rule is called [[floating-point error|浮点误差]]: most decimal fractions cannot be stored exactly in binary, so float arithmetic is very close but not exact.', '一般规律叫浮点误差{floating-point error}：大多数十进制小数没法在二进制里精确存储，所以浮点数的运算非常接近，但不精确。'],
        ['Two practical rules follow.', '由此得出两条实用的规则。'],
        ['First, never test floats with ==; test whether they are close, for example with math.isclose(0.1 + 0.2, 0.3), which returns True.', '第一，永远不要用 == 去比较浮点数，要比较它们是否足够接近，比如用 math.isclose(0.1 + 0.2, 0.3)，它会返回 True。'],
        ['Second, for money, count in whole cents with ints, or use the Decimal type, which stores decimal digits exactly.', '第二，处理钱的时候，用整数按「分」来算，或者用 Decimal 类型，它能精确存储十进制数字。'],
      ],
    },

    { h: '4. When a tiny error becomes 687 metres', zh: '4. 一个微小的误差，怎么变成 687 米' },
    [
      ['On 25 February 1991, during the Gulf War, an Iraqi Scud missile hit an American army barracks in Dhahran, Saudi Arabia, and killed 28 soldiers.', '1991 年 2 月 25 日，海湾战争期间，一枚伊拉克的飞毛腿导弹击中了沙特阿拉伯达兰的一座美军营房，28 名士兵遇难。'],
      ['A Patriot missile battery was there to stop exactly this kind of attack, and it did not even try to fire.', '那里本来有一个爱国者导弹连，就是用来拦截这种袭击的，可它连拦截都没有尝试。'],
      ['The US Government Accountability Office investigated and found a software problem.', '美国政府问责局做了调查，发现是一个软件问题。'],
    ],
    [
      ['The system’s clock counted time in tenths of a second, and the computer had to turn those counts into seconds by multiplying by 0.1.', '系统的时钟以十分之一秒为单位计时，电脑要把计数乘以 0.1 换算成秒。'],
      ['Its registers were only 24 bits long, so 0.1 was stored with an even bigger rounding error than in Python.', '它的寄存器只有 24 位，所以 0.1 存进去的误差比 Python 里还要大。'],
      ['Each tick added a tiny error, and the errors never cancelled out; they built up the longer the system ran.', '每跳一下就多一点微小的误差，而且这些误差不会互相抵消，系统运行得越久，积累得越多。'],
      ['The battery at Dhahran had been running continuously for about 100 hours.', '达兰的那个导弹连已经连续运行了大约 100 个小时。'],
      ['By then its clock was off by about 0.34 seconds.', '到那时，它的时钟已经差了大约 0.34 秒。'],
    ],
    [
      ['A third of a second sounds harmless.', '三分之一秒听起来无关紧要。'],
      ['But a Scud moves at well over a kilometre per second, so the system looked for the incoming missile in the wrong part of the sky, 687 metres away from where it really was.', '可飞毛腿导弹每秒能飞一公里以上，所以系统去天空中错误的位置找来袭的导弹，跟它真实的位置差了 687 米。'],
      ['It saw nothing there, decided there was no threat, and did not fire.', '它在那里什么也没看到，判断没有威胁，就没有开火。'],
    ],
    [
      ['The saddest detail is in the report.', '报告里最让人难过的是这个细节。'],
      ['Israeli users had already noticed that the system lost accuracy after running for a long time, and a fixed version of the software existed.', '以色列的使用方早就发现，系统运行久了会失去准确度，修好的软件版本也已经有了。'],
      ['It reached Dhahran on 26 February 1991, one day after the attack.', '它在 1991 年 2 月 26 日送到了达兰，就在袭击发生后的第二天。'],
    ],
    {
      box: [
        ['The lesson is not “computers are bad at maths”.', '教训不是「电脑不擅长算数」。'],
        ['It is that an error which is harmless once can be deadly when it is repeated millions of times.', '而是：一个只出现一次时无害的误差，重复几百万次以后就可能是致命的。'],
        ['The same thing happens in data analysis: a tiny rounding error in one row is nothing, but the same error summed over ten million transactions can make a report wrong.', '数据分析里也是一样：一行数据里一个微小的舍入误差不算什么，可同一个误差在一千万笔交易上累加起来，就能让一份报告出错。'],
      ],
    },

    { h: '5. Try it yourself', zh: '5. 自己动手' },
    [
      ['Run this small program, which adds 0.1 one thousand times.', '运行下面这个小程序，它把 0.1 加了一千次。'],
      ['Do not worry about the for line yet: it simply repeats the indented line, and episode 2 is all about it.', '先别管 for 那一行：它只是把缩进的那一行重复执行，第 2 集会专门讲它。'],
    ],
    { code: 'total = 0\nfor i in range(1000):\n    total = total + 0.1\nprint(total)\nprint(total == 100)', out: '99.9999999999986\nFalse' },
    [
      ['After a thousand additions the error is visible in the twelfth digit.', '加了一千次以后，误差在第十二位数字上就能看出来了。'],
      ['Now change 0.1 to 1 and 100 to 1000, so that you are adding whole numbers: the error disappears, because ints are exact.', '现在把 0.1 改成 1，把 100 改成 1000，这样你加的就是整数：误差消失了，因为整数是精确的。'],
      ['That is the whole reason banks and payment systems count money in cents.', '这正是银行和支付系统按「分」来算钱的全部原因。'],
    ],

    { h: 'What this episode leaves open', zh: '这一集留下的问题' },
    [
      ['You just used a loop without knowing how it works.', '你刚才用了一个循环，却还不知道它是怎么工作的。'],
      ['Loops are what turn Python from a calculator into a tool: one line of instructions, repeated over a million rows of data.', '循环是让 Python 从计算器变成工具的东西：一行指令，在一百万行数据上重复执行。'],
      ['In episode 2 we use one to answer a real question: if you save 1,000 yuan a month at 3% interest, how many years until you have 500,000, and does starting five years earlier matter more than saving twice as much?', '第 2 集我们用它来回答一个真实的问题：如果每个月存 1,000 元、利率 3%，要多少年才能攒到 50 万？早五年开始存，和每个月存两倍，哪个更重要？'],
    ],
  ],
  sayTitle: 'Say it in English',
  sayIt: [
    ['Don’t compare floats with double equals; check whether they’re close enough.', '别用双等号比较浮点数，要看它们是否足够接近。'],
    ['We store prices in cents to avoid rounding errors.', '我们按「分」存价格，避免舍入误差。'],
    ['That column was read in as strings, so the sum is wrong.', '那一列读进来的是字符串，所以加总是错的。'],
  ],
  quiz: [
    {
      q: ['Why does 0.1 + 0.2 not give exactly 0.3 in Python?', '为什么在 Python 里 0.1 + 0.2 不正好等于 0.3？'],
      opts: [['0.1 and 0.2 repeat forever in binary, so they are stored slightly rounded.', '0.1 和 0.2 在二进制里无限循环，所以存进去的是稍微舍入过的值'], ['Python has a bug in its + sign.', 'Python 的加号有 bug'], ['The computer is too slow to finish the sum.', '电脑太慢，没算完']],
      a: 0,
      e: ['One-tenth in binary is like one-third in decimal: it never ends, so it must be rounded.', '十分之一在二进制里就像三分之一在十进制里：永远写不完，只能舍入。'],
    },
    {
      q: ['After a = [1, 2], b = a and b.append(3), what is a?', '执行 a = [1, 2]、b = a、b.append(3) 以后，a 是什么？'],
      opts: [['[1, 2, 3]', '[1, 2, 3]'], ['[1, 2]', '[1, 2]'], ['An error', '报错']],
      a: 0,
      e: ['b = a puts a second label on the same list. Use a.copy() to get a real second list.', 'b = a 只是在同一个列表上贴了第二张标签。要得到真正的第二个列表，用 a.copy()。'],
    },
    {
      q: ['You are building a payment app. What is the safest way to store 19.99 yuan?', '你在做一个支付 App。存 19.99 元最稳妥的方式是？'],
      opts: [['As the int 1999, meaning cents (or as a Decimal).', '存成整数 1999，单位是「分」（或者用 Decimal）'], ['As the float 19.99.', '存成浮点数 19.99'], ['As the string "19.99" and add strings together.', '存成字符串 "19.99"，然后把字符串加起来']],
      a: 0,
      e: ['Ints are exact. Floats round, and adding strings joins text instead of adding numbers.', '整数是精确的。浮点数会舍入，字符串相加是把文字接起来，不是把数字加起来。'],
    },
    {
      q: ['What was the deeper cause of the Patriot failure at Dhahran?', '达兰爱国者导弹失手，更深层的原因是什么？'],
      opts: [['A tiny rounding error in 0.1 built up over 100 hours of running.', '0.1 的一个微小舍入误差，在 100 小时的运行中不断累积'], ['The missile was out of fuel.', '导弹没油了'], ['The soldiers turned it off.', '士兵把它关掉了']],
      a: 0,
      e: ['About 0.34 seconds of clock error moved the search area by 687 metres.', '大约 0.34 秒的时钟误差，让搜索区域偏了 687 米。'],
    },
  ],
  questions: [
    {
      q: ['Problem 1. Without running it, predict the output of: x = "5"; y = 3; print(x * y). Then predict what happens with print(x + y). Run both to check.', '练习 1。先不运行，预测 x = "5"; y = 3; print(x * y) 的输出。再预测 print(x + y) 会怎样。然后都运行一下检查。'],
      a: [
        ['x * y repeats the string three times and prints 555.', 'x * y 会把字符串重复三次，打印 555。'],
        ['x + y raises a TypeError, because Python will not guess whether you want to join text or add numbers.', 'x + y 会报 TypeError，因为 Python 不会替你猜你是想拼接文字还是相加数字。'],
        ['Notice that the first one silently gives a strange answer while the second one stops you: silent mistakes are the dangerous kind.', '注意：第一个悄悄给了一个奇怪的答案，第二个直接拦住了你。悄无声息的错误才是危险的那种。'],
      ],
    },
    {
      q: ['Problem 2. Which of these fractions can a float store exactly: 0.5, 0.25, 0.1, 0.75, 0.2? Explain using the rule from section 3.', '练习 2。下面哪些分数能被浮点数精确存储：0.5、0.25、0.1、0.75、0.2？用第 3 部分的规律解释。'],
      a: [
        ['0.5 = 1/2, 0.25 = 1/4 and 0.75 = 3/4 have bottom numbers made only of 2s, so they are exact.', '0.5 = 1/2、0.25 = 1/4、0.75 = 3/4 的分母只由 2 组成，所以是精确的。'],
        ['0.1 = 1/10 and 0.2 = 1/5 have a 5 in the bottom number, so they repeat in binary and are rounded.', '0.1 = 1/10 和 0.2 = 1/5 的分母里有 5，所以在二进制里会循环，只能舍入。'],
        ['You can check with Decimal(0.75), which shows exactly 0.75, and Decimal(0.2), which does not.', '你可以用 Decimal(0.75) 检查，它显示的正好是 0.75；Decimal(0.2) 就不是。'],
      ],
    },
    {
      q: ['Problem 3. The Patriot clock lost about 0.34 seconds in 100 hours. Assuming the error grows steadily, how far off would it be after 20 hours, and after 200 hours? What does this suggest about a simple way the problem could have been reduced before the fix arrived?', '练习 3。爱国者导弹的时钟在 100 小时里差了约 0.34 秒。假设误差是均匀增长的，20 小时后会差多少？200 小时后呢？这说明在修复送到之前，有什么简单办法能减轻这个问题？'],
      a: [
        ['The error grows in proportion to running time, so 20 hours gives about 0.07 seconds and 200 hours about 0.69 seconds.', '误差跟运行时间成正比，所以 20 小时约差 0.07 秒，200 小时约差 0.69 秒。'],
        ['Restarting the system resets the clock, and the error with it.', '重启系统会把时钟清零，误差也就跟着清零了。'],
        ['Regular restarts would have kept the error small, and the GAO report notes that the Army had been told the system should not run for very long periods; how long was “very long” was never clearly defined.', '定期重启就能让误差一直很小。GAO 的报告提到，军方曾被告知系统不应该连续运行太长时间，可「太长」到底是多长，一直没有说清楚。'],
      ],
    },
  ],
  words: {
    prompt:        ['/prɑːmpt/', '提示符'],
    idle:          ['/ˈaɪdl/', 'IDLE（Python 自带的编辑器）'],
    int:           ['/ɪnt/', '整数类型（integer）'],
    float:         ['/floʊt/', '浮点数；漂浮'],
    floats:        ['/floʊts/', '浮点数（复数）'],
    str:           ['', '字符串类型（string）'],
    concatenation: ['/kənˌkætəˈneɪʃn/', '拼接'],
    immutable:     ['/ɪˈmjuːtəbl/', '不可变的'],
    mutable:       ['/ˈmjuːtəbl/', '可变的'],
    append:        ['/əˈpend/', '追加，附加'],
    binary:        ['/ˈbaɪnəri/', '二进制'],
    decimal:       ['/ˈdesɪml/', '十进制的；小数'],
    registers:     ['/ˈredʒɪstərz/', '寄存器'],
    barracks:      ['/ˈbærəks/', '营房'],
    scud:          ['/skʌd/', '飞毛腿（导弹）'],
    patriot:       ['/ˈpeɪtriət/', '爱国者（导弹）'],
    dhahran:       ['', '达兰（沙特阿拉伯城市）'],
    battery:       ['/ˈbætəri/', '（导弹、炮兵的）连；电池'],
    accountability:['/əˌkaʊntəˈbɪləti/', '问责'],
    isclose:       ['', 'math.isclose：判断两个数是否足够接近'],
    typeerror:     ['', 'TypeError：类型错误'],
  },
});
