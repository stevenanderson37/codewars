// Odd or Even?

// Given an array of numbers, determine whether the sum of all of the numbers is odd or even.
// Give your answer in string format as 'odd' or 'even'.
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  let total = array.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  if (total%2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven([0])); // returns "even"
console.log(oddOrEven([2, 5, 34, 6])); // returns "odd"
console.log(oddOrEven([0, -1, -5])); // returns "even"
