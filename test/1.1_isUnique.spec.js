const { expect } = require('chai');
const isUnique = require('../Chapter1_ArraysAndStrings/1.1_isUnique');

// make sure to extract `expect` from chai
// require the function you ae testing
// expect syntax: expect(thing).method()

describe('1.1 isUnique', () => {
  it('is a function', () => {
    expect(isUnique).to.be.a('function');
  });

  it('returns false if not all characters are unique', () => {
    const test = isUnique('abac');
    expect(test).to.equal(false);
  });

  it('returns true if all characters are unique', () => {
    const test = isUnique('abc');
    expect(test).to.equal(true);
  });
});
