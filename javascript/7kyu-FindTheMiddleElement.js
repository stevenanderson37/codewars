// Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers.

function gimme(inputArray) {
  let arr = [];
  for (i = 0; i < inputArray.length; i++) {
    arr.push(inputArray[i]);
  }
  return inputArray.indexOf(arr.sort(function(a, b) {return a - b;})[1]);
}

console.log(gimme([2, 3, 1])); // 0
console.log(gimme([5, 10, 14])); // 1
