/* eslint-disable jest/no-test-callback */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */

import { redisClient } from '../utils/redis';

const { expect } = require('chai');

/**
 * test case for the redis client
 */

describe('redis client is up and alive', () => {
  const client = redisClient;
  it('should running and alive', (done) => {
    expect(client.isAlive()).to.be.true;
    done();
  });
});
