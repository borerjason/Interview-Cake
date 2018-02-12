/*
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/

const highestProductOfThree = (intArray) => {
  largestPosValue = 0;
  smallestNegValue = 0;
  largestNegProductOfTwo = 0;
  largestPosProductOfTwo = 0;
  largestProductOfThree = -Infinity;

  for (let int of intArray) {
    largestProductOfThree = Math.max(largestNegProductOfTwo * int, largestPosProductOfTwo * int, largestProductOfThree);
    if (int > 0) {
      largestPosProductOfTwo = Math.max(largestPosProductOfTwo, largestPosValue * int); 
      largestPosValue = Math.max(largestPosValue, int);
    } else {
      largestNegProductOfTwo = Math.max(largestNegProductOfTwo, smallestNegValue * int);
      smallestNegValue = Math.min(smallestNegValue, int)
    }
  }

  return largestProductOfThree;

}

const sampleInput = [-10, -10, 1, 3, 2];

console.log(highestProductOfThree(sampleInput));


/*
Input: array of integers, will contain at least three
Output: largest product of three

Edge cases: Negative numbers

Largest value:
largest product of positives
largest positive
largest product of negatives
largest negative

[-10, -8, 10, 1, 2]

const highestProductOfThree = (intArray) => {
  // check if number is postive or negative
    // check if largest product is largest, update if needed
    // check if is larger than respective "largest" and update if needed
    
// multiply largest positive by either largest neg or larget pos

}

*/