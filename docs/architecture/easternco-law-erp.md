# Eastern & Co — System Architecture

## Modular Architecture (nwidart/laravel-modules)

```mermaid
flowchart TB
    subgraph Public
        WEB[Website Module - Blade]
    end

    subgraph Admin Modules
        SETTINGS[Settings - Auth/RBAC]
        SALES[Sales - Lead CRM]
        LAWYER[Lawyer - Legal Tasks]
        FINANCE[Finance - Invoices/Expenses]
        HR[HR - Employees/Vacations]
        WEBSITE_CMS[Website CMS]
    end

    subgraph Core
        KERNEL[Laravel 10 Kernel]
        SPATIE[Spatie Permission]
        TWILIO[Twilio SMS/WhatsApp]
    end

    subgraph Data
        MYSQL[(MySQL - easternnco)]
    end

    WEB --> MYSQL
    SETTINGS --> SPATIE
    SALES --> MYSQL
    SALES --> TWILIO
    LAWYER --> MYSQL
    FINANCE --> MYSQL
    HR --> MYSQL
    WEBSITE_CMS --> MYSQL
    KERNEL --> SETTINGS
```

## Lead CRM Pipeline

```mermaid
flowchart LR
    LEAD[New Lead] --> ASSIGN[Assign to Sales]
    ASSIGN --> FOLLOW[Follow-up Actions]
    FOLLOW --> CONVERT[Convert to Client]
    FOLLOW --> LOST[Mark Lost]
    CONVERT --> TASK[Legal Task Created]
    TASK --> FINANCE[Invoice Generated]
```

## Permission Model

```mermaid
flowchart TB
    EMP[Employee Login] --> GUARD[Employee Guard]
    GUARD --> ROLE[Role - Spatie]
    ROLE --> PERM[Permissions per Module]
    PERM --> SALES_V[View Leads]
    PERM --> LAWYER_E[Edit Legal Tasks]
    PERM --> FIN_P[Print Invoices EN/AR]
```

## Module Responsibilities

| Module | Purpose |
|--------|---------|
| **Settings** | Auth, countries, cities, configurations, RBAC |
| **Sales** | Lead CRM, follow-ups, bulk Excel import, SMS |
| **Lawyer** | Legal task workflow (manager/lawyer/finance views) |
| **Finance** | Invoices, expenses, safes, petty cash |
| **HR** | Employees, vacations, job applications |
| **Website** | Public pages, blog, careers, contact forms |
