class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multipliter) {
    return new Dollar(this.amount * multipliter);
  }

  equals(dollar) {
    return this.amount === dollar.amount;
  }
}

module.exports = Dollar;