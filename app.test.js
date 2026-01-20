const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello from Kubernetes CI/CD!'));

test('GET / returns expected response', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello from Kubernetes CI/CD!');
});