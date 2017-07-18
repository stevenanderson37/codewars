// CamelCase Method

// Write a simple camelcase method for strings. All words must have their first letter capitalized without spaces.

function camelCase(string) {
  var stringArr = string.split('');
  var newString = '';

  if (stringArr[0] === ' ') {
    stringArr.splice(0, 1);
  } else if (string === '') {
    return string;
  }

  for (i = stringArr.length - 1; i > 0; i--) {
    if (/\s/.test(stringArr[i-1]) === true) {
      newString += stringArr[i].toUpperCase();
    } else if (/\s/.test(stringArr[i]) === false) {
      newString += stringArr[i];
    }
  }
  newString += stringArr[0].toUpperCase();
  return newString.split('').reverse().join('');
}

console.log(camelCase("hello case")); // Should return "HelloCase"
console.log(camelCase("camel case word")); // Should return "CamelCaseWord"
console.log(camelCase(" camel case word")); // Should return "CamelCaseWord"
console.log(camelCase("")); // Should return ""
