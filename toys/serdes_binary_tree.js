/**
\ * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) {
    return null;
  }
  var ans = [];
  walk_dfs(root, ans);
  return ans[0];

  function walk_dfs(root, result) {
    if (root) {
      var data = [root.val]
      result.push(data);
      walk_dfs(root.left, data);
      walk_dfs(root.right, data);
    } else {
      result.push(null);
      return;
    }
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === null) {
    return null;
  }

  const root = new TreeNode(data[0]);
  if (is_non_primitive(data)) {
    root.left = deserialize(data[1]);
    root.right = deserialize(data[2]);
  }
  return root;
  
  function is_non_primitive(nums) {
    return (Array.isArray(nums[1]) || Array.isArray(nums[2]));
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

if (typeof module === 'object') {
  module.exports = { serialize : serialize, deserialize : deserialize, TreeNode : TreeNode };
}
