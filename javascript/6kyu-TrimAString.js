// Trim a String

// Extend the String prototype by a trim function, that returns the string with leading or trailing whitespaces removed.

// function trim(str) {
//   return str.trim();
// }

// Creates trim() if it's not natively available.
function trim(str) {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}

console.log(trim("foo      ")); // "foo"
console.log(trim("      foo")); // "foo"
console.log(trim("      foo      ")); // "foo"
console.log(trim("foo    bar")); // "foo    bar"
console.log(trim("    ")); // ""
