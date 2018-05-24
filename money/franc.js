class Franc {
  constructor(amount) {
    this.amount = amount;
  }

  times(multipliter) {
    return new Franc(this.amount * multipliter);
  }

  equals(dollar) {
    return this.amount === dollar.amount;
  }
}

module.exports = Franc;