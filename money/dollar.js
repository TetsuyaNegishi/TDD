const Money = require('./money');

class Dollar extends Money{
  constructor(amount, currency) {
    super(amount, currency);
  }

  times(multipliter) {
    return Money.dollar(this.amount * multipliter);
  }
}

module.exports = Dollar;