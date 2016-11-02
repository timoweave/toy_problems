/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null)  {
    return 0;
  }

  var left = maxDepth(root.left);
  var right = maxDepth(root.right);
  var depth = Math.max(left, right) + 1;
  return depth;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

if (typeof module === 'object') {
  module.exports = maxDepth;
}