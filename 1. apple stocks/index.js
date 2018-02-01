const stockPricesYesterday = (stockPrices) => {
  let minPrice = stockPrices[0];
  let largestProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i += 1) {
    let profit = stockPrices[i] - smallest;

    largestProfit = Math.max(profit, largestProfit);
    minPrice = Math.min(minPrice, stockPrices[i])

  }
  return largestProfit;
}

console.log(stockPricesYesterday([5,4,8,2]));


/*
Input: array of stock prices
Output: the maximum gain we could make in one day

Strategy: Keep track of the smallest number and the largest profit as we traverse the array. Update largest profit if it grows and update smaller if we come across a smaller number

Transformation:

Input: [2,3,1,5];  smallest = 2; profit = 0; 
1. arr[i] = 3 ; smallest = 2; profit = 1;
2. arr[i] = 1; smallest = 1; profit = 1;
3. arr[i] = 5; smallest = 1; profit = 4;


*/
