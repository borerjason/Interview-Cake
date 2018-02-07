/*

Write an efficient function that checks whether any permutation of an input string is a palindrome. 
You can assume the input string only contains lowercase letters.

*/
const isAnyPermutationPalindrome = (str) => {
  const oddItems = new Set();
  // iterate through str
  for (let i = 0; i < str.length; i += 1) {
    // if item is in Set
    const char = str[i];
    if (oddItems.has(char)) {
      oddItems.delete(char);
    } else {
      oddItems.add(char);
    }

  }
      // remove item from Set
  
  return oddItems.size <= 1;
}

console.log(isAnyPermutationPalindrome('bbcc'));

/*
const input = "bbc";
each character appears an even number of times except for one.
output: boolean whether any permutation is a palindrome 



Strategy: keep track of how many times each char appears, if more than one character appears an odd number of times then false

Transformation:
input = bbc
Set = [];
1. char = b; Set = ['b'];
2. char = b; Set = [];
3. char = c; Set = ['c'];

const isAnyPermutationPalindrome = (str)  => {
  // iterate through str
    // if item is in Set
      // remove item from Set
    // else, add to Set

  return Set.length === 1;
}

*/