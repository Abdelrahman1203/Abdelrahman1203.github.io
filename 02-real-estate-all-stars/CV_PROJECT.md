# Real Estate All-Stars — Brokers Got Talent

## One-line summary
Bilingual (EN/AR) real estate talent competition platform where brokers register, upload videos, receive votes, and purchase vote packages via payment gateway.

## Tech stack
- **Backend:** Laravel 10, PHP 8.1+, MySQL, Sanctum, Breeze
- **Frontend:** Blade, Vite 5, Tailwind CSS 3, Alpine.js
- **Integrations:** Fawaterak (payments), BeonSMS (OTP), DomPDF, Maatwebsite Excel, php-ffmpeg
- **i18n:** Full Arabic/English with separate LTR/RTL CSS

## Key features
- Contestant registration with phone OTP and multi-stage video upload
- Daily vote limits, interest toggling, vote purchase packages
- Fawaterak payment flow with webhooks and promo codes
- Public pages: home, contestants, judges, news, partners, sponsors, FAQ
- CMS-driven content from shared admin database

## CV bullet points
- Built **Real Estate All-Stars**, a bilingual Laravel contest platform with video uploads, daily voting, and Fawaterak payment integration.
- Implemented BeonSMS OTP verification, RTL/LTR UI, and CMS-driven marketing pages for a regional real estate competition.
- Integrated payment webhooks, promo codes, and contestant profile management for 150MB video submissions.

## Screenshots
See `screenshots/` — home/registration, news, judges, FAQ, partners, contact, OTP flow.

## Domain
realestateallstars.com
