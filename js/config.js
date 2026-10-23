// Supabase 项目的地址和「公开钥匙」（publishable key）。这把钥匙本来就是给网页用的，放在这里是安全的：
// 能做什么由数据库里的规则（RLS）决定，见 tools/supabase-setup.sql。
// 千万不要把 secret / service_role 钥匙写进任何网页文件。
const SUPABASE_URL = 'https://ocxushmwyhowtathqzbp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_6d7Mvk_wl2V_8JlnEKoaow_UPVPyiDm';
// 首页「热门」：数据还少的时候，先用这几篇
const HOT_FALLBACK = ['gt-dominance', 'math-bayes', 'life-midgley'];
