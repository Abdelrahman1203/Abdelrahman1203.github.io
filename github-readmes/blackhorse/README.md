# BlackHorse — B2B Wholesale & Delivery Platform

Multi-sided B2B platform connecting supermarkets, suppliers, and delivery drivers with real-time order tracking, group purchasing, and integrated store ERP.

![Admin Panel](../../01-blackhorse/screenshots/01-admin-login.png)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js, Express.js, MongoDB, Mongoose |
| Real-time | Socket.IO |
| Auth | JWT, bcrypt, SMS OTP |
| Admin | Flutter Web |
| Mobile | Flutter (customer + sales agent) |
| Integrations | Firebase, Cloudinary, Nodemailer |

## Features

- Multi-role authentication (admin, supplier, customer, driver)
- 240+ REST API endpoints with Postman documentation
- Order lifecycle with partial returns and driver assignment
- Group purchasing with automated expiry cron jobs
- Store ERP: inventory, treasury, purchases/sales, balance sheets
- Real-time chat and live order updates via Socket.IO

## Quick Start

```bash
git clone https://github.com/yourusername/blackhorse-platform.git
cd blackhorse-platform
cp .env.example .env
npm install
npm run dev
```

### Requirements

- Node.js 18+
- MongoDB 6+
- Firebase service account (push notifications)

### Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT signing secret |
| `FIREBASE_*` | Firebase push notification credentials |
| `CLOUDINARY_*` | Image upload credentials |

## Architecture

See [Architecture Diagram](../../docs/architecture/blackhorse.md) | [API Docs](../../docs/api/blackhorse.md)

## CI/CD

Copy [nodejs-ci.yml](../../github-examples/.github/workflows/nodejs-ci.yml) to `.github/workflows/`.

## Author

**Abdel Rahman Waleed Ahmed** — Full-Stack Engineer

## License

Proprietary. Contact author for licensing.
