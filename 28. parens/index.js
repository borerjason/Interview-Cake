const parens = (str, start) => {
  let counter = 0;

  for (let i = start; i < str.length; i += 1) {
    if (str[i] === '(') counter += 1;
    if (str[i] === ')') counter -= 1;
    if (counter === 0) {
      return i;
    }
  }
};

// input given a sentence (string) and an index of an opening parens find the corresponding parens
// output: index of corresponding parens

const string = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';
const index = 10;
const output = 79;
console.log(parens(string, index));

/*
Strategy: keep tracker of open parens. Increment if find an open paren, and decrement if find a closing. If at anytime tracker is equal to 0, we have our closing paren

Implementation:

string =  "Yo (me? or (who)) yes you"
counter = 1;

1. Char = ( ; counter = 2;
2. Char = ) ; counter = 1;
3. Char = ); counter = 0
Return index at last element; 

*/