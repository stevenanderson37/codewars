// Sort the odd

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

function sortArray(array) {
  var oddArr = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  oddArr.sort(function(a, b) {
    return a - b;
  });

  var count = 0;
  for (j = 0; j < array.length; j++) {
    if (array[j] % 2 !== 0) {
      array.splice(j, 1, oddArr[0 + count]);
      count++;
    }
  }

  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // should return [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // should return [1, 3, 5, 8, 0]
console.log(sortArray([])); // should return []
