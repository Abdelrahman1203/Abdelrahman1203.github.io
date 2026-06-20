# BlackHorse API Reference

**Base URL:** `https://api.blackhorse.example.com/api/v1`  
**Auth:** JWT Bearer token  
**Format:** JSON

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register user (phone + OTP) |
| POST | `/auth/login` | Login, returns JWT |
| POST | `/auth/verify-otp` | Verify SMS OTP |
| POST | `/auth/refresh` | Refresh JWT token |

### Login Example

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "phone": "+201000000000",
  "password": "secret123"
}
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { "id": "...", "role": "customer", "name": "Store Owner" }
}
```

## Orders

| Method | Endpoint | Role | Description |
|--------|----------|------|-------------|
| GET | `/orders` | All | List orders (filtered by role) |
| POST | `/orders` | Customer | Create new order |
| GET | `/orders/:id` | All | Order details |
| PATCH | `/orders/:id/status` | Admin/Driver | Update order status |
| POST | `/orders/:id/assign-driver` | Admin | Assign delivery driver |
| POST | `/orders/:id/partial-return` | Admin | Process partial return |

## Products & Catalog

| Method | Endpoint | Role | Description |
|--------|----------|------|-------------|
| GET | `/products` | All | List products with filters |
| POST | `/products` | Supplier | Create product |
| PUT | `/products/:id` | Supplier | Update product |
| GET | `/categories` | All | Product categories |
| POST | `/offers` | Supplier | Create promotional offer |

## Group Purchasing

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/groups` | List active purchase groups |
| POST | `/groups` | Create group order |
| POST | `/groups/:id/join` | Join existing group |
| GET | `/groups/:id/members` | Group members and status |

## Admin ERP (Store Module)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/store/inventory` | Inventory levels |
| GET | `/store/purchases` | Purchase records |
| GET | `/store/sales` | Sales records |
| GET | `/store/treasury` | Treasury balance |
| GET | `/store/balance-sheet` | Supplier balance sheet |
| GET | `/store/reports/district-analytics` | District-level analytics |

## Real-Time (Socket.IO)

| Event | Direction | Description |
|-------|-----------|-------------|
| `order:updated` | Server → Client | Order status change |
| `order:new` | Server → Admin | New order notification |
| `group:expired` | Server → Members | Group purchase expired |
| `chat:message` | Bidirectional | Admin-user chat |

Connect with JWT in handshake: `{ auth: { token: 'Bearer ...' } }`

## Error Codes

| Code | Message |
|------|---------|
| 401 | Invalid or expired JWT |
| 403 | Role not permitted for this action |
| 404 | Order/product not found |
| 422 | Validation error (missing fields) |

Full Postman collection available in project: `docs/BlackHorse API.postman_collection.json`
