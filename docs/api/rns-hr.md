# RNS HR — API Reference

**Base:** `/api/admin/*` (session-authenticated admin JSON APIs)  
**Production:** https://hr-app.rnscinemas.com/hr  
**Auth guard:** `auth:admin` (Admin model)

## Core HR modules

| Module | Prefix | Description |
|--------|--------|-------------|
| Employee | `/api/admin/employees` | CRUD, attachments, shifts, import |
| Attendance | `/api/admin/attendance` | Ledger, calendar, reports, reprocess |
| Leave | `/api/admin/leave-requests` | Requests, balances, types |
| Excuse | `/api/admin/excuse-requests` | Excuse workflows |
| Violation | `/api/admin/violation-logs` | Violations, waive requests |
| Payroll | `/api/admin/payroll-runs` | Runs, slips, export |
| Org | `/api/admin/branches`, `departments`, `positions`, `shifts` | Structure setup |
| Device | `/api/admin/devices` | ZKTeco device registry |
| Rule | `/api/admin/deduction-rules`, `overtime-rules` | Rule engine config |
| Admin | `/api/admin/admins`, `roles`, `permissions` | RBAC |

## Device & integration APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/attendance/push` | ZKTeco device punch ingest |
| GET | `/api/v1/integration/branches` | External sync (token auth) |
| GET | `/api/v1/integration/employees` | Employee sync |
| CRUD | `/api/admin/integration-tokens` | API token management |

## SaaS landlord APIs

| Prefix | Description |
|--------|-------------|
| `/api/admin/saas/tenants` | Tenant provisioning |
| `/api/admin/saas/plans` | Subscription plans |

## Session & notifications

| Endpoint | Description |
|----------|-------------|
| `/api/user` | Current admin profile |
| `/api/notifications` | In-app notifications |

## React SPA routes (UI)

Authenticated pages under `/app/*` — see `resources/js/router.jsx` for full route map.
