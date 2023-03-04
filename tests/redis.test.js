const request = require('request');
const { expect } = require('chai');
import {redisClient} from './utils/redis'

/**
 * test case for the redis client
 
 */

describe('Redis client is up and alive', () => {
    const client = redisClient;
    it('Should running and alive', (done) => {
        expect(client.isAlive()).to.be.true;
        done();
    });
})