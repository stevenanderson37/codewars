// Pascal's Triangle

// Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle

// Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.

function pascalsTriangle(n) {
  var newPascal = [[1]];

  for(var i = 0; i < n-1; i++) {
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

  answer = newPascal.toString().split(',');

  for(var k = 0; k < answer.length; k++) {
    answer[k] = parseFloat(answer[k]);
  }

  return answer;
}

console.log(pascalsTriangle(4)); // == [1,1,1,1,2,1,1,3,3,1]
console.log(pascalsTriangle(6)); // == [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1]
