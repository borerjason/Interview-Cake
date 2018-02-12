/*
Input: Array of integers, first integer is total number of days, remaining integers represent gains/losses per day. 
Output: Max gain for range of days

Strategy: Keep track of maximum sum found so far and our current sum. Iterate through gains/losses and add amount to current sum. Update max sum as needed. If current sum is less than 0, then set current sum to 0.

Transformation Steps:

Sample input = [4, 1, -2, 3, 1]

1. gain/loss = 1; 
  currSum = 1;  maxSum = 1;
2. gain/loss = -2; 
  currSum = -1; maxSum = 1;
   currSum < 0 ---> update currSum = 0;
3. gain/loss = 3;
  currSum = 3; maxSum = 3;
4. gain/loss = 1;
  currSum = 4; maxSum = 4;
5. return 4;

const input = [10, 7, -3, -10, 4, 2, 8, -2, 4, -5, -6]

*/

const findMaxSum = (numbers) => {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 1; i < numbers.length; i += 1) {
    currentSum += numbers[i];
    maxSum = Math.max(currentSum, maxSum);
    
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;

};

console.log(`Expect: ${findMaxSum([10, 7, -3, -10, 4, 2, 8, -2, 4, -5, -6])} --- to equal: 16`);

/*

Strategy: Keep track of unique numbers (1-19) and each tens amount in an array/object. Start at full value and build string while decrementing number until num is equal to zero.

Transformation:
1. num = 123 str = ''
  a. add 'OneHundred' to str; subtract 100 from num
2. num = 23 str = 'OneHundred'
  b. add 'Twenty' to str; subtract 20 from num
3. num = 3 str = 'OneHundredTwenty'
  c. add 'Twenty' to str; subtract 20 from num
4. num = 0 str = 'OneHundredTwentyThree' 
5. Since num === 0 
  d.return 'OneHundredTwentyThree' 

*/

const numToWords = (num) => {
  if (num === 0) return 'Zero';

  const belowTwenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const doubleDigits = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  let wordString = '';

  while (num > 0) {
     if (num < 20) {
      wordString += belowTwenty[num];
      num -= num;
    } else if (num < 100) {
      wordString += doubleDigits[Math.floor(num / 10)];
      num = num % 10;
    } else if (num < 1000) {
      wordString += belowTwenty[Math.floor(num / 100)] + "Hundred"
      num = num % 100;
    } else if (num < 10000) {
      wordString += belowTwenty[Math.floor(num / 1000)] + "Thousand"
      num = num % 1000;
    } else if (num < 100000) {
      if (Math.floor(num / 1000) >= 20) {
        wordString += doubleDigits[Math.floor(num / 10000)] + belowTwenty[Math.floor((Math.floor(num / 1000)) % 10)] + 'Thousand'
      } else {
        wordString += belowTwenty[Math.floor(num / 1000)] + 'Thousand'
      }
      num = num % 1000;
    } else if (num < 1000000) {
      wordString += belowTwenty[Math.floor(num / 100000)] + 'Hundred'
      num = num % 100000;
    } else if (num < 10000000) {
      wordString += belowTwenty[Math.floor(num / 1000000)] + 'Million'
      num = num % 1000000;
    } else if (num < 100000000) {
      if (Math.floor(num / 1000000) >= 20) {
        wordString += doubleDigits[Math.floor(num / 10000000)] + belowTwenty[Math.floor((Math.floor(num / 1000000)) % 10)] + 'Million'
      } else {
        wordString += belowTwenty[Math.floor(num / 1000000)] + 'Million'
      }
      num = num % 1000000;
    } else if (num < 1000000000) {
      wordString += belowTwenty[Math.floor(num / 100000000)] + 'Hundred'
      num = num % 100000000;
    }
  }
  wordString += 'Dollars';

  return wordString;
};

console.log(`Expect: ${numToWords(3)} --- to equal: ThreeDollars`);
console.log(`Expect: ${numToWords(466)} --- to equal: FourHundredSixtySixDollars`);
console.log(`Expect: ${numToWords(1234)} --- to equal: OneThousandTwoHundredThirtyFourDollars`);
console.log(`Expect: ${numToWords(10)} --- to equal: TenDollars`);
console.log(`Expect: ${numToWords(21)} --- to equal: TwentyOneDollars`);


