/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
 let str2=str.toLowerCase().replace(/\s*[!?., ]/g,"");
 str2=str2.split('').reverse().join('');
 console.log(str2);
 str=str.toLowerCase().replace(/\s*[!?,. ]/g,'');
 console.log(str);
 if(str===str2){
  return true
 } else{
  return false
 }
}
console.log(isPalindrome('Mr. Owl ate my metal worm.'));
module.exports = isPalindrome;
