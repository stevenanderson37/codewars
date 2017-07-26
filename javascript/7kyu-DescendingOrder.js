// Descending Order

// Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

function descendingOrder(n){
  var nString = n.toString();
  var arr = nString.split("");
  var nArr = [];
  var newArr = [];
  var newNum;

  for (i = 0; i < arr.length; i++) {
    nArr.push(parseFloat(arr[i]));
  }
  nArr.sort(function(a, b){return b-a});
  newNum = nArr.join("");
  return parseFloat(newNum);
}

console.log(descendingOrder(21445)); // Output 54421
console.log(descendingOrder(145263)); // Output 654321
console.log(descendingOrder(1254859723)); // Output 9875543221
