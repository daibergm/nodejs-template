import request from 'supertest';

// @App
import { app } from '../../../app';

describe('Test IndexController', () => {
  it('Request / should return Hello World!', async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
    expect(result.body.data).toBe('Hello World!');
  });
});
