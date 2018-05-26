class Expression { // interfaceのつもり
  plus(addend) { // abstract
    throw new Error('Not Implemented');
  }
  reduce(bank, to) { // abstract
    throw new Error('Not Implemented');
  }
}

module.exports = Expression;