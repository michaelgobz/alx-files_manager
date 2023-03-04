import { dbClient } from '../utils/db';

const { expect } = require('chai');

/**
 * Test case for the client Database
 */

describe('database is active', () => {
  const client = dbClient;
  expect.assertions(1);
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('database is alive', (done) => {
    // eslint-disable-next-line no-unused-expressions
    expect(client.isAlive()).to.be.true;
    done();
  });
});
