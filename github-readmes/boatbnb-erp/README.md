# BoatBnB + ERP Arabia Monorepo

Laravel 12 monorepo combining warehouse ERP (Vue 3 + MongoDB) and boat rental marketplace (Stripe, OAuth, AWS S3).

## Tech Stack

- Laravel 12, Sanctum, Socialite (Google/Apple)
- ERP: Vue 3, Pinia, MongoDB, Redis
- BoatBnB: Vue 3, Vuex, MySQL, Stripe, AWS S3

## Features

**ERP Arabia:** Purchases, transfers, adjustments, 10+ reports  
**BoatBnB:** Boat search/bookings, Stripe payments, host APIs, referrals, chat

![Mobile Home Search](../../04-boatbnb-erp-monorepo/screenshots/11-mobile-home-search.png)

## Mobile App Screens

| Screen | Description |
|--------|-------------|
| Splash & Open | App launch with English toggle |
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
```

## Documentation

- [Architecture](../../docs/architecture/boatbnb-erp.md)
- [API Reference](../../docs/api/boatbnb-erp.md)
- [Case Study](../../case-studies/boatbnb-erp.md)

## Note

ERP UI primarily in standalone `vue-app/` repo — see [erp-arabia](../erp-arabia/README.md).

## Author

Abdel Rahman Waleed Ahmed
