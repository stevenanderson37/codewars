// Calculating with Functions

// Write calculations using functions and get the results.

// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand

var formulaArr = [];
var formula;

function zero(callback) {
  formulaArr.unshift('0');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}

function one(callback) {
  formulaArr.unshift('1');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}

function two(callback) {
  formulaArr.unshift('2');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}

function three(callback) {
  formulaArr.unshift('3');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}

function four(callback) {
  formulaArr.unshift('4');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}
function five(callback) {
  formulaArr.unshift('5');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}

function six(callback) {
  formulaArr.unshift('6');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}

function seven(callback) {
  formulaArr.unshift('7');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}

function eight(callback) {
  formulaArr.unshift('8');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}

function nine(callback) {
  formulaArr.unshift('9');

  if (formulaArr.length === 3) {
    formula = formulaArr.join('');
    formulaArr = [];
    return eval(formula);
  }
}

function plus(callback) {
  formulaArr.unshift('+');
}

function minus(callback) {
  formulaArr.unshift('-');
}

function times(callback) {
  formulaArr.unshift('*');
}

function dividedBy(callback) {
  formulaArr.unshift('/');
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
