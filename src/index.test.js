/**
 * @file index.js
 * Contains a simple test for the addition method in index.js.
 */

/* global test expect */

import add from '../lib/index';

test('Can add two numbers', () => {
  expect(add(1, 2)).toBe(3);
});
