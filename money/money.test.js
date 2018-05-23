const Dollar = require('./dollar');

test('5dollar * 2 = 10dollar', () => {
  const five = new Dollar(5);
  five.times(2);
  expect(five.amount).toBe(10);
});