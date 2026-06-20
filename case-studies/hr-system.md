# Case Study: HR System — Automated Payroll & Attendance

## Client Context

A mid-size company with 200+ employees across multiple branches relied on manual attendance spreadsheets and inconsistent payroll calculations.

## Problem

- Attendance collected manually with frequent errors
- Payroll deductions calculated differently per department
- No integration with biometric devices (ZKTeco)
- Leave requests tracked in email with no balance visibility
- Bilingual workforce needed Arabic and English interfaces

## Solution

Built a comprehensive **HR Management System**:

- **Configurable rule engine** for late, absence, early-leave deductions
- **Tiered overtime rules** with consecutive violation escalation
- **ZKTeco biometric push endpoint** for automated attendance sync
- **17 admin modules** covering full employee lifecycle
- **React 19 bilingual SPA** with RTL Arabic support

## Business Impact

| Metric | Before | After |
|--------|--------|-------|
| Attendance entry | Manual daily spreadsheets | Biometric auto-sync + bulk import |
| Payroll calculation | Manual, error-prone | Rule engine with audit logs |
| Leave tracking | Email requests | Digital workflow with balances |
| Report export | Copy-paste to Excel | One-click Excel/PDF payroll reports |
| Admin modules | Fragmented tools | Single unified platform (17 modules) |

## Technical Highlights

- MongoDB for flexible employee/document schemas
- Rule evaluation logs for payroll audit compliance
- Playwright E2E tests for critical admin flows
- PHPUnit tests for rule engine business logic

## Technologies

Laravel 12 · React 19 · MongoDB · Tailwind CSS 4 · ZKTeco · Playwright

---

**Engineer:** Abdel Rahman Waleed Ahmed
