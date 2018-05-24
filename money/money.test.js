const Dollar = require('./dollar');
const Franc = require('./franc');

test('testMultiplication', () => {
  const five = new Dollar(5);
  expect(five.times(2).amount).toBe(10);
  expect(five.times(3).amount).toBe(15);
});

test('testEquality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).not.toBeTruthy();
  expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
  expect(new Franc(5).equals(new Franc(6))).not.toBeTruthy();
});

test('testFrancMultiplication', () => {
  const five = new Franc(5);
  expect(five.times(2).amount).toBe(10);
  expect(five.times(3).amount).toBe(15);
});