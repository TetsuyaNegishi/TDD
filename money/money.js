class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(money) {
    return this.amount === money.amount && this.constructor.name === money.constructor.name;
  }

  times() { // abstractメソッド
    throw new Error('Not Implemented');
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