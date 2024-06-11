// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My solution
function reverse(str) {
  return str.split('').reverse().join('');
}

// Solution #2
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// Solution #3
// function reverse(str) {
//   return str.split('').reduce((rev, ch) => ch + rev, '');
// }

module.exports = reverse;
