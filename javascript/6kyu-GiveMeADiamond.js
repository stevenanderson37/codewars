// Give me a Diamond

// This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// ###Task:
// You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

// The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

// Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

// Please see provided test case(s) for examples.

// JS Note
// JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.

function diamond(n){
  var diam;

  if (n <= 0 || n % 2 === 0) {
    return null;
  } else {
    // -2 after each line.
    var asteriskAmount = n;

    // +1 after each line.
    var spaces = 0;

    var diamArr = [];

    while (asteriskAmount >= 1) {
      if (asteriskAmount === n) {
        var initialString = "";

        for (i = 0; i < asteriskAmount; i++) {
          initialString += "*";
        }
        initialString += "\n";

        diamArr.push(initialString);

        asteriskAmount -= 2;
        spaces += 1;
      } else {
        var stringTemp = "";

        for (j = 0; j < spaces; j++) {
          stringTemp += " ";
        }
        for (l = 0; l < asteriskAmount; l++) {
          stringTemp += "*";
        }
        stringTemp += "\n";

        diamArr.unshift(stringTemp);
        diamArr.push(stringTemp);

        asteriskAmount -= 2;
        spaces += 1;
      }
    }

    diam = diamArr.join('');
  }

  return diam;
}

console.log(diamond(3)); // " *\n***\n *\n"
console.log(diamond(2)); // null
console.log(diamond(-3)); // null
console.log(diamond(0)); // null
console.log(diamond(7)); // "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n"
console.log(diamond(25));
