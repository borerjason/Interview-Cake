const getTargetSumPaths = (node, sum, paths = [], queue = []) => {
  if (!node) return [];
  queue.push(node.val);
  hasPathToSum(node.left, sum, paths, queue);

  if (!node.left && !node.right) {
    const queueSum = queue.reduce((a, b) => a + b);
    if (queueSum === sum) {
      paths.push(queue.slice());
    }
  }
  getTargetSumPaths(node.right, sum, paths, queue);
  queue.pop();
  return paths; 
};


console.log(getTargetSumPaths({ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }, 3));
/*

Input: root node of tree and sum
Output: array of arrays of total paths that are equal to sum

Strategy: make helper function that gets sums 
*/