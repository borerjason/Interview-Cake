/*
Input: an array of unsorted integers and the highest possible score in the game
Output: Sorted array in less than O(n lg n) time

const unSortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

const output = [91, 89, 65, 53, 41, 37];

Strategy:

What are some common ways to get O(n) runtime?
- looping
- pointers

*/

const sortScores = (scores, maxScore) => {
  let possibleScores = Array(maxScore);
  for (let score of scores) {
    possibleScores[score] = possibleScores[score] + 1 || 1;
  };
  
  let sortedScores = [];
  for (let j = maxScore - 1; j >=0; j -=1) {
    if (possibleScores[j]) {
      for (let i = 0; i < possibleScores[j]; i += 1) {
        sortedScores.push(j);
      }
    }
  }
  return sortedScores;
}

const unSortedScores = [37, 89, 41, 91, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

const output = [91, 89, 65, 53, 41, 37];

console.log(sortScores(unSortedScores, HIGHEST_POSSIBLE_SCORE));
