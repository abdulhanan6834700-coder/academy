# Student + Admin Portal Setup

This version uses Supabase as the online database and authentication service. The website itself does not need you to manually save student records.

## 1. Create the database
1. Create a Supabase project.
2. Open **SQL Editor**.
3. Paste all of `portal/supabase-schema.sql` and run it.

## 2. Supabase connection
This fixed package is already connected to the configured Supabase project using the browser-safe **publishable** key. No manual key replacement is needed.

Do NOT add a Secret/service-role key to any HTML file.

## 3. Authentication setting
For the easiest setup, in Supabase Authentication settings you can turn off email confirmation. If email confirmation remains on, students may need to confirm their email before logging in.

## 4. Make yourself an admin
First create your admin account from the Student Portal or Supabase Authentication → Users using your email/password.
Then in Supabase SQL Editor run:

```sql
update public.profiles
set role = 'admin'
where id = (select id from auth.users where email = 'YOUR_ADMIN_EMAIL');
```

Replace `YOUR_ADMIN_EMAIL` with your actual admin email and run it once.

## 5. Upload the website
Upload these files to your hosting:
- `index.html`
- `student-portal.html`
- `admin-portal.html`
- your existing images/assets

The existing website design remains the main homepage.

## How it works
1. A visitor fills the admission form.
2. The admission is saved automatically in Supabase.
3. The student receives a Student ID after successful submission.
4. The application also opens WhatsApp with the admission details.
5. You log in at `admin-portal.html`.
6. You see admissions automatically.
7. You approve/reject applications and update teacher, schedule, attendance, progress and fees.
8. A student account can then log in at `student-portal.html` and see their own information.

## Important
This is a real online database system, not browser `localStorage`. Student records can therefore be accessed from different devices after deployment.


## FIXED BUILD
This package is already configured for the Supabase project. The browser-safe publishable key is embedded in the Admin and Student Portal pages; no secret/service-role key is included.
