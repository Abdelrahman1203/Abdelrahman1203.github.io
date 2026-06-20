# Harvest British College (SYS) — API & Integration Reference

## Authentication

| Guard | Model | Portal prefix | Method |
|-------|-------|---------------|--------|
| `web` (default) | `Employee` | `/login` → `/admin` | Email + password |
| `customer` | `Customer` | `/customerPortal` | Email/mobile + OTP |
| `web` + `checkInstructor` | `Employee` | `/instructorPortal` | Email + password |

### Admin Login

```
POST /postLogin
Body: email, password
Redirect: /admin (on success)
```

### Customer Portal OTP

```
POST /customerPortal/login
POST /customerPortal/verify-otp
POST /customerPortal/resend-otp
```

## Sanctum / JWT API Routes

Harvest includes Laravel Sanctum and `tymon/jwt-auth` for mobile/API consumers. API routes are registered in `routes/api.php` and module-specific route files.

Typical patterns:

```
GET  /api/user          (Sanctum authenticated)
POST /api/login         (JWT token issuance)
```

## Key Web Routes (Admin)

| Area | Route | Name |
|------|-------|------|
| Dashboard | `GET /admin` | `admin.home` |
| Leads CRM | `GET /leads` | `admin.leads.index` |
| Groups | `GET /groups` | `admin.groups.index` |
| Employees | `GET /employees` | `admin.employees.index` |
| Branches | `GET /branches` | `admin.branches.index` |
| Calendar | `GET /eventmanagement/calendar` | `admin.eventmanagement.calendar` |
| Sales report | `GET /reports/sales_report` | `admin.reports.sales` |
| Roles | `GET /roles` | `admin.roles.index` |
| Tracks | `GET /tracks` | `admin.tracks.index` |
| Payment plans | `GET /paymentPlans` | `admin.paymentPlans.index` |

## Customer Portal Routes

| Route | Purpose |
|-------|---------|
| `GET /customerPortal/login` | Student login |
| `GET /customerPortal/register` | Registration |
| `GET /customerPortal/home` | Dashboard (auth) |
| `GET /customerPortal/courses` | Enrolled courses |
| `GET /customerPortal/payments` | Payment history |

## Instructor Portal Routes

| Route | Purpose |
|-------|---------|
| `GET /instructorPortal/login` | Instructor login |
| `GET /instructorPortal/` | Dashboard |
| `GET /instructorPortal/classes` | Class list |
| `GET /instructorPortal/schedule` | Schedule view |
| `GET /instructorPortal/attendance` | Attendance |
| `GET /instructorPortal/examsResults` | Exam results |

## Public Website Routes

| Route | Purpose |
|-------|---------|
| `GET /` | Homepage |
| `GET /about_us` | About page |
| `GET /contact_us` | Contact form |
| `GET /services` | Services listing |
| `GET /our_branches` | Branch locator |
| `GET /our_offers` | Course offers |
| `GET /join_us` | Careers / join |

## Third-Party Integrations

| Service | Package | Usage |
|---------|---------|-------|
| Twilio | `twilio/sdk` | SMS notifications, group messaging |
| Pusher | `pusher/pusher-php-server` | Real-time updates |
| Excel | `maatwebsite/excel` | Lead/customer bulk import/export |
| Socialite | `laravel/socialite` | Social login (customer portal) |
| reCAPTCHA | `anhskohbo/no-captcha` | Form protection |
| Google Translate | `tanmuhittin/laravel-google-translate` | Multilingual content |

## Error Responses

Standard Laravel validation (422) and Spatie `UnauthorizedException` (403) for missing permissions.

## Live Base URL

```
https://harvestcollege.co.uk
```
