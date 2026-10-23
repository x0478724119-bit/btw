// 页面切换和各个页面。网址用 #/ 开头，双击 index.html 就能打开，不需要服务器。

const app = document.getElementById('app');

// 把还没写正文的文章藏起来：连续剧只留写好的集，没有内容的连续剧和主题也不显示
HIDDEN.forEach(id => { if (ARTICLES[id]) delete ARTICLES[id].body; });
if (!SHOW_SAMPLES) {
  SERIES.forEach(s => { s.planned = s.episodes.length; s.episodes = s.episodes.filter(e => ARTICLES[e].body); });
  for (let i = SERIES.length - 1; i >= 0; i--) if (!SERIES[i].episodes.length) SERIES.splice(i, 1);
  Object.keys(ARTICLES).forEach(id => { if (!ARTICLES[id].body) delete ARTICLES[id]; });
  for (let i = THEMES.length - 1; i >= 0; i--) if (!Object.values(ARTICLES).some(a => a.theme === THEMES[i].id)) THEMES.splice(i, 1);
}
const updating = s => s.planned > s.episodes.length ? '<span class="dot">·</span>更新中' : '';
const themeOf = id => THEMES.find(t => t.id === id);
const levelText = l => `${LEVELS[l].name} ${LEVELS[l].cefr}`;

// ---------- 小组件 ----------
// 收藏按钮（卡片右上角、连续剧页、阅读页都用它）。点击在下面统一处理
const favBtn = key => {
  const on = Store.isFav(key);
  return `<button class="fav-btn ${on ? 'on' : ''}" data-fav="${key}" title="${on ? '取消收藏' : '收藏'}">${on ? '★' : '☆'}</button>`;
};
document.addEventListener('click', e => {
  const b = e.target.closest('[data-fav]');
  if (!b) return;
  e.preventDefault();
  e.stopPropagation();
  const on = Store.toggleFav(b.dataset.fav);
  document.querySelectorAll(`[data-fav="${b.dataset.fav}"]`).forEach(x => {
    x.classList.toggle('on', on);
    x.title = on ? '取消收藏' : '收藏';
    x.firstChild.textContent = on ? '★' : '☆';
  });
  if (location.hash === '#/me') pageMe();
}, true);

function seriesProgress(s) {
  const done = s.episodes.filter(id => Store.progressOf(id).done).length;
  return { done, pct: Math.round(done / s.episodes.length * 100) };
}

function seriesCard(s) {
  const t = themeOf(s.theme), p = seriesProgress(s);
  return `
    <a class="s-card" href="#/s/${s.id}">
      <div class="s-cover" style="background:${t.tint}">
        ${favBtn('s:' + s.id)}
        <span class="kicker">${t.en}</span>
        <span class="en">${esc(s.en)}</span>
      </div>
      <h3>${esc(s.title)}</h3>
      <div class="meta">${s.episodes.length} 集${updating(s)}<span class="dot">·</span>${levelText(s.level)}${p.done ? `<span class="dot">·</span>看到第 ${p.done} 集` : ''}</div>
      ${p.done ? `<div class="bar"><i style="width:${p.pct}%"></i></div>` : ''}
    </a>`;
}

function articleCard(a) {
  const t = themeOf(a.theme), done = Store.progressOf(a.id).done;
  return `
    <a class="a-card ${a.body ? '' : 'is-sample'} ${a.thumb ? 'has-thumb' : ''}" href="#/read/${a.id}">
      ${favBtn('a:' + a.id)}
      ${a.thumb ? `<div class="a-thumb"><img src="${a.thumb}" alt="" loading="lazy"></div>` : ''}
      <span class="kicker">${t.name}</span>
      <h3>${esc(a.title)}</h3>
      <div class="en">${esc(a.en)}</div>
      <div class="sum">${esc(a.summary || '')}</div>
      <div class="foot">
        <span class="meta">${a.body && a.body.cn ? '中文为主' : levelText(a.level)}<span class="dot">·</span>${a.minutes} 分钟</span>
        ${done ? '<span class="done-mark">✓ 已读</span>' : a.body ? '' : '<span class="soon">示例</span>'}
      </div>
    </a>`;
}

const singles = () => Object.values(ARTICLES).filter(a => !a.series);

