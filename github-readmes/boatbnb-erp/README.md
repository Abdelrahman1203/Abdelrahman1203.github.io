# BoatBnB + ERP Arabia Monorepo

Laravel 12 monorepo combining warehouse ERP (Vue 3 + MongoDB) and boat rental marketplace (Stripe, OAuth, AWS S3).

## Tech Stack

- Laravel 12, Sanctum, Socialite (Google/Apple)
- ERP: Vue 3, Pinia, MongoDB, Redis
- BoatBnB: Vue 3, Vuex, MySQL, Stripe, AWS S3

## Features

**ERP Arabia:** Purchases, transfers, adjustments, 10+ reports  
**BoatBnB:** Boat search/bookings, Stripe payments, host APIs, referrals, chat

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
