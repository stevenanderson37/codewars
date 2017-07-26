// Permute a Palindrome

// Write a function that will check whether the permutation of an input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in Python functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

// Example

// madam -> True
// adamm -> True
// junk -> False

// Hint

// The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.

function permuteAPalindrome (input) {
  var strArr = input.toLowerCase().split("");

  if (input.length <= 1) {
    return true;
  } else {
    var count = 0;
    var searchedArr = [];

    for (i = 0; i < strArr.length; i++) {
      var charCount = 0;
      var looped = false;

      for (k = 0; k < searchedArr.length; k++) {
        if (strArr[i] === searchedArr[k]) {
          looped = true;
        }
      }

      if (looped === false) {
        for(j = 0; j < strArr.length; j++) {
          if (strArr[i] === strArr[j]) {
            charCount++;
            looped = false;
          }
        }
      }

      searchedArr.push(strArr[i]);

      if (charCount % 2 === 1 && looped === false) {
        count++;
        charCount = 0;
        looped = false;
      }
    }

    if (count <= 1) {
      return true;
    } else {
      return false;
    }
  }
}


console.log(permuteAPalindrome("a")); // true
console.log(permuteAPalindrome("aa")); // true
console.log(permuteAPalindrome("baa")); // true
console.log(permuteAPalindrome("aab")); // true
console.log(permuteAPalindrome("baabcd")); // false
console.log(permuteAPalindrome("racecars")); // false
console.log(permuteAPalindrome("abcdefghba")); // false
console.log(permuteAPalindrome("")); // true

console.log(permuteAPalindrome("sssss")); // true
console.log(permuteAPalindrome("snnssss")); // true
console.log(permuteAPalindrome("qqpzppz")); // true
console.log(permuteAPalindrome("ilbbdrdpcuilucprbbr")); // true
console.log(permuteAPalindrome("pttpp")); // true
console.log(permuteAPalindrome("ekrjrayrvzzzvondoylldnejakz")); // true
console.log(permuteAPalindrome("uqlurflqssrfu")); // true
console.log(permuteAPalindrome("skntrotszekqrvqqkdojskqdojkzkvsjejn")); // true
console.log(permuteAPalindrome("hzuqenuvmclbqvpjgwnelcplgtbzhobubwgccjgukkltobbmccbbg")); // true
console.log(permuteAPalindrome("dkddddktgooigbkbkdtikdk")); // true
console.log(permuteAPalindrome("woqcapzuudqdjxzceeorjmsrulrxuputuoerodmacbdulmdhsqbdmceqwtbuh")); // true
console.log(permuteAPalindrome("gxqkaqudqwjngaxtatgtcucbbqguugbqugncdkcnkkankkujunnqbtucw")); // true
console.log(permuteAPalindrome("ymytkkmtooyoy")); // true
console.log(permuteAPalindrome("rtjqjyuoxayerteauqxroryya")); // true
