AL NOOR QURAN ACADEMY — FIXED & UPGRADED (5 pages)
==================================================

FILES
-----

index.html    Home
about.html    About + Meet Our Tutors
courses.html  Courses
pricing.html  Pricing + FAQ
contact.html  Contact / Free trial form
style.css     Single consolidated stylesheet
script.js     Nav, scroll reveal, counters, FAQ, contact form
logo.png      Academy logo (header + footer, one file only)
favicon.png   Browser tab icon


WHAT WAS FIXED
--------------

1. CSS was mostly dead. The old style.css had two stacked themes and the
   newer "premium green" half targeted class names (.navbar, .feature-card,
   .hero-buttons, .price-card, .stats-section ...) that did not exist in the
   HTML, so most of that styling never applied. It is now ONE stylesheet
   whose selectors match the actual markup.

2. Contact form lost every lead. It only fired an alert() and threw the data
   away. It now builds a formatted message and opens WhatsApp with the
   details pre-filled, so enquiries actually reach you. No backend needed.

3. Form fields had no name attributes, so nothing could be read from them.
   All fields are now named and validated.

4. Logo was inconsistent (logo.jpeg in header, logo.png in footer on the live
   site). Every page now uses logo.png in both places.

5. Missing page titles/descriptions per page — each page now has its own
   <title> and meta description for SEO.

6. Active nav link was never highlighted. Each page now marks its own link.


WHAT WAS ADDED
--------------

- Trust strip on the home page (certified tutors / safe 1-to-1 / free trial)
- Testimonials section with 3 parent & student reviews
- "Meet Our Tutors" section on About with 3 tutor profiles
- FAQ accordion on Pricing (6 questions, click to expand)
- "MOST POPULAR" badge on the Standard plan
- Free-level-assessment CTA block on the Courses page
- Sibling/family discount line under pricing


BEFORE YOU GO LIVE — REPLACE THESE
----------------------------------

- Tutor names, photos and qualifications in about.html (currently samples)
- Testimonials in index.html — use real reviews from your students
- Stats in index.html: data-count values are 500 / 10 / 25 / 8.
  Put your REAL numbers there. Inflated numbers cost you trust.
- Payment methods answer in the pricing.html FAQ
- WhatsApp number appears in: the top bar, footer, floating button, and
  WHATSAPP_NUMBER at the top of script.js. Change all of them together.


TO PUBLISH ON GITHUB PAGES
--------------------------

Upload all files to the repo root (not inside a folder), then enable
Settings > Pages > Branch: main > /(root).
