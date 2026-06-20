# Estshary — Patient Website

## One-line summary
Public-facing patient website for the Estshary healthcare ecosystem — search doctors, book appointments, browse services and medical operations.

## Tech stack
- **Backend:** Laravel 10, PHP 8.1+, MySQL (shared with admin)
- **Frontend:** Blade, Bootstrap, jQuery, Slick Carousel
- **Architecture:** Reads from same MySQL database as `estsharyadmin`

## Key features
- Homepage with sliders and advanced doctor search/filter (AJAX)
- Doctor profiles with available time slots and booking confirmation
- Enterprise/clinic profiles with filtered reviews
- Medical services and operations booking
- Job applications, course enrollment, company registration

## CV bullet points
- Developed the **Estshary** public patient portal (Laravel/Blade) with doctor search, online appointment booking, and shared-database integration with the admin backend.
- Built AJAX-powered doctor filtering by city, area, and specialization with real-time availability slots.
- Implemented service/operation booking flows and enterprise review filtering.

## Screenshots
See `screenshots/` — homepage, doctor search, services (requires MySQL for live data).

## Related project
Admin backend: `06-estshary-admin/`
