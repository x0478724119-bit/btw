-- BTW 数据库加固（在 supabase-setup.sql 之后跑一次；重复跑也不会出错）。
-- 在 Supabase 后台 → SQL Editor 里整段粘贴，点 Run。

-- 1. 权限收紧：先把网页端（anon = 没登录的人，authenticated = 登录的人）的权限全部收回，再只给需要的那几样。
--    这样就算以后有人改错了安全规则，网页端也删不了、改不了别人的东西。
revoke all on public.user_data, public.admins, public.events, public.feedback from anon, authenticated;
grant select, insert, update on public.user_data to authenticated;
grant insert on public.events to anon, authenticated;
grant select on public.events to authenticated;
grant insert on public.feedback to anon, authenticated;
grant select on public.feedback to authenticated;
-- events 和 feedback 的编号列是自增的，插入时要用到序列
grant usage on all sequences in schema public to anon, authenticated;

-- 2. 每个人的进度最多 1MB，防止有人往自己那一行塞巨量数据
alter table public.user_data drop constraint if exists user_data_size;
alter table public.user_data add constraint user_data_size check (octet_length(data::text) < 1000000);

-- 3. 防刷：阅读记录每个浏览器每小时最多 300 条；留言全站每 10 分钟最多 30 条
alter table public.events alter column visitor set not null;

create or replace function public.events_throttle() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if (select count(*) from public.events
      where visitor = new.visitor and created_at > now() - interval '1 hour') >= 300 then
    raise exception 'too many events';
  end if;
  return new;
end;
$$;
drop trigger if exists events_throttle on public.events;
create trigger events_throttle before insert on public.events for each row execute function public.events_throttle();

create or replace function public.feedback_throttle() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if (select count(*) from public.feedback where created_at > now() - interval '10 minutes') >= 30 then
    raise exception 'too many messages, try again later';
  end if;
  return new;
end;
$$;
drop trigger if exists feedback_throttle on public.feedback;
create trigger feedback_throttle before insert on public.feedback for each row execute function public.feedback_throttle();

-- 4. 两个防刷函数只给触发器用，网页端不能直接调用
revoke execute on function public.events_throttle() from public, anon, authenticated;
revoke execute on function public.feedback_throttle() from public, anon, authenticated;

-- 5. 查询加速：防刷要按时间数
create index if not exists events_visitor_time on public.events (visitor, created_at);
create index if not exists feedback_time on public.feedback (created_at);
