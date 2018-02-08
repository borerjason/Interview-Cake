/*
input: long string
output: map where keys are words and values and number of times they occur

Think about capitlized words and punctuation.

Turn first word in string lower case, keep other words as is. 
"After beating the eggs, Dana read the next step. Which is"
[After, beating, the, eggs,, Dana, read, the, next, step:]

"Add milk and eggs, then add flour and sugar."

make sure characters are between a - Z 

1. separate strings:
  Iterate through string
  Create variable to hold new string
  If chars are between a - Z add to new string
  If not, end new string

  "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
"The bill came to five dollars."

*/

const buildWordMap = (string) => {
  const wordMap = new Map();
  let word = '';
  let changeToLowerCase = true;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] >= 'A' && string[i] <= 'z' || string[i] === '-') {
      word += string[i];
    } else {
      if (word.length > 0) {
        if (changeToLowerCase || string[i] === '.') {
          const value = wordMap.get(word.toLowerCase()) + 1 || 1;
          wordMap.set(word, value);
          changeToLowerCase = !changeToLowerCase;
        } else {
          const value = wordMap.get(word) + 1 || 1;
          wordMap.set(word, value);
        }
        word = '';
      }
    }
  }

 return wordMap;
}

console.log(buildWordMap("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."));