# BlackHorse — System Architecture

## High-Level Architecture

```mermaid
flowchart TB
    subgraph Clients
        FLUTTER_M[Flutter Mobile App]
        FLUTTER_W[Flutter Web Admin]
        SUPPLIER[Supplier Portal]
    end

    subgraph Backend["Node.js / Express"]
        REST[REST API - 240+ endpoints]
        SOCKET[Socket.IO Server]
        CRON[Cron Jobs]
        AUTH[JWT + bcrypt Auth]
    end

    subgraph Integrations
        FCM[Firebase Push]
        SMS[SMS OTP]
        CLOUD[Cloudinary]
        MAIL[Nodemailer]
    end

    subgraph Data
        MONGO[(MongoDB)]
    end

    FLUTTER_M --> REST
    FLUTTER_W --> REST
    SUPPLIER --> REST
    FLUTTER_M --> SOCKET
    FLUTTER_W --> SOCKET
    REST --> AUTH --> MONGO
    SOCKET --> MONGO
    CRON --> MONGO
    REST --> FCM
    REST --> SMS
    REST --> CLOUD
    REST --> MAIL
```

## Role-Based Access

```mermaid
flowchart LR
    ADMIN[Admin] --> ERP[Store ERP Module]
    ADMIN --> ORDERS[Order Management]
    SUPPLIER[Supplier] --> CATALOG[Product Catalog]
    SUPPLIER --> OFFERS[Offers & Promo]
    CUSTOMER[Customer/Store] --> ORDER[Place Orders]
    CUSTOMER --> GROUP[Group Purchasing]
    DRIVER[Delivery Driver] --> DELIVER[Delivery Assignment]
```

## Order Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Pending
    Pending --> Confirmed: Admin/Supplier confirms
    Confirmed --> InProgress: Driver assigned
    InProgress --> Delivered: Proof of delivery
    Delivered --> [*]
    Pending --> Cancelled
    InProgress --> PartialReturn: Return items
    PartialReturn --> Delivered
```

## Key Components

| Component | Responsibility |
|-----------|----------------|
| `routes/` | Express route definitions by domain |
| `models/` | Mongoose schemas (orders, products, users) |
| `utils/cronJobs.js` | Group expiry, pending order checks |
| `utils/balanceSheet.js` | Supplier/customer accounting |
| Socket handlers | Real-time order updates, chat messages |

## Scalability Notes

- MongoDB horizontal scaling for order volume
- Socket.IO rooms per order/group for targeted broadcasts
- Cron jobs for batch processing (group expiry, fines)
- Stateless JWT API enables horizontal Express scaling behind load balancer
