// Regexp Basics - Is it a digit?

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

function digit(str) {
  if (/\d/.test(str) === true && str.length === 1) {
    return true;
  } else {
    return false;
  }
}

// function digit(str) {
//   return /^\d$/.test(str);
// }

console.log(digit('')); // false
console.log(digit('7')); // true
console.log(digit(' ')); // false
console.log(digit('a')); // false
console.log(digit('a5')); // false
console.log(digit('14')); // false
