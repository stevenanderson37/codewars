// Regexp Basics - is it a vowel?

// Implement String#vowel? (in Java StringUtils.isVowel(String)), which should return true if given object is a vowel, false otherwise.

function vowel(str) {
  return str.length === 1 && /[aeiou]/i.test(str);
}

// SPLITTING THE VOWELS UP WITH COMMAS DID NOT WORK IN CODEWARS, BUT THIS DID. TAKING THE COMMAS OUT FIXED THE PROBLEM WITH THE ABOVE SOLUTION.
// function vowel(str) {
//   return str.length === 1 && /[a]|[e]|[i]|[o]|[u]/i.test(str);
// }

console.log(vowel("")); // false
console.log(vowel("a")); // true
console.log(vowel("E")); // true
console.log(vowel("ou")); // false
console.log(vowel("z")); // false
console.log(vowel("lol")); // false
