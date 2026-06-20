# BoatBnB API Reference

**Auth:** Sanctum + Socialite (Google/Apple OAuth)  
**Base:** `/api/v1`

## Boat Discovery

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/boats` | Search boats with filters |
| GET | `/boats/:id` | Boat detail + availability |
| POST | `/bookings` | Create booking |
| POST | `/bookings/:id/pay` | Stripe payment intent |

## Host/Provider

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/provider/boats` | List a new boat |
| GET | `/provider/bookings` | Host booking management |
| GET | `/provider/payouts` | Payout history |

## ERP Module

See [erp-arabia.md](./erp-arabia.md) for warehouse ERP endpoints within the monorepo.