// ---------- 筛选：主题 + 级别 + 长度，连续剧和单篇一起筛。首页、连续剧页、单篇页共用 ----------
let filter = { theme: 'all', level: 0, len: 'all' };
const LENS = [['all', '全部'], ['short', '5 分钟内'], ['mid', '5–10 分钟'], ['long', '10 分钟以上']];
const lenOk = (min, len) => len === 'all' || (len === 'short' ? min <= 5 : len === 'mid' ? min > 5 && min <= 10 : min > 10);
// 连续剧的长度按平均每集算
const avgMin = s => Math.round(s.episodes.reduce((n, e) => n + ARTICLES[e].minutes, 0) / s.episodes.length);
const seriesOk = s => (filter.theme === 'all' || s.theme === filter.theme) && (!filter.level || s.level === filter.level) && lenOk(avgMin(s), filter.len);
const singleOk = a => (filter.theme === 'all' || a.theme === filter.theme) && (!filter.level || a.level === filter.level) && lenOk(a.minutes, filter.len);

function filterBar(show = 'both') {
  const chip = (f, v, n) => `<button class="chip ${filter[f] === v ? 'on' : ''}" data-f="${f}" data-v="${v}">${n}</button>`;
  const t = themeOf(filter.theme);
  // 只显示真的有内容的级别和长度，免得点进去什么都没有
  const pool = [...SERIES.map(x => ({ level: x.level, minutes: avgMin(x) })), ...singles().map(a => ({ level: a.level, minutes: a.minutes }))];
  const levels = Object.entries(LEVELS).filter(([k]) => pool.some(x => x.level === Number(k)));
  const lens = LENS.filter(([v]) => v === 'all' || pool.some(x => lenOk(x.minutes, v)));
  // 第一行：现在看的是「全部 / 连续剧 / 单篇」，一眼就知道自己在哪
  const scope = [['both', '全部'], ['series', '连续剧'], ['singles', '单篇']]
    .map(([k, n]) => `<button class="chip scope ${show === k ? 'on' : ''}" data-scope="${k}">${n}</button>`).join('');
  return `
    <div class="filters">
      <div class="chips scroll scope-row"><span class="f-label">看</span>${scope}</div>
      <div class="chips scroll">${chip('theme', 'all', '全部学科')}${THEMES.map(x => chip('theme', x.id, x.name)).join('')}</div>
      <div class="f-sub">
        ${levels.length > 1 ? `<div class="chips scroll"><span class="f-label">英文难度</span>${chip('level', 0, '全部')}${levels.map(([k, v]) => chip('level', Number(k), v.name)).join('')}</div>` : ''}
        ${lens.length > 2 ? `<div class="chips scroll"><span class="f-label">长度</span>${lens.map(([v, n]) => chip('len', v, n)).join('')}</div>` : ''}
      </div>
      ${t ? `<p class="theme-desc">${t.desc}</p>` : ''}
    </div>`;
}

// show：'both' 连续剧 + 单篇（首页）；'series' 只有连续剧；'singles' 只有单篇
function browseHTML(show) {
  const ss = SERIES.filter(seriesOk), as = singles().filter(singleOk);
  const head = (title, link) => show === 'both' ? `<div class="section-head"><h2>${title}</h2><a href="${link}">只看${title} →</a></div>` : '';
  const seriesSec = `<section class="section browse-sec">${head('连续剧', '#/series')}
    ${ss.length ? `<div class="${show === 'both' ? 'row' : 'grid'}">${ss.map(seriesCard).join('')}</div>` : '<div class="empty">这个条件下还没有连续剧。</div>'}</section>`;
  const singleSec = `<section class="section browse-sec">${head('单篇', '#/singles')}
    ${as.length ? `<div class="grid">${as.map(articleCard).join('')}</div>` : '<div class="empty">这个条件下还没有单篇。</div>'}</section>`;
  return (show !== 'singles' ? seriesSec : '') + (show !== 'series' ? singleSec : '');
}

function mountBrowse(show, extra = '') {
  const box = document.getElementById('browse');
  const draw = () => { box.innerHTML = filterBar(show) + extra + browseHTML(show); };
  draw();
  box.onclick = e => {
    // 「看：全部 / 连续剧 / 单篇」就在当前页切换，不跳页面、不回到顶部
    const sc = e.target.closest('[data-scope]');
    if (sc) {
      show = sc.dataset.scope;
      const h = document.querySelector('.page-head h1');
      if (h) h.textContent = { both: '全部', series: '连续剧', singles: '单篇' }[show];
      const p = document.querySelector('.page-head p');
      if (p) p.textContent = { both: '连续剧和单篇都在这里。', series: '一个大主题，一集一集讲下去。每一集看完都能学会一个东西，连起来是一条完整的路。', singles: '零散的一篇篇文章，看到感兴趣的标题就点进去。' }[show];
      draw();
      return;
    }
    const b = e.target.closest('[data-f]');
    if (!b) return;
    filter[b.dataset.f] = b.dataset.f === 'level' ? Number(b.dataset.v) : b.dataset.v;
    draw();
  };
}

