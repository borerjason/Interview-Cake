function findSecondLargest(treeRoot) {
  let stack = [treeRoot];
  let largest = treeRoot.value;
  let second = null;
  
  while (stack.length) {
    let node = stack.pop();

    if (node.value < largest && node.value > second) {
      second = node.value;
    }

    if (node.value > largest) {
      second = largest;
      largest = node.value;
    }
    if (node.right) {
      stack.push(node.right)
    } 
    if (!node.right && node.left) {
      stack.push(node.left)
    }
  }
  return second;
};

// Input: root node
const sampleInput1 = { value: 12, left: { value: 6, left: null, right: null }, right: { value: 20, left: { value: 19, left: null, right: null }, right: { value: 30, left: null, right: null }} }
const sampleInput2 = { value: 12, left: { value: 6, left: null, right: { value: 10, left: null, right: null } }, right: null};
// Output: second largest number
const sampleOutput1 = 12;

console.log(findSecondLargest(sampleInput2));
// Strategy:

// check if value is greater than largest
  // adjust if necessary
// check if value is greater than second
  // adjust if necessary
// keep track of largest, and second largest
  // if root has right
    // go right
  // else go left