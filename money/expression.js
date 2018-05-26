class Expression { // interfaceのつもり
  reduce(bank, to) { // abstract
    throw new Error('Not Implemented');
  }
}

module.exports = Expression;