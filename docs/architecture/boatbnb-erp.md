# BoatBnB — System Architecture

Large multi-role boat-rental marketplace: Laravel 12 API + Vue 3 admin SPA, with role-based mobile API surfaces for guests, hosts, agencies, and service providers.

```mermaid
flowchart TB
    subgraph Clients["Role-based Mobile API Consumers"]
        GUEST[Guest / Customer]
        HOST[Host]
        PROVIDER[Service Provider]
        AGENCY[Agency]
    end

    subgraph Admin["Admin Panel"]
        VUE[Vue 3 Admin SPA]
    end

    subgraph API["Laravel 12 Layered API"]
        CTRL[Controllers]
        SVC[Services]
        REPO[Repositories]
        AUTH[Auth — Sanctum / Socialite / Firebase / Smsala OTP]
        BOATS[Boat Discovery — GPS / Search / Tags / Transfers]
        BOOK[Bookings — QR / Refunds / Invoices]
        PAY[Payments & Payouts — Stripe]
        CHAT[REST Chat + Attachments]
        GROWTH[Referrals / Loyalty / Promo Codes]
        OPS[Support Tickets / Insurance / Content CMS]
        FILES[AWS S3 File Pipeline]
        WEATHER[OpenWeatherMap]
        NOTIF[Notifications]
    end

    subgraph Data["Data & Cache"]
        MYSQL[(MySQL)]
        REDIS[(Redis)]
    end

    subgraph External["External Services"]
        STRIPE[Stripe]
        S3[AWS S3]
        FB[Firebase]
        SMS[Smsala SMS/WhatsApp]
        OWM[OpenWeatherMap]
    end

    GUEST --> CTRL
    HOST --> CTRL
    PROVIDER --> CTRL
    AGENCY --> CTRL
    VUE --> CTRL
    CTRL --> SVC --> REPO
    REPO --> MYSQL
    SVC --> REDIS
    PAY --> STRIPE
    FILES --> S3
    AUTH --> FB
    AUTH --> SMS
    WEATHER --> OWM
```

## Layers

| Layer | Responsibility |
|-------|----------------|
| Mobile role APIs | Guest, host, agency, service_provider route groups |
| Admin SPA | Users, boats, bookings, promo codes, analytics |
| Services / Repositories | Business logic and data access separation |
| Integrations | Stripe, S3, Firebase, Smsala, OpenWeatherMap |
| Security / Ops | Rate limits, DDoS/IP middleware, nginx/fail2ban, Docker Sail |

## End-to-end ownership

Requirements → DB design → Layered Laravel API → Vue 3 admin → Role-based mobile APIs → Integrations → Security hardening → Docker deployment → Production support
