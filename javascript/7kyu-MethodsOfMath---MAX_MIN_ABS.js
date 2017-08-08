// Training JS #33: methods of Math---max() min() and abs()

// Coding in function ```maxMin```. function accept 2 parameter ```arr1``` and ```arr2```. They are two number array and have the same number of elements.
// First, calculate the difference of the same index of the ```arr1``` and ```arr2```. Like this:

// [1,3,5]
//  | | |   --->  8, 5, 2
// [9,8,7]

// Please note that the difference is positive. Such as the above 1 and 9, the difference should be 8, not -8. I think ```abs()``` can help you get the correct result ;-)
// Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:

//   maxvalue , minvalue
// [    8     ,    2     ]

function maxMin(arr1,arr2){
  let difference = [];
  let arr = [];

  for (i = 0; i < arr1.length; i++) {
    difference.push(Math.abs(arr1[i]-arr2[i]));
  }
  arr.push(Math.max(...difference));
  arr.push(Math.min(...difference));

  return arr;
}

console.log(maxMin([1,3,5],[9,8,7])); // should return [8,2]
console.log(maxMin([1,10,100,1000],[0,0,0,0])); // should return [1000,1]
console.log(maxMin([10,20,30,40],[111,11,1,-111])); // should return [151,9]
