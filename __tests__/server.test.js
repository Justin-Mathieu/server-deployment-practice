'use strict';
const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

//Basic Server Tests 

describe('Basic server', () => {
  it('root path', async () => {
    const response = await request.get('/');
    expect(response.text).toBe('Working server/Proof of life');
    expect(response.status).toBe(200);
  });

  it('Endpoint Route', async () => {
    const response = await request.get('/endpoint');
    expect(response.text).toBe('Endpoint Working!!');
    expect(response.status).toBe(200);
  });

  it('Bad Route', async () => {
    const response = await request.get('/bad');
    expect(response.status).toBe(500);

  });

  it('Not Found Route', async () => {
    const response = await request.get('/thing');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not Found');
  });

});