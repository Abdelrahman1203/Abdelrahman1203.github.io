# Case Study: ERP Arabia — Multi-Branch Warehouse ERP

## Client Context

A distribution company operating warehouse branches across multiple regions needed unified inventory management with Arabic-language reporting for local staff.

## Problem

- Each branch tracked stock in isolated spreadsheets
- Purchase approvals happened via email with no audit trail
- Inter-warehouse transfers had no digital workflow
- Reports required manual compilation in Arabic and English

## Solution

Delivered **ERP Arabia** — a Vue 3 SPA backed by Laravel API:

- Multi-branch settings (countries → companies → branches)
- Purchase approval workflow with status tracking
- Inter-warehouse transfer module with approval gates
- 10+ exportable reports in PDF and Excel with **full Arabic RTL** support
- Redis-cached settings for fast admin performance

## Business Impact

| Metric | Result |
|--------|--------|
| Report generation | From hours to seconds (PDF/Excel export) |
| Purchase approval | Email-based → tracked digital workflow |
| Stock visibility | Branch-isolated → real-time cross-branch view |
| Language support | English only → bilingual EN/AR with RTL documents |
| Admin modules | 15+ interconnected modules |

## Technical Highlights

- MongoDB for flexible multi-branch inventory documents
- Pinia state management with granular role permissions
- pdfmake + arabic-persian-reshaper for RTL PDF generation
- Daily summary email automation via queue jobs

## Technologies

Laravel 10 · Vue 3 · Pinia · MongoDB · Redis · Tailwind CSS · Vite

---

**Engineer:** Abdel Rahman Waleed Ahmed
