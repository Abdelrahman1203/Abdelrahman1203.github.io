# Real Estate All-Stars — Brokers Got Talent

Bilingual real estate talent competition platform with video uploads, daily voting, and Fawaterak payment integration.

![Home Page](../../02-real-estate-all-stars/screenshots/01-home-register.png)

## Tech Stack

- Laravel 10, MySQL, Sanctum, Breeze
- Blade, Vite 5, Tailwind CSS 3, Alpine.js
- Fawaterak payments, BeonSMS OTP, php-ffmpeg

## Features

- Contestant registration with phone OTP verification
- Multi-stage video upload (up to 150MB)
- Daily vote limits + paid vote packages
- CMS-driven public pages (EN/AR RTL)
- Payment webhooks and promo codes

## Quick Start

```bash
cp .env.example .env
composer install && npm install
php artisan migrate --seed
php artisan serve --port=8201
npm run dev
```

## Documentation

- [Architecture](../../docs/architecture/real-estate-all-stars.md)
- [API Reference](../../docs/api/real-estate-all-stars.md)
- [Case Study](../../case-studies/real-estate-all-stars.md)

## Live Domain

realestateallstars.com

## Author

Abdel Rahman Waleed Ahmed
