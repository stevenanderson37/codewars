// N-th Fibonacci

// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//   nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
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

console.log(nthFibo(1)); // == 0
console.log(nthFibo(4)); // == 2
console.log(nthFibo(9)); // == 21
console.log(nthFibo(15)); // == 377
console.log(nthFibo(18)); // == 1597
console.log(nthFibo(27)); // == 121393
console.log(nthFibo(55)); // == 86267571272
