// Find Maximum and Minimum Values of a List

// Your task is to make two functions, max and min that take a(n) array of integers list as input and outputs, respectively, the largest and lowest number in that array.
// #Notes
// You may consider that there will not be any empty arrays.

var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}

// var min = function(list){
//   return Math.min.apply(null, list);
// }

// var max = function(list){
//   return Math.max.apply(null, list);
// }

console.log(max([4,6,2,1,9,63,-134,566])); // return 566
console.log(min([-52, 56, 30, 29, -54, 0, -110])); // return -110
console.log(max([5])); // return 5
console.log(min([42, 54, 65, 87, 0])); // return 0
