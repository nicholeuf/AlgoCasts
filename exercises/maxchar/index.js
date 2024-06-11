// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My solution #1
// function maxChar(str) {
//   const charMap = {};
//   let maxChars = 0;

//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return Object.keys(charMap).reduce((val, char) => {
//     if (charMap[char] > maxChars) {
//       maxChars = charMap[char];
//       return char;
//     }

//     return val;
//   }, null);
// }

// My solution #2
// This solution involves one loop iteration
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // set the character value in the map
    charMap[char] = charMap[char] + 1 || 1;

    // check if we've found a max character
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// Solution
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

module.exports = maxChar;
