// Filling an array (part 1)

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

// const arr = N => [ /* the numbers 0 to N-1 */ ];

function arr(N) {
  var filledArr = [];
  if (typeof N === 'number') {
    filledArr.push(0);
    for ( i = 1; i < N; i++){
      filledArr.push(filledArr[i-1] + 1);
    }
  }
  return filledArr;
}

console.log(arr(4));
console.log(arr(5));
console.log(arr());
