/*

Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/

const places = ['', 'Thousand', 'Million', 'Billion'];

const doubleDigits = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const belowTwenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];


const numToWords = (num) => {

  if (num === 0) return 'Zero';

  let wordString = '';
  
  while (num > 0) {
    if (num < 10) {
      wordString += belowTwenty[num] ; 
      num -= num;
    } else if (num < 20) {
      wordString = belowTwenty[num % 10] + wordString;
      num -= num ;
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
    }
  }

return wordString;
};

console.log(numToWords(9911249))