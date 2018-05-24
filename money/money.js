class Money {
  constructor(amount) {
    this.amount = amount;
  }

  equals(money) {
    return this.amount === money.amount && this.constructor.name === money.constructor.name;
  }

  times() { // abstractメソッド
    throw new Error('Not Implemented');
  }

  static dollar(amount) {
    const Dollar = require('./dollar');
    return new Dollar(amount);
  }

  static franc(amount) {
    const Franc = require('./franc');
    return new Franc(amount);
  }
}

module.exports = Money;