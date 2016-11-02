/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {Number} c3
 * @return {ListNode}
 */

/*
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

var addTwoNumbers = function(l1, l2, c3) {
  c3 = c3 || 0;
  var v3 = c3;
  v3 += (l1) ? l1.val : 0;
  v3 += (l2) ? l2.val : 0;
  c3 = (v3 > 9) ? 1 : 0;
  v3 = (v3 > 9) ? v3 % 10 : v3;

  var l3 = new ListNode(v3);
  if (((l1) && (l1.next !== null)) ||
      ((l2) && (l2.next !== null)) ||
      (c3 > 0)) {
    var n1 = l1 ? l1.next : null;
    var n2 =  l2 ? l2.next : null;
    l3.next = addTwoNumbers(n1, n2, c3);
  }
  return l3;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

if (typeof module === 'object') {
  module.exports = addTwoNumbers;
}
