// Strip Comments

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

function solution(input, markers){
  let arr = input.split('\n');
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');
  }
  for (j = arr.length-1; j >= 0; j--) {
    for (k = j; k < arr[j].length; k++) {
      for (l = 0; l < markers.length; l++) {
        if(markers[l] === arr[j][k]) {
          arr[j].splice(k);
          break;
        }
      }
    }
  }

  for (m = 0; m < arr.length; m++) {
    arr[m] = arr[m].join('');
    arr[m] = arr[m].trim();
  }

  return arr.join('\n');
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])); // should return "apples, pears\ngrapes\nbananas"
console.log(solution("a #b\nc\nd $e f g", ['#','$'])); // "a\nc\nd"
