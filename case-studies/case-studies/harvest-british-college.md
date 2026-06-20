# Case Study: Harvest British College (SYS) — Education ERP

## Client Context

Harvest British College, a UK-based language and training institution, needed a unified system to manage leads, enrollments, class scheduling, instructor workflows, payments, and a bilingual public marketing website — replacing fragmented spreadsheets and manual processes.

## Problem

- Leads tracked across spreadsheets with no follow-up automation or source attribution
- Class scheduling, attendance, and group transfers handled manually
- Instructors had no dedicated portal for classes, exams, or monitoring
- Students could not self-register, pay, or take placement tests online
- Public website content required developer intervention for every update
- Finance and safes operated separately from enrollment data

## Solution

Delivered a **modular Laravel ERP (SYS)** with three nwidart modules plus a comprehensive admin core:

- **Admin CRM** — Lead pipeline, sources, labels, follow-ups, bulk Excel import, Twilio SMS
- **Operations** — Groups/classes, schedules, placement tests, certificates, exam applicants
- **Finance** — Payment plans, methods, safes, revenue reports, Fawry integration hooks
- **HR** — Employees, departments, vacations, job applications, document management
- **CustomerPortal** — Student registration, OTP login, enrollment, online payments
- **InstructorPortal** — Classes, attendance, exams, makeup sessions, ratio monitoring
- **Website module** — CMS-driven bilingual public site at harvestcollege.co.uk

## Business Impact

| Metric | Result |
|--------|--------|
| Lead management | Spreadsheets → CRM with source tracking and follow-up actions |
| Class operations | Manual scheduling → group lifecycle with transfers, freeze, waiting lists |
| Instructor workflow | Email/phone → dedicated portal with attendance and exam tools |
| Student enrollment | Office-only → self-service portal with OTP and placement tests |
| Reporting | Ad-hoc exports → 20+ operational reports (sales, attendance, activation) |
| Public presence | Static pages → CMS-managed bilingual website with offers and events |
| Live deployment | Production at [harvestcollege.co.uk](https://harvestcollege.co.uk) |

## Technologies

Laravel 10 · nwidart Modules · Livewire · Spatie Permission · Twilio · MySQL · JWT · Pusher

## Live

[harvestcollege.co.uk](https://harvestcollege.co.uk)

---

**Engineer:** Abdel Rahman Waleed Ahmed
