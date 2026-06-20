# Case Study: BoatBnB + ERP — Multi-Platform Boat Rental Marketplace

## Client Context

A marine-tech startup needed a **complete boat rental ecosystem** — marketplace plus back-office ERP — covering guests, boat owners, marina agencies, on-water service providers, and internal admin operations across **10 languages**.

## Problem

- No unified platform for customers, providers, agencies, and administrators
- Manual payment reconciliation and off-platform coordination between booking parties
- No GPS-aware discovery for boats at different marinas
- Product required multilingual launch for Gulf and international markets
- Back-office ERP needed alongside customer-facing apps in one maintainable codebase

## Solution

**Sole developer responsible for business analysis, architecture, frontend, backend, infrastructure, testing, deployment, and maintenance.**

Designed and delivered **BoatBnB + ERP** — a Laravel 12 monorepo with five role-based applications:

| Role | Capabilities |
|------|--------------|
| Customer / guest | Search, book, pay (Stripe), chat (Agora), reviews, referrals |
| Service provider | Publish add-on services (captain, catering, events) |
| Host | List boats, manage availability, accept bookings |
| Agency | Fleet management, inter-agency boat transfers |
| Admin | Moderation, ERP dashboard, analytics, insurance, payouts |

### Key modules

- **Boat discovery & GPS tracking** — nearby search, radius filters, marine weather
- **Booking engine** — scheduling, rental types, promo codes, loyalty, insurance
- **Stripe payments** — bookings, commissions, refunds, provider payouts
- **Real-time chat with Agora** — messaging API + voice/video calls
- **10-language localization** — full mobile and admin i18n workflows
- **Integrated ERP** — admin operations, reporting, moderation in same monorepo

## Project Details

| Field | Value |
|-------|-------|
| Industry | Travel & Marine Services |
| Role | Sole Full-Stack Engineer & Solutions Architect |
| Duration | Jul 2025 – Jan 2026 |
| Team Size | 1 |
| Platforms | Web Admin, Provider Portal, Customer App, Agency App |
| Languages | 10 |

## Business Impact

| Metric | Result |
|--------|--------|
| Applications delivered | 5 role-based apps + admin ERP |
| Languages | 10-language mobile + admin UI |
| Payments | End-to-end Stripe — booking, commission, payout |
| Communication | Agora realtime chat + REST messaging |
| Discovery | GPS tracking replaces manual marina browsing |
| Ownership | Full lifecycle as sole developer |

## Technologies

Laravel 12 · PHP 8.2 · Vue.js 3 · MySQL · MongoDB · Redis · Sanctum · Socialite · Stripe · AWS S3 · Agora SDK · Firebase · Docker · Nginx

## Links

- **Portfolio gallery:** [View screenshots](../website/project.html?id=04-boatbnb-erp-monorepo)
- **GitHub (project):** https://github.com/Abdelrahman1203/boatbnb-erp-monorepo
- **GitHub (full portfolio):** https://github.com/Abdelrahman1203/Abdelrahman1203.github.io

---

**Engineer:** Abdel Rahman Waleed Ahmed
