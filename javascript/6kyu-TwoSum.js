// Two sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
  let numSet = new Set();
  let arr = [];

  for (i = 0; i < numbers.length; i++) {
    if (numSet.has(target-numbers[i])) {
      arr.push(i);
      arr.push(numbers.indexOf(target-numbers[i]));
      break;
    } else {
      numSet.add(numbers[i]);
    }
  }
  return arr.sort();
}

console.log(twoSum([1,2,3], 4)); // should return [0,2]
console.log(twoSum([1234,5678,9012], 14690)); // should return [1,2]
console.log(twoSum([2,2,3], 4)); // should return [0,1]
