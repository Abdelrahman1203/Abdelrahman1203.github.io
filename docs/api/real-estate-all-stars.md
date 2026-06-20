# Real Estate All-Stars API Reference

**Auth:** Laravel Sanctum  
**Base:** `/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/contestant/register` | Register contestant |
| POST | `/verify-otp` | Verify BeonSMS OTP |
| POST | `/contestant/videos/upload` | Upload contest video |
| POST | `/vote/{contestantId}` | Cast daily vote |
| POST | `/purchase-votes` | Initiate Fawaterak payment |
| GET | `/contestants` | List contestants |
| GET | `/payment/success` | Payment callback |

Payment webhooks handled at `POST /webhooks/fawaterak`.
