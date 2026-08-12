-- Al Noor / Fatima Islamic Academy Portal database
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'student' check (role in ('student','admin')),
  student_code text unique,
  created_at timestamptz not null default now()
);

create table if not exists public.admissions (
  id uuid primary key default gen_random_uuid(),
  student_code text unique not null default ('STU-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  student_name text not null,
  age int not null check (age between 1 and 100),
  gender text not null,
  country text not null,
  parent_name text not null,
  parent_phone text not null,
  parent_email text not null,
  course text not null,
  message text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.student_records (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  course text,
  teacher text,
  class_schedule text,
  attendance_percent numeric(5,2) default 0,
  progress text default '',
  fee_status text default 'Pending',
  notes text default '',
  updated_at timestamptz not null default now(),
  unique(student_id)
);

alter table public.profiles enable row level security;
alter table public.admissions enable row level security;
alter table public.student_records enable row level security;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.profiles p where p.id = auth.uid() and p.role='admin'); $$;

-- Public website visitors may submit an admission application.
drop policy if exists "public can submit admissions" on public.admissions;
create policy "public can submit admissions" on public.admissions for insert to anon, authenticated with check (true);

-- Students can read only their own profile and record.
drop policy if exists "students read own profile" on public.profiles;
create policy "students read own profile" on public.profiles for select to authenticated using (id=auth.uid() or public.is_admin());
drop policy if exists "students read own record" on public.student_records;
create policy "students read own record" on public.student_records for select to authenticated using (student_id=auth.uid() or public.is_admin());

-- Admins can manage everything needed by the dashboard.
drop policy if exists "admins manage admissions" on public.admissions;
create policy "admins manage admissions" on public.admissions for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admins manage profiles" on public.profiles;
create policy "admins manage profiles" on public.profiles for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "admins manage records" on public.student_records;
create policy "admins manage records" on public.student_records for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- When a new Auth user signs up, create a student profile automatically.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name','Student'), 'student')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users for each row execute procedure public.handle_new_user();

-- Optional helper: automatically create a blank student record after profile creation.
create or replace function public.create_student_record()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if new.role='student' then
    insert into public.student_records(student_id) values(new.id) on conflict(student_id) do nothing;
  end if;
  return new;
end;
$$;

drop trigger if exists after_profile_created on public.profiles;
create trigger after_profile_created
after insert on public.profiles for each row execute procedure public.create_student_record();