// ---------- 首页 ----------
function pageHome() {
  const d = Store.get();
  const last = d.last && ARTICLES[d.last];
  const cont = last ? (() => {
    const s = last.series && SERIES.find(x => x.id === last.series);
    return `
      <a class="continue" href="#/read/${last.id}">
        <span class="kicker">继续读</span>
        <span class="c-title">${esc(last.title)}</span>
        <span class="meta">${s ? `${esc(s.title)} · 第 ${last.ep} 集` : themeOf(last.theme).name}</span>
        <span class="go">→</span>
      </a>`;
  })() : '';

  app.innerHTML = `
    <section class="hero">
      <h1 class="en">Pick up English <em>by the way.</em></h1>
      <p>博弈论、Python、艺术史、历史……一个学科一门课，按大学的深度讲，用真实的事讲。英语？读着读着就会了。</p>
      <p class="hero-how">怎么读：默认是「中文夹英文」，中文句子里的名词换成英文，不认识就点一下看中文；想挑战，可以切到「全英文」。英语基础一般也能读。</p>
      <a class="ask-link" href="#/ask">想看什么学科、什么话题？告诉我们 →</a>
    </section>
    <div id="hot"></div>
    <div id="browse"></div>
`;
  mountBrowse('both', cont);
  drawHot();
}

// 首页「热门」：按最近 30 天读的人数挑 3 篇，不显示数字；数据不够时用 HOT_FALLBACK 补齐
async function drawHot() {
  const box = document.getElementById('hot');
  const render = ids => {
    const list = [...new Set([...ids, ...HOT_FALLBACK])].filter(id => ARTICLES[id]).slice(0, 3);
    if (!list.length || !document.body.contains(box)) return;
    box.innerHTML = `<section class="section"><div class="section-head"><h2>热门</h2></div>
      <div class="grid">${list.map(id => articleCard(ARTICLES[id])).join('')}</div></section>`;
  };
  render([]);
  try { render(await Cloud.hot(3)); } catch (e) {}
}

// ---------- 连续剧列表 / 单篇列表 ----------
function pageSeriesList() {
  app.innerHTML = `
    <div class="page-head"><h1>连续剧</h1><p>一个大主题，一集一集讲下去。每一集看完都能学会一个东西，连起来是一条完整的路。</p></div>
    <div id="browse"></div>`;
  mountBrowse('series');
}

function pageSingles() {
  app.innerHTML = `
    <div class="page-head"><h1>单篇</h1><p>零散的一篇篇文章，看到感兴趣的标题就点进去。</p></div>
    <div id="browse"></div>`;
  mountBrowse('singles');
}

// ---------- 连续剧目录页 ----------
function pageSeries(id) {
  const s = SERIES.find(x => x.id === id);
  if (!s) return pageNotFound();
  const t = themeOf(s.theme), p = seriesProgress(s);
  const nextId = s.episodes.find(e => !Store.progressOf(e).done) || s.episodes[0];
  const nextEp = ARTICLES[nextId];
  const totalMin = s.episodes.reduce((sum, e) => sum + ARTICLES[e].minutes, 0);
  app.innerHTML = `
    <a class="back" href="#/series">← 连续剧</a>
    <div class="series-top">
      <div class="s-cover" style="background:${t.tint}"><span class="kicker">${t.en}</span><span class="en">${esc(s.en)}</span></div>
      <div>
        <div class="kicker">${t.name} · 连续剧</div>
        <h1 style="margin-top:8px">${esc(s.title)} ${favBtn('s:' + s.id).replace('fav-btn', 'fav-btn inline')}</h1>
        <div class="en-title">${esc(s.en)}</div>
        <p>${esc(s.desc)}</p>
        <div class="meta">${s.episodes.length} 集${updating(s)}<span class="dot">·</span>${levelText(s.level)}<span class="dot">·</span>共约 ${totalMin} 分钟<span class="dot">·</span>读完 ${p.done}/${s.episodes.length}</div>
        <div class="bar"><i style="width:${p.pct}%"></i></div>
        <a class="btn btn-primary" href="#/read/${nextId}">${p.done ? `从第 ${nextEp.ep} 集继续` : '从第 1 集开始'}</a>
      </div>
    </div>
    <div class="eps">${s.episodes.map(e => {
      const a = ARTICLES[e], pr = Store.progressOf(e);
      const state = pr.done ? '<span class="state ok">✓ 读完</span>' : pr.seconds ? '<span class="state">读到一半</span>' : a.body ? `<span class="state">${a.minutes} 分钟</span>` : '<span class="soon">示例</span>';
      return `<a class="ep" href="#/read/${e}"><span class="num">${String(a.ep).padStart(2, '0')}</span>
        <div><h3>${esc(a.title)}</h3><div class="en">${esc(a.en)}</div></div>${state}</a>`;
    }).join('')}</div>`;
}

