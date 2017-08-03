// (Ready for) Prime Time

// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.

function prime(num) {
  var newArr = [2];
  var next = 3;

  if (num === 0 || num === 1) {
    return [];
  }

  function test_prime(n) {
    if (n === 1) {
      return false;
    } else if (n === 2) {
      return true;
    } else {
      for (i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  }

  while (newArr[newArr.length-1] < num) {
    if (test_prime(next) === false) {
      next++;
    } else {
      newArr.push(next);
      next++;
    }
  }
  if (newArr[newArr.length-1] > num) {
    newArr.pop();
  }
  return newArr;
}

console.log(prime(11)); // returns [2,3,5,7,11]
console.log(prime(37)); // returns [2,3,5,7,11,13,17,19,23,29,31,37]
console.log(prime(79)); // returns [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79]
console.log(prime(1000)); // returns []
