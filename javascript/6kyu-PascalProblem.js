// Pascal Problem

// Here is a classic, Pascal's triangle.

// The pascal function should return a nested array, such as in the example below,

// pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// However, when running the given code, the result is an empty array.

// Your job? Fix it!

function pascal(depth) {
  var newPascal = [[1]];

  for(var i = 0; i < depth-1; i++) {
    var newArr = [];
    for(var j = 0; j <= newPascal[i].length; j++) {
      if(j === 0 || j === newPascal[i].length) {
          newArr.push(1);
      } else {
          newArr.push(newPascal[i][j-1] + newPascal[i][j]);
      }
    }
    newPascal.push(newArr);
  }

  return newPascal;
}

console.log(pascal(5)); // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
