-- BTW 的数据库设置。在 Supabase 后台 → SQL Editor 里整段粘贴，点 Run，跑一次就行（重复跑也不会出错）。
-- 安全原则：每张表都开行级安全（RLS）；普通读者只能读写自己的进度；点击记录和留言谁都能写、只有管理员能看。

-- 1. 每个用户的进度、收藏、生词：每人一行，整份存成 JSON
create table if not exists public.user_data (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.user_data enable row level security;
drop policy if exists "read own data" on public.user_data;
drop policy if exists "insert own data" on public.user_data;
drop policy if exists "update own data" on public.user_data;
create policy "read own data" on public.user_data for select to authenticated using ((select auth.uid()) = user_id);
create policy "insert own data" on public.user_data for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "update own data" on public.user_data for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
grant select, insert, update on public.user_data to authenticated;

-- 2. 管理员名单：没有任何 policy，所以网页上谁都读不到也改不了，只能在这个后台里改
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);
alter table public.admins enable row level security;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- 3. 匿名的阅读记录：哪篇被打开（open）、被读完（done）。visitor 是浏览器里随机生成的编号，不是真实身份
create table if not exists public.events (
  id bigint generated always as identity primary key,
  article_id text not null check (char_length(article_id) <= 60),
  kind text not null check (kind in ('open', 'done')),
  visitor text check (char_length(visitor) <= 40),
  created_at timestamptz not null default now()
);
alter table public.events enable row level security;
drop policy if exists "anyone can add events" on public.events;
drop policy if exists "admins read events" on public.events;
create policy "anyone can add events" on public.events for insert to anon, authenticated with check (true);
create policy "admins read events" on public.events for select to authenticated using (public.is_admin());
grant insert on public.events to anon, authenticated;
grant select on public.events to authenticated;

-- 4. 读者留言 / 反馈：谁都能写，只有管理员能看
create table if not exists public.feedback (
  id bigint generated always as identity primary key,
  user_id uuid default auth.uid() references auth.users (id) on delete set null,
  article_id text check (char_length(article_id) <= 60),
  message text not null check (char_length(message) between 1 and 2000),
  contact text check (char_length(contact) <= 200),
  created_at timestamptz not null default now()
);
alter table public.feedback enable row level security;
drop policy if exists "anyone can send feedback" on public.feedback;
drop policy if exists "admins read feedback" on public.feedback;
create policy "anyone can send feedback" on public.feedback for insert to anon, authenticated
  with check (user_id is null or user_id = (select auth.uid()));
create policy "admins read feedback" on public.feedback for select to authenticated using (public.is_admin());
grant insert on public.feedback to anon, authenticated;
grant select on public.feedback to authenticated;

-- 5. 首页「热门」：只返回最近 30 天被最多人打开的几篇文章的 id，不返回任何数字
create or replace function public.top_articles(n int default 3) returns table (article_id text)
language sql stable security definer set search_path = '' as $$
  select e.article_id
  from public.events e
  where e.kind = 'open' and e.created_at > now() - interval '30 days'
  group by e.article_id
  order by count(distinct e.visitor) desc
  limit least(greatest(n, 1), 10);
$$;
grant execute on function public.top_articles(int) to anon, authenticated;

-- 6. 后台数据：只有管理员能调用，其他人调用会报错
create or replace function public.admin_stats() returns json
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then
    raise exception 'not allowed';
  end if;
  return json_build_object(
    'users', (select count(*) from auth.users),
    'users_7d', (select count(*) from auth.users where created_at > now() - interval '7 days'),
    'visitors_7d', (select count(distinct visitor) from public.events where created_at > now() - interval '7 days'),
    'articles', (select coalesce(json_agg(t order by t.visitors desc), '[]'::json) from (
      select article_id,
             count(*) filter (where kind = 'open') as opens,
             count(distinct visitor) filter (where kind = 'open') as visitors,
             count(distinct visitor) filter (where kind = 'done') as finishes
      from public.events group by article_id) t),
    'feedback', (select coalesce(json_agg(f), '[]'::json) from (
      select id, article_id, message, contact, created_at
      from public.feedback order by created_at desc limit 200) f)
  );
end;
$$;
revoke execute on function public.admin_stats() from public, anon;
grant execute on function public.admin_stats() to authenticated;
revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;
