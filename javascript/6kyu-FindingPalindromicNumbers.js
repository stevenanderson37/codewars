// Finding Palindromic Numbers

// This Kata is about actually finding a palindromic number out of an original seed.

// You will be given an number as input and in the output you must return a string containing the number of iterations (i.e. additions) you had to perform to reach the palindromic result and the palindromic number itself, separated by a space.

// ###Some Assumptions
// You can assume that all numbers provided as input will be actually paired with a palindromic result and that you will reach that result in less than 1000 iterations and yield a palindrome.

function palindromize(number){
  var num;
  var reversedNum = parseFloat(number.toString().split('').reverse().join(''));
  var count = 0; // will not reach more than 1000

  if (number === reversedNum) {
    return "" + count + " " + number + "";
  } else {
    num = number;
    while (num !== reversedNum) {
      if (count <= 1000) {
        count += 1;
        num += reversedNum;
        reversedNum = parseFloat(num.toString().split('').reverse().join(''));
      } else {
        return "";
      }
    }
    return "" + count + " " + num + "";
  }
}

console.log(palindromize(195)); // "4 9339"
console.log(palindromize(265)); // "5 45254"
console.log(palindromize(750)); // "3 6666"
console.log(palindromize(56)); // "1 121"
console.log(palindromize(57)); // "2 363"
console.log(palindromize(59)); // "3 1111"
console.log(palindromize(89)); // "24 8813200023188"
console.log(palindromize(1422241)); // "0 1422241"


// A palindromic number is a number that remains the same when its digits are reversed. Like 16461, for example, it is "symmetrical".

// Non-palindromic numbers can be paired with palindromic ones via a series of operations. First, the non-palindromic number is reversed and the result is added to the original number. If the result is not a palindromic number, this is repeated until it gives a palindromic number.

// It is not known whether all non-palindromic numbers can be paired with palindromic numbers in this way. While no number has been proven to be unpaired, many do not appear to be. For example, 196 does not yield a palindrome even after 700,000,000 iterations. Any number that never becomes palindromic in this way is known as a Lychrel number (https://en.wikipedia.org/wiki/Lychrel_number).
