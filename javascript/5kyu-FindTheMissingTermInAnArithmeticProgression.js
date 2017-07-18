// Find the missing term in an Arithmetic Progression

// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: Exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write the function findMissing (list) , list will always be atleast 3 numbers. The missing term will never be the first or last one.

// PS: This is a sample question of the facebook engeneer challange on interviewstreet. I found it quite fun to solve on paper using math , derive the algo that way. Have fun!

var findMissing = function (list) {
  var incrementNum = list[1] - list[0];

  for (i = list.length - 1; i >= 0; i--) {
    if (list[i] - list[i-1] !== incrementNum) {
      // If you want to splice the missing number into the array.
      // list.splice(list[i-1], 0, list[i] - incrementNum);
      return list[i] - incrementNum;
    }
  }

  return list [0];
}

console.log(findMissing([1, 3, 5, 9, 11])) // Should return 7
console.log(findMissing([-9, -13, -21])) // Should return -17
console.log(findMissing([17, 24, 31, 45, 52, 59, 66, 73, 80, 87, 94, 101])) // Should return 38
console.log(findMissing([12, 18, 24, 30, 42, 48, 54, 60, 66, 72, 78])) // Should return 36
console.log(findMissing([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26])) // Should return 19
