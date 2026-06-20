# ERP Arabia API Reference

**Base URL:** `http://localhost:8001/api`  
**Auth:** Laravel Sanctum (`Authorization: Bearer {token}`)  
**SPA Prefix:** `/erp_hr`

## Authentication

```http
POST /api/login
Content-Type: application/json

{ "email": "admin@test.com", "password": "password123" }
```

## Warehouse

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/warehouse/categories` | List warehouse categories |
| GET | `/warehouse/stocks` | Current stock levels |
| POST | `/warehouse/transfers` | Create inter-warehouse transfer |
| GET | `/warehouse/transfers` | List transfers |
| PUT | `/warehouse/transfers/:id/approve` | Approve transfer |

## Purchases

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/purchases` | List purchase records |
| POST | `/purchases` | Create purchase request |
| PUT | `/purchases/:id/approve` | Approve purchase |
| PUT | `/purchases/:id/reject` | Reject with reason |
| GET | `/purchases/purchasing-orders` | PO report data |

## Items

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/items` | List items with pagination |
| POST | `/items` | Create item |
| PUT | `/items/:id` | Update item |
| POST | `/items/bulk-price-entry` | Bulk price update |
| GET | `/items/categories` | Item category tree |

## Inventory Adjustments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/inventory/adjustments` | List adjustments |
| POST | `/inventory/adjustments` | Create stock adjustment |

## Reports

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/reports/product` | Product movement report |
| GET | `/reports/warehouse/stock` | Warehouse stock report |
| GET | `/reports/warehouse/transfers` | Transfer report |
| GET | `/reports/purchases/analytics` | Purchase analytics |
| GET | `/reports/closed-documents` | Closed documents report |

Reports support `?format=pdf` or `?format=excel` query parameters.

## Settings

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST | `/settings/countries` | Country management |
| GET/POST | `/settings/branches` | Branch management |
| GET/POST | `/settings/users` | User management |
| GET/POST | `/settings/roles` | Role & permission management |
| GET/POST | `/settings/suppliers` | Supplier management |

## Public

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/summary` | Public daily summary (no auth) |
