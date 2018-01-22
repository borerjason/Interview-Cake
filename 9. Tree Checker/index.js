function binarySearchTreeChecker(node, min = -Infinity, max = Infinity) {
 
  // base case
  if (!node) {
    return true;
  }

  if (node.value >= max || node.value <= min) {
    return false
  }
  
  return  binarySearchTreeChecker(node.left, min, node.value ) &&
          binarySearchTreeChecker(node.right, node.value, max )
}



// input: root node
const sampleInput1 = {value: 12, left: {value: 3, left: null, right: null}, right: {value: 100, left: null, right: null}}
const sampleInput2 = {value: 12, left: {value: 3, left: null, right: null}, right: {value: 10, left: null, right: null}}
// output: boolean true if is binary search tree, false if not
const sampleOutput1 = true;
const sampleOutput2 = false;

// checking if left branch is smaller than node and right branch in greater than node

// Strategy:
// keep track of a max and min value, check to see if the node satisfies the value, if it does, continue down the tree
//console.log(binarySearchTreeChecker(sampleInput1));


// iterative strategy
function iterativeBSTValidator(root) {
  let stack = [];
  let nodeWithBounds = {node: root, upper: Infinity, lower: -Infinity};

  stack.push(nodeWithBounds);

  while (stack.length) {
    let currNode = stack.pop();
    let { node, upper, lower } = currNode;

    if (node.value <= lower || node.value >= upper) {
      return false;
    };

    if (node.right) {
      stack.push({node: node.right, upper: upper, lower: node.value });
    }

    if (node.left) {
      stack.push({node: node.left, upper: node.value, lower: lower});
    }
  }
  return true;
};

console.log(iterativeBSTValidator(sampleInput2));