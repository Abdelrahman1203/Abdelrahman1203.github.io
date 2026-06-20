# Case Study: BoatBnB + ERP Monorepo

## Client Context

A product company needed to merge two products — a warehouse ERP and a boat rental marketplace — into a single Laravel 12 codebase for shared infrastructure.

## Problem

- Two separate codebases with duplicated auth, mail, and queue infrastructure
- Boat rental needed Stripe payments, OAuth login, and S3 file storage
- ERP needed MongoDB for flexible inventory and Vue 3 admin SPA
- Different databases (MongoDB vs MySQL) in one deployable unit

## Solution

Architected a **Laravel 12 monorepo** with:

- Shared Laravel kernel (auth, queue, mail, Sanctum)
- **ERP module** — Vue 3 + Pinia + MongoDB (see ERP Arabia)
- **BoatBnB module** — Vue 3 admin + MySQL + Stripe + AWS S3
- Socialite OAuth (Google/Apple) for boat rental users
- Separate database connections per product domain

## Business Impact

| Metric | Result |
|--------|--------|
| Codebase maintenance | 2 repos → 1 monorepo with shared infra |
| Auth/mail/queue | Duplicated → centralized Laravel services |
| Payment processing | Manual → Stripe integration |
| File storage | Local → AWS S3 for boat listing photos |
| Deployment | Separate deploys → single Docker pipeline |

## Technologies

Laravel 12 · Vue 3 · MongoDB · MySQL · Stripe · AWS S3 · Socialite · Redis

---

**Engineer:** Abdel Rahman Waleed Ahmed
