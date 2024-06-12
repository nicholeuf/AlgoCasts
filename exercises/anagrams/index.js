// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// exclude non-alphanumeric chars, set to lower case
const toNormalizedString = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase();
};

// loop through each character of the string
// keep track of count of each character in charMap
const toCharMap = (str) => {
  const charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

function anagrams(stringA, stringB) {
  const normStringA = toNormalizedString(stringA);
  const normStringB = toNormalizedString(stringB);

  if (normStringA.length !== normStringB.length) {
    return false;
  }

  const charMapA = toCharMap(normStringA);
  const charMapB = toCharMap(normStringB);

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
