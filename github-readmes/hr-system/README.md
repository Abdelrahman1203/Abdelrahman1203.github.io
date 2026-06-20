# HR System — Payroll & Attendance Platform

Comprehensive HR platform with ZKTeco biometric integration, configurable payroll rule engine, and bilingual React admin UI.

![Dashboard](../../08-hr-system/screenshots/02-dashboard.png)

## Tech Stack

- **Backend:** Laravel 12, MongoDB, Sanctum
- **Frontend:** React 19, React Router 7, Vite 7, Tailwind CSS 4
- **Testing:** PHPUnit, Jest, Vitest, Playwright

## Features

- Employee lifecycle with auto-generated codes
- Configurable deduction/overtime rule engine with violation escalation
- ZKTeco biometric push endpoint + manual attendance
- Leave management with balance tracking
- Payroll generation with Excel/PDF export
- 17 admin modules, bilingual EN/AR RTL

## Quick Start

```bash
cp .env.example .env
composer install && npm install
php artisan migrate --seed
php artisan serve
npm run dev
```

**Demo login:** `admin@test.com` / `password123`

## Documentation

- [Architecture](../../docs/architecture/hr-system.md)
- [API Reference](../../docs/api/hr-system.md)
- [Case Study](../../case-studies/hr-system.md)

## Author

Abdel Rahman Waleed Ahmed
