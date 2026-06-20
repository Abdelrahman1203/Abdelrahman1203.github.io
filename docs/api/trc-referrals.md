# TRC Referrals API Reference

**Base URL:** `https://t-r-c.online/api/v1`  
**Auth:** Laravel Sanctum Bearer token

## Authentication

```http
POST /api/v1/login
{ "phone": "+201000000000", "password": "123456" }
```

## Mobile — Property Discovery

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | List featured projects |
| GET | `/projects/:id` | Project detail with units |
| GET | `/units` | Search units with filters |
| GET | `/units/:id` | Unit detail |
| POST | `/units/:id/favorite` | Toggle favorite |
| GET | `/developers` | List developers |
| GET | `/districts` | District list |

## Referrals

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/referrals` | User's referrals |
| POST | `/referrals` | Submit new referral |
| GET | `/referrals/:id` | Referral detail with stages |
| GET | `/referrals/:id/stages` | Pipeline stage history |

## Wallet

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/wallet` | Wallet balance |
| GET | `/wallet/transactions` | Transaction history |
| POST | `/wallet/withdraw` | Request withdrawal |

## Admin (Web Panel Routes)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/projects` | Manage projects |
| GET | `/admin/referrals` | Referral pipeline |
| POST | `/admin/referrals/:id/process` | Process referral stage |
| POST | `/admin/referrals/:id/commission` | Record commission |
| GET | `/admin/users/verification-requests` | Pending verifications |

## Notifications

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notifications` | User notifications |
| POST | `/notifications/fcm-token` | Register FCM device token |

## Query Filters (Units)

```
GET /units?district_id=1&property_type_id=2&min_price=500000&max_price=2000000&bedrooms=3
```
