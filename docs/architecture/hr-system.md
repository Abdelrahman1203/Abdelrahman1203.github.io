# HR System — System Architecture

## High-Level Architecture

```mermaid
flowchart TB
    subgraph Frontend
        REACT[React 19 SPA - Vite]
        ROUTER[React Router 7]
        I18N[EN/AR RTL Toggle]
    end

    subgraph Backend["Laravel 12 API"]
        AUTH[Session + Sanctum]
        RULES[Payroll Rule Engine]
        ATT[Attendance Service]
        PAY[Payroll Generator]
    end

    subgraph External
        ZK[ZKTeco Biometric Devices]
    end

    subgraph Data
        MONGO[(MongoDB - hr_system)]
    end

    REACT --> AUTH
    AUTH --> RULES
    AUTH --> ATT
    AUTH --> PAY
    ZK -->|Push endpoint| ATT
    ATT --> MONGO
    RULES --> MONGO
    PAY --> MONGO
    ROUTER --- REACT
    I18N --- REACT
```

## Payroll Rule Engine

```mermaid
flowchart TD
    ATT_LOG[Attendance Log] --> EVAL{Rule Evaluation}
    EVAL --> LATE[Late Deduction Rules]
    EVAL --> ABS[Absence Rules]
    EVAL --> OT[Overtime Rules - Tiered]
    EVAL --> VIOL[Consecutive Violation Escalation]
    LATE --> DED[Deduction Amount]
    ABS --> DED
    OT --> ADD[Overtime Pay]
    VIOL --> DED
    DED --> PAYROLL[Monthly Payroll Report]
    ADD --> PAYROLL
    PAYROLL --> EXPORT[Excel / PDF Export]
```

## Domain Modules

| Module | Entities | Key Logic |
|--------|----------|-----------|
| Employees | Employee, Department, Position | Auto-generated codes, org hierarchy |
| Attendance | Shift, Device, AttendanceLog | ZKTeco push, manual entry, bulk import |
| Leave | LeaveType, LeaveRequest | Balance tracking, approval workflow |
| Payroll | DeductionRule, OvertimeRule, TaxBracket | Configurable rule engine |
| Reports | PayrollReport, AttendanceReport | Excel/PDF export |

## Testing Strategy

```mermaid
flowchart LR
    UNIT[PHPUnit - Rule Engine] --> CI[GitHub Actions]
    FE[Jest/Vitest - React] --> CI
    E2E[Playwright - Admin Flows] --> CI
```
