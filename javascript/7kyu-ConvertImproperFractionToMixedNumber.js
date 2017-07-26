// Convert Improper Fraction to Mixed Number

// You will need to convert an improper fraction to a mixed number. For example:

// NOTE: All fractions will be greater than 0.

function getMixedNum(fraction) {
  var fractionArr = fraction.split('/');
  var w = parseInt(parseInt(fractionArr[0]) / parseInt(fractionArr[1]));
  var n = parseInt(fractionArr[0]) % parseInt(fractionArr[1]);
  var d = parseInt(fractionArr[1]);

  return '' + w + ' ' + n + '/' + d + '';
}

console.log(getMixedNum('18/11')); // Should return '1 7/11'
console.log(getMixedNum('13/5')); // Should return '2 3/5'
console.log(getMixedNum('75/10')); // Should return '7 5/10'
console.log(getMixedNum('106/9')); // Should return '11 7/9'
console.log(getMixedNum('103/6')); // Should return '17 1/6'



// UNNECESSARILY COMPLICATED FUNCTION FOR SIMPLE PROBLEM:
// function getMixedNum(fraction) {
//   var fractionArr = fraction.split('');
//   var newArr = [];

//   for (i = 0; i < fractionArr.length; i++) {
//     if (fractionArr[i] !== '/') {
//       fractionArr[i] = parseInt(fractionArr[i]);
//     }
//   }

//   var count = 0;
//   for (i=0; typeof fractionArr[i] === 'number'; i++) {
//     if (typeof fractionArr[i] === 'number') {
//       count++;
//     }
//   }

//   var temp;
//   for (i = 0; i < fractionArr.length; i++) {
//     if (count <= 2) {
//       if (typeof fractionArr[i+1] === 'number' && typeof fractionArr[i-1] === 'number') {
//         temp = newArr[0];
//         newArr.splice(0, 1, '' + temp + fractionArr[i+1] + '');
//         break;
//       } else if (typeof fractionArr[i+1] === 'number') {
//         newArr.push('' + fractionArr[i] + fractionArr[i+1] + '');
//         break;
//       }
//     } else {
//       if (typeof fractionArr[i+1] === 'number' && typeof fractionArr[i-1] === 'number') {
//       temp = newArr[0];
//       newArr.splice(0, 1, '' + temp + fractionArr[i+1] + '');
//       break;
//     } else if (typeof fractionArr[i+1] === 'number') {
//       newArr.push('' + fractionArr[i] + fractionArr[i+1] + '');
//     }
//     }
//   }

//   for (i = fractionArr.length - 1; i >= 0; i--) {
//     if (typeof fractionArr[i-1] === 'number') {
//       newArr.push('' + fractionArr[i-1] + fractionArr[i] + '');
//       break;
//     } else {
//       newArr.push('' + fractionArr[i] + '');
//       break;
//     }
//   }

//   var w = parseInt(parseInt(newArr[0]) / parseInt(newArr[1]));
//   var n = parseInt(newArr[0]) % parseInt(newArr[1]);
//   var d = parseInt(newArr[1]);

//   return '' + w + ' ' + n + '/' + d + '';
// }
