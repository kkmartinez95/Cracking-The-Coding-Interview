function checkPermutation(stringOne, stringTwo) {
  let hash = {};

  if (stringOne.length !== stringTwo.length) return false;

  for (let char of stringOne) {
    if (!hash[char]) {
      hash[char] = 1;
    } else {
      hash[char]++;
    }
  }

  for (let char of stringTwo) {
    if (!hash[char]) {
      return false;
    } else {
      hash[char]--;
    }
  }

  for (let key in hash) {
    if (hash[key] > 0) return false;
  }

  return true;
}

module.exports = checkPermutation;
