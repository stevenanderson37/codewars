// Simple Substitution Cipher Helper

// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

// If a character provided is not in the opposing alphabet, simply leave it as is.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

function encode(str) {
  var encoded = '';

  for (i = 0; i < str.length; i++) {
    if (/[A-Za-z]/.test(str[i]) === false) {
      encoded += str[i];
    } else if (/[A-Za-z]/.test(str[i]) === true) {
      for (j = 0; j < abc1.length; j++) {
        if (str[i].toLowerCase() === abc1[j] && /[A-Z]/.test(str[i]) === true) {
          encoded += abc2[j].toUpperCase();
        } else if (str[i].toLowerCase() === abc1[j]) {
          encoded += abc2[j];
        }
      }
    }
  }
  
  return encoded;
}

function decode(str) {
  var decoded = '';

  for (i = 0; i < str.length; i++) {
    if (/[A-Za-z]/.test(str[i]) === false) {
      decoded += str[i];
    } else if (/[A-Za-z]/.test(str[i]) === true) {
      for (j = 0; j < abc2.length; j++) {
        if (str[i].toLowerCase() === abc2[j] && /[A-Z]/.test(str[i]) === true) {
          decoded += abc1[j].toUpperCase();
        } else if (str[i].toLowerCase() === abc2[j]) {
          decoded += abc1[j];
        }
      }
    }
  }

  return decoded;
}

console.log(encode("abc")); // => "eta"
console.log(encode("xyz")); // => "qxz"
console.log(encode("aeiou")); // => "eirfg"
console.log(encode("")); // => ""
console.log(encode("Encode this sentence, please."));
  // => "Imafoi bhrv vimbimai, wuievi."

console.log(decode("eta")); // => "abc"
console.log(decode("qxz")); // => "xyz"
console.log(decode("eirfg")); // => "aeiou"
console.log(decode("")); // => ""
console.log(decode("Oiafoi bhrv vimbimai, wuievi."));
  // => "Decode this sentence, please."
