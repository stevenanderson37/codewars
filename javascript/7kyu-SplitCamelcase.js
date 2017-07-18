// Split camelcase

// Split a camelcase string into individual words, the return value must be a single string of words seporated by one whitespace.

// The strings are to be split on the capital letters.

function splitter(str) {
  if (str === '') {
    return str;
  }
  var stringArr = str.split('');
  var newString = stringArr[0];
  for (i = 1; i < stringArr.length; i++) {
    if (/[A-Z]/.test(stringArr[i]) === true && /\s/.test(stringArr[i-1]) === false) {
      newString += ' ' + stringArr[i];
    } else {
      newString += stringArr[i];
    }
  }
  return newString;
}

console.log(splitter('StringStringString')); // => 'String String String'
console.log(splitter('string StringString')); // => 'string String String'
console.log(splitter('stringstringstring')); // => 'stringstringstring'
console.log(splitter('String1String2String3')); // => 'String1 String2 String3'
console.log(splitter('')); // => ''
// console.log(splitter('')); // => ''
// console.log(splitter('')); // => ''
