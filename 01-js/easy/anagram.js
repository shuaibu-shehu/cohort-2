/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


// console.log(n.includes(' '));


// let r=n.split('').every(l=>n2.split('').includes(l))
// console.log(r && r2);


function isAnagram(str1, str2) {
    //  str1=str1.toLowerCase().split('').reverse().join('')
  let n=str1.toLowerCase()
let n2=str2.toLowerCase()
let r=n.split('').every(i=>n2.includes(i) )
let r2=n2.split('').every(i=>n.includes(i) )
    return r && r2
}

console.log(isAnagram('Debit Card', 'Bad Credit'));
module.exports = isAnagram;
