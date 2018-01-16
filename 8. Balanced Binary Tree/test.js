const isBalanced = require('./index');

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function (value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function (value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

test('Tree with one node returns true', () => {
  let tree = new BinaryTreeNode(3);
  expect(isBalanced(tree)).toBeTruthy();
});

test('Tree with one layer returns true', () => {
  let tree = new BinaryTreeNode(3);
  tree.insertLeft(1);
  tree.insertRight(19);

  expect(isBalanced(tree)).toBeTruthy();
});


