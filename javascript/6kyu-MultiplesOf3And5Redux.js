// Multiples of 3 and 5 redux

// Return the sum of the multiples of 3 and 5 below a number. Being the galactic games, the tracks can get rather large, so your solution should work for really large numbers (greater than 1,000,000).

function solution(number){
  let num3 = Math.floor(--number/3);
  let num5 = Math.floor(number/5);
  let num15 = Math.floor(number/15);
  return (3 * num3 * (num3 + 1) + 5 * num5 * (num5 + 1) - 15 * num15 * (num15 + 1)) / 2;
}

console.log(solution(10)); // returns 23
console.log(solution(20)); // returns 78
console.log(solution(1000000)); // returns 233333166668
console.log(solution(5000000)); // returns 5833329166668
console.log(solution(50000000)); // returns 583333291666668
console.log(solution(100000000)); // returns 2333333316666668
console.log(solution(200000000)); // returns 9333333166666668

// ONLY WORKS UP TO 1,000,000.
// function solution(number){
//   let sum = 0;

//   for (i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }
