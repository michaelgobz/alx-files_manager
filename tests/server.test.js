const request = require('request');
const { expect } = require('chai');
/**
 * Api Integration test
 */

describe('api Integration Test', () => {

    const api = 'http://localhost:3000';

    before('Start server', (done) => {
    // check if server is running
    request.get(`${api}/`), (err) => {
        if (err) {
            console.log('Server is not running');
            process.exit(1);
        } else {
            console.log('Server is running');
            done();
      }
    }
    });

    it('GET / return the correct status', (done) => {
        request.get(`${api}/status`, (err, res, body) => {
        });

    })
    it('GET / return the right stats', (done) => {
        request.get(`${api}/stats`, (err, res, body) => {

        });

    })
    it('POST / Add new User ', (done) => {
        request.post(`${api}/user` ,(err, res, body) => {

        })

    })
    it('GET / authenticate with the server', (done) => {

    })
    it('GE', (done) => {

    })
    it('', (done) => {
        
    })
})