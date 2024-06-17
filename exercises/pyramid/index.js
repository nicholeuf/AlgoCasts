// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
// 1
// 1x1
//   pyramid(2)
//       ' # '
//       '###'
// 1, 3
// 2x3
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// 1, 3, 5
// 3x5
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
// 1, 3, 5, 7
// 4x7

// row = n
// col = 2n - 1

// From 0 to n (iterate through rows)
// Create empty string, level
// From 0 to ? (columns)
// If the column should have a #, add to the level
// Else Add a space to level
// console.log the level

// My solution
// function pyramid(n) {
//   const maxRow = n;
//   const maxCol = n * 2 - 1;

//   for (let row = 1; row <= maxRow; row++) {
//     const hashes = row * 2 - 1;
//     const spaces = (maxCol - hashes) / 2;
//     let level = '';

//     for (let i = 0; i < spaces; i++) {
//       level += ' ';
//     }

//     for (let i = 0; i < hashes; i++) {
//       level += '#';
//     }

//     for (let i = 0; i < spaces; i++) {
//       level += ' ';
//     }

//     console.log(level);
//   }
// }

function pyramid(n) {
  // calculate midpoint of row
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

module.exports = pyramid;
