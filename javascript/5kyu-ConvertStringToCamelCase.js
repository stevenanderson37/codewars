// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str) {
  var strArr = str.split('');
  var camelCase = '';

  for (i = strArr.length - 1; i >= 0; i--) {
    if (/[_-]/.test(strArr[i-1]) === true) {
      camelCase += strArr[i].toUpperCase();
    } else if (/[A-Za-z]/.test(strArr[i]) === true) {
      camelCase += strArr[i];
    }
  }

  return camelCase.split('').reverse().join('');
}

console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"
console.log(toCamelCase("the_stealth_warrior")); // returns "theStealthWarrior"
