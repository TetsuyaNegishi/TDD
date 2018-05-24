const Dollar = require('./dollar');

test('testMultiplication', () => {
  const five = new Dollar(5);
  const product10 = five.times(2);
  expect(product10.amount).toBe(10);
  const product15 = five.times(3);
  expect(product15.amount).toBe(15);
});

test('testEquality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).not.toBeTruthy();
})