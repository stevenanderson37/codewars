// Character counts

// The object is to count the number of occurances of a specified character (or set of characters) in a string.

// Instructions

// Complete the placeholder function characterCount.
//  • it should return the number of times a single character appears in the string, or
//  • if multiple characters are specified (either by providing an array or string of length 2 or more), it should return an array of character counts
//  • see the unit tests provided for a more comprehensive definition

// NOTE: The tests assume that if no arguments are provided to the function (i.e. ''.characterCount()), then the result is undefined.

function characterCount(str, charsToCount) {
  if (charsToCount === undefined) {
    return undefined;
  } else {
    var strArr = str.split('');
    var charsArr = charsToCount;
    var countArr = [];
    if (typeof charsArr === 'string') {
      charsArr = charsToCount.split('');
    }

    for (i = 0; i < charsArr.length; i++) {
      var count = 0;
      for (j = 0; j < strArr.length; j++) {
        if (strArr[j] === charsArr[i]) {
          count++;
        }
      }
      countArr.push(count);
      count = 0;
    }

    if (countArr.length <= 1) {
      return countArr[0];
    } else {
      return countArr;
    }
  }
}

console.log(characterCount('lol', 'l')); // 2
console.log(characterCount('booop-booop-deee-doo-dooop', 'ado')); // [0,3,11]
console.log(characterCount('booop-booop-deee-doo-dooop', ['a','d','o','o','d','a'])); // [0,3,11,11,3,0]
console.log(characterCount('', )); // undefined
