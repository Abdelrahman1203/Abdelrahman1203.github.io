# Case Study: BoatBnB — Large Multi-Role Boat Rental Marketplace

## Client Context

A marine-tech product needed a **full marketplace backend and operations platform** for boat rentals — not a small CRUD app. Guests, boat hosts, marina agencies, and service providers all needed role-specific workflows, while admins needed a real operations SPA for users, boats, bookings, promos, and analytics.

## Problem

- No unified API surface for guest booking, host operations, agency fleet workflows, and service providers
- Manual booking coordination, payout tracking, and support handling
- Need for GPS-aware discovery, promotions/loyalty, insurance, and media uploads
- Admin needed a usable SPA, not only raw APIs
- Production concerns: auth, OTP, rate limiting, deploy hardening, Dockerized environments

## Solution

**Sole developer responsible for requirements, architecture, database design, backend, Vue admin, integrations, security, testing, deployment, and maintenance.**

Delivered **BoatBnB** as a large Laravel 12 platform:

| Role / surface | Capabilities |
|----------------|--------------|
| Guest / customer API | Search/GPS discovery, book, pay, wishlist, reviews, chat, referrals, support |
| Host API | List boats, manage bookings, payouts |
| Agency API | Fleet workflows, boat transfer requests, payouts |
| Service provider API | Publish add-on services |
| Admin API + Vue 3 SPA | Users, boats, bookings, promo codes, analytics, moderation |

### Major modules delivered

- Auth (Sanctum, OTP, Firebase, Google/Apple Socialite hooks, Smsala WhatsApp/SMS OTP)
- Boat discovery & GPS nearby search
- Booking lifecycle + QR codes + refunds/invoices
- Payments & host/agency payouts
- REST chat with attachments
- Referrals, loyalty tiers, promo codes
- Wishlist, saved searches, reviews
- Support tickets
- Insurance policies
- Content pages (terms/privacy/FAQ)
- Weather integration (OpenWeatherMap)
- AWS S3 file pipeline
- Notifications
- Security middleware + nginx/fail2ban deploy configs + Docker Sail

## Project Details

| Field | Value |
|-------|-------|
| Industry | Travel & Marine Services |
| Role | Sole Full-Stack Engineer |
| Duration | Jul 2025 – Jan 2026 |
| Team Size | 1 |
| Surfaces | Role-based mobile APIs + Vue 3 Admin SPA + Admin REST |
| Locales | EN/AR platform · EN/FR/AR admin |

## Business Impact

| Metric | Result |
|--------|--------|
| Ownership | Full lifecycle as sole developer |
| API breadth | 26 mobile API controllers across marketplace domains |
| Roles | Guest, host, agency, service provider, admin |
| Ops UI | Vue 3 admin for users/boats/bookings/promos/analytics |
| Growth systems | Referrals + loyalty + promo codes |
| Ops systems | Support tickets + insurance + content CMS |
| Delivery | Dockerized environments + production security hardening |

## End-to-end ownership

Requirements → DB design → Layered Laravel API → Vue 3 admin → Mobile role APIs → Integrations → Security → Docker deployment → Support

## Technologies

Laravel 12 · PHP 8.2 · Vue 3 · Vite · MySQL · Redis · Sanctum · Socialite · Stripe · AWS S3 · Firebase · Smsala · OpenWeatherMap · QR codes · Scribe · Docker · Nginx/fail2ban

## Links

- **Portfolio:** https://abdelrahman1203.github.io/project.html?id=04-boatbnb-erp-monorepo
- **GitHub (project):** https://github.com/Abdelrahman1203/boatbnb-erp-monorepo
- **GitHub (full portfolio):** https://github.com/Abdelrahman1203/Abdelrahman1203.github.io

---

**Engineer:** Abdel Rahman Waleed Ahmed
