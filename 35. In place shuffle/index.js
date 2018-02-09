const shuffle = (intArray) => {
  for (let i = 0; i < intArray.length; i += 1) {
    const swapIndex = getRandom(i, intArray.length - 1);
    swap(intArray, i, swapIndex);
  return intArray;  
};


const getRandom = (floor, ceil) => {
  return Math.floor(Math.random() * (ceil - floor + 1)) + floor;
}

const swap = (array, a, b) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
/*
input: Array of integers
Output: a randomely shuffled array

Strategy: Loop through array, grab a random number and swap the value at the random index with the current location. Only pick from index that havent sorted yet

Inplementation: 

[1, 2, 3, 4, 5]

1. index = 0; random number = 3;
swap number at 0 and 3
[4, 2, 3, 1, 5]

2. index 1; random number AFTER index 1 = 4
swap index 1 and index 4
[4, 5, 3, 1, 2]


*/