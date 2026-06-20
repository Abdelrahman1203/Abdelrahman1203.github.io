# ERP Arabia — System Architecture

## High-Level Architecture

```mermaid
flowchart TB
    subgraph Frontend
        VUE[Vue 3 SPA - Pinia + Vue Router]
        I18N[Vue I18n EN/AR RTL]
    end

    subgraph Backend["Laravel 10 API"]
        SANCTUM[Laravel Sanctum Auth]
        CTRL[Controllers]
        SVC[Services]
        JOBS[Queue Jobs - Email Summary]
    end

    subgraph Data
        MONGO[(MongoDB - erp_arabia)]
        REDIS[(Redis Cache)]
    end

    subgraph Export
        PDF[pdfmake / mPDF]
        XLS[PhpSpreadsheet]
        EMAIL[SendGrid]
    end

    VUE --> SANCTUM --> CTRL --> SVC --> MONGO
    SVC --> REDIS
    SVC --> PDF
    SVC --> XLS
    JOBS --> EMAIL
    I18N --- VUE
```

## Module Structure

```mermaid
flowchart LR
    subgraph Admin SPA
        DASH[Dashboard]
        WH[Warehouse]
        PUR[Purchases]
        INV[Inventory Adjustments]
        RPT[Reports - 10+]
        SET[Settings]
    end

    SET --> COUNTRIES[Countries/Branches]
    SET --> USERS[Users/Roles]
    WH --> TRANSFERS[Inter-Warehouse Transfers]
    WH --> STOCK[Stock Levels]
    PUR --> APPROVAL[Approval Workflow]
    PUR --> PO[Purchasing Orders]
```

## Purchase Approval Flow

```mermaid
sequenceDiagram
    participant User as Warehouse User
    participant API as Laravel API
    participant DB as MongoDB
    participant Admin as Approver

    User->>API: Create purchase request
    API->>DB: Save as pending
    Admin->>API: Review purchase
    alt Approved
        API->>DB: Update stock levels
        API->>DB: Mark approved
    else Rejected
        API->>DB: Mark rejected with reason
    end
```

## Tech Decisions

| Decision | Rationale |
|----------|-----------|
| MongoDB over MySQL | Flexible document schema for multi-branch inventory |
| Vue SPA separate from Laravel | Rich client-side reporting and RTL document generation |
| Redis caching | Fast lookup for settings, branches, permissions |
| Pinia over Vuex | Modern Vue 3 state management with TypeScript-ready stores |
