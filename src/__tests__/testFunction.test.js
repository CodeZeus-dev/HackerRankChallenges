const testFunction = require('../testFunction');

test('testFunction computes the sum of two integers', () => {
  expect(testFunction(1, 2)).toBe(3);
});