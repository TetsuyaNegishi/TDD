class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multipliter) {
    return new Dollar(this.amount * multipliter);
  }
}

module.exports = Dollar;