if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var maxDepth = require('../toys/tree_depth.js');
}

describe("max depth of binary tree", function() {
  it("null binary tree", function() {
    const n0 = null;
    const d = maxDepth(n0);
    expect(d).to.deep.equal(0);
  });
  it("(0) binary tree", function() {
    const n0 = new TreeNode(0);
    const d = maxDepth(n0);
    expect(d).to.deep.equal(1);
  });
  it("(0, 1, null) binary tree", function() {
    const n0 = new TreeNode(0);
    const n1 = new TreeNode(1);
    n0.left = n1;
    const d = maxDepth(n0);
    expect(d).to.deep.equal(2);
  });
  
  it("(0, null, 2) binary", function() {
    const n0 = new TreeNode(0);
    const n2 = new TreeNode(2);
    n0.right = n2;

    const d = maxDepth(n0);
    expect(d).to.deep.equal(2);
  });
  
  it("(0, (1, null, null), (2, null, null))", function() {
    const n0 = new TreeNode(0);
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    n0.left = n1;
    n0.right = n2;

    const d = maxDepth(n0);
    expect(d).to.deep.equal(2);

    // const s0 = serialize(n0);
    // const e0 = [0,[1,null,null],[2,null,null]];
    // expect(s0).to.deep.equal(e0);
  });
  
  it("(0, (1, (3, null, null), null), (2, null, null))", function() {
    const n0 = new TreeNode(0);
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    const n3 = new TreeNode(3);
    n0.left = n1;
    n0.right = n2;
    n1.left = n3;

    const d = maxDepth(n0);
    expect(d).to.deep.equal(3);

  });

  it("(0, (1, (3, null, null), null), (2, null, (6, null, null)))", function() {
    const n0 = new TreeNode(0);
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    const n3 = new TreeNode(3);
    const n6 = new TreeNode(6);
    n0.left = n1;
    n0.right = n2;
    n1.left = n3;
    n2.right = n6;

    const d = maxDepth(n0);
    expect(d).to.deep.equal(3);
  });

  it("(0, (1, (3, null, null), null), (2, null, (6, null, (14, null, null))))", function() {
    const n0 = new TreeNode(0);
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    const n3 = new TreeNode(3);
    const n6 = new TreeNode(6);
    const ne = new TreeNode(14);
    n0.left = n1;
    n0.right = n2;
    n1.left = n3;
    n2.right = n6;
    n6.right = ne;
    const d = maxDepth(n0);
    expect(d).to.deep.equal(4);
  });
  

  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
});