const Money = require('./money');

class Bank {
  constructor() {
    this.rates = new Map();
  }

  reduce(source, to) {
    return source.reduce(this, to);
  }

  addRate(from, to, rate) {
    if (!this.rates.has(from)) {
      this.rates.set(from, new Map());
    }
    this.rates.get(from).set(to, rate);
  }

  rate(from, to) {
    if (from === to) {
      return 1;
    }
    return this.rates.get(from).get(to);
  }
}

module.exports = Bank;