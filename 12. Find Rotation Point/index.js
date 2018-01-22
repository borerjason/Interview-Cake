const findRotationPoint = (words) => {
  let firstWord = words[0];
  let floorIndex = 0;
  let ceilingIndex = words.length - 1;    

  while (floor < ceiling) {
    let mid = Math.floor((floorIndex + ceilingIndex ) / 2);

    if (words[mid] <= firstWord) {
      ceilingIndex = mid;
    } else {
      floorIndex = mid;
    }

    if (foorIndex + 1 === ceilingIndex) {
      break;
    }
  }
  return ceilingIndex;
}


/*

Strategy: find midpoint of two halves recursively until both are sorted, index of last midpoint is rotation point
Iterative Strategy: Once we get each midpoint, check to see if its less than the first value, if it is go left, else go right. 
Transformation Steps:

Input: [3, 4, 5, 6, 1, 2]; Mid Index = 3
1. [3, 4, 5] & [6, 1, 2] Mid Index = 4
2. [6, 1] [2] Mid index = 4
3. [6] , [1] 
4. Rotation point is index = 4

Time Complexity = O(logn) since we are doing a binary search
*/

