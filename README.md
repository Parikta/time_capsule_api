# 🕒 Time Capsule API

A backend API that allows users to create, store, and retrieve time-locked messages (capsules). Capsules can only be opened after a specified unlock time.

---

## 🚀 Project Overview

This project is a RESTful API built using Node.js, Express.js, Sequelize (PostgreSQL), and JWT authentication. It allows users to:

- Register and log in securely.
- Create time capsules with unlock dates.
- View only capsules that are unlocked.
- Automatically expire capsules once viewed or when they reach expiration.
- Authenticate all capsule routes with JWT.
- Cron job support for expiring capsules.

---

## 🛠️ Technologies Used

- **Node.js** + **Express.js** – Backend API
- **Sequelize** + **PostgreSQL** – Database ORM
- **JWT** – Authentication
- **Jest** + **Supertest** – Testing
- **dotenv** – Environment variable management
- **node-cron** – Scheduled job for expiring capsules

---

## 📦 Installation & Running Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/time-capsule-api.git
   cd time-capsule-api
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   DB_PORT=5432
   JWT_SECRET=your_jwt_secret
   ```

4. **Create the database and run migrations**  
   Make sure PostgreSQL is running, then:
   ```bash
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   ```

5. **Run the app**  
   ```bash
   npm start
   ```

   Server will run on `http://localhost:5000`

---

## 🧪 Running Tests

Make sure your `.env` is configured for a test database. Then run:

```bash
npm test
```

Tests use `Jest` and `Supertest` for API testing.

To debug lingering handles:
```bash
npm test -- --detectOpenHandles
```

---

## ✅ Endpoints Overview

### Auth

- `POST /auth/register` – Register a user
- `POST /auth/login` – Login and get JWT

### Capsules (requires `Authorization: Bearer <token>`)

- `POST /capsules` – Create a time capsule
- `GET /capsules` – Get unlocked capsules
- `GET /capsules/:id` – View and auto-expire a capsule

---

## 🧠 Assumptions and Tradeoffs

- Capsules are considered "expired" once read or past their unlock time.
- Time comparisons use UTC. Ensure all dates are in ISO 8601 format.
- JWT tokens do not support refresh logic (can be extended if needed).
- No frontend included — this is a backend-only API.
- Cron job uses `node-cron` and runs on startup; does not persist schedule across restarts.

---

## 📂 Folder Structure

```
.
├── controllers/
├── routes/
├── models/
├── middleware/
├── cron/
├── tests/
├── index.js
└── .env
```

