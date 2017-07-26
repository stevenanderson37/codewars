// Find the Square Root

// Create a Function that takes one parameter and returns its square root correct to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.

// Trailing zeros should be left out. For example
// squareRoot(28) // => 5.29150;
// rather than
// squareRoot(28) // => 5.2915;

function findSqrt(n, g) {
    if (!g) {
        g = n / 2.0;
    }
    var d = n / g;
    var ng = (d + g) / 2.0;
    if (g === ng) {
        return g;
    }
    return findSqrt(n, ng);
}

// function squareRoot(x) {
//   var sqrt = findSqrt(x).toString();
//   var sqrtArr;

//   if (/\W/.test(sqrt) === false) {
//     return parseFloat(sqrt);
//   } else {
//     sqrtArr = sqrt.split(/\W/);
//     var decimals = sqrtArr[1].split('');

//     while (decimals.length > 5 || decimals[decimals.length-1] === '0') {
//       decimals.pop();
//     }

//     return parseFloat('' + sqrtArr[0] + '.' + decimals.join('') + '');
//   }
// }

// Below function rounds the fifth decimal place up if the sixth is greater than 4.

function squareRoot(x) {
  var sqrt = findSqrt(x).toString();
  var sqrtArr;

  if (/\W/.test(sqrt) === false) {
    return parseFloat(sqrt);
  } else {
    sqrtArr = sqrt.split(/\W/);
    var decimals = sqrtArr[1].split('');
    var temp = sqrtArr[1].split('');

    while (decimals.length > 5 || decimals[decimals.length-1] === '0') {
      decimals.pop();
    }

    if (decimals.length === 5 && parseFloat(temp[5]) > 4) {
      decimals[4] = parseFloat(decimals[4]) + 1;
      decimals[4].toString();
    }

    return parseFloat('' + sqrtArr[0] + '.' + decimals.join('') + '');
  }
}

console.log(squareRoot(41)); // Should return 6.40312
console.log(squareRoot(28)); // Should return 5.2915
console.log(squareRoot(25)); // Should return 5
console.log(squareRoot(626)); // Should return 25.01999
console.log(squareRoot(21)); // Should return 4.58257 or 4.58258 if rounding up.
