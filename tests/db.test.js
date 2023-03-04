const request = require('request');
const { expect } = require('chai');
import {dbClient} from '../utils/db.js';

/**
 * Test case for the client Database
 */

describe('Database is active', () => {
    const client = dbClient;
    it('database is alive' , (done) => {
        expect(client.isAlive()).to.be.true;
        done();
    });
});