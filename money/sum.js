const Expression = require('./expression');

class Sum extends Expression{
  constructor(augend, addend) {
    super();
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to) {
    const Money = require('./money');
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

module.exports = Sum;