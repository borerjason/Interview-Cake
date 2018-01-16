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