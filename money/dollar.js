const Money = require('./money');

class Dollar extends Money{
  constructor(amount) {
    super(amount);
  }

  times(multipliter) {
    return new Dollar(this.amount * multipliter);
  }
}

module.exports = Dollar;