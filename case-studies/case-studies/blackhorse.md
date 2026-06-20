# Case Study: BlackHorse B2B Delivery Platform

## Client Context

A wholesale distribution company serving supermarkets across multiple districts needed to digitize phone-based ordering, supplier catalog management, and delivery coordination.

## Problem

- Orders placed via phone calls with no tracking or audit trail
- Suppliers managed catalogs in spreadsheets with no real-time stock sync
- Delivery drivers had no centralized assignment system
- Group purchasing deals expired manually with revenue loss

## Solution

Built **BlackHorse** — a multi-sided platform with:

- **240+ REST API endpoints** for mobile apps and admin panel
- **Socket.IO** real-time order updates and admin-user chat
- **Group purchasing module** with automated expiry cron jobs
- **Store ERP submodule** for inventory, treasury, and balance sheets
- **Flutter Web admin** + Flutter mobile apps for all roles

## Architecture

Node.js/Express + MongoDB with JWT role-based auth. See [architecture diagram](../docs/architecture/blackhorse.md).

## Business Impact

| Metric | Before | After |
|--------|--------|-------|
| Order processing | Manual phone calls | Digital with real-time tracking |
| Order visibility | None | Live status for all roles |
| Group deal management | Manual expiry | Automated cron + notifications |
| Admin accounting | Separate spreadsheets | Integrated ERP module |
| API coverage | 0 endpoints | 240+ documented endpoints |

## Technical Highlights

- Role-based JWT with phone OTP verification
- Socket.IO rooms per order for targeted broadcasts
- Cron jobs for group expiry, pending order checks, fine calculations
- Firebase push notifications for order status changes
- Postman collection for full API documentation

## Technologies

Node.js · Express · MongoDB · Socket.IO · JWT · Flutter · Firebase · Cloudinary

---

**Engineer:** Abdel Rahman Waleed Ahmed
