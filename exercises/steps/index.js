// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let step = '';
//     for (let col = 0; col < n; col++) {
//       if (col > row) {
//         step += ' ';
//       } else {
//         step += '#';
//       }
//     }
//     console.log(step);
//   }
// }

// Recursive solution
function steps(n, row = 0, stair = '') {
  // If row === n then we have hit the end of our problem
  if (n === row) {
    return;
  }

  // If the stair string has a length === n then we are at the end of a row
  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  // If the length of the stair string is less than or equal to the
  // row number we're working on, we add a # otherwise we add a space
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
  return;
}

module.exports = steps;
