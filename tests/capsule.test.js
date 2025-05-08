
const request = require('supertest');
const app = require('../index');

describe('POST /capsules', () => {
  it('should create a new capsule', async () => {
    const response = await request(app)
      .post('/capsules')
      .set('Authorization', 'Bearer <your_token>')
      .send({ message: 'Test Capsule', unlock_at: '2025-12-31T23:59:59Z' });
    expect(response.status).toBe(201);
  });
});
