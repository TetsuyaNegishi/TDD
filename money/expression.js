class Expression { // interfaceのつもり
  reduce(to) { // abstract
    throw new Error('Not Implemented');
  }
}

module.exports = Expression;