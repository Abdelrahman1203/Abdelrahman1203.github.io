# BoatBnB + ERP — Large Multi-Role Boat Rental Marketplace Platform

**Client:** Freelance

## One-line summary
Large Laravel 12 boat-rental marketplace platform with role-based APIs for guests, hosts, agencies, and service providers, a Vue 3 admin SPA, booking/payments/payouts, referrals, loyalty, insurance, support tickets, GPS discovery, weather, S3 media, and production security/deployment workflows — delivered end-to-end as sole developer.

## Role & context
| Field | Value |
|-------|-------|
| **Client** | Freelance |
| **Industry** | Travel & Marine Services |
| **Role** | Sole Full-Stack Engineer |
| **Duration** | Jul 2025 – Jan 2026 |
| **Team Size** | 1 |
| **Surfaces** | Mobile APIs (guest/host/agency/service provider) · Vue 3 Admin SPA · Admin REST APIs |
| **Locales** | Laravel EN/AR · Admin EN/FR/AR |

**Sole developer responsible for requirements analysis, architecture, database design, backend APIs, Vue admin, integrations, security hardening, testing, Docker deployment, and maintenance.**

## End-to-end ownership
Requirements → Database design → Layered Laravel API (Controllers → Services → Repositories) → Vue 3 admin → Role-based mobile APIs → Integrations → Security/hardening → Docker/Sail deployment → Production support

## Tech stack
Laravel 12 · PHP 8.2 · Vue 3 · Vite · Vue Router · Vuex · Tailwind CSS · MySQL · Redis · Sanctum · Socialite (Google/Apple) · Stripe · AWS S3 · Firebase · Smsala (SMS/WhatsApp OTP) · OpenWeatherMap · Simple QR Code · Scribe · Docker (Sail) · Nginx/fail2ban deploy hardening

## Platform surfaces (what was built)
| Surface | What it covers |
|---------|----------------|
| Guest / customer API | Discovery, booking, payments, wishlist, reviews, chat, referrals, support |
| Host API | Boat management, availability, booking accept/reject, payouts |
| Agency API | Fleet workflows, boat transfer requests, payouts |
| Service provider API | Add-on services (captain, catering, events) |
| Admin API + Vue SPA | Users, boats, bookings, promo codes, analytics, moderation, settings |
| Shared platform services | Auth/OTP, files/S3, notifications, content pages, weather, insurance, loyalty |

## Domain modules (from production codebase)
- **Auth & identity** — Sanctum sessions, OTP flows, Firebase token auth, Google/Apple Socialite hooks, Smsala SMS/WhatsApp OTP
- **Boat discovery** — search, featured, nearby/GPS radius, categories, popular, recommendations
- **Boat operations** — listings, tags, inter-user/agency boat transfer requests
- **Booking engine** — create, accept/reject, cancel, reschedule, refund, invoice, booking QR codes
- **Payments & payouts** — payment records, invoices, refunds, host/agency payout workflows (Stripe package + payout methods)
- **Chat** — conversations, messages, attachments (REST chat APIs)
- **Growth** — referrals, loyalty tiers, promo codes, wishlist, saved searches, reviews
- **Support** — support tickets + replies (user and admin)
- **Insurance** — insurance policy workflows
- **Content CMS** — terms, privacy, FAQ content pages (EN/AR)
- **Marine context** — weather data via OpenWeatherMap
- **Files** — AWS S3 upload pipeline for profiles/documents/media
- **Notifications** — notification APIs + push token storage
- **Admin analytics** — dashboard analytics, moderation, platform settings
- **Security / ops** — rate limits, OTP-protected admin routes, DDoS/IP/security middleware, nginx rate-limit and fail2ban deploy configs, Docker Sail

## Architecture highlights
- Layered backend: Controllers → Services → Repositories → Models
- Large FormRequest validation surface and API Resources
- Role middleware separating guest, host, agency, service_provider, and admin capabilities
- Vue 3 admin SPA (`boatbnb-admin`) for day-to-day operations

## CV bullet points
- Delivered **BoatBnB**, a large multi-role boat-rental marketplace platform, as **sole developer** from requirements and architecture through APIs, Vue admin, integrations, security hardening, and Docker deployment.
- Built role-based REST APIs for **guests, hosts, agencies, and service providers**, covering discovery, bookings, payments/payouts, chat, referrals, loyalty, insurance, support tickets, and notifications.
- Implemented GPS-aware boat discovery, booking QR codes, promo/loyalty workflows, AWS S3 media uploads, Firebase auth hooks, and Smsala SMS/WhatsApp OTP.
- Delivered a **Vue 3 admin SPA** for users, boats, bookings, promo codes, and analytics, with bilingual EN/AR platform content and multilingual admin locales (EN/FR/AR).
- Hardened production delivery with Sanctum auth, security middleware, nginx/fail2ban deploy configs, and Docker Sail environments.

## Links
- **Portfolio:** https://abdelrahman1203.github.io/project.html?id=04-boatbnb-erp-monorepo
- **GitHub (project docs):** https://github.com/Abdelrahman1203/boatbnb-erp-monorepo
- **GitHub (full portfolio):** https://github.com/Abdelrahman1203/Abdelrahman1203.github.io
