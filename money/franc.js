const Money = require('./money');

class Franc extends Money{
  constructor(amount) {
    super(amount);
  }

  times(multipliter) {
    return new Franc(this.amount * multipliter);
  }
}

module.exports = Franc;