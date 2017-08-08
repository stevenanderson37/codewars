// Where my anagrams at?

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

function anagrams(word, words) {
  let wordSort = word.split('').sort().join('');
  let matches = [];

  for (i = 0; i < words.length; i++) {
    if (words[i].split('').sort().join('') === wordSort) {
      matches.push(words[i]);
    }
  }

  return matches;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // should return ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // should return ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // should return []
