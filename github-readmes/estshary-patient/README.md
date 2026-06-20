# Estshary — Patient Website

Public-facing patient portal for doctor search, online appointment booking, and medical services browsing.

## Tech Stack

- Laravel 10, MySQL (shared with admin), Blade, Bootstrap, jQuery

## Features

- AJAX doctor search/filter by city, area, specialization
- Real-time available appointment slots
- Service and operation booking flows
- Enterprise/clinic profiles with filtered reviews

## Quick Start

```bash
cp .env.example .env
composer install
php artisan serve --port=8207
```

Requires shared MySQL database with [estshary-admin](../estshary-admin/README.md).

## Documentation

- [Architecture](../../docs/architecture/estshary-admin.md)
- [Case Study](../../case-studies/estshary-patient.md)

## Author

Abdel Rahman Waleed Ahmed
