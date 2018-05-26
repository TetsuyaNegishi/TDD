const Expression = require('./expression');

class Sum extends Expression{
  constructor(augend, addend) {
    super();
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const Money = require('./money');
    const amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  plus(addend) {
    return null;
  }
}

module.exports = Sum;