// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

var list1 = [1,2,'a','b']; // should return [1,2]
var list2 = [1,'a','b',0,15]; // should return [1,0,15]
var list3 = [1,2,'aasf','1','123',123]; // should return [1,2,123]

function filter_list(l) {
  var newArray = [];
  for (i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      // console.log(l[i]);
      newArray.push(l[i]);
    }
  }
  return newArray;
}

console.log(filter_list(list1));
console.log(filter_list(list2));
console.log(filter_list(list3));
