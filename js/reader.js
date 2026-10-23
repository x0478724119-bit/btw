// 阅读页：点单词（朗读 + 意思 + ☆）、悬停句子看翻译、整段翻译、只算真在读的时长、滑到文末自动算读完。

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtMin = sec => sec < 60 ? `${Math.max(sec, 0)} 秒` : `${Math.round(sec / 60)} 分钟`;

// ---------- 朗读：浏览器自带声音，优先用 Samantha ----------
let voice = null;
// 英文声音列表；名字里带 Premium / Enhanced（高级、优化）的更自然，排在前面
const englishVoices = () => speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'))
  .sort((a, b) => /premium|enhanced|高级|优化/i.test(b.name) - /premium|enhanced|高级|优化/i.test(a.name));
function pickVoice() {
  const vs = englishVoices();
  const saved = Store.get().settings.voice;
  voice = vs.find(v => v.name === saved) || vs.find(v => /premium|enhanced|高级|优化/i.test(v.name) && v.lang === 'en-US')
    || vs.find(v => v.name === 'Samantha') || vs.find(v => v.lang === 'en-US') || vs[0] || null;
}
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  if (voice) u.voice = voice;
  u.rate = Store.get().settings.rate;
  speechSynthesis.speak(u);
}

// 查词：先查这篇文章自己的生词表，再查公共生词表，最后查 ECDICT 词典（js/dict.js）；先查原词，再试着去掉 s / es / ed / ing
let articleWords = {};
function lookup(word) {
  const w = word.toLowerCase().replace(/’/g, "'").replace(/'s?$/, '');
  const tries = [w, w.replace(/ies$/, 'y'), w.replace(/ied$/, 'y'), w.replace(/es$/, ''), w.replace(/s$/, ''), w.replace(/ed$/, ''), w.replace(/d$/, ''), w.replace(/ing$/, ''), w.replace(/ing$/, 'e')];
  for (const dict of [articleWords, GLOSSARY, DICT])
    for (const t of tries) if (dict[t]) return { key: t, ph: dict[t][0], zh: dict[t][1] };
  // multi-bank 这种连字符词，拆开分别查
  if (w.includes('-')) {
    const parts = w.split('-').filter(Boolean).map(p => ({ p, hit: lookup(p) }));
    if (parts.every(x => x.hit.zh)) return { key: w, ph: '', zh: parts.map(x => `${x.p}：${x.hit.zh}`).join('；') };
  }
  return { key: w, ph: '', zh: null };
}

// 不在句首、又是大写开头的词，多半是人名地名
const properNoun = wEl => /^[A-Z]/.test(wEl.textContent) && wEl.closest('.s, .term').querySelector('.w') !== wEl;

const Reader = (() => {
  let cleanup = [];

  function sentenceHTML(en) {
    return en.split(/([A-Za-z][A-Za-z'’-]*)/).map((part, i) =>
      i % 2 ? `<span class="w">${esc(part)}</span>` : esc(part)).join('');
  }

  function render(id) {
    const a = ARTICLES[id];
    const st = Store.get().settings;
    const theme = THEMES.find(t => t.id === a.theme);
    const lv = LEVELS[a.level];
    const series = a.series && SERIES.find(s => s.id === a.series);
    const body = a.body || SAMPLE; // 还没写正文的文章先用示例
    articleWords = body.words || {};

    // ---------- 两档读法：dg 中文夹英文（默认）/ en 全英文 ----------
    // 每句写成 [英文, 中文]：英文里 [[term|中文]] 标术语，中文里 {term} 是旧的术语标注（中文夹英文时去掉）
    // enOnly：只有全英文一档（比如教 Python 的课，代码和术语本来就是英文）
    const mode = body.enOnly || st.mode === 'en' ? 'en' : 'dg';
    const TERM_EN = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
    const enPlain = en => en.replace(TERM_EN, '$1');
    const zhPlain = zh => zh.replace(/\{([^}]+)\}/g, '（$1）');
    const enHTML = en => en.split(/\[\[([^|\]]+)\|([^\]]+)\]\]/).map((part, i) =>
      i % 3 === 0 ? sentenceHTML(part) : i % 3 === 1 ? `<span class="term-en">${sentenceHTML(part)}</span>` : '').join('');
    // 旧的「中文为主」文章用：{英文} 变成「（英文）」
    const cnHTML = str => str.split(/\{([^}]+)\}/).map((part, i) => i % 2 ? `<span class="term">（${sentenceHTML(part)}）</span>` : part).join('');
    // 名词替换表：文章自己的 swap（中文 → 英文），加上英文里标过的术语 [[term|中文]]
    const swapMap = { ...(body.swap || {}) };
    const walkStr = x => typeof x === 'string' ? [x] : Array.isArray(x) ? x.flatMap(walkStr) : x && typeof x === 'object' ? Object.values(x).flatMap(walkStr) : [];
    walkStr([body.paragraphs, body.quiz, body.questions]).forEach(str => str.replace(TERM_EN, (m, en, zh) => { if (!swapMap[zh]) swapMap[zh] = en; return m; }));
    const swapKeys = Object.keys(swapMap).sort((x, y) => y.length - x.length);
    // 中文夹英文：把中文里的名词换成英文，鼠标停在英文上看中文
    const dgHTML = zh => {
      const t = zh.replace(/\{[^}]+\}/g, '');
      let out = '', i = 0;
      while (i < t.length) {
        const k = swapKeys.find(key => t.startsWith(key, i));
        if (k) { out += `<span class="dw" data-zh="${esc(k)}">${sentenceHTML(swapMap[k])}</span>`; i += k.length; }
        else { out += esc(t[i]); i++; }
      }
      return out;
    };
    const asEn = s => `<span class="s" data-zh="${esc(zhPlain(s[1]))}">${enHTML(s[0])}</span>`;
    const asDg = s => `<span class="s" data-zh="${esc(enPlain(s[0]))}">${dgHTML(s[1])}</span>`;
    const sentence = s => mode === 'dg' ? asDg(s) : asEn(s);
    const line = x => typeof x === 'string' ? cnHTML(x) : sentence(x);
    const isCn = mode === 'dg' || body.cn;
    const joinS = sents => sents.map(sentence).join(mode === 'dg' ? '' : ' ');
    // 整段翻译（全英文）/ 看英文原文（中文夹英文）
    const transBtn = (pi, sents) => `<button class="p-btn" data-p="${pi}" title="${mode === 'dg' ? '看英文原文' : '整段翻译'}">${mode === 'dg' ? 'EN' : '译'}</button>
        <p class="zh-p hidden">${mode === 'dg' ? esc(sents.map(s => enPlain(s[0])).join(' ')) : esc(sents.map(s => zhPlain(s[1])).join(''))}</p>`;
    // 整列都是数字（或 $ 开头）的列靠右对齐
    const numCol = (t, i) => t.rows.every(r => /^[$\d]/.test(r[i]));
    const table = t => `<figure class="r-table"><table>
        <thead><tr>${t.head.map((h, i) => `<th class="${numCol(t, i) ? 'num' : ''}">${esc(h)}</th>`).join('')}</tr></thead>
        <tbody>${t.rows.map(r => `<tr>${r.map((c, i) => `<td class="${numCol(t, i) ? 'num' : ''}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table><figcaption>${esc(t.caption)}<span>${esc(t.zh)}</span></figcaption></figure>`;
    const figure = f => `<figure class="r-fig"><img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy">
      <figcaption>${esc(f.caption)}<span>${esc(f.zh)}</span><small>${f.link ? `<a href="${esc(f.link)}" target="_blank" rel="noopener">${esc(f.credit)}</a>` : esc(f.credit)}</small></figcaption></figure>`;
    // 中文导读：有 ①②③ 的拆成一条一条的短列表（「读完你会」），前面的介绍句不要；没有编号的照原样显示
    const guideHTML = g => {
      if (!g) return '';
      const parts = g.split(/[①②③④⑤⑥⑦⑧⑨]/).slice(1).map(x => x.replace(/[；;。，,\s]+$/, '').trim()).filter(Boolean);
      const inner = parts.length > 1 ? `<ul class="g-list">${parts.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : `<p>${esc(g)}</p>`;
      return `<details class="r-guide"><summary>${parts.length > 1 ? '读完你会' : '中文导读'}</summary>${inner}</details>`;
    };
    // 代码块：{ code: '代码', out: '运行结果（可选）' }
    const codeBlock = c => `<figure class="r-code"><pre><code>${esc(c.code)}</code></pre>${c.out ? `<pre class="r-out"><code>${esc(c.out)}</code></pre>` : ''}</figure>`;
    // 小标题跟着档位走：中文为主只要中文，全英文只要英文，英文为主是英文 + 一行小字中文
    const heading = x => mode === 'dg' && !body.cn ? `<h2 class="r-h">${esc(x.zh)}</h2>`
      : mode === 'en' && !body.cn ? `<h2 class="r-h">${esc(x.h)}</h2>`
      : `<h2 class="r-h">${esc(body.cn ? x.zh : x.h)}<span class="r-h-zh">${esc(body.cn ? x.h : x.zh)}</span></h2>`;
    // 选择题一律用英文（悬停看中文）；中文为主时题目下面加一行小字中文
    const enLine = x => typeof x === 'string' ? cnHTML(x) : `<span class="s" data-zh="${esc(zhPlain(x[1]))}">${enHTML(x[0])}</span>`;
    const zhHint = x => mode === 'dg' && Array.isArray(x) ? `<span class="qz-zh">${esc(zhPlain(x[1]))}</span>` : '';
    // 灰底框：可以是旧的中文字符串，也可以是一组 [英文, 中文]
    const box = (b, pi) => typeof b === 'string' ? `<div class="r-box cn">${cnHTML(b)}</div>`
      : `<div class="r-box ${mode === 'dg' ? 'cn' : ''}"><p class="box-p">${joinS(b)}</p>${transBtn(pi, b)}</div>`;
    const paras = body.paragraphs.map((sents, pi) => typeof sents === 'string' ? `<p class="cn-p">${cnHTML(sents)}</p>`
      : sents.box ? box(sents.box, pi)
      : !Array.isArray(sents)
      ? (sents.table ? table(sents.table) : sents.img ? figure(sents.img) : sents.code ? codeBlock(sents) : heading(sents)) : `
      <div class="para">
        <p class="${mode === 'dg' ? 'cn-p' : 'en-p'}">${joinS(sents)}</p>
        ${transBtn(pi, sents)}
      </div>`).join('');
    const modeSeg = body.cn || body.enOnly ? '' : `<div class="seg mode-seg">${[['dg', '中文夹英文'], ['en', '全英文']].map(([v, n]) =>
      `<button data-mode="${v}" class="${mode === v ? 'on' : ''}">${n}</button>`).join('')}</div>`;

    return `
      <div class="reader bg-${st.bg} size-${st.size}" id="reader">
        <div class="r-line" id="r-line"></div>
        <header class="r-top" id="r-top">
          <button class="icon-btn" id="r-back" title="返回">←</button>
          <div class="r-title">${esc(a.en)}</div>
          ${favBtn('a:' + id)}
          <button class="icon-btn" id="r-gear" title="阅读设置">⚙︎</button>
        </header>
        <article class="r-body">
          <div class="r-meta">${theme.name}${series ? ` · ${esc(series.title)} 第 ${a.ep} 集` : ''} · ${body.cn ? '中文为主' : `${lv.name} ${lv.cefr}`} · 约 ${a.minutes} 分钟</div>
          <h1 class="en">${esc(a.en)}</h1>
          <p class="r-zh-title">${esc(a.title)}</p>
          ${modeSeg}
          ${a.body ? '' : '<p class="r-note">（示例正文，这一篇的真实内容还没写）</p>'}
          ${st.hintSeen ? '' : `<p class="r-hint" id="r-hint">${matchMedia('(hover: none)').matches ? '长按句子看中文，点单词听读音、看意思' : '鼠标停在句子上看中文，点单词听读音、看意思'}<button id="hint-x">知道了</button></p>`}
          ${guideHTML(body.guide)}
          ${paras}
          ${body.sayIt ? `
          <section class="r-say">
            <h2>${esc(body.sayTitle || 'Say it at work')}</h2>
            ${body.sayIt.map(x => `<p class="say-line"><span class="s" data-zh="${esc(zhPlain(x[1]))}">${enHTML(x[0])}</span><button class="say-btn" data-say="${esc(enPlain(x[0]))}" title="朗读">🔊</button></p>`).join('')}
          </section>` : ''}
          ${body.quiz ? `
          <section class="r-quiz">
            <h2>Quick check</h2>
            ${body.quiz.map((q, qi) => `
              <div class="qz" data-qi="${qi}">
                <p class="q-en ${body.cn ? 'cn' : ''}">${enLine(q.q)}${zhHint(q.q)}</p>
                <div class="qz-opts">${q.opts.map((o, oi) => `<button class="qz-opt ${body.cn ? 'cn' : ''}" data-qi="${qi}" data-oi="${oi}">${Array.isArray(o) ? enLine(o) : body.cn ? cnHTML(o) : esc(o)}</button>`).join('')}</div>
                <p class="qz-e hidden ${body.cn ? 'cn' : ''}">${enLine(q.e)}${zhHint(q.e)}</p>
              </div>`).join('')}
            <p class="qz-score hidden" id="qz-score"></p>
          </section>` : ''}
          ${body.source ? `<p class="r-source">${body.source.url
            ? `原文：<a href="${esc(body.source.url)}" target="_blank" rel="noopener">${esc(body.source.name)}</a>`
            : esc(body.source.name)} · ${esc(body.source.license)}${body.source.note ? ` · ${esc(body.source.note)}` : ''}
            ${body.source.facts ? `<span class="facts">${body.source.facts.map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)}</a>`).join('')}</span>` : ''}</p>` : ''}
          <section class="r-end">
            <h2>Think about it</h2>
            ${body.questions.map(q => `
              <div class="q">
                <p class="q-en ${isCn ? 'cn' : ''}">${line(q.q)}</p>
                <details><summary>Sample answer</summary><p class="q-a ${isCn ? 'cn' : ''}">${q.a.map(line).join(mode === 'dg' ? '' : ' ')}</p></details>
              </div>`).join('')}
            <div id="r-finish-mark"></div>
            <div id="r-summary"></div>
            <details class="r-fb"><summary>这篇有什么想说的？</summary>
              <div class="fb-form"><textarea id="fb-msg" maxlength="2000" placeholder="哪里没看懂、哪里写错了、还想看什么，都可以说。"></textarea>
              <input id="fb-contact" maxlength="200" placeholder="留个联系方式（可以不填）">
              <button class="btn btn-ghost" id="fb-send">发送</button><span class="meta" id="fb-note"></span></div>
            </details>
          </section>
        </article>
      </div>`;
  }

  function mount(id, opts = {}) {
    unmount();
    Store.visit(id);
    const root = document.getElementById('reader');
    const st = Store.get().settings;
    let pop = null, tip = null, panel = null;

    const on = (el, ev, fn, opt) => { el.addEventListener(ev, fn, opt); cleanup.push(() => el.removeEventListener(ev, fn, opt)); };
    const closePop = () => { pop?.remove(); pop = null; root.querySelectorAll('.w.active').forEach(w => w.classList.remove('active')); };
    const closeTip = () => { tip?.remove(); tip = null; root.querySelectorAll('.s.hl').forEach(s => s.classList.remove('hl')); };
    const closePanel = () => { panel?.remove(); panel = null; };

    // 已收藏的词加下划线
    const markStarred = () => root.querySelectorAll('.w').forEach(w =>
      w.classList.toggle('starred', Store.hasWord(lookup(w.textContent).key, id)));
    markStarred();

    // ---------- 计时：页面在前台、且 1 分钟内有动作才算 ----------
    let lastAct = Date.now(), pending = 0;
    const act = () => { lastAct = Date.now(); };
    ['scroll', 'mousemove', 'keydown', 'click', 'touchstart'].forEach(ev => on(window, ev, act, { passive: true }));
    const timer = setInterval(() => {
      if (document.hidden || Date.now() - lastAct > 60000) return;
      Store.addSeconds(id, 1);
      if (++pending >= 5) { Store.save(); pending = 0; }
    }, 1000);
    cleanup.push(() => { clearInterval(timer); Store.save(); });

    // ---------- 顶部栏：往下滑藏起来，往上滑出现 ----------
    const top = document.getElementById('r-top'), line = document.getElementById('r-line');
    let lastY = scrollY;
    on(window, 'scroll', () => {
      const y = scrollY;
      top.classList.toggle('scrolled', y > 40);
      top.classList.toggle('up', y > lastY && y > 120 && !panel);
      lastY = y;
      const max = document.documentElement.scrollHeight - innerHeight;
      line.style.width = (max > 0 ? Math.min(100, y / max * 100) : 0) + '%';
      if (max > 0 && !resumeShown) Store.setPos(id, y / max);
      closeTip();
    }, { passive: true });

    // ---------- 接着上次读 ----------
    let resumeShown = false;
    const lastPos = Store.progressOf(id).pos || 0;
    if (!opts.noResume && lastPos > 0.05 && lastPos < 0.95) {
      resumeShown = true;
      const bar = document.createElement('div');
      bar.className = 'resume';
      bar.innerHTML = '上次读到这里 <button class="resume-go">接着读</button><button class="resume-x" title="从头读">✕</button>';
      document.body.appendChild(bar);
      const close = () => { bar.remove(); resumeShown = false; };
      bar.querySelector('.resume-go').onclick = () => {
        close();
        scrollTo({ top: lastPos * (document.documentElement.scrollHeight - innerHeight), behavior: 'smooth' });
      };
      bar.querySelector('.resume-x').onclick = close;
      cleanup.push(() => bar.remove());
    }

    on(document.getElementById('r-back'), 'click', () => {
      const a = ARTICLES[id];
      location.hash = a.series ? `#/s/${a.series}` : '#/';
    });

    // ---------- 点单词 ----------
    let hoverTimer = null, quietUntil = 0;
    function openPop(wEl) {
      clearTimeout(hoverTimer);
      quietUntil = Date.now() + 1500;
      closePop(); closeTip();
      wEl.classList.add('active');
      const info = lookup(wEl.textContent);
      const sentence = (wEl.closest('.s') || wEl.closest('p, .r-box, button') || wEl).textContent;
      speak(wEl.textContent);
      pop = document.createElement('div');
      pop.className = 'pop';
      const starred = Store.hasWord(info.key, id);
      pop.innerHTML = `
        <div class="p-word"><b>${esc(!info.zh && properNoun(wEl) ? wEl.textContent : info.key)}</b><span class="p-ph">${esc(info.ph)}</span></div>
        ${wEl.closest('.dw') ? `<div class="p-dg">这里是「${esc(wEl.closest('.dw').dataset.zh)}」</div>` : ''}
        <div class="p-zh ${info.zh ? '' : 'todo'}">${info.zh ? esc(info.zh) : properNoun(wEl) ? '专有名词（人名、地名、机构名）' : '释义待补'}</div>
        <div class="p-actions">
          <button class="say">🔊 再听一遍</button>
          <button class="star ${starred ? 'on' : ''}">${starred ? '★ 已收藏' : '☆ 收藏'}</button>
        </div>`;
      document.body.appendChild(pop);
      const r = wEl.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight;
      const left = Math.min(Math.max(12, r.left + r.width / 2 - pw / 2), innerWidth - pw - 12);
      const below = r.bottom + 10 + ph < innerHeight;
      pop.style.left = left + 'px';
      pop.style.top = (below ? r.bottom + 10 : r.top - ph - 10) + 'px';
      pop.querySelector('.say').onclick = e => { e.stopPropagation(); speak(wEl.textContent); };
      pop.querySelector('.star').onclick = e => {
        e.stopPropagation();
        const nowOn = Store.toggleWord({ w: info.key, zh: info.zh || '', sentence, article: id });
        e.currentTarget.classList.toggle('on', nowOn);
        e.currentTarget.textContent = nowOn ? '★ 已收藏' : '☆ 收藏';
        markStarred();
      };
      on(pop, 'click', e => e.stopPropagation());
    }

    // ---------- 句子翻译 ----------
    function showTip(sEl, x, y) {
      closeTip();
      sEl.classList.add('hl');
      tip = document.createElement('div');
      tip.className = 'tip';
      tip.textContent = sEl.dataset.zh;
      document.body.appendChild(tip);
      const tw = tip.offsetWidth, th = tip.offsetHeight;
      tip.style.left = Math.min(Math.max(12, x - tw / 2), innerWidth - tw - 12) + 'px';
      tip.style.top = (y - th - 18 > 8 ? y - th - 18 : y + 24) + 'px';
    }

    // 电脑：鼠标在句子上停 0.6 秒才显示，免得读的时候到处弹
    on(root, 'mousemove', e => {
      clearTimeout(hoverTimer);
      const dw = e.target.closest('.dw');
      if (dw) {
        if (tip && dw.classList.contains('hl')) return;
        closeTip();
        if (pop) return;
        hoverTimer = setTimeout(() => showTip(dw, e.clientX, e.clientY), 250);
        return;
      }
      if (Store.get().settings.mode !== 'en') { closeTip(); return; }
      const sEl = e.target.closest('.s');
      if (!sEl) { closeTip(); return; }
      if (tip && sEl.classList.contains('hl')) return;
      closeTip();
      if (!Store.get().settings.hover || pop || Date.now() < quietUntil) return;
      hoverTimer = setTimeout(() => { if (!pop) showTip(sEl, e.clientX, e.clientY); }, 900);
    });
    on(root, 'mouseleave', () => { clearTimeout(hoverTimer); closeTip(); });

    // 手机：长按句子显示翻译
    let pressTimer = null, longPressed = false;
    on(root, 'touchstart', e => {
      const sEl = e.target.closest('.s');
      longPressed = false;
      if (!sEl) return;
      const t = e.touches[0];
      pressTimer = setTimeout(() => { longPressed = true; closePop(); showTip(sEl, t.clientX, t.clientY); }, 500);
    }, { passive: true });
    on(root, 'touchmove', () => clearTimeout(pressTimer), { passive: true });
    on(root, 'touchend', () => clearTimeout(pressTimer));

    on(root, 'click', e => {
      if (longPressed) { longPressed = false; return; }
      const modeBtn = e.target.closest('[data-mode]');
      if (modeBtn) {
        Store.setSetting('mode', modeBtn.dataset.mode);
        const y = scrollY;
        document.getElementById('app').innerHTML = render(id);
        mount(id, { noResume: true });
        scrollTo(0, y);
        return;
      }
      const opt = e.target.closest('.qz-opt');
      if (opt && !(opt.closest('.qz.done') && e.target.closest('.w'))) {
        const box = opt.closest('.qz');
        if (box.classList.contains('done')) return;
        const q = (ARTICLES[id].body || SAMPLE).quiz[opt.dataset.qi];
        box.classList.add('done');
        box.querySelectorAll('.qz-opt').forEach((b, i) => b.classList.add(i === q.a ? 'right' : b === opt ? 'wrong' : 'off'));
        box.querySelector('.qz-e').classList.remove('hidden');
        const all = root.querySelectorAll('.qz'), done = root.querySelectorAll('.qz.done');
        if (done.length === all.length) {
          const score = [...done].filter(d => !d.querySelector('.wrong')).length;
          const el = document.getElementById('qz-score');
          el.textContent = `${score} / ${all.length} 答对`;
          el.classList.remove('hidden');
        }
        return;
      }
      if (e.target.id === 'hint-x') { Store.setSetting('hintSeen', true); document.getElementById('r-hint').remove(); return; }
      const sayBtn = e.target.closest('.say-btn');
      if (sayBtn) { speak(sayBtn.dataset.say); return; }
      const wEl = e.target.closest('.w');
      const pBtn = e.target.closest('.p-btn');
      if (pBtn) {
        const zh = pBtn.nextElementSibling;
        zh.classList.toggle('hidden');
        pBtn.classList.toggle('on', !zh.classList.contains('hidden'));
        return;
      }
      if (wEl) { e.stopPropagation(); openPop(wEl); return; }
      if (!e.target.closest('.panel') && !e.target.closest('#r-gear')) closePanel();
      closePop(); closeTip();
    });
    on(document, 'click', e => { if (pop && !e.target.closest('.w')) closePop(); });
    on(document, 'keydown', e => { if (e.key === 'Escape') { closePop(); closeTip(); closePanel(); } });

    // ---------- 阅读设置 ----------
    on(document.getElementById('r-gear'), 'click', e => {
      e.stopPropagation();
      if (panel) return closePanel();
      closePop();
      const s = Store.get().settings;
      const seg = (key, opts) => `<div class="seg" data-key="${key}">${opts.map(([v, label]) =>
        `<button data-v="${v}" class="${String(s[key]) === String(v) ? 'on' : ''}">${label}</button>`).join('')}</div>`;
      panel = document.createElement('div');
      panel.className = 'panel';
      panel.innerHTML = `
        <div class="row-set">字号 ${seg('size', [[1, '小'], [2, '中'], [3, '大']])}</div>
        <div class="row-set">背景 ${seg('bg', [['white', '白'], ['sepia', '护眼'], ['night', '夜间']])}</div>
        <div class="row-set">朗读速度 <input type="range" min="0.6" max="1.2" step="0.1" value="${s.rate}" id="rate"></div>
        <div class="row-set">声音 <select id="voice-sel">${englishVoices().map(v => `<option value="${esc(v.name)}" ${voice && v.name === voice.name ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select></div>
        <p class="voice-tip">想要更自然的声音：Mac 上打开 System Settings（系统设置）→ Accessibility（辅助功能）→ Spoken Content（朗读内容）→ System voice（系统声音）旁边的 ⓘ → Manage Voices（管理声音），下载 English 里的 Ava 或 Zoe（Premium / 高级），回来刷新网页再选。iPhone 在 设置 → 辅助功能 → 朗读内容 → 声音 里下载。</p>
        <div class="row-set">悬停显示句子翻译 <button class="switch ${s.hover ? 'on' : ''}" id="hover-sw"></button></div>
        <div class="row-set"><span class="meta">这篇已经读了 ${fmtMin(Store.progressOf(id).seconds)}</span></div>`;
      document.body.appendChild(panel);
      panel.addEventListener('click', ev => {
        ev.stopPropagation();
        const b = ev.target.closest('.seg button');
        if (b) {
          const key = b.parentElement.dataset.key;
          const v = key === 'size' ? Number(b.dataset.v) : b.dataset.v;
          Store.setSetting(key, v);
          b.parentElement.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
          root.className = `reader bg-${Store.get().settings.bg} size-${Store.get().settings.size}`;
        }
        if (ev.target.id === 'hover-sw') {
          Store.setSetting('hover', !Store.get().settings.hover);
          ev.target.classList.toggle('on', Store.get().settings.hover);
        }
      });
      panel.querySelector('#rate').oninput = ev => Store.setSetting('rate', Number(ev.target.value));
      panel.querySelector('#voice-sel').onchange = ev => { Store.setSetting('voice', ev.target.value); pickVoice(); speak('Pick up English by the way.'); };
    });

    Cloud.track(id, 'open');
    bindFeedback(id);

    // ---------- 读完了：滑到文末就自动算读完，不用再点按钮 ----------
    const mark = document.getElementById('r-finish-mark');
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      if (!Store.progressOf(id).done) Store.finish(id);
      Cloud.track(id, 'done');
      const words = Store.get().words.filter(w => w.article === id);
      const a = ARTICLES[id];
      let next = null;
      if (a.series) {
        const eps = SERIES.find(s => s.id === a.series).episodes;
        const nid = eps[eps.indexOf(id) + 1];
        if (nid) next = ARTICLES[nid];
      }
      if (!next) next = Object.values(ARTICLES).find(x => x.theme === a.theme && x.id !== id && !Store.progressOf(x.id).done);
      document.getElementById('r-summary').innerHTML = `
        <div class="summary">
          <h3>这篇读完了</h3>
          <div class="stat">这篇你读了 ${fmtMin(Store.progressOf(id).seconds)}</div>
          ${words.length ? `<ul>${words.map(w => `
            <li><b>${esc(w.w)}</b><span class="zh">${esc(w.zh)}</span><div class="ctx">${esc(w.sentence)}</div></li>`).join('')}</ul>`
            : '<div class="meta">这篇没有收藏生词。</div>'}
          ${next ? `<a class="next" href="#/read/${next.id}">
            <div class="meta">${next.series === a.series && a.series ? '下一集' : '接着读'}</div>
            <div>${esc(next.title)}</div></a>` : ''}
        </div>`;
    };
    // 两种办法都算：看到文末的标记，或者滚动到了 97% 以后
    on(window, 'scroll', () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (max > 0 && scrollY / max > 0.97) finish();
    }, { passive: true });
    if (mark && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { finish(); io.disconnect(); } });
      io.observe(mark);
      cleanup.push(() => io.disconnect());
    }
  }

  function unmount() {
    cleanup.forEach(fn => fn());
    cleanup = [];
    document.querySelectorAll('.pop, .tip, .panel').forEach(el => el.remove());
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }

  return { render, mount, unmount };
})();
