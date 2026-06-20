# BoatBnB Mobile API Reference

**Base URL:** `/api/v1`  
**Auth:** Laravel Sanctum bearer token  
**OAuth:** Google / Apple via Socialite · Firebase auth endpoint  
**Rate limit:** 60 req/min on public routes

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register with phone/email |
| POST | `/auth/verify-otp` | Verify OTP |
| POST | `/auth/login` | Login |
| POST | `/auth/forgot-password` | Password reset |
| POST | `/auth/send-whatsapp-otp` | WhatsApp OTP |
| POST | `/auth/firebase` | Firebase token login |
| GET | `/auth/onboarding` | Onboarding content |

## Boat Discovery (GPS)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/boats/search` | Filter by lat/lng, radius, dates, price, capacity |
| GET | `/boats/nearby` | GPS nearby boats |
| GET | `/boats/featured` | Featured listings |
| GET | `/boats/categories` | Boat categories |
| GET | `/boats/recommendations` | Personalized recommendations |
| GET | `/boats/{id}` | Boat detail |

## Bookings

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/guest/bookings` | Create booking (guest) |
| POST | `/host/bookings/{id}/accept` | Accept booking (host/agency) |
| POST | `/host/bookings/{id}/reject` | Reject booking |

## Host & Agency

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/host/boats` | List a new boat |
| PUT | `/host/boats/{id}` | Update boat |
| POST | `/host/boats/{id}/images` | Upload boat images |
| POST | `/host/boats/{id}/transfer` | Transfer boat to agency |

## Service Provider

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/service-provider/services` | Create service offering |
| PUT | `/service-provider/services/{id}` | Update service |

## Payments (Stripe)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/payments/methods` | Saved payment methods |
| POST | `/payments/methods` | Add payment method |
| POST | `/payments/calculate` | Calculate booking total |
| GET | `/payments/history` | Payment history |
| POST | `/payments/bookings/{id}/refund` | Request refund |
| GET | `/payments/invoices` | List invoices |
| GET | `/payments/invoices/{id}` | Download invoice |

## Payouts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/payouts` | Payout history |
| POST | `/payouts` | Request payout |
| GET | `/payouts/balance` | Available balance |

## Chat

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/chat/conversations` | List conversations |
| POST | `/chat/conversations` | Start conversation |
| GET | `/chat/conversations/{id}/messages` | Message history |
| POST | `/chat/conversations/{id}/messages` | Send message (text/file) |
| GET | `/chat/unread-count` | Unread badge count |
| GET | `/chat/search` | Search messages |

> Realtime voice/video calls use **Agora RTC** on the mobile client; token generation is handled server-side.

## Other Modules

| Prefix | Description |
|--------|-------------|
| `/notifications` | Push tokens, preferences, read state |
| `/wishlist` | Saved boats |
| `/reviews` | Boat and service reviews |
| `/referrals` | Referral codes and stats |
| `/support-tickets` | Customer support |
| `/insurance-policies` | Boat insurance options |
| `/weather` | Current, forecast, marine by GPS or boat |
| `/files` | S3 uploads (boat images, documents, chat attachments) |
| `/content` | FAQ, terms, privacy pages |

## Admin API

**Prefix:** `/api/admin` · **Middleware:** `admin`

User moderation, boat approval, booking oversight, analytics exports, insurance policy management.
