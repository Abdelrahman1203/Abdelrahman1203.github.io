# TRC — Real Estate Referral Platform

Real estate referral and membership platform with admin pipeline, commission wallets, and mobile property discovery API.

![Admin Login](../../09-trc-referrals/screenshots/01-admin-login.png)

## Tech Stack

- Laravel 10, MySQL, Breeze, Sanctum, Spatie Permission
- Blade admin + Tailwind CSS + Alpine.js
- DomPDF, Maatwebsite Excel, FCM push notifications

## Features

- Admin referral pipeline with multi-stage processing
- Developer/project/unit catalog management
- Commission wallet and withdrawal tracking
- Mobile REST API for property browsing and referrals
- Provider onboarding with staged workflow

## Quick Start

```bash
cp .env.example .env
composer install && npm install
php artisan migrate --seed
php artisan serve --port=8203
npm run dev
```

**Demo login:** Phone admin / Password `123456`

## Documentation

- [Architecture](../../docs/architecture/trc-referrals.md)
- [API Reference](../../docs/api/trc-referrals.md)
- [Case Study](../../case-studies/trc-referrals.md)

## Live Domain

t-r-c.online

## Author

Abdel Rahman Waleed Ahmed
