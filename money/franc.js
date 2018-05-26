const Money = require('./money');

class Franc extends Money{
  constructor(amount, currency) {
    super(amount, currency);
  }

  times(multipliter) {
    return Money.franc(this.amount * multipliter);
  }
}

module.exports = Franc;