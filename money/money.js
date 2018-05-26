const Expression = require('./expression');
const Sum = require('./sum');

class Money extends Expression{
  constructor(amount, currency) {
    super();
    this.amount = amount;
    this.currency = currency;
  }

  equals(money) {
    return this.amount === money.amount && this.getCurrency() === money.getCurrency();
  }

  times(multipliter) {
    return new Money(this.amount * multipliter, this.currency);
  }

  getCurrency() {
    return this.currency;
  }

  plus(addend) {
    return new Sum(this, addend);
  }

  reduce(bank, to) {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }

  static dollar(amount) {
    return new Money(amount, "USD");
  }

  static franc(amount) {
    return new Money(amount, "CHF");
  }
}

module.exports = Money;