// ---------- 登录 / 注册 / 忘记密码（Supabase） ----------
let authMode = 'in';   // in 登录，up 注册，forgot 忘记密码
function pageLogin() {
  if (Cloud.user()) { location.replace('#/me'); return; }
  const m = authMode;
  const title = { in: '登录 BTW', up: '注册 BTW', forgot: '找回密码' }[m];
  const intro = {
    in: '登录后，换手机、换电脑都能接着读。不登录也能读所有文章。',
    up: '只需要邮箱，QQ 邮箱、163 邮箱都可以。注册后，你在这台设备上的进度、收藏和生词都会一起带过去。不注册也能读所有文章，注册只是为了换设备也能接着读。',
    forgot: '输入注册时用的邮箱，我们给你发一封重设密码的邮件。',
  }[m];
  app.innerHTML = `
    <div class="auth">
      <h1>${title}</h1>
      <p>${intro}</p>
      <form id="auth-form">
        <label class="field"><span>邮箱</span><input type="email" id="a-email" autocomplete="email" required placeholder="you@example.com"></label>
        ${m === 'forgot' ? '' : `<label class="field"><span>密码</span><input type="password" id="a-pass" autocomplete="${m === 'up' ? 'new-password' : 'current-password'}" required minlength="8" placeholder="至少 8 位，字母和数字都要有"></label>`}
        <button class="btn btn-primary" id="a-btn">${{ in: '登录', up: '注册', forgot: '发送邮件' }[m]}</button>
      </form>
      <div class="links">
        ${m === 'in' ? '<a href="#/login" data-mode="forgot">忘记密码</a><a href="#/login" data-mode="up">还没有账号？注册</a>'
          : '<span></span><a href="#/login" data-mode="in">已有账号？登录</a>'}
      </div>
      <div class="notice hidden" id="a-note"></div>
      ${Cloud.ready ? '' : '<div class="notice">现在连不上账号服务器，你仍然可以照常读文章，进度会先存在这台设备上。</div>'}
    </div>`;
  const note = (t, bad) => { const n = document.getElementById('a-note'); n.textContent = t; n.classList.remove('hidden'); n.classList.toggle('bad', !!bad); };
  app.querySelectorAll('[data-mode]').forEach(x => x.onclick = e => { e.preventDefault(); authMode = x.dataset.mode; pageLogin(); });
  document.getElementById('auth-form').onsubmit = async e => {
    e.preventDefault();
    const email = document.getElementById('a-email').value.trim();
    const pass = m === 'forgot' ? '' : document.getElementById('a-pass').value;
    const btn = document.getElementById('a-btn');
    btn.disabled = true;
    try {
      if (m === 'in') { await Cloud.signIn(email, pass); location.hash = '#/me'; }
      else if (m === 'up') {
        const r = await Cloud.signUp(email, pass);
        if (r.session) location.hash = '#/me';
        else note('差一步：我们给 ' + email + ' 发了一封确认邮件，点里面的链接就注册好了。没收到的话，看看垃圾邮件。');
      } else { await Cloud.resetPassword(email); note('如果这个邮箱注册过，你会收到一封重设密码的邮件。'); }
    } catch (err) { note(err.message, true); }
    btn.disabled = false;
  };
}

// 点了重设密码邮件里的链接以后，来到这里设新密码
function pageReset() {
  app.innerHTML = `
    <div class="auth">
      <h1>设一个新密码</h1>
      <p>设好以后，下次就用新密码登录。</p>
      <form id="r-form">
        <label class="field"><span>新密码</span><input type="password" id="r-pass" autocomplete="new-password" required minlength="8" placeholder="至少 8 位，字母和数字都要有"></label>
        <button class="btn btn-primary">保存新密码</button>
      </form>
      <div class="notice hidden" id="r-note"></div>
    </div>`;
  document.getElementById('r-form').onsubmit = async e => {
    e.preventDefault();
    const n = document.getElementById('r-note');
    try { await Cloud.setPassword(document.getElementById('r-pass').value); n.textContent = '新密码已保存。'; setTimeout(() => location.hash = '#/me', 1200); }
    catch (err) { n.textContent = err.message; n.classList.add('bad'); }
    n.classList.remove('hidden');
  };
}

