// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// iterative solution
// function vowels(str) {
//   const array = str
//     .toLowerCase()
//     .split('')
//     .reduce((arr, character) => {
//       if (['a', 'e', 'i', 'o', 'u'].includes(character)) {
//         return arr.concat(character);
//       }

//       return arr;
//     }, []);

//   return array.length;
// }

// interative solution (official)
function vowels(str) {
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vowels;
