if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var addTwoNumbers = require('../toys/add_link_number.js');
}

describe("add link number", function () {
  it("(1) + (1)", function() {
    var l1 = new ListNode(1);
    var l2 = new ListNode(1);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(2);
  });

  it("(2) + (4)", function() {
    var l1 = new ListNode(2);
    var l2 = new ListNode(4);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(6);
  });

  it("(1) + (9)", function() {
    var l1 = new ListNode(1);
    var l2 = new ListNode(9);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(0);
    expect(l3.next).to.be.exist;
    expect(l3.next.val).to.equal(1);

  });
  it("(3) + (7)", function() {
    var l1 = new ListNode(3);
    var l2 = new ListNode(7);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(0);
    expect(l3.next).to.be.exist;
    expect(l3.next.val).to.equal(1);
  });

  it("(5) + (7)", function() {
    var l1 = new ListNode(5);
    var l2 = new ListNode(7);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(2);
    expect(l3.next).to.be.exist;
    expect(l3.next.val).to.equal(1);
  });

  it("(1) + (7, 1)", function() {
    var l1 = new ListNode(1);
    var l2 = new ListNode(7);
    l2.next = new ListNode(1);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(8);
    expect(l3.next).to.be.exist;
    expect(l3.next.val).to.equal(1);
  });


  it("(5) + (7, 1)", function() {
    var l1 = new ListNode(5);
    var l2 = new ListNode(7);
    l2.next = new ListNode(1);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(2);
    expect(l3.next).to.be.exist;
    expect(l3.next.val).to.equal(2);
  });

  it("(2, 4) + (5)", function() {
    var l1 = new ListNode(2);
    l1.next = new ListNode(4);
    var l2 = new ListNode(5);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(7);
    expect(l3.next).to.be.exist;
    expect(l3.next.val).to.equal(4);
  });


  it("(3, 9) + (6)", function() {
    var l1 = new ListNode(3);
    l1.next = new ListNode(9);
    var l2 = new ListNode(6);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(9);
    expect(l3.next).to.be.exist;
    expect(l3.next.val).to.equal(9);
  });

  it("(3, 9) + (7)", function() {
    var l1 = new ListNode(3);
    l1.next = new ListNode(9);
    var b1 = new ListNode(9);
    var l2 = new ListNode(7);
    var l3 = addTwoNumbers(l1, l2);
    expect(l3).to.be.exist;
    expect(l3).to.be.an('object');
    expect(l3.val).to.equal(0);
    expect(l3.next).to.be.exist;
    expect(l3.next.val).to.equal(0);
    expect(l3.next.next).to.be.exist;
    expect(l3.next.next.val).to.equal(1);
  });

  // functions
  function ListNode(val) {                                                                                 
    this.val = val;                                                                                      
    this.next = null;                                                                                    
  }
    
});