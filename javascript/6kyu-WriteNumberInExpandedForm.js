// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form.

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  var numStr = num.toString();
  var splitNum = numStr.split('');
  var numLength = splitNum.length;
  var expandedArr = [];

  for (i = 0; i < numLength; i++) {
    var temp = parseInt(splitNum[i]);

    if (splitNum[i] > 0) {
      expandedArr.push('' + temp + ('0'.repeat(numLength - (i + 1))));
    }
  }

  return expandedArr.join(' + ');
}

// WITHOUT USING THE REPEAT METHOD FOR '0'
// function expandedForm(num) {
//   var numStr = num.toString();
//   var splitNum = numStr.split('');
//   var numLength = splitNum.length;
//   var expandedArr = [];
//   var zeroes = '';

//   for (i = 0; i < numLength; i++) {
//     var temp = parseInt(splitNum[i]);
//     if (temp > 0) {
//       for (j = 0; j < (numLength - (i + 1)); j++) {
//         zeroes += '0';
//       }
//     }
//     if (splitNum[i] > 0) {
//       expandedArr.push('' + temp + zeroes);
//     }
//     zeroes = '';
//   }

//   return expandedArr.join(' + ');
// }

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
console.log(expandedForm(45229)); // Should return '40000 + 5000 + 200 + 20 + 9'
