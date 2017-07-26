// Filling an array (part 2)

// Following on from Part 1, part 2 looks at some more complicated array contents.
// So let's try filling an array with...

// ...square numbers
// The numbers from 1 to n*n
// const squares = n => ???

// ...a range of numbers
// A range of numbers starting from start and increasing by step
// const range = (n, start, step) => ???

// ...random numbers
// A bunch of random integers between min and max
// const random = (n, min, max) => ???

// ...prime numbers
// All primes starting from 2 (obviously)...
// const primes = n => ???

// NOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.

function squares(n) {
  var newArr = [];
  for ( i = 0; i < n; i++){
    newArr.push(i + 1);
    newArr[i] *= newArr[i];
  }
  return newArr;
}

function range(n, start, step) {
  var newArr = [start];
  for ( i = 1; i < n; i++){
    newArr.push(newArr[i-1] + step);
  }
  return newArr;
}

function random(n, min, max) {
  var newArr = [];
  var numsSet = new Set();
  for ( i = 0; i < n; i++){
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    while(numsSet.has(num)) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    numsSet.add(num);
    newArr.push(num);
  }
  return newArr;
}

function primes(n) {
  var newArr = [2];
  var num = 3;

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

  while (newArr.length < n) {
    if (test_prime(num) === false) {
      num++;
    } else {
      newArr.push(num);
      num++;
    }
  }
  return newArr;
}

// ES6
// const squares = n => {
//   var newArr = [];
//   for ( i = 0; i < n; i++){
//     newArr.push(i + 1);
//     newArr[i] *= newArr[i];
//   }
//   return newArr;
// }

// const range = (n, start, step) => {
//   var newArr = [];
//   newArr.push(start);
//   for ( i = 1; i < n; i++){
//     newArr.push(newArr[i-1] + step);
//   }
//   return newArr;
// }

// const random = (n, min, max) => {
//   var newArr = [];
//   var numsSet = new Set();
//   for ( i = 0; i < n; i++){
//     var num = Math.floor(Math.random() * (max - min + 1)) + min;
//     while(numsSet.has(num)) {
//       num = Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     numsSet.add(num);
//     newArr.push(num);
//   }
//   return newArr;
// }

// const primes = n => {
//   var newArr = [2];
//   var num = 3;

//   const test_prime = n => {
//     if (n === 1) {
//       return false;
//     } else if (n === 2) {
//       return true;
//     } else {
//       for (i = 2; i < n; i++) {
//         if (n % i === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }

//   while (newArr.length < n) {
//     if (test_prime(num) === false) {
//       num++;
//     } else {
//       newArr.push(num);
//       num++;
//     }
//   }
//   return newArr;
// }

console.log(squares(5)); // [1, 4, 9, 16, 25]
console.log(range(6, 3, 2)); // [3, 5, 7, 9, 11, 13]
console.log(random(4, 5, 10)); // [5, 9, 10, 7]
console.log(primes(6)); // [2, 3, 5, 7, 11, 13]
