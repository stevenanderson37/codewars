// Strip Url Params

// Complete the method so that it does the following:

// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 2nd argument (optional array)

function stripUrlParams(url, paramsToStrip){
  if (!/[?]/.test(url)) {
    return url;
  }

  let baseUrl = 'www.codewars.com?';
  let paramsUrl = '';
  let params = url.split('?')[1];
  let paramsArr = params.split('&');
  let paramsSet = new Set();

  for (i = 0; i < paramsArr.length; i++) {
    paramsArr[i] = paramsArr[i].split('');
  }

  if (paramsToStrip) {
    for (m = 0; m < paramsToStrip.length; m++) {
      paramsSet.add(paramsToStrip[m]);
    }
  }

  for (j = 0; j < paramsArr.length; j++) {
    for (k = 0; k < paramsArr[j].length; k++) {
      if (paramsSet.has(paramsArr[j][k])) {

      } else if (/[a-z]/i.test(paramsArr[j][k])) {
        paramsSet.add(paramsArr[j][k]);
        paramsUrl += paramsArr[j].join('').replace(',', '') + '&';
      }
    }
  }

  paramsUrl = paramsUrl.slice(0, -1);
  return baseUrl + paramsUrl;
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2')); // returns 'www.codewars.com?a=1&b=2'
console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])); // returns 'www.codewars.com?a=1'
console.log(stripUrlParams('www.codewars.com', ['b'])); // returns 'www.codewars.com'
