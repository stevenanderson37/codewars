// Count the Characters

// The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

// The character can be any alphanumeric character.

function countChar(string, char) {
  var strArr = string.toLowerCase().split('');
  var count = 0;
  for (i = 0; i < strArr.length; i++) {
    if (char.toLowerCase() === strArr[i]) {
      count++;
    }
  }
  return count;
}

console.log(countChar("fizzbuzz","z")); // 4
console.log(countChar("Fancy fifth fly aloof","f")); // 5
console.log(countChar("Fancy 5th floor","5")); // 1
console.log(countChar("flxa8j5HktTXLJynUlTRBAgdae","A")); // 3
