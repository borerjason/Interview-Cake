const getTargetSumPaths = (node, sum, paths = [], queue = []) => {
  if (!node) return [];
  queue.push(node.val);
  getTargetSumPaths(node.left, sum, paths, queue);
  getTargetSumPaths(node.right, sum, paths, queue);

  if (!node.left && !node.right) {
    const queueSum = queue.reduce((a, b) => a + b);
    if (queueSum === sum) {
      paths.push(queue.slice());
    }
  }
  queue.pop();
  return paths; 
};


console.log(getTargetSumPaths({ 
  val: 5, 
  left: { 
    val: 4, 
    left: { 
      val: 11, 
      left: { 
        val: 7, 
        left: null,
        right: null,
      }, 
      right: { 
        val: 2, 
        left: null, 
        right: null } 
        }, 
      right: null }, 
    right: { val: 8, left: { val: 13, left: null, right: null }, right: { val: 4, left: { val: 5, left: null, right: null }, right: { val: 1, left: null, right: null } } } }, 22));
/*

Input: root node of tree and sum
Output: array of arrays of total paths that are equal to sum

Strategy: make helper function that gets sums 
*/