function PalindromePermutations(string) {
  string = string.toLowerCase();

  let letters = {};

  for (let char of string) {
    if (char === ' ') {
      continue;
    }
    if (!letters[char]) {
      letters[char] = 1;
    } else {
      delete letters[char];
    }
  }

  if (Object.keys(letters).length <= 1) {
    return true;
  }
  return false;
}

module.exports = PalindromePermutations;
