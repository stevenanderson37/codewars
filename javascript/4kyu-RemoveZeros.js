// Remove Zeros

// Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

function removeZeros(array) {
  for (i = array.length-1; i >= 0 ; i--) {
    if (array[i] === 0) {
      for(k = i; k < array.length; k++) {
        if (k === array.length-1) {
          array[k] = 0;
        } else {
          array[k] = array[k+1];
        }
      }
    } else if (array[i] === "0") {
      for(k = i; k < array.length; k++) {
        if (k === array.length-1) {
          array[k] = "0";
        } else {
          array[k] = array[k+1];
        }
      }
    }
  }

  for (i = array.length-1; i >= 0 ; i--) {
    if (array[i] === 0) {
      for(k = i; k < array.length; k++) {
        if (k === array.length-1) {
          array[k] = 0;
        } else {
          array[k] = array[k+1];
        }
      }
    } else if (array[i] === "0") {
      for(k = i; k < array.length; k++) {
        if (k === array.length-1) {
          array[k] = "0";
        } else {
          array[k] = array[k+1];
        }
      }
    }
  }

  return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])); // [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
console.log(removeZeros([0, 1, 2, 0, 3])); // [1, 2, 3, 0, 0]
console.log(removeZeros([0, "0", 1, 2, 3])); // [1, 2, 3, 0, "0"]
