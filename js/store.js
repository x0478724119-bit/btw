// 进度、生词、设置先存在这台设备的浏览器里；登录以后由 cloud.js 同步到云端（每次保存都会通知它）。

const Store = (() => {
  const KEY = 'btw-v1';
  const blank = () => ({
    level: null,          // 1-4，测试或自己选的级别
    progress: {},         // { 文章id: { seconds, done, doneAt } }
    daily: {},            // { '2026-10-23': 秒数 }
    words: [],            // [{ w, zh, sentence, article, at }]
    last: null,           // 上次在读的文章 id
    favs: [],             // 收藏：'s:连续剧id' 或 'a:文章id'，新的在前
    history: [],          // 足迹：最近打开过的文章 id，新的在前
    profile: { name: '', icon: '', color: 0 },   // 昵称和头像（颜色序号 + 可选的小图标）
    settings: { size: 2, bg: 'white', rate: 0.9, hover: true, voice: '', hintSeen: false, mode: 'dg' },
  });

  let data = blank();
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved) data = { ...blank(), ...saved, settings: { ...blank().settings, ...saved.settings } };
  } catch (e) { /* 隐私模式等情况读不到，就用空数据 */ }

  const listeners = [];
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
    listeners.forEach(fn => fn(data));
  }

  // 把云端的数据和这台设备上的合并：读的秒数取大的，读完了只要有一边读完就算，收藏、生词、足迹取并集
  function merge(a, b) {
    const out = { ...blank(), ...b, ...a, settings: { ...blank().settings, ...(b.settings || {}), ...(a.settings || {}) } };
    out.progress = { ...(b.progress || {}) };
    Object.entries(a.progress || {}).forEach(([id, p]) => {
      const q = out.progress[id];
      out.progress[id] = !q ? p : {
        ...q, ...p,
        seconds: Math.max(p.seconds || 0, q.seconds || 0),
        pos: Math.max(p.pos || 0, q.pos || 0),
        done: !!(p.done || q.done),
        doneAt: Math.min(p.doneAt || Infinity, q.doneAt || Infinity) === Infinity ? undefined : Math.min(p.doneAt || Infinity, q.doneAt || Infinity),
      };
    });
    out.daily = { ...(b.daily || {}) };
    Object.entries(a.daily || {}).forEach(([d, s]) => { out.daily[d] = Math.max(s, out.daily[d] || 0); });
    const uniq = (xs, key) => { const seen = new Set(); return xs.filter(x => { const k = key(x); if (seen.has(k)) return false; seen.add(k); return true; }); };
    out.favs = uniq([...(a.favs || []), ...(b.favs || [])], x => x);
    out.history = uniq([...(a.history || []), ...(b.history || [])], x => x).slice(0, 100);
    out.words = uniq([...(a.words || []), ...(b.words || [])], x => x.w + '|' + x.article);
    out.last = a.last || b.last;
    // 昵称和头像：这台设备上设过就用这台的，没设过就用云端的（换新设备登录时不会被空白覆盖）
    const set = p => p && (p.name || p.icon || p.color);
    out.profile = set(a.profile) ? a.profile : (b.profile || a.profile || blank().profile);
    return out;
  }

  const today = () => new Date().toISOString().slice(0, 10);
  const prog = id => (data.progress[id] ||= { seconds: 0, done: false });

  return {
    get: () => data,
    save,
    setLevel(l) { data.level = l; save(); },
    setSetting(k, v) { data.settings[k] = v; save(); },
    setProfile(p) { data.profile = { ...data.profile, ...p }; save(); },

    addSeconds(id, s) {
      prog(id).seconds += s;
      data.daily[today()] = (data.daily[today()] || 0) + s;
      data.last = id;
    },
    isFav: key => data.favs.includes(key),
    toggleFav(key) {
      const i = data.favs.indexOf(key);
      if (i >= 0) data.favs.splice(i, 1); else data.favs.unshift(key);
      save();
      return i < 0;
    },
    visit(id) {
      data.history = [id, ...data.history.filter(x => x !== id)].slice(0, 100);
      data.last = id;
      save();
    },
    setPos(id, r) { prog(id).pos = Math.round(r * 1000) / 1000; },
    finish(id) { Object.assign(prog(id), { done: true, doneAt: Date.now() }); save(); },
    progressOf: id => data.progress[id] || { seconds: 0, done: false },

    hasWord: (w, article) => data.words.some(x => x.w === w && x.article === article),
    toggleWord(entry) {
      const i = data.words.findIndex(x => x.w === entry.w && x.article === entry.article);
      if (i >= 0) data.words.splice(i, 1); else data.words.unshift({ ...entry, at: Date.now() });
      save();
      return i < 0;
    },
    removeWordAt(i) { data.words.splice(i, 1); save(); },

    totalSeconds: () => Object.values(data.daily).reduce((a, b) => a + b, 0),
    weekSeconds() {
      const since = new Date(Date.now() - 6 * 864e5).toISOString().slice(0, 10);
      return Object.entries(data.daily).filter(([d]) => d >= since).reduce((a, [, s]) => a + s, 0);
    },

    onSave(fn) { listeners.push(fn); },
    // 登录后：把云端的数据合并进来（这台设备上的设置优先）
    mergeIn(remote) {
      if (!remote || typeof remote !== 'object') return;
      data = merge(data, remote);
      try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
    },

    // 每次上传前：只合并阅读进度和每天的阅读时长（这两样只会增加）。收藏、生词以这台设备为准，这样取消收藏不会被云端「加回来」
    mergeProgressIn(remote) {
      if (!remote || typeof remote !== 'object') return;
      const m = merge(data, remote);
      data.progress = m.progress;
      data.daily = m.daily;
      try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
    },

    exportJSON: () => JSON.stringify(data, null, 2),
    importJSON(text) {
      const obj = JSON.parse(text);
      data = { ...blank(), ...obj, settings: { ...blank().settings, ...obj.settings } };
      save();
    },
  };
})();
