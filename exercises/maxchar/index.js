// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My solution #1
function maxChar(str) {
  const charMap = {};
  let maxChars = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return Object.keys(charMap).reduce((val, char) => {
    if (charMap[char] > maxChars) {
      maxChars = charMap[char];
      return char;
    }

    return val;
  }, null);
}

module.exports = maxChar;
