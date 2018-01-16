const sampleInputNode = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    }
  },
  right: {
    value: 20,
    left: null,
    right: {
      value: 30,
      left: null,
      right: null,
    }
  }
};
const sum = 19;

// output: Boolean if tree has path from root to leaf that equals sum
const sampleOuput = true;

// time complexity is 0(n) since will have to iterate over every node 
const hasPathSum = function (root, sum) {
  // set boolean equal to false
  let hasSums = false;

  function findSum(node, total) {
    total += node.value;

    if (node.left) {
      findSum(node.left, total);
    } if (node.right) {
      findSum(node.right, total);
    } else if (total === sum) {
      hasSums = true;
    }
  }
  findSum(root, 0);
  // if tree has no more children and total = sum, update boolean to true
  return hasSums;
};

console.log(hasPathSum(sampleInputNode, 62));

/*
Example using stubbing

const hasPathSum = function (node, targetSum) {
  if (!node) return targetSum === 0;
  targetSum -= node.val;
  return hasPathSum(node.left, targetSum) || hasPathSum(node.right, targetSum);
};


const root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 2,
      right: null,
      left: null
    }
  },
  right: {
    val: 8,
    left: null,
    right: null
  },
};
// Path sums:
// 12: 5->3->4
// 10: 5->3->2
// 13: 5->8
// Assuming target sum of 12
  // Step 1: 12 - 5 = 7
  // Step 2: 7 - 3 = 4
  // Step 3: 4 - 4 = 0
  // Step 4: return true
const hasPathSum = function(node, sum) {
  // base condition: if no node, return whether the sum has decremented to exactly 0
  // subtract the current node value from the running sum
  // return whether recursively calling either the left branch OR the right branch resolves to true
};
// High Level Overview
// Traverse to each leaf decrementing target sum by each nodes value along the way. Return whether decremented exactly to zero.
// Big-O
// Traverses all nodes. Despite some short-circuiting due to the OR clause, algo is effectively O(n).
*/