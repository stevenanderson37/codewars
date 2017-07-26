// Regexp Basics - is it a letter?

// Implement String#letter? (Ruby), StringUtils.isLetter(String) (Java), String.prototype.isLetter() (JavaScript) or letter? (Clojure), which should return true if given object is a single ASCII letter (lower or upper case), false otherwise.

function isLetter(str) {
  if (/[a-z]/i.test(str) === true && str.length === 1) {
    return true;
  } else {
    return false;
  }
}

// function isLetter(str) {
//   return /^[a-z]$/i.test(str);
// }

console.log(isLetter("")); // false
console.log(isLetter("a")); // true
console.log(isLetter("X")); // true
console.log(isLetter("7")); // false
console.log(isLetter("*")); // false
console.log(isLetter("ab")); // false
console.log(isLetter("a/b")); // false
