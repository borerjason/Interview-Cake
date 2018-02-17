// input - string of words
// output - words are in reverse order
const reverseString = (str) => {
  str = str.split('');
  let j = str.length - 1;
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    let temp = str[i]
    str[i] = str[j];
    str[j] = temp;
    j -= 1;
  }
  return str.join('');
}

const reverseWords = (str) => {
  let chars = str.split('').reverse().join('');
  let words = chars.split(' ');
  let finalWords = words.map((word) => {
    return reverseString(word);
  });

  return finalWords.join(' ');

}

console.log(reverseWords("john eats apple"))


const words = "john eats apple";
const reversed = "apple eats john";

/*
Strategy:
1. Reverse the entire string
'elppa stae nhoj'
2. Reverse each word in the string
'apple eats john'

*/

// const reverseWords = ()=> {
//   // constraints O(1) space and O(n) time
//   // reverse the entire sting by swapping
//   // 
// }
