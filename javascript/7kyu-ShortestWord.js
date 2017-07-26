// Shortest Word

// x Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

var randomString = "killing time with coding";

// function findShort(s){
//   var splitArray = s.split(" ");
//   return splitArray;
// }

function findShort(s){
  var splitArray = s.split(" ");
  // console.log(splitArray);
  // Longest word in the english language.
  var shortest = 189819;
  for (i = 0; i < splitArray.length; i++) {
    var word = splitArray[i];
    // console.log(word);
    // console.log(word.length);
    if (word.length < shortest) {
      shortest = word.length;
    }
  }
  return shortest;
}

findShort(randomString);
