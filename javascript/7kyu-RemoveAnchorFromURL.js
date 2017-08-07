// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// function removeUrlAnchor(url){
//   if (!/#/.test(url)) {
//     return url;
//   } else {
//     var urlArr = url.split('#');
//     return urlArr[0];
//   }
// }

// MY ORIGINAL FUNCTION SIMPLIFIED.
function removeUrlAnchor(url){
  return url.split('#')[0];
}

console.log(removeUrlAnchor('www.codewars.com#about')); // returns 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com?page=1')); // returns 'www.codewars.com?page=1'
