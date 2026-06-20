# Harvest British College (SYS) — Education ERP & CRM

Full-stack education management platform for **Harvest British College** — CRM, class operations, payments, and three dedicated portals (admin, instructor, student) with a bilingual public website.

![Admin Login](../../10-harvest-british-college/screenshots/11-admin-login.png)

## Tech Stack

- Laravel 10, nwidart/laravel-modules, MySQL
- Livewire 3.5, Spatie Permission & Activity Log
- Twilio SMS, Maatwebsite Excel, JWT, Pusher, Sanctum
- Blade + Laravel UI, bilingual EN/AR

## Modules

| Module | Purpose |
|--------|---------|
| **Website** | Public college site — courses, offers, events, gallery, CMS pages |
| **CustomerPortal** | Student registration, OTP login, enrollment, payments, placement tests |
| **InstructorPortal** | Classes, attendance, exams, makeup sessions, monitoring reports |
| **Core Admin** | CRM leads, groups, schedules, HR, finance safes, 20+ reports |

## Key Features

- Lead CRM with sources, follow-ups, labels, and Excel import
- Group/class lifecycle: waiting lists, transfers, freeze/hold, SMS notifications
- Payment plans, methods, Fawry integration hooks, revenue tracking
- Employee HR: departments, jobs, vacations, resignations, document uploads
- Event calendar, placement tests, certificate requests, exam applicants
- Route-level Spatie RBAC with `permissionHandler` middleware
- Activity logging across admin actions

## Quick Start

```bash
cp .env.example .env
composer install && npm install
php artisan migrate
php artisan db:seed
php artisan serve --port=8209
```

Local admin (seed): `user@email.com` / `password`

## Documentation

- [Architecture](../../docs/architecture/harvest-british-college.md)
- [API Reference](../../docs/api/harvest-british-college.md)
- [Case Study](../../case-studies/harvest-british-college.md)

## Live

[harvestcollege.co.uk](https://harvestcollege.co.uk)

## Author

Abdel Rahman Waleed Ahmed
