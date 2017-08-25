// How many are smaller than me?

// Write a function that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

function smaller(arr) {
  let answer = [];
  for (i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
}

console.log(smaller([5, 4, 3, 2, 1])); // [4, 3, 2, 1, 0]
console.log(smaller([1, 2, 0])); // [1, 1, 0]
