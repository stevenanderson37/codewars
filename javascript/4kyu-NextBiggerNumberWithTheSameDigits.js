// Next bigger number with the same digits

// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits. If no bigger number can be composed using those digits, return -1.

function nextBigger(n){
  let nStr = n.toString();
  let arr;
  let endArr = [];
  let removeFrom;
  let shiftTo;
  let shiftNum;
  let num;
  let num2;

  for (i = nStr.length-1; i >= 0; i--) {
    for (j = i-1; j >= 0 || nStr[i] > nStr[j]; j--) {
      if (nStr[i] > nStr[j]) {
        removeFrom = i;
        shiftTo = j;
        shiftNum = nStr[i];
        break;
      }
    }
    if (!num && typeof shiftNum === 'string') {
      arr = nStr.split('');
      arr.splice(removeFrom, 1);
      arr.splice(shiftTo, 0, shiftNum);
      endArr = arr.slice(shiftTo+1).sort();
      arr.splice(shiftTo+1, (nStr.length-shiftTo)-1);
      num = parseFloat(arr.join('') + endArr.join(''));
    }
    if (num && typeof shiftNum === 'string') {
      arr = nStr.split('');
      arr.splice(removeFrom, 1);
      arr.splice(shiftTo, 0, shiftNum);
      endArr = arr.slice(shiftTo+1).sort();
      num2 = parseFloat(arr.join('') + endArr.join(''));
      arr.splice(shiftTo+1, (nStr.length-shiftTo)-1);
      num2 = parseFloat(arr.join('') + endArr.join(''));
    }
    if (num2 < num) {
      num = parseFloat(arr.join('') + endArr.join(''));
    }
  }
  if (num > n) {
    return num;
  } else {
    return -1;
  }
}

console.log(nextBigger(12)); // == 21
console.log(nextBigger(55)); // == -1
console.log(nextBigger(513)); // == 531
console.log(nextBigger(2017)); // == 2071
console.log(nextBigger(1142)); // == 1214
console.log(nextBigger(1321)); // == 2113
console.log(nextBigger(9)); // == -1
console.log(nextBigger(111)); // == -1
console.log(nextBigger(531)); // == -1
console.log(nextBigger(414)); // == 441
console.log(nextBigger(144)); // == 414
console.log(nextBigger(5555555555)); // == -1
console.log(nextBigger(1234567890)); // == 1234567908
console.log(nextBigger(59884848459853)); // == 59884848483559

// Works, but still times out in codewars.
// function nextBigger(n){
//   var nStr = n.toString();
//   var nRev = parseFloat(nStr.split('').reverse().join(''));
//   if (n <= 11) { return -1; }
//   if (nStr.length > 2 && parseFloat((nStr.substr(nStr.length-1,1) + nStr.substr(0,nStr.length-1)).split('').reverse().join('')) === n) { return -1; }
//   if (nStr.length === 2 && nRev === n) {
//     return -1;
//   }

//   var sortOld = n.toString().split('').sort().join('');
//   var sortNew;
//   do {
//     n++;
//     sortNew = n.toString().split('').sort().join('');
//   } while (sortNew !== sortOld);
//   if (sortNew === n) { return -1; }
//   return n;
// }

// Works for all, but is far too slow for codewars.
// function nextBigger(n){
//   var nStr = n.toString();
//   var nRev = parseFloat(nStr.split('').reverse().join(''));
//   if (n <= 11) { return -1; }
//   if (nStr.length > 2 && parseFloat((nStr.substr(nStr.length-1,1) + nStr.substr(0,nStr.length-1)).split('').reverse().join('')) === n) { return -1; }
//   if (nStr.length === 2 && nRev === n) {
//     return -1;
//   } else if (nStr.length === 2 && nRev !== n) {
//     return nRev;
//   }
//   if (nStr.length === 3) {
//     numArr = n.toString().split('');
//     var newNum;
//     for (i = numArr.length - 1; i >= 0; i--) {
//       var newArr = n.toString().split('');
//       var temp = newArr[i];
//       newArr[i] = newArr[i-1];
//       newArr[i-1] = temp;
//       if (newNum === undefined || parseFloat(newArr.join('')) > newNum) {
//         newNum = parseFloat(newArr.join(''));
//       }
//       newNum = parseFloat(newArr.join(''));
//       if (newNum > n) {
//         return newNum;
//       }
//     }
//     return -1;
//   }

//   var sortOld = n.toString().split('').sort().join('');
//   var sortNew;
//   do {
//     n++;
//     sortNew = n.toString().split('').sort().join('');
//   } while (sortNew !== sortOld);
//   return n;
// }

// Works for all numbers up to 3 digits long.
// function nextBigger(n){
//   if (n <= 11) { return -1; }
//   var numArr = n.toString().split('');
//   var newNum;
//   for (i = numArr.length - 1; i >= 0; i--) {
//     var newArr = n.toString().split('');
//     var temp = newArr[i];
//     newArr[i] = newArr[i-1];
//     newArr[i-1] = temp;
//     if (newNum === undefined || parseFloat(newArr.join('')) > newNum) {
//       newNum = parseFloat(newArr.join(''));
//     }
//     newNum = parseFloat(newArr.join(''));
//     if (newNum > n) {
//       return newNum;
//     }
//   }
//   return -1;
// }