// ---------- 后台：只有管理员能看到数据（数据库那边也会检查） ----------
async function pageAdmin() {
  if (!Cloud.user()) { app.innerHTML = '<div class="page-head"><h1>后台</h1><p>请先 <a href="#/login" style="color:var(--accent)">登录</a>。</p></div>'; return; }
  app.innerHTML = '<div class="page-head"><h1>后台</h1><p class="meta">正在读取……</p></div>';
  let d;
  try { d = await Cloud.adminStats(); } catch (e) { pageNotFound(); return; }
  const titleOf = id => id === 'topic-request' ? '「你想看什么」投稿' : (ARTICLES[id] && ARTICLES[id].title) || id || '（整站）';
  const seriesOf = id => { const a = ARTICLES[id]; const s = a && a.series && SERIES.find(x => x.id === a.series); return s ? s.title : a ? '单篇' : ''; };
  // 按合集汇总
  const bySeries = {};
  d.articles.forEach(r => { const k = seriesOf(r.article_id) || '其他'; bySeries[k] = (bySeries[k] || 0) + r.visitors; });
  const fmt = t => new Date(t).toLocaleString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  app.innerHTML = `
    <div class="page-head"><h1>后台</h1><p class="meta">只有你能看到这一页。数字从开始记录那天算起。</p></div>
    <div class="stats">
      <div class="stat-box"><b>${d.users}</b><span>注册人数</span></div>
      <div class="stat-box"><b>${d.users_7d}</b><span>这 7 天新注册</span></div>
      <div class="stat-box"><b>${d.visitors_7d}</b><span>这 7 天来读的人</span></div>
    </div>
    <section class="section" id="admin-users"><div class="section-head"><h2>账号</h2><span class="meta">正在读取……</span></div></section>
    <section class="section"><div class="section-head"><h2>按合集</h2><span class="meta">读过的人数</span></div>
      ${Object.keys(bySeries).length ? `<div class="list">${Object.entries(bySeries).sort((a, b) => b[1] - a[1]).map(([k, v]) => `
        <div class="list-item"><div class="grow"><h3>${esc(k)}</h3></div><b>${v}</b></div>`).join('')}</div>` : '<div class="empty">还没有数据。</div>'}
    </section>
    <section class="section"><div class="section-head"><h2>按文章</h2><span class="meta">读过的人 · 打开次数 · 读完的人</span></div>
      ${d.articles.length ? `<div class="list">${d.articles.map(r => `
        <a class="list-item" href="#/read/${esc(r.article_id)}"><div class="grow"><h3>${esc(titleOf(r.article_id))}</h3><div class="meta">${esc(seriesOf(r.article_id))}</div></div>
        <span class="meta">${r.visitors} · ${r.opens} · ${r.finishes}</span></a>`).join('')}</div>` : '<div class="empty">还没有数据。</div>'}
    </section>
    <section class="section"><div class="section-head"><h2>读者留言</h2><span class="meta">${d.feedback.length} 条</span></div>
      ${d.feedback.length ? `<div class="list">${d.feedback.map(f => `
        <div class="list-item fb-item"><div class="grow"><div class="meta">${fmt(f.created_at)} · ${esc(f.article_id ? titleOf(f.article_id) : '整站')}${f.contact ? ' · 联系方式：' + esc(f.contact) : ''}</div>
        <p>${esc(f.message)}</p></div></div>`).join('')}</div>` : '<div class="empty">还没有留言。</div>'}
    </section>`;
  drawAdminUsers();
}

// ---------- 我的 ----------
// 列表默认只显示最近 5 条，点「查看全部」再展开
const meOpen = {};
function listBlock(key, items, emptyText) {
  if (!items.length) return `<div class="empty">${emptyText}</div>`;
  const shown = meOpen[key] ? items : items.slice(0, 5);
  return `<div class="list">${shown.join('')}</div>
    ${items.length > 5 ? `<button class="btn-text more-btn" data-more="${key}">${meOpen[key] ? '收起' : `查看全部 ${items.length} 条`}</button>` : ''}`;
}

