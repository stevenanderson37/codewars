// One Line Task?: Sentence Compression

// Task
// You are given a sentence which consists of alphanumeric characters with upper and lower cases, and some whitespaces and punctuations.
// Please remove the whitespaces, punctuations and digits to improve the readability of the sentence.
// Punctuations are ,, ., ?, !, -, :, ;, ~, ", ' and /.
// Digits are also removed.

// Code Limit
// Less than 47 characters.

// function sentenceCompression(s) {
//   return s.split(/\d|\s|\W/).join('');
// }

// 51
// sentenceCompression=s=>s.split(/\d|\s|\W/).join('')

// 50
// sentenceCompression=s=>s.split(/[\W|\d]/).join('')

// 50
// sentenceCompression=s=>s.split(/[^a-z]/i).join('')

// 47
// sentenceCompression=s=>s.replace(/[^a-z]/ig,'')

// 47
// sentenceCompression=s=>s.replace(/[\W|\d]/g,'')

// 46
sentenceCompression=s=>s.replace(/[^A-z]/g,'')

console.log(sentenceCompression('Hello World!')); // 'HelloWorld'
console.log(sentenceCompression('This is madness. Madness? This, is, SPARTA!')); // 'ThisismadnessMadnessThisisSPARTA'
console.log(sentenceCompression('I\'m supposed to be playing CodeWars but this one player keeps kicking my ass. Is it myjinxin2015?! Yeah, myjinxin2015. Who is my jinxin 2015?')); // 'ImsupposedtobeplayingCodeWarsbutthisoneplayerkeepskickingmyassIsitmyjinxinYeahmyjinxinWhoismyjinxin'
