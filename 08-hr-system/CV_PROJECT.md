# HR System — Payroll & Attendance Platform

## One-line summary
Comprehensive HR platform with employee lifecycle, ZKTeco biometric attendance, configurable deduction/overtime rule engine, leave management, and payroll export.

## Tech stack
- **Backend:** Laravel 12, PHP 8.2+, MongoDB (laravel-mongodb), Sanctum
- **Frontend:** React 19, React Router 7, Vite 7, Tailwind CSS 4
- **Testing:** PHPUnit, Jest, Vitest, Playwright
- **i18n:** Arabic/English with RTL support

## Key features
- Employee management with auto-generated codes, departments, positions, shifts
- Configurable rule engine: late/absence/early-leave deductions, tiered overtime, consecutive violation escalation
- ZKTeco biometric push endpoint, manual attendance, bulk import, verification reports
- Leave types, requests, balances; excuse requests; national holidays with flexible scope
- Payroll generation with Excel/PDF export, tax & insurance brackets
- Org structure: companies, branches, departments, roles & permissions

## CV bullet points
- Engineered an **HR Management System** (Laravel 12 + React 19 + MongoDB) with a configurable payroll rule engine and ZKTeco attendance integration.
- Built bilingual RTL UI with 13+ admin modules covering employees, attendance, leave, payroll, and violation tracking.
- Implemented tiered overtime rules, consecutive violation escalation, and automated payroll report export (Excel/PDF).

## Screenshots
See `screenshots/` — login, dashboard, employees, attendance, payroll, rules, departments.

## Login (demo)
- Email: `admin@test.com` | Password: `password123`
