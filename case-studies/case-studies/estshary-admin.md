# Case Study: Estshary — Healthcare Booking Ecosystem

## Client Context

A healthcare startup needed an end-to-end platform connecting patients with doctors and clinics for online appointment booking.

## Problem

- Doctor schedules managed in phone calls and paper calendars
- No centralized admin for multi-branch clinics
- Patients couldn't search doctors by location and specialty online
- No mobile API for doctor-side appointment management

## Solution

Built the **Estshary ecosystem** across three applications:

1. **Admin panel** — doctor/clinic management, reservations, reviews, invoicing
2. **Patient website** — doctor search, AJAX filtering, online booking
3. **Mobile APIs** — JWT auth for doctors, Sanctum for patients

Plus AI chatbot (OpenAI) for symptom-based doctor matching and Firebase push notifications.

## Business Impact

| Metric | Result |
|--------|--------|
| Appointment booking | Phone-only → online with real-time slot availability |
| Doctor management | Paper schedules → digital multi-branch admin |
| Patient discovery | Word of mouth → searchable portal with filters |
| Review quality | Unmoderated → admin moderation with multi-dimensional ratings |
| Database scope | Ad-hoc → 118+ structured migrations |

## Technologies

Laravel 10 · MySQL · JWT · OpenAI · Firebase · Bootstrap · Blade

---

**Engineer:** Abdel Rahman Waleed Ahmed
