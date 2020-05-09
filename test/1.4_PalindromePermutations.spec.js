const { expect } = require('chai');
const PalindromePermutations = require('../Chapter1_ArraysAndStrings/1.4_PalindromePermutations');

describe('1.4 PalindromePermutations', () => {
  it('given a string, it checks if a permutation is a palindrome', () => {
    const test = PalindromePermutations('Tact Coa');
    expect(test).to.equal(true);
  });

  it('fails when string has no palindrome', () => {
    const failingTest = PalindromePermutations('Abc');
    expect(failingTest).to.equal(false);
  });

  it('edge case', () => {
    const edgeCase = PalindromePermutations('abbba');
    const edgeCase2 = PalindromePermutations('ff KabbBll ak ');
    const edgeCase3 = PalindromePermutations('');

    expect(edgeCase).to.equal(true);
    expect(edgeCase2).to.equal(true);
    expect(edgeCase3).to.equal(true);
  });
});
