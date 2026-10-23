// 从 ECDICT（tools/ecdict/ecdict.csv，MIT 授权）里挑出所有文章用到的词，生成 js/dict.js。
// 每次在 js/content/ 加了新文章，跑一次：node tools/build-dict.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const readline = require('readline');

const ROOT = path.join(__dirname, '..');
const CSV = path.join(__dirname, 'ecdict', 'ecdict.csv');
const OUT = path.join(ROOT, 'js', 'dict.js');

// 1. 读出所有文章（含示例正文）里的英文词
const ctx = {};
vm.createContext(ctx);
const run = f => vm.runInContext(fs.readFileSync(f, 'utf8').replace(/^const /gm, 'var '), ctx);
run(path.join(ROOT, 'js', 'data.js'));
const contentDir = path.join(ROOT, 'js', 'content');
fs.readdirSync(contentDir).filter(f => f.endsWith('.js')).forEach(f => run(path.join(contentDir, f)));

const bodies = [ctx.SAMPLE, ...Object.values(ctx.ARTICLES).map(a => a.body).filter(Boolean)];
const tokens = new Set();
// 正文 + 章末问题和参考答案
// 英文里的 [[term|中文]] 标记先去掉，只留英文
const stripTerms = pair => [pair[0].replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, '$1'), pair[1]];
const sentencesOf = b => [...b.paragraphs.filter(Array.isArray).flat(), ...b.paragraphs.filter(p => Array.isArray(p.box)).flatMap(p => p.box),
  ...b.questions.flatMap(q => [q.q, ...q.a]), ...(b.sayIt || []),
  ...(b.quiz || []).flatMap(q => [q.q, q.e, ...q.opts.map(o => Array.isArray(o) ? o : [o, ''])]),
  ...Object.values(b.swap || {}).map(en => [en, ''])].filter(Array.isArray).map(stripTerms);
// 「中文为主」的文章：只取 {英文} 里的词
const cnTerms = str => (str.match(/\{([^}]+)\}/g) || []).map(x => [x.slice(1, -1)]);
const cnTexts = b => [...b.paragraphs.flatMap(p => typeof p === 'string' ? [p] : p.box ? [p.box] : []),
  ...(b.quiz || []).flatMap(q => [q.q, q.e, ...q.opts]), ...b.questions.flatMap(q => [q.q, ...q.a])].flatMap(cnTerms);
bodies.forEach(b => (b.cn ? [...cnTexts(b), ...(b.sayIt || [])] : sentencesOf(b)).forEach(([en]) =>
  (en.match(/[A-Za-z][A-Za-z'’-]*/g) || []).forEach(t => {
    const w = t.toLowerCase().replace(/’/g, "'").replace(/'s?$/, '');
    tokens.add(w);
    // 连字符词的每一部分也查出来，阅读页查不到整词时拆开显示
    if (w.includes('-')) w.split('-').filter(Boolean).forEach(p => tokens.add(p));
  })));

// 跟阅读页 lookup() 一样的变形规则，用来找原形
const forms = w => [w, w.replace(/ies$/, 'y'), w.replace(/ied$/, 'y'), w.replace(/es$/, ''), w.replace(/s$/, ''),
  w.replace(/ed$/, ''), w.replace(/d$/, ''), w.replace(/ing$/, ''), w.replace(/ing$/, 'e'), w.replace(/([a-z])\1(ed|ing)$/, '$1')];
const wanted = new Set([...tokens].flatMap(forms));

// 2. 一行一行读词典，只留下需要的词
function parseCSV(line) {
  const out = [];
  let cur = '', q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') q = false;
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ',') { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

// 释义只留前两行，去掉「[网络]」这类，太长就截断
function shortZh(tr) {
  let lines = tr.split('\\n').map(s => s.trim()).filter(Boolean);
  const main = lines.filter(s => !s.startsWith('['));
  lines = (main.length ? main : lines).slice(0, 2);
  let zh = lines.join('；');
  if (zh.length > 60) zh = zh.slice(0, 58) + '…';
  return zh;
}

const found = {};
const INFLECT = /^(\w+)的(过去|现在|复数|第三人称|比较级|最高级)/;
// ECDICT 的音标里有些字符写成了反斜杠，换回 ɜ
const cleanPh = ph => ph.replace(/\\+/g, 'ɜ');

function scan(want) {
  return new Promise(done => {
    const rl = readline.createInterface({ input: fs.createReadStream(CSV) });
    rl.on('line', line => {
      const head = line.slice(0, line.indexOf(',')).toLowerCase();
      if (!want.has(head)) return;
      const [word, phonetic, , translation, , , , , , , exchange] = parseCSV(line);
      const key = word.toLowerCase();
      if (!translation) return;
      // 同一个词有大小写两条时，优先小写那条（比如 may / May）
      if (found[key] && word !== key) return;
      const zh = shortZh(translation);
      found[key] = { ph: cleanPh(phonetic), zh, lemma: (exchange.match(/(?:^|\/)0:([^/]+)/) || [])[1] || (zh.match(INFLECT) || [])[1] };
    });
    rl.on('close', done);
  });
}

(async () => {
  await scan(wanted);
  // 第二遍：把「write的过去式」这种词的原形也查出来
  const lemmas = new Set(Object.values(found).map(e => e.lemma).filter(l => l && !found[l]));
  if (lemmas.size) await scan(lemmas);

  const dict = {};
  let miss = [];
  for (const t of tokens) {
    let e = found[t];
    // 词典里如果只写「xx 的过去式」这种，就用原形的释义
    if (e && e.lemma && found[e.lemma] && INFLECT.test(e.zh)) e = { ph: e.ph || found[e.lemma].ph, zh: `${e.lemma} 的变形：${found[e.lemma].zh}` };
    if (!e) for (const f of forms(t).slice(1)) if (found[f]) { e = found[f]; break; }
    if (!e) { miss.push(t); continue; }
    dict[t] = [e.ph ? `/${e.ph}/` : '', e.zh];
  }
  const body = Object.keys(dict).sort().map(k => `  ${JSON.stringify(k)}: ${JSON.stringify(dict[k])},`).join('\n');
  fs.writeFileSync(OUT,
    `// 自动生成，不要手改。来源：ECDICT（https://github.com/skywind3000/ECDICT），Copyright (c) 2025 Linwei，MIT 授权，全文见 licenses/ECDICT-LICENSE.txt\n` +
    `// 重新生成：node tools/build-dict.js\nconst DICT = {\n${body}\n};\n`);
  console.log(`文章里共 ${tokens.size} 个不同的词，查到 ${Object.keys(dict).length} 个`);
  if (miss.length) console.log('没查到：', miss.join(' '));
})();
