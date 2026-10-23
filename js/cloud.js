// 账号和云端：登录 / 注册、进度同步、匿名阅读记录、首页热门、读者留言、后台数据。
// 用的是 Supabase（js/vendor/supabase.js，MIT 授权）。网络不通或者加载失败时，网站照常能用，只是不同步。

const Cloud = (() => {
  const ok = typeof supabase !== 'undefined' && typeof SUPABASE_URL !== 'undefined';
  const sb = ok ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    // pkce：登录链接用 ?code= 带回来，不占用网址里的 #，不会跟页面路由打架
    auth: { flowType: 'pkce', persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
  }) : null;

  let user = null;
  const listeners = [];
  const emit = () => listeners.forEach(fn => fn(user));

  // 浏览器里随机生成的匿名编号，只用来数「有多少个不同的人读过」，不知道你是谁
  const visitor = (() => {
    try {
      let v = localStorage.getItem('btw-visitor');
      if (!v) { v = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2)) ; localStorage.setItem('btw-visitor', v); }
      return v;
    } catch (e) { return null; }
  })();

  // ---------- 进度同步：登录时合并一次，之后每次保存，过 3 秒上传 ----------
  let pushTimer = null, syncing = false;
  async function pull() {
    if (!user) return;
    syncing = true;
    try {
      const { data, error } = await sb.from('user_data').select('data').eq('user_id', user.id).maybeSingle();
      if (!error && data) Store.mergeIn(data.data);
      await push();
    } finally { syncing = false; }
  }
  // 上传之前先把云端最新的阅读进度合并进来：几台设备同时登录同一个账号时，谁也不会把别人的进度覆盖掉
  async function push() {
    if (!user) return;
    const { data } = await sb.from('user_data').select('data').eq('user_id', user.id).maybeSingle();
    if (data) Store.mergeProgressIn(data.data);
    await sb.from('user_data').upsert({ user_id: user.id, data: Store.get(), updated_at: new Date().toISOString() });
  }
  Store.onSave(() => {
    if (!user || syncing) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(push, 3000);
  });

  if (sb) {
    sb.auth.onAuthStateChange((event, session) => {
      const was = user && user.id;
      user = session ? session.user : null;
      if (event === 'PASSWORD_RECOVERY') location.hash = '#/reset';
      if (user && user.id !== was) pull().then(() => { emit(); if (typeof route === 'function' && /^#\/(me|login|admin)?$/.test(location.hash)) route(); });
      else emit();
    });
  }

  // 只记一次：同一个人同一篇，一个浏览器会话里只记一次「打开」
  const sent = new Set();
  function track(articleId, kind) {
    if (!sb) return;
    const k = kind + ':' + articleId;
    if (sent.has(k)) return;
    sent.add(k);
    sb.from('events').insert({ article_id: articleId, kind, visitor }).then(() => {}, () => {});
  }

  const errText = e => {
    const m = (e && e.message) || '';
    if (/Invalid login/i.test(m)) return '邮箱或密码不对。';
    if (/Email not confirmed/i.test(m)) return '这个邮箱还没确认。请先点一下我们发给你的确认邮件里的链接。';
    if (/already registered/i.test(m)) return '这个邮箱已经注册过了，直接登录就行。';
    if (/Password should|weak/i.test(m)) return '密码太简单了：至少 8 位，字母和数字都要有。';
    if (/too many/i.test(m)) return '这会儿留言的人太多了，过几分钟再试。';
    if (/rate limit|security purposes/i.test(m)) return '操作太频繁了，请过一会儿再试。';
    return '没成功：' + (m || '网络好像不太通，稍后再试。');
  };
  // 邮件里的链接点回来，回到这个网站的首页
  const backHere = () => location.origin + location.pathname;

  return {
    ready: !!sb,
    user: () => user,
    onChange(fn) { listeners.push(fn); },
    track,

    async signUp(email, password) {
      const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: backHere() } });
      if (error) throw new Error(errText(error));
      return data;
    },
    async signIn(email, password) {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw new Error(errText(error));
    },
    async resetPassword(email) {
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: backHere() });
      if (error) throw new Error(errText(error));
    },
    async setPassword(password) {
      const { error } = await sb.auth.updateUser({ password });
      if (error) throw new Error(errText(error));
    },
    async signOut() {
      clearTimeout(pushTimer);
      await push();
      await sb.auth.signOut();
    },

    // 首页热门：只拿到文章 id，没有数字
    async hot(n = 3) {
      if (!sb) return [];
      const { data, error } = await sb.rpc('top_articles', { n });
      return error || !data ? [] : data.map(r => r.article_id);
    },

    async feedback(articleId, message, contact) {
      if (!sb) throw new Error('现在连不上服务器，稍后再试。');
      const row = { article_id: articleId || null, message: message.slice(0, 2000), contact: (contact || '').slice(0, 200) || null };
      if (user) row.user_id = user.id;
      const { error } = await sb.from('feedback').insert(row);
      if (error) throw new Error(errText(error));
    },

    // 是不是管理员（「我的」页据此显示后台入口；真正的把关在数据库那边）
    async isAdmin() {
      if (!sb || !user) return false;
      const { data, error } = await sb.rpc('is_admin');
      return !error && data === true;
    },

    // 后台：不是管理员会报错
    async adminStats() {
      const { data, error } = await sb.rpc('admin_stats');
      if (error) throw error;
      return data;
    },
  };
})();
