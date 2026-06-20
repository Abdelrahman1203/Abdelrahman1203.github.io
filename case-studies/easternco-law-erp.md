# Case Study: Eastern & Co — Law Firm ERP/CRM

## Client Context

Eastern & Co, a bilingual law firm, needed an integrated system for lead management, legal task tracking, HR, finance, and a public marketing website.

## Problem

- Leads tracked in Excel with no follow-up automation
- Legal tasks assigned via email with no workflow visibility
- Invoices generated manually in Word templates
- HR and finance operated in separate disconnected tools
- Public website content managed by developers, not staff

## Solution

Delivered a **modular Laravel ERP** with 8 nwidart modules:

- **Sales module** — Lead CRM with follow-ups, bulk Excel import, Twilio SMS
- **Lawyer module** — Task workflow (manager → lawyer → finance views)
- **Finance module** — Bilingual EN/AR invoice printing, expenses, safes
- **HR module** — Employees, vacations, job applications
- **Website module** — CMS for blog, careers, services, attorneys

## Business Impact

| Metric | Result |
|--------|--------|
| Lead management | Excel → CRM with follow-up actions and SMS |
| Legal tasks | Email → tracked workflow with role-based views |
| Invoicing | Manual Word → system-generated EN/AR PDF |
| Admin access | Developer-dependent → Spatie RBAC self-service CMS |
| Modules delivered | 8 integrated modules in single platform |

## Technologies

Laravel 10 · nwidart Modules · Spatie Permission · Twilio · MySQL

## Live

[easternnco.com](https://easternnco.com)

---

**Engineer:** Abdel Rahman Waleed Ahmed
