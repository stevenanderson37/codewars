// Fibonacci Reloaded

// And here is Fibonacci again. This time we want to go one step further. Our fib() function must be faster! Can you do it?
//
// In case you don't know, what the Fibonacci number is:
//
// The nth Fibonacci number is defined by the sum of the two previous Fibonacci numbers. In our case: fib(1) == 0 and fib(2) == 1. With these initial values you should be able to calculate each following Fibonacci number.

function fib(n) {
  var fibSeq = [0];
  if (n === 1) {
    return fibSeq[0];
  }
  if (typeof n === 'number') {
    for (var i = 0; i < n; i++) {
      if (i === 0 || i === 1) {
        fibSeq.push(1);
      } else if (i > 1) {
        fibSeq.push(fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2]);
      }
    }
  }
  return fibSeq[n];
}

console.log(fib(1)); // === 0
console.log(fib(2)); // === 1
console.log(fib(3)); // === 1
console.log(fib(4)); // === 2
console.log(fib(5)); // === 3
