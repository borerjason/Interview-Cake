const firstDuplicate = function (a) {
  for (var i = 0; i < a.length; i++) {
    var currVal = a[i];
    var origCurrVal = Math.abs(currVal); // get real val (might have been flagged as seen)
    var flagIdx = origCurrVal - 1; // adjust flag-index for zero-indexing
    if (a[flagIdx] < 0) return origCurrVal; // check if seen
    a[flagIdx] = a[flagIdx] * -1; // flag as seen
  }
  return -1;
}

console.log([firstDuplicate([10, 10, 3, 1, 2, 5])]);