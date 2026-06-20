# BoatBnB + ERP Monorepo — System Architecture

```mermaid
flowchart TB
    subgraph Monorepo["Laravel 12 Monorepo"]
        ERP[ERP Arabia Module]
        BOAT[BoatBnB Module]
    end

    subgraph ERP Stack
        VUE_ERP[Vue 3 + Pinia Admin]
        MONGO[(MongoDB)]
    end

    subgraph BoatBnB Stack
        VUE_BOAT[Vue 3 Admin - Vuex]
        MYSQL[(MySQL)]
        STRIPE[Stripe Payments]
        S3[AWS S3 Storage]
    end

    subgraph Shared
        REDIS[(Redis Cache)]
        SANCTUM[Laravel Sanctum]
        SOCIAL[Socialite OAuth]
    end

    ERP --> VUE_ERP --> MONGO
    BOAT --> VUE_BOAT --> MYSQL
    BOAT --> STRIPE
    BOAT --> S3
    BOAT --> SOCIAL
    ERP --> REDIS
    BOAT --> SANCTUM
```

## Dual-Database Strategy

| Product | Database | Rationale |
|---------|----------|-----------|
| ERP Arabia | MongoDB | Flexible inventory documents across branches |
| BoatBnB | MySQL | Relational bookings, payments, user accounts |

Both products share Laravel 12 infrastructure (auth, queue, mail) while maintaining separate data stores.
