const isRiffle = (shuffledDeck, half1, half2) => {
  let half1Index = 0;
  let half2Index = 0;

  for (let shuffledIndex = 0; shuffledIndex < shuffledDeck.length; shuffledIndex += 1) {
    if (half1[half1Index] && half1[half1Index] === shuffledDeck[shuffledIndex]) {
      half1Index += 1;
    } else if (half2[half2Index] && half2[half2Index] === shuffledDeck[shuffledIndex]) {
      half2Index += 1;
    } else {
      return false;
    }
  }
  return true;

}

const deck1 = [1, 2, 3, 4, 5, 6, 7];
const deck2 = [8, 9, 10, 11, 12, 13];
const shuffled = [1, 2, 8, 3, 4, 9, 10, 5, 6, 11, 12, 7, 13]

console.log(isRiffle(shuffled, deck1, deck2));


/*
We're given a shuffled deck of cards ranging from 1 - 52 and the previous two halves. In a riffled deck some cards from one are placed into the shuflled then some of the other. 

determine if cards were placed in the correct order

const deck1 = [1,2,3,4,5,6,7];
const deck2 = [8,9,10,11,12,13];
const shuffled = [1,2,8,5,4,9,10,5,6,11,12,7,13]

Strategy: Loop through shuffled deck, check if first element is first index of one of the halfs, continue iterating through until not equal, switch to other deck. 

Implementation:
index1 = 0
index2 = 0

Iterate through shuffled
1. i = 0; index1 = 1 index2 = 0;
2. i = 1; index1 = 2 index2 = 0;
3. i = 2; index1 = 2 index2 = 1;
4. i = 3; index1 = 2 index2 = 1; return false

*/

