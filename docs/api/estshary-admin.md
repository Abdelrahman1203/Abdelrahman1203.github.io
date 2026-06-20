# Estshary Healthcare API Reference

**Base URL:** `https://admin.estshary.example.com/api`  
**Auth:** JWT (doctor mobile) / Sanctum (patient API)

## Doctor Mobile API (JWT)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/doctor/register` | Register with OTP |
| POST | `/doctor/login` | Login, returns JWT |
| GET | `/doctor/profile` | Doctor profile |
| PUT | `/doctor/profile` | Update profile |
| GET | `/doctor/reservations` | List appointments |
| PUT | `/doctor/reservations/:id/status` | Confirm/cancel appointment |
| POST | `/doctor/clinic` | Create clinic/enterprise |
| GET | `/doctor/schedule` | Weekly schedule |

## Patient API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/doctors/search` | Search doctors (city, specialty) |
| GET | `/doctors/:id` | Doctor profile + available slots |
| GET | `/doctors/:id/times` | Available appointment times |
| POST | `/appointments` | Book appointment |
| GET | `/appointments` | Patient appointment history |

## AI Chatbot

```http
POST /api/chatbot/recommend
Authorization: Bearer {token}
Content-Type: application/json

{
  "symptoms": "headache and fever",
  "city_id": 1,
  "area_id": 5
}
```

```json
{
  "doctors": [
    { "id": 12, "name": "Dr. Ahmed", "specialization": "General Medicine", "match_score": 0.92 }
  ],
  "explanation": "Based on your symptoms, a general practitioner is recommended."
}
```

## Admin Panel Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/doctors` | Manage doctors |
| GET | `/reservations` | All reservations |
| GET | `/reviews` | Review moderation queue |
| PUT | `/reviews/:id/approve` | Approve review |
| GET | `/cities` | City management |
| GET | `/specializations` | Medical specializations |
| GET | `/financial/invoices` | Doctor/clinic invoices |

## Webhooks & Integrations

| Integration | Purpose |
|-------------|---------|
| Firebase | Push notifications to doctor/patient apps |
| BeonSMS | OTP verification |
| OpenAI | Symptom-based doctor matching |
| Tesseract OCR | Medical document text extraction |
