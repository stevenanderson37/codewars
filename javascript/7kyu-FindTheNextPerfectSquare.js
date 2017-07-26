// Find the next perfect square!

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

function findNextSquare(sq) {
  if (/\W/.test(Math.sqrt(sq)) === false) {
    var squareRoot = Math.sqrt(sq);
    return Math.pow(squareRoot + 1, 2);
  } else {
    return -1;
  }
}

// Without using the methods Math.pow() and Math.sqrt().

// squareRoot function taken from https://gist.github.com/joelpt/3824024
// The Babylonian Method
// function squareRoot(num, guess) {
//   if (!guess) {
//     guess = num / 2;
//   }
//   var dividedNum = num / guess;
//   var newGuess = (dividedNum + guess) / 2;
//   if (guess === newGuess) {
//     return guess;
//   }
//   return squareRoot(num, newGuess);
// }

// function findNextSquare(sq) {
//   var num = squareRoot(sq) + 1;
//   if (/\W/.test(num) === false) {
//     return num * num;
//   } else {
//     return -1;
//   }
// }

console.log(findNextSquare(121)); // returns 144
console.log(findNextSquare(625)); // returns 676
console.log(findNextSquare(114)); // returns -1 since it is not a perfect
console.log(findNextSquare(319225)); // returns 320356
console.log(findNextSquare(15241383936)); // returns 15241630849
console.log(findNextSquare(155)); // returns -1 since it is not a perfect
console.log(findNextSquare(342786627)); // returns -1 since it is not a perfect

// Example of how the squareRoot function works:

// squareRoot(625);

// ROUND 1
// guess = 312.5
// dividedNum = 2
// newGuess = 157.25

// ————

// ROUND 2
// guess = 157.25
// dividedNum = 3.9745627981
// newGuess = 161.2245627981

// ————

// ROUND 3
// guess = 161.2245627981
// dividedNum = 3.87658052317178
// newGuess = 82.5505716606359

// ————

// ROUND 4
// guess = 82.5505716606359
// dividedNum = 7.571116558336691
// newGuess = 45.0608441094863

// ————

// ROUND 5
// guess = 45.0608441094863
// dividedNum = 13.870135199451886
// newGuess = 29.465489654469092

// ————

// ROUND 6
// guess = 29.465489654469092
// dividedNum = 21.211254499047666
// newGuess = 25.33837207675838

// ————

// ROUND 7
// guess = 25.33837207675838
// dividedNum = 24.666146590107154
// newGuess = 25.002259333432768

// ————

// ROUND 8
// guess = 25.002259333432768
// dividedNum = 24.997740870732283
// newGuess = 25.000000102082524

// ————

// ROUND 9
// guess = 25.000000102082524
// dividedNum = 24.999999897917476
// newGuess = 25.0

// ————

// ROUND 10
// guess = 25.0
// dividedNum = 25.0
// newGuess = 25.0

// ————

// newGuess === guess, so 25 is the square root of 625.
