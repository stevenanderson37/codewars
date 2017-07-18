// Square Roots: Simplify/Desimplify

// What is simplifying a square root?
// If you have a number, like 80, for example, you would start by finding the greatest perfect square divisible by 80. In this case, that's 16. Find the square root of 16, and multiply it by 80 / 16. Answer = 4 √5.

// Task:
// Your job is to write two functions, simplify, and desimplify, that simplify and desimplify square roots, respectively. (Desimplify isn't a word, but I couldn't come up with a better way to put it.) simplify will take an integer and return a string like "x sqrt y", and desimplify will take a string like "x sqrt y" and return an integer. For simplify, if a square root cannot be simplified, return "sqrt y".

// Do not modify the input.

function simplify(n) {
  if (/\W/.test(Math.sqrt(n)) === false) {
    return Math.sqrt(n).toString();
  }
  // Finds the greatest perfect square divisible by n.
  var greatest;
  for (i = n; greatest === undefined && i >= 1; i--) {
    if (/\W/.test(n/i) === false && /\W/.test(Math.sqrt(i)) === false) {
      greatest = i;
    }
  }

  var answer = "" + Math.sqrt(greatest) + " sqrt " + (n/greatest) + "";

  if (/[NaN]/.test(answer) === true || answer === "1 sqrt " + n + "") {
    return "sqrt " + n + "";
  } else {
    return answer;
  }
}

function desimplify(s) {
  if (s[0] === "s") {
    return parseFloat(s.replace(/\D*\s*/, ""));
  } else if (/\D\s/.test(s) === false) {
    return Math.pow(parseFloat(s), 2);
  } else {
    var arr = s.split(" sqrt ");
    return Math.pow(parseFloat(arr[0]), 2) * parseFloat(arr[1]);
  }
}

console.log(simplify(1)) // => "1"
console.log(simplify(2)) // => "sqrt 2"
console.log(simplify(3)) // => "sqrt 3"
console.log(simplify(8)) // => "2 sqrt 2"
console.log(simplify(15)) // => "sqrt 15"
console.log(simplify(16)) // => "4"
console.log(simplify(18)) // => "3 sqrt 2"
console.log(simplify(20)) // => "2 sqrt 5"
console.log(simplify(24)) // => "2 sqrt 6"
console.log(simplify(32)) // => "4 sqrt 2"
console.log(simplify(80)) // => "4 sqrt 5"
console.log(simplify(765)) // => "3 sqrt 85"
console.log(simplify(837)) // => "3 sqrt 93"
console.log(simplify(513)) // => "3 sqrt 57"
console.log(simplify(275)) // => "5 sqrt 11"
console.log(simplify(45)) // => "3 sqrt 5"
console.log(simplify(146)) // => "sqrt 146"

console.log(desimplify("1")) // => 1
console.log(desimplify("sqrt 2")) // => 2
console.log(desimplify("sqrt 3")) // => 3
console.log(desimplify("2 sqrt 2")) // => 8
console.log(desimplify("sqrt 15")) // => 15
console.log(desimplify("4")) // => 16
console.log(desimplify("3 sqrt 2")) // => 18
console.log(desimplify("2 sqrt 5")) // => 20
console.log(desimplify("2 sqrt 6")) // => 24
console.log(desimplify("4 sqrt 2")) // => 32
