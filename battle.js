function getMinimumMoves(height) {
  let moves = 0; // 1
  let i = 0; // 2
  let j = height.length - 1;
  let leftBoom = false;
  let rightBoom = false; 
    
  while (i <= j) {
      leftBoom = false;
      rightBoom = false;
      while (height[i] < height[i+1]) {
          height[i] = 0;
          i += 1; // 3
          leftBoom = true;
      }
      if (leftBoom) {
          moves += 1;
          height[i] = 0;
          i += 1; //4
      }
     
      while(height[j] < height[j - 1]) {
          height[j] = 0;
          j -= 1;
          rightBoom = true
      }
      if (rightBoom) {
          moves += 1; 
          height[j] = 0;
          j -= 1; // 4
      }
  }
    return moves;
}

console.log(getMinimumMoves([1,2,1,2,10,9]));