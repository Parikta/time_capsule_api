
# Time Capsule API

This is a backend API to create and manage time-locked capsules. Each capsule can store a message and be unlocked at a specific time using an unlock code.

## Features
- JWT authentication for user login and registration.
- Create, update, delete, and view time capsules.
- Time-locked capsules that can only be opened after the unlock date.
- Automatic expiration of capsules 30 days after the unlock time.

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/time-capsule-api.git
cd time-capsule-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file from `.env.example` and provide your PostgreSQL credentials.

4. Run migrations:

```bash
npx sequelize-cli db:migrate
```

5. Run the application:

```bash
npm start
```

6. Test the API:

```bash
npm run test
```

## Endpoints
- POST `/auth/register`: Register a new user.
- POST `/auth/login`: Login and receive a JWT.
- POST `/capsules`: Create a new capsule.
- GET `/capsules/:id`: Get a time capsule.

## License
MIT
