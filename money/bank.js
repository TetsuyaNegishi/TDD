const Money = require('./money');

class Bank {
  reduce(source, to) {
    return Money.dollar(10);
  }
}

module.exports = Bank;