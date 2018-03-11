/*

Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/



const numToWords = (num) => {

  const placeName = ['', 'Thousand', 'Million', 'Billion'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const belowTwenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  
  if (num === 0) return 'Zero';

  let result = '';
  
  while (num > 0) {
    if (num < 10) {
      result += belowTwenty[num] ; 
      num -= num;
    } else if (num < 20) {
      result = belowTwenty[num % 10] + wordString;
      num -= num ;
    } else if (num < 100) {
      result += tens[Math.floor(num / 10)];
      num = num % 10; 
    } else if (num < 1000) {
      result += belowTwenty[Math.floor(num / 100)] + "Hundred"
      num = num % 100;
    } else if (num < 10000) {
      result += belowTwenty[Math.floor(num / 1000)] + "Thousand" 
      num = num % 1000;
    } else if (num < 100000) {
      if (Math.floor(num / 1000) >= 20) {
        result += tens[Math.floor(num / 10000)] + belowTwenty[Math.floor((Math.floor(num / 1000)) % 10)] + 'Thousand'
      } else {
        result += belowTwenty[Math.floor(num / 1000)] + 'Thousand'
      }
      num = num % 1000;
    } else if (num < 1000000) {
      result += belowTwenty[Math.floor(num / 100000)] + 'Hundred'
      num = num % 100000;
    } else if (num < 10000000) {
      result += belowTwenty[Math.floor(num / 1000000)] + 'Million'
      num = num % 1000000;
    }
  }
  result += 'Dollars';

  return result;
};

console.log(numToWords(25))