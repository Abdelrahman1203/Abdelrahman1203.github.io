# Case Study: BoatBnB — Full Boat Booking Platform

## Client Context

A marina-tech startup needed a **complete boat rental ecosystem** — not just a listing site — covering guests who book trips, individual boat owners, marina agencies managing fleets, on-water service providers, and internal admin operations across multiple countries and languages.

## Problem

- Fragmented booking flows: guests, hosts, and service providers had no shared platform
- No GPS-aware discovery for boats anchored or moored at different marinas
- Payments, payouts, and refunds required manual reconciliation
- Support and coordination between guests and hosts relied on phone calls, not in-app chat
- Product needed to launch in **10 languages** for Gulf and international markets

## Solution

Designed and built **BoatBnB** — a Laravel 12 backend powering **five role-based experiences**:

| Role | Capabilities |
|------|--------------|
| Guest / client | Search, book, pay (Stripe), chat, reviews, wishlist, referrals |
| Host | List boats, set availability, accept bookings, manage media |
| Service provider | Publish add-on services (captain, catering, events) |
| Agency | Fleet management, boat transfers between agencies |
| Admin | Moderation, analytics, insurance, user/boat approval |

### Core modules

- **GPS boat discovery** — latitude/longitude on every listing, nearby search with radius filters, featured and category browse
- **Booking engine** — rental types (bareboat, with captain, with owner), promo codes, loyalty tiers, insurance add-ons
- **Stripe payments** — payment methods, refunds, invoices, host/agency payouts
- **Chat** — REST messaging with attachments + **Agora** for realtime voice/video between parties
- **Operations** — push notifications, support tickets, saved searches, marine weather by boat location
- **Vue 3 admin** — dashboards for boats, bookings, users, and analytics

## Business Impact

| Metric | Result |
|--------|--------|
| User roles supported | 5 distinct apps (guest, host, provider, agency, admin) |
| Languages | 10-language mobile + admin UI |
| Discovery | GPS nearby search replaces manual marina browsing |
| Payments | End-to-end Stripe — booking, refund, payout |
| Communication | In-app chat + Agora replaces off-platform phone coordination |
| Media | AWS S3 pipeline for boat photos, videos, and documents |

## Technologies

Laravel 12 · Vue 3 · Stripe · Agora · AWS S3 · Sanctum · Firebase · Socialite · Redis · MySQL

## Screenshots

View the full gallery: [BoatBnB mobile + admin screenshots](../website/project.html?id=04-boatbnb-erp-monorepo)

Mobile: splash, home search, yacht/boat listings, jet ski, services marketplace, rental type picker, boat detail, user profile, bookings.  
Admin: login, dashboard, boats, bookings, users, analytics.

---

**Engineer:** Abdel Rahman Waleed Ahmed
