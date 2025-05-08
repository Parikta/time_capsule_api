
const request = require('supertest');
const app = require('../index');

describe('POST /auth/register', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({ email: 'test@example.com', password: 'password' });
    expect(response.status).toBe(201);
  });
});

describe('POST /auth/login', () => {
  it('should login and return a token', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'password' });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
