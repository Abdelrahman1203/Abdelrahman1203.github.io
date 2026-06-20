# BoatBnB — Full Boat Booking Platform

## One-line summary
End-to-end **boat rental marketplace** with mobile apps for guests, hosts, service providers, and agencies — plus a Vue 3 admin panel — built on Laravel 12 with Stripe payments, GPS boat discovery, Agora chat, and **10-language** support.

## Tech stack
- **Backend:** Laravel 12, PHP 8.2+, Sanctum, Socialite (Google/Apple), Firebase auth
- **Admin:** Vue 3, Vuex, vue-i18next
- **Mobile:** Native client apps (guest, host, service provider, agency flows) consuming REST APIs
- **Payments:** Stripe (bookings, refunds, payouts, invoices)
- **Realtime chat:** Agora + enhanced REST messaging (attachments, unread counts, search)
- **Location:** GPS coordinates on boats, nearby/radius search, marine weather by lat/lng
- **Storage:** AWS S3 (boat images, documents, chat attachments)
- **Cache / queue:** Redis

## User roles & applications
| Role | Application surface |
|------|---------------------|
| **Guest / client** | Search, book boats & add-on services, pay via Stripe, chat, reviews, wishlist |
| **Host** | List boats, manage availability, accept/reject bookings, upload media |
| **Service provider** | Offer catering, captain, events, and other marina services |
| **Agency** | Manage fleet on behalf of owners, boat transfers between agencies |
| **Admin** | Moderate boats/users/bookings, analytics, insurance policies, reports |

## Key features
- **Boat discovery:** Featured listings, category filters (yacht, jet ski, etc.), GPS nearby search with radius
- **Bookings:** Bareboat / with captain / with owner rental types, promo codes, loyalty tiers
- **Services marketplace:** Service providers attach offerings to boats and bookings
- **Payments:** Stripe payment methods, refunds, invoices, host/agency payouts
- **Chat:** In-app messaging between guests, hosts, and providers; Agora for realtime voice/video
- **Internationalization:** 10 languages across mobile and admin UI
- **Operations:** Referrals, support tickets, insurance policies, saved searches, push notifications
- **Compliance:** OTP / WhatsApp verification, UAE Pass hook, document uploads (licenses, IDs)

## CV bullet points
- Built a **multi-role boat booking platform** (guest, host, service provider, agency, admin) on Laravel 12 with 100+ mobile REST endpoints.
- Implemented **GPS-based boat discovery**, marine weather, and location-aware search for on-water rentals.
- Integrated **Stripe** for bookings, refunds, and provider payouts; **Agora** for realtime chat alongside a full messaging API.
- Delivered **10-language** mobile and admin experiences with OAuth, Firebase, and AWS S3 media pipeline.

## Screenshots
See `screenshots/` — **41 captures**: mobile app (splash, search, yacht/jet-ski, services, rental type, detail, profile, bookings) + Vue 3 admin (login, dashboard, boats, bookings, users, analytics).

## Login (demo)
- Mobile: guest registration / OTP flow
- Admin: `/login` on Vue SPA (`boatbnb-admin`)

## Note
Backend lives in `app/`; admin SPA in `app/boatbnb-admin/`. Mobile UI prototypes used for portfolio screenshots are in `portfolio-cv/boatbnb-mobile-prototypes/`.
