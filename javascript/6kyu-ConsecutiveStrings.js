// Consecutive strings

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(strarr, k) {
  var n = strarr.length;

  if (n === 0 || k > n || k <= 0) {
    return "";
  } else {
    var longest = "";
    for (i = 0; i < strarr.length; i++) {
      var tempLongest = [];
      for (j = i; j < i+k; j++) {
        tempLongest.push(strarr[j]);
      }
      if (tempLongest.join('').length > longest.length) {
        longest = tempLongest.join('');
      }
      tempLongest = [];
    }

    return longest;
  }
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); // "abigailtheta"
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); // "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3)); // ""
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)); // "wlwsasphmxxowiaxujylentrklctozmymu"
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)); // ""
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)); // "ixoyx3452zzzzzzzzzzzz"
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)); // ""
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)); // ""
