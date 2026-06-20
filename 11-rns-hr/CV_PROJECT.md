# RNS HR — Multi-Tenant HR Platform (RNS Cinemas)

## One-line summary
Enterprise HRMS for cinema branch operations — employees, ZKTeco biometric attendance, configurable payroll rules, leave/violations, multi-tenant MongoDB SaaS, and bilingual React admin — live at **hr-app.rnscinemas.com**.

## Tech stack
- **Backend:** Laravel 12, PHP 8.3, MongoDB (multi-tenant landlord + tenant DBs), Sanctum
- **Frontend:** React 19, React Router 7, TanStack Query, Tailwind CSS 4, Vite 6, Radix UI
- **Integrations:** ZKTeco desktop bridge, device push APIs, OpenAI-compatible HR assistant
- **Testing:** PHPUnit, Vitest, Playwright E2E, k6 load smoke
- **Deploy:** Docker, cPanel, GitHub Actions CI

## Key features
- **22 HR modules:** employees, attendance (v2), leave, excuses, violations, payroll, loans, bonuses
- **Rule engine:** late/absence/overtime/deduction tiers, double-shift logic, violation escalation
- **ZKTeco integration:** device registry, attendance ingress logs, desktop bridge app
- **Multi-tenant SaaS:** landlord MongoDB, per-tenant provisioning, SaaS admin APIs
- **RBAC:** super-admin, admin, editor, branch-manager with route-level permissions
- **Operations:** data import/export, integration tokens, email settings, HR audit trail, absence alerts
- **Bilingual UI:** English + Arabic (RTL)

## CV bullet points
- Built **RNS HR** (Laravel 12 + React 19 + MongoDB) for **RNS Cinemas** — production HRMS at hr-app.rnscinemas.com with 22 modular domains.
- Implemented **multi-tenant SaaS** architecture, ZKTeco biometric pipeline, and configurable payroll/attendance rule engine.
- Delivered bilingual RTL admin SPA with analytics, payroll runs, RBAC, and external integration APIs.

## Screenshots
See `screenshots/` — login, HR dashboard, employees, attendance, payroll, rules, devices, RBAC, settings.

## Login (local demo)
- Email: `admin@example.com` | Password: `password` (after `composer setup-local-tenant`)

## Links
- **Live:** https://hr-app.rnscinemas.com/hr
- **Portfolio:** https://abdelrahman1203.github.io/project.html?id=11-rns-hr
- **GitHub:** https://github.com/Abdelrahman1203/rns-hr
