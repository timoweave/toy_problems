/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var getSum = function(a, b) {

  return main(a, b);

  // functions  
  function main(a, b) {
    var a_bits = reverse_bits(a);
    var b_bits = reverse_bits(b);
    pad_zeros(a_bits, b_bits);
    pad_zeros(b_bits, a_bits);
    var c_bits = add_bits(a_bits, b_bits);
    var c = c_bits.reverse().join('');
    return parseInt(c, 2);
  }

  function add_bits(left, right) {
    var ans = [];
    var carry = 0;
    for (let i = 0; i < left.length; i++) {
      var lhs = left[i];
      var rhs = right[i];
      if (carry === 0) {
        if (lhs === 0) {
          if (rhs === 1) {
            ans.push(1);
            carry = 0;
          } else {
            ans.push(0);
            carry = 0;
          }
        } else {
          if (rhs === 1) {
            ans.push(0);
            carry = 1;
          } else {
            ans.push(1);
            carry = 0;
          }
        }
      } else {
        if (lhs === 0) {
          if (rhs === 1) {
            ans.push(0);
            carry = 1;
          } else {
            ans.push(1);
            carry = 0;
          }
        } else {
          if (rhs === 1) {
            ans.push(1);
            carry = 1;
          } else {
            ans.push(0);
            carry = 1;
          }
        }
      }
    }
    if (carry) {
      ans.push(1);
    }
    return ans;
  }

  function pad_zeros(left, right) {
    while(left.length < right.length) {
      left.push(0);
    }
  }

  function reverse_bits(number) {
    return number.toString(2).split('').reverse().map(function(i) {
             return parseInt(i);
           });
  }
}

if (typeof module === 'object') {
  module.exports = getSum;
}