# BoatBnB + ERP Arabia Monorepo

## One-line summary
Hybrid Laravel 12 monorepo combining **ERP Arabia** (warehouse/inventory ERP) and **BoatBnB** (Airbnb-style boat rental marketplace with mobile + admin APIs).

## Tech stack
- **Backend:** Laravel 12, PHP 8.2+, Sanctum, Socialite (Google/Apple)
- **ERP DB:** MongoDB | **BoatBnB DB:** MySQL | **Cache:** Redis
- **Payments:** Stripe | **Storage:** AWS S3 | **Email:** SendGrid
- **ERP Frontend:** Vue 3, Pinia, Tailwind CSS 4 | **BoatBnB Admin:** Vue 3, Vuex

## Key features
**ERP Arabia:** Purchases, transfers, adjustments, 10+ reports, daily summary emails  
**BoatBnB:** Boat search/bookings, Stripe payments, host/provider APIs, OAuth, referrals, chat

## CV bullet points
- Architected a Laravel 12 monorepo with **ERP Arabia** (Vue 3 + MongoDB warehouse ERP) and **BoatBnB** (boat rental REST API with Stripe and OAuth).
- Built mobile REST APIs for boat discovery, bookings, payouts, and admin moderation dashboards.
- Integrated Stripe payments, Firebase auth, WhatsApp OTP, and AWS S3 file storage.

## Screenshots
See `screenshots/` — project welcome/entry page.

## Note
Merged codebase; ERP UI lives primarily in `vue-app/` (see folder 03-erp-arabia).
