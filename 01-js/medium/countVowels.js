/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   let no=0, vowels='aioue';
   str=str.toLowerCase();
   str.split('').array.forEach(letter => {
       if(vowels.includes(letter)){
        no+=1
       }
   });
   return no;

}

module.exports = countVowels;