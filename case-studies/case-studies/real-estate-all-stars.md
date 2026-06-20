# Case Study: Real Estate All-Stars — Broker Competition Platform

## Client Context

A regional real estate association launched "Brokers Got Talent" — a competition where brokers submit video pitches and receive public votes.

## Problem

- No digital platform for contestant registration and video submission
- Vote counting done manually with fraud risk
- Payment for vote packages handled offline
- Needed fully bilingual (EN/AR) experience for regional audience

## Solution

Built **Real Estate All-Stars** on Laravel 10:

- Phone OTP registration via BeonSMS
- Multi-stage video upload with php-ffmpeg processing
- Daily vote limits with interest toggling
- **Fawaterak payment gateway** for vote package purchases
- CMS-driven marketing pages with separate RTL/LTR CSS

## Business Impact

| Metric | Result |
|--------|--------|
| Registration | Paper forms → digital with OTP verification |
| Video submissions | Email/USB → 150MB online upload with staging |
| Vote integrity | Manual counting → system-enforced daily limits |
| Payments | Cash/offline → Fawaterak with webhook confirmation |
| Reach | Single language → full bilingual EN/AR platform |

## Technologies

Laravel 10 · MySQL · Fawaterak · BeonSMS · Tailwind · php-ffmpeg

---

**Engineer:** Abdel Rahman Waleed Ahmed
