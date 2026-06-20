# BoatBnB — Full Boat Booking Platform

Multi-role boat rental marketplace: mobile apps for **guests, hosts, service providers, and agencies**, plus a Vue 3 admin panel — Laravel 12 backend with Stripe, GPS discovery, Agora chat, and 10-language support.

## Tech Stack

- **Backend:** Laravel 12, Sanctum, Socialite (Google/Apple), Firebase auth
- **Admin:** Vue 3, Vuex, vue-i18next
- **Payments:** Stripe (bookings, refunds, payouts)
- **Chat:** Agora (realtime) + REST messaging API
- **Location:** GPS coordinates, nearby/radius search, marine weather
- **Storage:** AWS S3

## User Roles

| Role | Description |
|------|-------------|
| Guest / client | Book boats and services, pay, chat, review |
| Host | List and manage own boats and bookings |
| Service provider | Offer captain, catering, events, and add-ons |
| Agency | Manage fleets and inter-agency boat transfers |
| Admin | Platform moderation, analytics, insurance |

## Features

- GPS boat discovery (search, nearby, featured, categories)
- Booking flow with rental types, promo codes, loyalty
- Service provider marketplace attached to boats
- Stripe payment methods, refunds, invoices, payouts
- Enhanced chat (messages, attachments, unread counts) + Agora voice/video
- 10-language UI (mobile + admin)
- Referrals, support tickets, insurance, push notifications
- OAuth + OTP + WhatsApp verification

![Mobile Home Search](../../04-boatbnb-erp-monorepo/screenshots/11-mobile-home-search.png)

## Mobile App Screens

| Screen | Description |
|--------|-------------|
| Splash & Open | App launch with language toggle |
| Home Search | Categories: yacht, jet ski, services |
| Yacht & Boats | Listings with captain/bareboat options |
| Jet Ski | Hourly sea rentals |
| Services | Catering, captain, events add-ons |
| Rental Type | Bareboat / with captain / with owner |
| Boat Detail | Booking flow with Stripe |
| Profile & Bookings | User app with UAE Pass hook |

## Admin Dashboard

Vue 3 admin: boats, bookings, users, analytics.

## Quick Start

```bash
cp .env.example .env
composer install && npm install
php artisan migrate
php artisan serve --port=8208
# Admin SPA (separate terminal)
cd boatbnb-admin && npm install && npm run dev
```

## Documentation

- [Architecture](../../docs/architecture/boatbnb-erp.md)
- [API Reference](../../docs/api/boatbnb-erp.md)
- [Case Study](../../case-studies/boatbnb-erp.md)

## Author

Abdel Rahman Waleed Ahmed
