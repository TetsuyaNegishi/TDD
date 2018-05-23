class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multipliter) {
    this.amount *= multipliter;
  }
}

module.exports = Dollar;