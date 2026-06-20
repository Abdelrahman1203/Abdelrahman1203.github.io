# Case Study: RNS HR — Multi-Tenant HR Platform for RNS Cinemas

## Client Context

**RNS Cinemas** needed a centralized HR system to manage employees across cinema branches — replacing spreadsheets for attendance, leave, payroll, and violations with a production-grade platform.

## Problem

- Branch managers lacked real-time visibility into attendance and violations
- Biometric devices (ZKTeco) were disconnected from payroll calculations
- Payroll rules (overtime tiers, deductions, double-shift) were applied manually
- No unified RBAC across admin, branch manager, and HR operations roles
- Future need to onboard additional tenants on the same platform

## Solution

Built **RNS HR** — a modular Laravel 12 + React 19 HRMS with:

- **22 domain modules** under `Modules/` (Employee, Attendance, Payroll, Leave, Device, …)
- **Multi-tenant MongoDB** — landlord DB + isolated tenant databases
- **ZKTeco pipeline** — device push APIs + Windows desktop bridge (`ZKTecoApp/`)
- **Rule engine** — deduction/overtime tiers, violation escalation, double-shift logic
- **React admin SPA** — `/app/*` routes with TanStack Query, analytics, bilingual RTL UI
- **Production deploy** at https://hr-app.rnscinemas.com/hr

## Business Impact

| Metric | Result |
|--------|--------|
| Modules | 22 HR domains in modular architecture |
| Attendance | ZKTeco device integration + calendar/report views |
| Payroll | Automated runs with tax/insurance brackets |
| Access control | 4 role types with route-level permissions |
| Deployment | Live production HR portal for RNS Cinemas |
| Architecture | Multi-tenant SaaS ready for additional clients |

## Technologies

Laravel 12 · PHP 8.3 · React 19 · MongoDB · TanStack Query · Tailwind CSS 4 · ZKTeco · Sanctum · Playwright · Docker

## Screenshots

[View gallery](../website/project.html?id=11-rns-hr)

---

**Engineer:** Abdel Rahman Waleed Ahmed
