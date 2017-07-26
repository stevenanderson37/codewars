// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

// FIRST ATTEMPT: times out on Code Wars when lists are too large. Works for these examples.
// var sum_pairs=function(ints, s){
//   var newArr = [];
//   for (i = 0; i < ints.length; i++) {
//     for (j = 0; j <= i-1; j++) {
//       if (ints[i] + ints[j] === s) {
//         newArr.unshift(ints[j]);
//         newArr.push(ints[i]);
//         return newArr;
//       }
//     }
//   }
// }

// THIRD ATTEMPT: Works here, and passes the tests in Code Wars. (Uses ES6)
var sum_pairs=function(ints, s){
  var newArr = [];
  var numsSet = new Set();
  for (i = 0; i < ints.length; i++) {
    var num = s - (ints[i]);
    if (numsSet.has(num)) {
      newArr.unshift(num);
      newArr.push(ints[i]);
      return newArr;
    } else {
      numsSet.add(ints[i]);
    }
  }
}

l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

console.log(sum_pairs(l1, 8)); // == [1, 7]
console.log(sum_pairs(l2, -6)); // == [0, -6]
console.log(sum_pairs(l3, -7)); // == undefined
console.log(sum_pairs(l4, 2)); // == [1, 1]
console.log(sum_pairs(l5, 10)); // == [3, 7]
console.log(sum_pairs(l6, 8)); // == [4, 4]
console.log(sum_pairs(l7, 0)); // == [0, 0]
console.log(sum_pairs(l8, 10)); // == [13, -3]
