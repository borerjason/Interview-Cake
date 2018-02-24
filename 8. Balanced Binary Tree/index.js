/*
Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).

A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.

Here's a sample binary tree node class:

  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

*/

function isBalanced(tree) {
  // create queue for nodes
  let queue = [tree, 'x'];
  // create placeholder for largest
  let largest = 0;
  // create placeholder for smallest 
  let smallest = null;
  let depth = 0;

  // while queue has nodes
  while (queue.length > 1) {
    let node = queue.shift();   
    // if left and right null
    if (!node.left && !node.right) {
      if(!smallest) {
        smallest = depth;
      }
      if (depth > largest) {
        largest = depth;
      }
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    if (node === 'x') {
      depth += 1;
      queue.push('x');
    }
    
  }  
  return largest - smallest <= 1;
  
}

const treeBalanced = {value: 5, left: {value: 3, left: null, right: null}, right: {value: 10, left: null, right: null}};
const treeUnbalanced = {value: 5, left: {value: 3, left: null, right: null}, right: {value: 10, left: {value: 7, left: {value: 11, left: null, right: null}, right: null}, right: null}};
console.log(isBalanced(treeBalanced));
// Input: tree node


// Output: true if superbalanced, false if not


// Strategy: 
  // Keep track of depth as we descend the tree
  // Once we reach leaf node, record depth
     // keep track of smallest depth and largest depth?
     // if the diffference is greater than one false
     // otherwise its true



module.exports = isBalanced;
