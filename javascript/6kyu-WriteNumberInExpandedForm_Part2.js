// Write Number in Expanded Form - Part 2

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

function expandedForm(num) {
  var numStr = num.toString();
  var splitNum = numStr.split('.');
  var wholeNumArr = splitNum[0].split('');
  wholeNumArr.reverse();
  var fractionArr = splitNum[1].split('');
  var expandedArr = [];

  if (parseInt(wholeNumArr[wholeNumArr.length - 1]) > 0) {
    for (i = 0; i < wholeNumArr.length; i++) {
      var wholeTemp = parseInt(wholeNumArr[i]);
      if (wholeTemp > 0 && wholeNumArr.length > 1) {
        expandedArr.push('' + wholeTemp + ('0'.repeat(i)));
      } else if (wholeNumArr[i] > 0) {
        expandedArr.push('' + wholeTemp + '');
      }
    }
    expandedArr.reverse();
  }

  for (j = 0; j < fractionArr.length; j++) {
    var fracTemp = parseInt(fractionArr[j]);
    if (fracTemp > 0) {
      expandedArr.push('' + fracTemp + '/' + '1' + ('0'.repeat(j + 1)));
    }
  }

  return expandedArr.join(' + ');
}

console.log(expandedForm(1.24)); // should return '1 + 2/10 + 4/100'
console.log(expandedForm(7.304)); // should return '7 + 3/10 + 4/1000'
console.log(expandedForm(0.04)); // should return '4/100'
console.log(expandedForm(1.24)); // should return '1 + 2/10 + 4/100'
console.log(expandedForm(4.28)); // should return '4 + 2/10 + 8/100'
console.log(expandedForm(70.304)); // should return '70 + 3/10 + 4/1000'
console.log(expandedForm(88.1509)); // should return '80 + 8 + 1/10 + 5/100 + 9/10000'
console.log(expandedForm(438.28)); // should return '400 + 30 + 8 + 2/10 + 8/100'
