# HR System API Reference

**Base URL:** `http://localhost:8000/api`  
**Auth:** Session cookie (SPA) or Sanctum token

## Authentication

```http
POST /api/login
{ "email": "admin@test.com", "password": "password123" }
```

## Employees

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | List employees (paginated) |
| POST | `/employees` | Create employee |
| GET | `/employees/:id` | Employee detail |
| PUT | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Soft delete |

## Attendance

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/attendance` | Attendance logs with filters |
| POST | `/attendance/manual` | Manual attendance entry |
| POST | `/attendance/import` | Bulk import from Excel |
| POST | `/attendance/zkteco/push` | ZKTeco device push endpoint |
| GET | `/reports/attendance` | Attendance verification report |

### ZKTeco Push Payload

```json
{
  "employee_code": "EMP001",
  "timestamp": "2026-06-20T08:00:00",
  "device_id": "ZK001",
  "type": "check_in"
}
```

## Leave Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/leave-types` | Leave type definitions |
| GET | `/leave-requests` | Leave requests list |
| POST | `/leave-requests` | Submit leave request |
| PUT | `/leave-requests/:id/approve` | Approve leave |
| PUT | `/leave-requests/:id/reject` | Reject leave |

## Payroll Rules

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/deduction-rules` | Late/absence deduction rules |
| POST | `/deduction-rules` | Create deduction rule |
| GET | `/overtime-rules` | Tiered overtime rules |
| POST | `/overtime-rules` | Create overtime rule |
| GET | `/violation-logs` | Violation history |
| GET | `/rule-evaluation-logs` | Rule engine audit trail |

## Payroll Reports

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/reports/payroll` | Generate payroll report |
| GET | `/reports/payroll?format=excel` | Excel export |
| GET | `/reports/payroll?format=pdf` | PDF export |

## Organization

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST | `/companies` | Company management |
| GET/POST | `/branches` | Branch management |
| GET/POST | `/departments` | Department management |
| GET/POST | `/positions` | Position management |
| GET/POST | `/shifts` | Shift definitions |
| GET/POST | `/roles` | Role & permission management |
