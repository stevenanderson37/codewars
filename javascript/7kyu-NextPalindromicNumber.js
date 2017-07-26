// Next Palindromic Number.

// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// You will be receiving values higher than 10, all valid.

// Enjoy it!!


function nextPal(val) {
  var nextPalindrome = val + 1;
  var valString = nextPalindrome.toString();

  while (nextPalindrome.toString() !== valString.split('').reverse().join('')) {
    nextPalindrome += 1;
    valString = nextPalindrome.toString();
  }

  return nextPalindrome;
}


console.log(nextPal(11)); // Should return 22
console.log(nextPal(188)); // Should return 191
console.log(nextPal(191)); // Should return 202
console.log(nextPal(2541)); // Should return 2552
