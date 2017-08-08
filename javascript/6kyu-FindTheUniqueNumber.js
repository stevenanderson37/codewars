// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  let sortArr = arr.sort();
  let num1 = sortArr[0];
  let num2 = sortArr[sortArr.length-1];
  let unique;

  if (sortArr[1] === num1) {
    return num2;
  } else {
    return num1;
  }
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // === 0.55
console.log(findUniq([  0, 1, 0 ])); // === 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // === 2
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // === 10
