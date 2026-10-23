-- BTW 账号管理（在 supabase-setup.sql 和 supabase-hardening.sql 之后跑一次；重复跑也不会出错）。
-- 在 Supabase 后台 → SQL Editor 里整段粘贴，点 Run。
-- 作用：记下每个账号登录过的「设备编号」（浏览器里随机生成的，不是真实身份），后台能列出所有账号、
--      标出同一台设备上的多个账号，管理员可以删除账号。

-- 1. 账号和设备的对应关系：每个人只能写自己的，只有管理员能看
create table if not exists public.user_devices (
  user_id uuid not null references auth.users (id) on delete cascade,
  visitor text not null check (char_length(visitor) <= 40),
  first_seen timestamptz not null default now(),
  last_seen timestamptz not null default now(),
  primary key (user_id, visitor)
);
alter table public.user_devices enable row level security;
drop policy if exists "add own device" on public.user_devices;
drop policy if exists "update own device" on public.user_devices;
drop policy if exists "admins read devices" on public.user_devices;
create policy "add own device" on public.user_devices for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "update own device" on public.user_devices for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "admins read devices" on public.user_devices for select to authenticated using (public.is_admin());
revoke all on public.user_devices from anon, authenticated;
grant insert, update, select on public.user_devices to authenticated;

-- 2. 后台的账号列表：只有管理员能调用
create or replace function public.admin_users() returns json
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then
    raise exception 'not allowed';
  end if;
  return (select coalesce(json_agg(u order by u.created_at desc), '[]'::json) from (
    select a.id, a.email, a.created_at, a.last_sign_in_at, a.email_confirmed_at,
           exists (select 1 from public.admins m where m.user_id = a.id) as is_admin,
           coalesce((select json_agg(d.visitor) from public.user_devices d where d.user_id = a.id), '[]'::json) as devices
    from auth.users a
    order by a.created_at desc
    limit 1000) u);
end;
$$;
revoke execute on function public.admin_users() from public, anon;
grant execute on function public.admin_users() to authenticated;

-- 3. 删除账号：只有管理员能调用，而且不能删管理员（防止手滑把自己删掉）。删掉以后，这个人的进度、设备记录也一起删除
create or replace function public.admin_delete_user(target uuid) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_admin() then
    raise exception 'not allowed';
  end if;
  if exists (select 1 from public.admins where user_id = target) then
    raise exception 'cannot delete an admin';
  end if;
  delete from auth.users where id = target;
end;
$$;
revoke execute on function public.admin_delete_user(uuid) from public, anon;
grant execute on function public.admin_delete_user(uuid) to authenticated;
