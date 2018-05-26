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
    return new Money(amount, "USD");
  }

  static franc(amount) {
    return new Money(amount, "CHF");
  }
}

module.exports = Money;