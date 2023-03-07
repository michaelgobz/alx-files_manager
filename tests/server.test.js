/* eslint-disable no-trailing-spaces */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-title */
/* eslint-disable padded-blocks */
/* eslint-disable jest/lowercase-name */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const request = require('request');
const { expect } = require('chai');

/**
 * Api Integration test
 */

describe('api Integration Test', () => {

  const api = 'http://localhost:5000';

  // add a before check for the server running

  it('GET /status:  returns the correct response', (done) => {
    request.get(`${api}/status`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('{"redis":true, "db":true}');
      done();
    });

  });

  it('GET /stats:  returns the correct response', (done) => {
    request.get(`${api}/stats`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('{}');
      done();
    });

  });

  it('POST /users: returns the correct response ', (done) => {
    const options = {
      url: `${api}/users`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'bob@dylan.com', 
        password: 'toto1234!',
      }),
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('{}');
      done();
    });

  });

  it('GET /connect: returns correct response ', (done) => {
    const options = {
      url: `${api}/connect`,
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=',
      },
    };

    request.get(options, (err, res, body) => {
      expect(res.authorization).to.be.true;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('{"token":"031bffac-3edc-4e51-aaae-1c121317da8a"}');
      done();
    });

  });

  it('GET /disconnect: returns the correct response', (done) => {
    const options = {
      url: `${api}/disconnect`,
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Basic Ym9iQGR5bGFuLmNvbTp0b3RvMTIzNCE=',
      },
    };
    
    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('OK');
      done();
    });

  });

  it('GET /users/me: returns the correct response', (done) => {
    request.get(`${api}/stats`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('OK');
      done();
    });

  });

  it('POST /files/: returns the correct response', (done) => {
    request.post(`${api}/stats`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('OK');
      done();
    });

  });

  it('GET /files/:id: returns the correct response', (done) => {
    request.get(`${api}/files/47`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('OK');
      done();
    }); 
  });

  it('put /files/:id/published/: returns the correct response', (done) => {
    request.put(`${api}/files/47/published`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('OK');
      done();
    });

  });

  it('put /files/:id/unpublished/: returns the correct response', (done) => {
    request.get(`${api}/files/47/unpublished`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('OK');
      done();
    });

  });

  it('GET /files: returns the correct response', (done) => {
    request.put(`${api}/files`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('OK');
      done();
    });
      
  });

  it('GET /files/:id/data: returns the correct response', (done) => {
    request.get(`${api}/stats`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('OK');
      done();
    });  
  });
});
