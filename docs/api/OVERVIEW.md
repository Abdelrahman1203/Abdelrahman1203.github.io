# API Documentation Overview

**Author:** Abdel Rahman Waleed Ahmed

REST API references for portfolio projects. Each document lists authentication, base URLs, key endpoints, and error conventions.

## Projects

| Project | Auth | Base URL | Docs |
|---------|------|----------|------|
| BlackHorse | JWT Bearer | `/api/v1` | [blackhorse.md](./blackhorse.md) |
| ERP Arabia | Sanctum Token | `/api` | [erp-arabia.md](./erp-arabia.md) |
| HR System | Session / Sanctum | `/api` | [hr-system.md](./hr-system.md) |
| TRC Referrals | Sanctum Token | `/api/v1` | [trc-referrals.md](./trc-referrals.md) |
| Estshary | JWT + Sanctum | `/api` | [estshary-admin.md](./estshary-admin.md) |
| Real Estate All-Stars | Sanctum | `/api` | [real-estate-all-stars.md](./real-estate-all-stars.md) |
| BoatBnB | Sanctum + OAuth | `/api/v1` | [boatbnb-erp.md](./boatbnb-erp.md) |

## Standard Error Response

All Laravel APIs follow this error format:

```json
{
  "message": "Human-readable error description",
  "errors": {
    "field_name": ["Validation error message"]
  }
}
```

| HTTP Status | Meaning |
|-------------|---------|
| 200 | Success |
| 201 | Created |
| 401 | Unauthenticated |
| 403 | Forbidden (RBAC) |
| 422 | Validation failed |
| 500 | Server error |

## Authentication Patterns

### JWT (BlackHorse, Estshary Doctor API)

```http
POST /api/auth/login
Content-Type: application/json

{ "phone": "+201000000000", "password": "secret" }
```

Response includes `token` — send as `Authorization: Bearer {token}` on subsequent requests.

### Sanctum (Laravel SPAs & Mobile)

```http
POST /api/login
Content-Type: application/json

{ "email": "admin@test.com", "password": "password123" }
```

Use returned token or session cookie depending on client type.
