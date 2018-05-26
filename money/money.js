class Money {
  constructor(amount, currency) {
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

  static dollar(amount) {
    const Dollar = require('./dollar');
    return new Dollar(amount, "USD");
  }

  static franc(amount) {
    const Franc = require('./franc');
    return new Franc(amount, "CHF");
  }
}

module.exports = Money;