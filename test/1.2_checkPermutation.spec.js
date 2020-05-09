const { expect } = require('chai');
const checkPermutation = require('../Chapter1_ArraysAndStrings/1.2_checkPermutation');

describe('1.2 checkPermutation', () => {
  it('is a function', () => {
    expect(checkPermutation).to.be.a('function');
  });

  it('returns false if not it is not a purmutation', () => {
    const test = checkPermutation('abac', 'aabcf');
    expect(test).to.equal(false);
  });

  it('returns true if it is a purmutation', () => {
    const test = checkPermutation('abac', 'aabc');
    const test2 = checkPermutation('cat', 'tac');

    expect(test).to.equal(true);
    expect(test2).to.equal(true);
  });
});
