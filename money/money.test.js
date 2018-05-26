const Money = require('./money');

test('testMultiplication', () => {
  const five = Money.dollar(5);
  expect(five.times(2).amount).toBe(10);
  expect(five.times(3).amount).toBe(15);
});

test('testEquality', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.dollar(5).equals(Money.dollar(6))).not.toBeTruthy();
  expect(Money.franc(5).equals(Money.dollar(5))).not.toBeTruthy();
});

test('testCurrency', () => {
  const five = Money.franc(5);
  expect(Money.dollar(1).getCurrency()).toBe('USD');
  expect(Money.franc(1).getCurrency()).toBe('CHF');
});
