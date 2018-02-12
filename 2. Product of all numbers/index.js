const getProductsOfAllIntsExceptAtIndex = (integers) => {
  let products = [];

  let currProduct = 1;
  for (let i = 0; i < integers.length; i += 1) {
    products[i] = currProduct;
    currProduct *= integers[i];
  }
  
  currProduct = 1;
  for (let i = integers.length - 2; i >=0; i -= 1) {
    let amountOneRight = integers[i + 1];
    currProduct *= amountOneRight;
    products[i] *= currProduct;
  }
  
  return(products);
}

const sampleInput = [1, 7, 3, 4];
getProductsOfAllIntsExceptAtIndex(sampleInput);
/*

Input: array of integers.
Output: array of products of all numbers excluding the one at that index.
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

Strategy: Calculate tbe total product to the left of all the integers, then multiply those by the total product to the right

Implementation:

const sampleInput =   [1, 7, 3, 4];

Left array = [1, 1, 7, 21];
totalLeft = 1;
for i total * i - 1;

i = 1; 1 * 1 = 1;
i = 2; 7 * 1 = 7 totalLeft = 7
i = 3; 3 * 7 = 21 

Multiply by right product

Right array = [84, 12, 4, 1]

starting at array.length - 2;

currProduct *= i + 1 



*/

