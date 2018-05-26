const Money = require('./money');

class Bank {
  reduce(source, to) {
    return source.reduce(to);
  }
}

module.exports = Bank;