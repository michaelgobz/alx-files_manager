/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const request = require('request');
const { expect } = require('chai');
/**
 * Api Integration test
 */

describe('api Integration Test', () => {

  const api = 'http://localhost:3000';

  before('Start server', (done) => {
    // check if server is running
    request.get(`${api}/`, (err) => {
  
      if (err) {
        console.log('Server is not running');
        process.exit(1);
      } else {
        console.log('Server is running');
        done();
      }
    }
  });
    
  it('GET /status:  returns the correct response', (done) => {
    request.get(`${api}/status`, (err, res, body) => {
    });

  })
  it('GET /stats:  returns the correct response', (done) => {
    request.get(`${api}/stats`, (err, res, body) => {

    });

  })
  it('POST /users: returns the correct response ', (done) => {
    request.post(`${api}/user`, (err, res, body) => {

    })

  });
  it('GET /connect: returns correct response ', (done) => {

  })
  it('GET /disconnect: returns the correct response', (done) => {

  });
  it('GET /users/me: returns the correct response', (done) => {

  });

  it('POST /files/: returns the correct response', (done) => {

  });

  it('GET /files/:id: returns the correct response', (done) => {
      
  });

  it('PUT /files/:id/published/: returns the correct response', (done) => {

  });

  it('PUT /files/:id/unpublished/: returns the correct response', (done) => {

  });

  it('GET /files: returns the correct response', (done) => {
  });

  it('GET /files/:id/data: returns the correct response', (done) => {
      
  });
});