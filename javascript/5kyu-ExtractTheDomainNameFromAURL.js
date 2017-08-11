// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
  let arr;
  if (/www/.test(url)) {
    arr = url.split('.');
    return arr[1];
  } else if (/http/.test(url)) {
    arr = url.split('//');
    arr = arr[1].split('.');
    return arr[0];
  } else {
    arr = url.split('.');
    return arr[0];
  }
}

console.log(domainName("http://github.com/carbonfive/raygun")); // 'github'
console.log(domainName("http://www.zombie-bites.com")); // 'zombie-bites'
console.log(domainName("https://www.cnet.com")); // 'cnet'
console.log(domainName("icann.org")); // 'icann'
