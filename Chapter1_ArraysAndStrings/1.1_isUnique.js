function isUnique(string) {
  let hash = {};

  for (let char of string) {
    hash[char] ? hash[char]++ : (hash[char] = 1);
  }

  for (let key in hash) {
    if (hash[key] > 1) {
      return false;
    }
  }
  return true;
}

module.exports = isUnique;
