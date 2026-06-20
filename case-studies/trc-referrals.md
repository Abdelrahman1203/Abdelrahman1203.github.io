# Case Study: TRC — Real Estate Referral Platform

## Client Context

A real estate network needed to digitize broker referrals from lead submission through commission payout, with a mobile app for property discovery.

## Problem

- Referrals tracked in spreadsheets with lost follow-ups
- No visibility into referral pipeline stages
- Commission calculations done manually
- Mobile users couldn't browse properties or submit referrals digitally

## Solution

Delivered **TRC** — Laravel platform with admin panel and mobile API:

- Multi-stage referral pipeline with admin process workflow
- Commission wallet with transaction history and withdrawal requests
- Developer/project/unit catalog with favorites and search filters
- Provider onboarding with staged approval
- FCM push notifications for referral status updates

## Business Impact

| Metric | Result |
|--------|--------|
| Referral tracking | Spreadsheets → digital pipeline with stage history |
| Commission payout | Manual calculation → wallet system with audit trail |
| Property discovery | None → mobile API with filters and favorites |
| Admin efficiency | Phone/email → Spatie RBAC admin with Excel/PDF export |
| User verification | Manual → digital verification request queue |

## Technologies

Laravel 10 · MySQL · Sanctum · Spatie Permission · FCM · DomPDF

## Live

[t-r-c.online](https://t-r-c.online)

---

**Engineer:** Abdel Rahman Waleed Ahmed
