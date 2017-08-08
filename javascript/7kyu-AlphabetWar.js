// Alphabet war

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:
// w - 4
// p - 3
// b - 2
// s - 1

// The right side letters and their power:
// m - 4
// q - 3
// d - 2
// z - 1

function alphabetWar(fight) {
  let left = 0;
  let right = 0;

  for (i = 0; i < fight.length; i++) {
    if (/w/.test(fight[i])) {
      left += 4;
    } else if (/p/.test(fight[i])) {
      left += 3;
    } else if (/b/.test(fight[i])) {
      left += 2;
    } else if (/s/.test(fight[i])) {
      left += 1;
    } else if (/m/.test(fight[i])) {
      right += 4;
    } else if (/q/.test(fight[i])) {
      right += 3;
    } else if (/d/.test(fight[i])) {
      right += 2;
    } else if (/z/.test(fight[i])) {
      right += 1;
    }
  }

  if (left > right) {
    return "Left side wins!";
  } else if (right > left) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("z")); // "Right side wins!"
console.log(alphabetWar("zdqmwpbs")); // "Let's fight again!"
console.log(alphabetWar("zzzzs")); // "Right side wins!"
console.log(alphabetWar("wwwwww")); // "Left side wins!"
