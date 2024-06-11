// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// My solution
// function fizzBuzz(n) {
//   for (let m of [...Array(n).keys()].map((i) => i + 1)) {
//     const mod3 = m % 3;
//     const mod5 = m % 5;

//     if (mod3 === 0 && mod5 === 0) {
//       console.log('fizzbuzz');
//     } else if (mod3 === 0) {
//       console.log('fizz');
//     } else if (mod5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(m);
//     }
//   }
// }

// Solution
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    const mod3 = i % 3;
    const mod5 = i % 5;

    if (mod3 === 0 && mod5 === 0) {
      console.log('fizzbuzz');
    } else if (mod3 === 0) {
      console.log('fizz');
    } else if (mod5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
