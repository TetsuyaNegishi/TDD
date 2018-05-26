const Money = require('./money');

class Dollar extends Money{
  constructor(amount, currency) {
    super(amount, currency);
  }
}

module.exports = Dollar;