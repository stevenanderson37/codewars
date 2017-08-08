// The Hashtag Generator

// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:
// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.

function generateHashtag(str) {
  let hashtag = '#';

  for (i = 0; i < str.length; i++) {
    if ((i === 0 || /\s/.test(str[i-1])) && !/\s/.test(str[i])) {
      hashtag += str[i].toUpperCase();
    } else if (!/\s/.test(str[i-1]) && !/\s/.test(str[i])) {
      hashtag += str[i];
    }
  }

  if (hashtag === '#' || hashtag.length > 140 || str === '') {
    return false;
  } else {
    return hashtag;
  }
}

console.log(generateHashtag(" Hello there thanks for trying my Kata")); // "#HelloThereThanksForTryingMyKata"
console.log(generateHashtag(" Hello World ")); // "#HelloWorld"
console.log(generateHashtag("codewars is nice")); // "#CodewarsIsNice"
