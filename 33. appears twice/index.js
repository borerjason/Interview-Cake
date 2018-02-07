/*

Input: array of (n+1) integers, every number in range 1..n appears once, except one number appears twice

n = 4
const input = [1, 2, 1, 3];
const output = 2;
1,1,2,3,4 = 11
1,2,2,3,4 = 12
1,2,3,3,4 = 13
1,2,3,4,4 = 14 
1,2,3,4 =  
n = 4

*/

const findDuplicate = (numbers) => {
  const n = numbers.length - 1;
  //equation is (n^2 + n) / 2
  const baseSum = (n ** 2 + n) / 2; 
  const actualSum = numbers.reduce((a, b) => {
    return a + b;
  });
  return actualSum - baseSum;
};

console.log(findDuplicate([1,2,3,2,4]))