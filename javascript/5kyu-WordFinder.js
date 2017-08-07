// Word Finder

// In this kata you have to extend the dictionary with a method, that returns a list of words matching a pattern. This pattern may contain letters (lowercase) and placeholders ("?"). A placeholder stands for exactly one arbitrary letter.

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  let words = this.words;
  let wordsArr = [];
  let patternArr = pattern.split('');
  let arr = [];

  for (i = 0; i < words.length; i++) {
    wordsArr.push(words[i].split(''));
  }
  for (j = 0; j < wordsArr.length; j++) {
    for (k = patternArr.length-1; k >= 0; k--) {
      if (patternArr.length === wordsArr[j].length && patternArr[k] === '?') {
        wordsArr[j].splice(k,1,'?');
      }
    }
  }
  for (l = 0; l < wordsArr.length; l++) {
    if (wordsArr[l].join('') === pattern) {
      arr.push(words[l]);
    }
  }

  return arr;
};

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('lemon')); // must return []
var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('cherr??')); // must return []
var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('?a?a?a')); // must return ['banana', 'papaya']
var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('??????')); // must return ['banana', 'papaya', 'cherry']
