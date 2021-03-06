const Money = require('./money');
const Bank = require('./bank');
const Sum = require('./sum');

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

test('testSimpleAddition', () => {
  const five = Money.dollar(5);
  const result = five.plus(five);
  const sum = result;
  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');
  expect(reduced.equals(Money.dollar(10))).toBeTruthy();
})

test('testReduceSum', () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, "USD");
  expect(Money.dollar(7).equals(result)).toBeTruthy();
})

test('testReduceMoney', () => {
  const bank = new Bank();
  const result = bank.reduce(Money.dollar(1), "USD");
  expect(Money.dollar(1).equals(result));
})

test('testReduceMoneyDifferentCurrency', () => {
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(Money.franc(2), "USD");
  expect(Money.dollar(1).equals(result));
})

test('testIdentityRate', () => {
  expect(new Bank().rate("USD", "USD")).toBe(1);
})

test('testMixedAddition', () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
  expect(result).toEqual(Money.dollar(10));
})

test('testSumPlusMoney', () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
  const result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.dollar(15));
})

test('testSumTimes', () => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate("CHF", "USD", 2);
  const sum = new Sum(fiveBucks, tenFrancs).times(2);
  const result = bank.reduce(sum, "USD");
  expect(result).toEqual(Money.dollar(20));
})
