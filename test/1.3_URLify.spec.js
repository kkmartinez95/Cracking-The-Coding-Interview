const { expect } = require('chai');
const URLify = require('../Chapter1_ArraysAndStrings/1.3_URLify');

describe('1.3 URLify', () => {
  it('replaces all empty spaces in a string with `%20`', () => {
    expect(URLify('hello world')).to.equal('hello%20world');
    expect(URLify('my name is kait')).to.equal('my%20name%20is%20kait');
  });

  it('returns an empty string when no input is given', () => {
    expect(URLify('')).to.equal('');
  });
});
