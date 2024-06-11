// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My solution
function reverseInt(n) {
  const isNegative = n < 0;

  const reversed = parseInt(
    Math.abs(n).toString().split('').reverse().join('')
  );

  return isNegative ? reversed * -1 : reversed;
}

module.exports = reverseInt;
