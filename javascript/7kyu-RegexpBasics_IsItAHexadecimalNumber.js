// Regexp Basics - is it a hexadecimal number?

// Return true if given object is a hexadecimal number, false otherwise.
// Hexadecimal numbers consist of one or more digits from range 0-9 A-F (in any case), optionally prefixed by 0x.

function hexNumber(str) {
  var strArr = str.split('');
  if (strArr[0] !== '0' && strArr[1] === 'x') {
    return false;
  } else if (/\W/.test(str) === false && /[0]/.test(str) === false && /\s/.test(str) === false) {
    return str.length >= 1 && /[a-f]|[0-9]/i.test(str);
  } else if (str !== '0x' && /[0]/.test(str) === true && /\s/.test(str) === false) {
    var count = 0;
    for (i = 0; i < strArr.length; i++) {
      if (strArr[i] === '0') {
        count++;
      }
    }
    if (strArr[1] === 'x' && strArr[0] !== '0') {
      return false;
    } else {
      return count === 1 || count === str.length;
    }
  } else {
    return false;
  }
}

// MUCH SIMPLIER SOLUTION
// function hexNumber(str) {
//   return /^(0x)?[a-f\d]+$/i.test(str);
// }

console.log(hexNumber("")); // false
console.log(hexNumber("0x")); // false
console.log(hexNumber("0")); // true
console.log(hexNumber("0xDEADBEEF")); // true
console.log(hexNumber("1337bAbe")); // true
console.log(hexNumber("00000000")); // true
console.log(hexNumber("0.0")); // false
console.log(hexNumber("0x0x0")); // false
console.log(hexNumber("00x")); // false
console.log(hexNumber("1x2")); // false