function pageMe() {
  const d = Store.get();
  // 追完的连续剧：已经上线的每一集都读完了（还在更新的，就算「追到最新一集」）
  const liveEps = s => s.episodes.filter(e => ARTICLES[e].body);
  const doneSeries = SERIES.filter(s => liveEps(s).length && liveEps(s).every(e => Store.progressOf(e).done));
  const done = Object.entries(d.progress).filter(([, p]) => p.done).sort((a, b) => b[1].doneAt - a[1].doneAt).map(([id]) => ARTICLES[id]).filter(Boolean);
  const history = d.history.map(id => ARTICLES[id]).filter(Boolean);
  const favItems = d.favs.map(key => {
    const [type, id] = key.split(':');
    const item = type === 's' ? SERIES.find(x => x.id === id) : ARTICLES[id];
    if (!item) return '';
    return `<a class="list-item" href="${type === 's' ? `#/s/${id}` : `#/read/${id}`}"><div class="grow"><h3>${esc(item.title)}</h3>
      <div class="meta">${type === 's' ? `连续剧 · 读完 ${liveEps(item).filter(e => Store.progressOf(e).done).length}/${liveEps(item).length} 集` : themeOf(item.theme).name}</div></div>${favBtn(key).replace('fav-btn', 'fav-btn inline')}</a>`;
  }).filter(Boolean);
  app.innerHTML = `
    <div class="me-top">
      <div class="avatar">我</div>
      <div>
        ${Cloud.user() ? `<h1>${esc(Cloud.user().email)}</h1>
        <div class="meta">进度、收藏和生词会自动同步到云端 · <a href="#/me" id="sign-out" style="color:var(--accent)">退出登录</a><span id="admin-link"></span></div>`
        : `<h1>未登录</h1>
        <div class="meta">进度保存在这台设备的浏览器里 · <a href="#/login" style="color:var(--accent)">登录 / 注册</a>，换设备也能接着读</div>`}
      </div>
    </div>
    <div class="stats">
      <div class="stat-box"><b>${Math.round(Store.totalSeconds() / 60)}</b><span>总阅读（分钟）</span></div>
      <div class="stat-box"><b>${done.length}</b><span>读完的文章</span></div>
      <div class="stat-box"><b>${doneSeries.length}</b><span>追完的连续剧</span></div>
    </div>

    <section class="section"><div class="section-head"><h2>我的收藏</h2><span class="meta">${favItems.length} 个</span></div>
      ${listBlock('favs', favItems, '想追的连续剧、想留着的文章，点右上角的 ☆ 就会收藏到这里。')}
    </section>

    <section class="section"><div class="section-head"><h2>生词本</h2><span class="meta">${d.words.length} 个</span></div>
      ${listBlock('words', d.words.map((w, i) => `
        <div class="list-item word-item"><div class="grow"><b>${esc(w.w)}</b><span class="zh">${esc(w.zh)}</span><div class="ctx">${esc(w.sentence)}</div></div>
        <button data-say="${esc(w.w)}" title="听读音">🔊</button><button data-del="${i}" title="移除">✕</button></div>`), '读文章时点单词，再点 ☆ 收藏，就会出现在这里。')}
    </section>

    <section class="section"><div class="section-head"><h2>足迹</h2><span class="meta">最近看过的</span></div>
      ${listBlock('history', history.map(a => `
        <a class="list-item" href="#/read/${a.id}"><div class="grow"><h3>${esc(a.title)}</h3><div class="meta">${themeOf(a.theme).name}${Store.progressOf(a.id).done ? ' · 已读完' : ''}</div></div><span class="meta">→</span></a>`), '还没看过文章。')}
    </section>

    <section class="section"><div class="section-head"><h2>读完的</h2><span class="meta">滑到文末自动算读完</span></div>
      ${doneSeries.length ? `<div class="list">${doneSeries.map(x => `
        <a class="list-item" href="#/s/${x.id}"><div class="grow"><h3>${esc(x.title)}</h3><div class="meta">连续剧 · ${x.planned > liveEps(x).length ? `追到最新一集（${liveEps(x).length}/${x.planned}）` : `全部 ${liveEps(x).length} 集`}</div></div><span class="done-mark">✓</span></a>`).join('')}</div>` : ''}
      ${listBlock('done', done.map(a => `
        <a class="list-item" href="#/read/${a.id}"><div class="grow"><h3>${esc(a.title)}</h3><div class="meta">${themeOf(a.theme).name} · 读了 ${fmtMin(Store.progressOf(a.id).seconds)}</div></div><span class="done-mark">✓</span></a>`), '还没有读完的文章。')}
    </section>

    <section class="section"><div class="section-head"><h2>数据备份</h2></div>
      <p class="meta" style="margin:-8px 0 16px">还没登录时，进度只存在这个浏览器里。换设备前可以先导出，到新设备上再导入。</p>
      <div class="chips"><button class="btn btn-ghost" id="exp">导出备份</button><label class="btn btn-ghost">导入备份<input type="file" accept=".json" id="imp" hidden></label></div>
    </section>
    <section class="section"><div class="section-head"><h2>想对我们说点什么</h2></div>
      <div class="fb-form"><textarea id="fb-msg" maxlength="2000" placeholder="想看什么、哪里不好读、哪里写错了，都可以说。"></textarea>
      <input id="fb-contact" maxlength="200" placeholder="留个联系方式（可以不填）">
      <button class="btn btn-ghost" id="fb-send">发送</button><span class="meta" id="fb-note"></span></div>
    </section>
    <p class="meta credits">我们会匿名记录哪篇文章被打开、被读完，用来决定接下来写什么；登录后，会记下这台浏览器的一个随机编号，用来防止有人批量注册。不会记录你的真实身份。<br>点词释义来自开源词典 <a href="https://github.com/skywind3000/ECDICT" target="_blank" rel="noopener">ECDICT</a>（<a href="licenses/ECDICT-LICENSE.txt" target="_blank">MIT 授权</a>）。文章原文出处见每篇文末。</p>`;

  const so = document.getElementById('sign-out');
  if (so) so.onclick = async e => { e.preventDefault(); await Cloud.signOut(); pageMe(); };
  Cloud.isAdmin().then(yes => { const x = document.getElementById('admin-link'); if (yes && x) x.innerHTML = ' · <a href="#/admin" style="color:var(--accent)">后台</a>'; });
  bindFeedback(null);
  app.querySelectorAll('[data-say]').forEach(b => b.onclick = () => speak(b.dataset.say));
  app.querySelectorAll('[data-more]').forEach(b => b.onclick = () => { meOpen[b.dataset.more] = !meOpen[b.dataset.more]; pageMe(); });
  app.querySelectorAll('[data-del]').forEach(b => b.onclick = () => { Store.removeWordAt(Number(b.dataset.del)); pageMe(); });
  document.getElementById('exp').onclick = () => {
    const url = URL.createObjectURL(new Blob([Store.exportJSON()], { type: 'application/json' }));
    Object.assign(document.createElement('a'), { href: url, download: `BTW备份-${new Date().toISOString().slice(0, 10)}.json` }).click();
    URL.revokeObjectURL(url);
  };
  document.getElementById('imp').onchange = e => {
    const f = e.target.files[0];
    if (!f) return;
    f.text().then(t => { try { Store.importJSON(t); pageMe(); } catch (err) { alert('这个文件读不了，确认是 BTW 导出的备份吗？'); } });
  };
}

function pageNotFound() {
  app.innerHTML = '<div class="page-head"><h1>找不到这一页</h1><p><a href="#/" style="color:var(--accent)">回首页 →</a></p></div>';
}

// 后台里的「账号」：所有注册的人，同一台设备上有好几个账号的会标出来，可以删除（管理员删不掉）
async function drawAdminUsers() {
  const box = document.getElementById('admin-users');
  if (!box) return;
  let users;
  try { users = await Cloud.adminUsers(); }
  catch (e) { box.innerHTML = '<div class="section-head"><h2>账号</h2></div><div class="empty">账号列表还没开通：要先在 Supabase 里跑一次 tools/supabase-accounts.sql。</div>'; return; }
  // 每台设备上有几个账号
  const perDevice = {};
  users.forEach(u => u.devices.forEach(v => { perDevice[v] = (perDevice[v] || 0) + 1; }));
  const shared = u => Math.max(0, ...u.devices.map(v => perDevice[v] - 1));
  const day = t => t ? new Date(t).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' }) : '—';
  box.innerHTML = `<div class="section-head"><h2>账号</h2><span class="meta">${users.length} 个 · 标红的是同一台设备上还有别的账号</span></div>
    ${users.length ? `<div class="list">${users.map(u => `
      <div class="list-item"><div class="grow"><h3>${esc(u.email || '（没有邮箱）')}${u.is_admin ? ' <span class="meta">· 管理员</span>' : ''}</h3>
        <div class="meta">注册 ${day(u.created_at)} · 最后登录 ${day(u.last_sign_in_at)}${u.email_confirmed_at ? '' : ' · 邮箱没确认'}${shared(u) ? ` · <span class="warn">这台设备上还有 ${shared(u)} 个账号</span>` : ''}</div></div>
        ${u.is_admin ? '' : `<button class="btn btn-ghost btn-sm" data-del-user="${esc(u.id)}" data-email="${esc(u.email || '')}">删除</button>`}</div>`).join('')}</div>`
      : '<div class="empty">还没有人注册。</div>'}`;
  box.querySelectorAll('[data-del-user]').forEach(b => b.onclick = async () => {
    if (!confirm(`确定删除 ${b.dataset.email} 吗？这个人的阅读进度、收藏、生词会一起删掉，删了找不回来。`)) return;
    b.disabled = true;
    try { await Cloud.adminDeleteUser(b.dataset.delUser); drawAdminUsers(); }
    catch (e) { alert(e.message); b.disabled = false; }
  });
}

// 「你想看什么」：单独一页，首页顶部有入口
function pageAsk() {
  app.innerHTML = `
    <a class="back" href="#/">← 回首页</a>
    <div class="page-head"><h1>你想看什么？</h1><p>想学哪个学科、对哪件事好奇、哪篇没看懂，都告诉我们。下一集写什么，你说了算。</p></div>
    <div class="narrow-form fb-form"><textarea id="fb-msg" maxlength="2000" placeholder="比如：想看心理学里怎么跟人沟通；想要 A-Level 物理的预习；想知道某件事背后的道理……"></textarea>
      <input id="fb-contact" maxlength="200" placeholder="留个联系方式（可以不填）">
      <button class="btn btn-primary" id="fb-send">发送</button><span class="meta" id="fb-note"></span></div>`;
  bindFeedback('topic-request');
}

// 留言框（「我的」页和每篇文章末尾共用）
function bindFeedback(articleId) {
  const btn = document.getElementById('fb-send');
  if (!btn) return;
  btn.onclick = async () => {
    const msg = document.getElementById('fb-msg'), note = document.getElementById('fb-note');
    if (!msg.value.trim()) { note.textContent = '先写点什么吧。'; return; }
    btn.disabled = true;
    try {
      await Cloud.feedback(articleId, msg.value.trim(), document.getElementById('fb-contact').value.trim());
      msg.value = '';
      note.innerHTML = articleId === 'topic-request' ? '收到了，谢谢！<a href="#/" style="color:var(--accent)">回首页 →</a>' : '收到了，谢谢！';
    }
    catch (e) { note.textContent = e.message; }
    btn.disabled = false;
  };
}

// 右上角：登录了显示「我的账号」
function syncNav() {
  const a = document.getElementById('nav-login');
  if (!a) return;
  const u = Cloud.user();
  a.textContent = u ? '我的账号' : '登录';
  a.href = u ? '#/me' : '#/login';
}
Cloud.onChange(syncNav);

// ---------- 路由 ----------
function route() {
  Reader.unmount();
  const [, page, id] = (location.hash.slice(1) || '/').split('/');
  document.body.classList.toggle('reading', page === 'read');

  const navKey = { '': 'home', t: 'home', series: 'series', s: 'series', singles: 'singles', me: 'me' }[page];
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === navKey));

  if (page === 'read') {
    if (!ARTICLES[id]) return pageNotFound();
    app.innerHTML = Reader.render(id);
    Reader.mount(id);
  } else if (page === 'series') pageSeriesList();
  else if (page === 'singles') pageSingles();
  else if (page === 't') { filter.theme = themeOf(id) ? id : 'all'; pageHome(); }
  else if (page === 's') pageSeries(id);
  else if (page === 'test') { location.replace('#/'); return; }
  else if (page === 'login') pageLogin();
  else if (page === 'reset') pageReset();
  else if (page === 'ask') pageAsk();
  else if (page === 'admin') pageAdmin();
  else if (page === 'me') pageMe();
  else if (!page) pageHome();
  else pageNotFound();
  scrollTo(0, 0);
}

// 邮件里的链接点回来时，如果失效了，地址里会带 ?error=...：换成一句人话，再把地址清干净
(() => {
  const q = new URLSearchParams(location.search);
  if (!q.get('error') && !q.get('error_code')) return;
  const code = q.get('error_code') || '';
  history.replaceState(null, '', location.pathname + (location.hash || '#/'));
  const msg = /expired|invalid/.test(code + q.get('error_description'))
    ? '这个邮件链接已经用过或者过期了。如果你刚注册，账号多半已经确认好了，直接用邮箱和密码登录试试；还是不行的话，到登录页点「忘记密码」。'
    : '邮件链接没能打开。到登录页直接登录，或者点「忘记密码」重新发一封。';
  setTimeout(() => {
    const n = document.createElement('div');
    n.className = 'resume long';
    n.innerHTML = `<span>${msg}</span><button class="resume-x" title="关闭">✕</button>`;
    n.querySelector('button').onclick = () => n.remove();
    document.body.appendChild(n);
  }, 300);
})();

addEventListener('hashchange', route);
route();
