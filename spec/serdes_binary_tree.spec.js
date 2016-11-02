if (typeof module === 'object') {
  // NOTE: these variables must to be hoisted up
  var chai = require('chai');
  var expect = chai.expect;
  var serdes = require('../toys/serdes_binary_tree.js');
  var serialize = serdes.serialize;
  var deserialize = serdes.deserialize;
  var TreeNode = serdes.TreeNode;
}

describe("serialize deserialize binary tree", function() {
  describe("serialize", function() {
    it("()", function() {
      const n0 = null;
      const s0 = serialize(n0);
      const e0 = null;
      expect(s0).to.deep.equal(e0);
    });
    it("(0)", function() {
      const n0 = new TreeNode(0);
      const s0 = serialize(n0);
      const e0 = [0, null, null];
      expect(s0).to.deep.equal(e0);
    });

    it("(0, 1, null)", function() {
      const n0 = new TreeNode(0);
      const n1 = new TreeNode(1);
      n0.left = n1;
      const s0 = serialize(n0);
      const e0 = [0, [1, null, null], null];
      expect(s0).to.deep.equal(e0);
    });

    it("(0, null, 2)", function() {
      const n0 = new TreeNode(0);
      const n2 = new TreeNode(2);
      n0.right = n2;
      const s0 = serialize(n0);
      const e0 = [0, null, [2, null, null]];
      expect(s0).to.deep.equal(e0);
    });

    it("(0, (1, null, null), (2, null, null))", function() {
      const n0 = new TreeNode(0);
      const n1 = new TreeNode(1);
      const n2 = new TreeNode(2);
      n0.left = n1;
      n0.right = n2;
      const s0 = serialize(n0);
      const e0 = [0,[1,null,null],[2,null,null]];
      expect(s0).to.deep.equal(e0);
    });

    it("(0, (1, (3, null, null), null), (2, null, null))", function() {
      const n0 = new TreeNode(0);
      const n1 = new TreeNode(1);
      const n2 = new TreeNode(2);
      const n3 = new TreeNode(3);
      n0.left = n1;
      n0.right = n2;
      n1.left = n3;
      const s0 = serialize(n0);
      const e0 = [0,[1,[3, null, null],null],[2,null,null]];
      expect(s0).to.deep.equal(e0);
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

      const s0 = serialize(n0);
      const e0 = [0,[1,[3, null, null],null],[2,null,[6, null, null]]];
      expect(s0).to.deep.equal(e0);
    });
    
  });

  describe("deserialize", function() {
    it("()", function() {
      const s0 = null;
      const n0 = deserialize(s0);
      expect(n0).to.equal(null);
    });

    it("(0)", function() {
      const s0 = [0, null, null];
      const n0 = deserialize(s0);

      expect(n0.val).to.equal(0);
      expect(n0.left).to.equal(null);
      expect(n0.right).to.equal(null);
    });

    it("(0, 1, null)", function() {
      const s0 = [0, [1, null, null], null];
      const n0 = deserialize(s0);
      const n1 = n0.left;

      expect(n0.val).to.equal(0);
      expect(n0.left).to.not.equal(null);
      expect(n0.right).to.equal(null);
      expect(n1.val).to.equal(1);
      expect(n1.left).to.equal(null);
      expect(n1.right).to.equal(null);
    });

    it("(0, null, (2, null, null))", function() {
      const s0 = [0, null, [2, null, null]];
      const n0 = deserialize(s0);
      const n2 = n0.right;

      expect(n0.val).to.equal(0);
      expect(n0.left).to.equal(null);
      expect(n0.right).to.not.equal(null);
      expect(n2.val).to.equal(2);
      expect(n2.left).to.equal(null);
      expect(n2.right).to.equal(null);
    });

    it("(0, (1, null, null), (2, null, null))", function() {
      const s0 = [0,[1,null,null],[2,null,null]];
      const n0 = deserialize(s0);
    });

    it("(0, (1, (3, null, null), null), (2, null, null))", function() {
      const s0 =[0,[1,[3, null, null],null],[2,null,null]];
      const n0 = deserialize(s0);
    });

    it("(0, (1, (3, null, null), null), (2, null, (6, null, null)))", function() {
      const s0 = [0,[1,[3, null, null],null],[2,null,[6, null, null]]]
      const n0 = serialize(s0);
    });
    
  });

  describe("serialize -> deserialize", function() {
    it("()", function() {
      const n0 = null;
      const d0 = deserialize(serialize(n0));
      expect(d0).to.equal(n0);
    });

    it("(0)", function() {
      const n0 = new TreeNode(0);
      const d0 = deserialize(serialize(n0));
      expect(d0).to.deep.equal(n0);
    });

    it("(0, 1, null)", function() {
      const n0 = new TreeNode(0);
      const n1 = new TreeNode(1);
      n0.left = n1;
      const d0 = deserialize(serialize(n0));
      expect(d0).to.deep.equal(n0);
    });

    it("(0, null, 2)", function() {
      const n0 = new TreeNode(0);
      const n2 = new TreeNode(2);
      n0.right = n2;
      const d0 = deserialize(serialize(n0));
      expect(d0).to.deep.equal(n0);
    });

    it("(0, (1, null, null), (2, null, null))", function() {
      const n0 = new TreeNode(0);
      const n1 = new TreeNode(1);
      const n2 = new TreeNode(2);
      n0.left = n1;
      n0.right = n2;
      const d0 = deserialize(serialize(n0));
      expect(d0).to.deep.equal(n0);
    });

    it("(0, (1, (3, null, null), null), (2, null, null))", function() {
      const n0 = new TreeNode(0);
      const n1 = new TreeNode(1);
      const n2 = new TreeNode(2);
      const n3 = new TreeNode(3);
      n0.left = n1;
      n0.right = n2;
      n1.left = n3;
      const d0 = deserialize(serialize(n0));
      expect(d0).to.deep.equal(n0);
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
      
      const d0 = deserialize(serialize(n0));
      expect(d0).to.deep.equal(n0);
    });

  });

});