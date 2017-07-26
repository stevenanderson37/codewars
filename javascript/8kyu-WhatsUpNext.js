// What's up next?

// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

// When the item isn't present or nothing follows it, the function should return undefined.

function nextItem(xs, item) {
  var itemFound = false;

  for (var i of xs) {
    if (itemFound) {
      return i;
    }

    if (i === item) {
      itemFound = true;
    }
  }
}

// The below function works for both the array of numbers and string, but not for the generator function.

// function nextItem(xs, item) {
//   // console.log(typeof xs, item);
//   var sequence = xs;
//   if (typeof xs === 'string') {
//     sequence = xs.split('');
//   }

//   for (i = 0; i < sequence.length; i++) {
//     if (item === sequence[i]) {
//       return sequence[i+1];
//     }
//   }

//   if (typeof item === 'string') {
//     return undefined;
//   } else if (typeof xs === 'object' && xs.next(xs.n).value) {
//     var gen = countFrom(xs.next(xs.n).value - 1);
//     return gen.next();
//   }
// }

console.log(nextItem([1, 2, 3, 4, 5, 6, 7], 3)) // Should return 4
console.log(nextItem("testing", "t")) // Should return "e"
console.log(nextItem("javascript", "t")) // Should return undefined
console.log(nextItem("javascript", "x")) // Should return undefined

function* countFrom(n) { for (let i = n; ; ++i) yield i; }
console.log(nextItem(countFrom(1), 12)) // Should return 13
console.log(nextItem(countFrom(5), 660)) // Should return 661
console.log(nextItem(countFrom(3), 660)) // Should return 661
console.log(nextItem(countFrom(1), 660)) // Should return 661
console.log(nextItem(countFrom(2), 660)) // Should return 661
console.log(nextItem(countFrom(4), 700)) // Should return 701
console.log(nextItem(countFrom(3), 700)) // Should return 701
