function pancakeSort(arr) {
  let indexLeftToSort = arr.length;
  let index = 0;
  let largestIndex = 0;

  while (indexLeftToSort > 1) {
    index += 1;
    if (arr[index] > arr[largestIndex]) {
      largestIndex = index;
    }
    if (index === (indexLeftToSort - 1)) {
      flip(arr, largestIndex + 1);
      flip(arr, indexLeftToSort)
      indexLeftToSort -= 1;
      index = 0;
      largestIndex = 0;
    }
  }
  return arr;
}

console.log(pancakeSort([2, 1]))

function flip(arr, k) {
  const pivot = Math.floor(k / 2);
  for (let i = 0; i < pivot; i += 1) {
    let temp = arr[i];
    arr[i] = arr[k - i - 1];
    arr[k - i - 1] = temp;
  }
  return arr;
}
