// Math Issues

// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:
//  • Math.round()
//  • Math.ceil()
//  • Math.floor()

Math.round = function(number) {
  let arr = [];
  if (/./.test(number.toString())) {
    arr = number.toString().split('.');
  }
  if (arr.length > 1 && parseInt(arr[1][0]) <= 4) {
    return parseFloat(arr[0]);
  } else if (arr.length > 1 && parseInt(arr[1][0]) >= 5) {
    return parseFloat(arr[0]) + 1;
  } else {
    return number;
  }
};

Math.ceil = function(number) {
  let arr = [];
  if (/./.test(number.toString())) {
    arr = number.toString().split('.');
  }
  if (arr.length > 0 && arr[1] > 0) {
    return parseFloat(arr[0]) + 1;
  } else {
    return parseFloat(arr[0]);
  }
};

Math.floor = function(number) {
  let arr = [];
  if (/./.test(number.toString())) {
    arr = number.toString().split('.');
    return parseFloat(arr[0]);
  } else {
    return number;
  }
};

console.log(Math.round(0.4)); // 0
console.log(Math.round(0.5)); // 1
console.log(Math.round(6)); // 6

console.log(Math.ceil(0.4)); // 1
console.log(Math.ceil(0.5)); // 1
console.log(Math.ceil(3)); // 3
console.log(Math.ceil(5.0000)); // 5
console.log(Math.ceil(5.0001)); // 6

console.log(Math.floor(0.4)); // 0
console.log(Math.floor(0.5)); // 0
