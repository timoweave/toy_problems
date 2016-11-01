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
    pad_bits(a_bits, b_bits);
    pad_bits(b_bits, a_bits);
    var c_bits = [];
    var sum = add_bits(a_bits, b_bits, c_bits);
    return sum;
  }

  function add_bits(left, right, ans) {
    // var ans = [];
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
      // ans.push(1);
    }
    var sign = (ans[ans.length - 1] === 1) ? -1 : 1;
    if (sign === -1) {
      ans = ans.map((i) => ((i) ? 0 : 1));
      ans = add_one(ans);
    }
    var sum = ans.reverse();
    var total = sign * parseInt(sum.join(''), 2);
    return total;
  }

  function pad_bits(left, right) {
    var pad = left[left.length - 1];
    while(left.length < right.length) {
      left.push(pad);
    }
  }

  function reverse_bits(number) {
    var bits = number.toString(2).split('').reverse().map(function(i) {
                 return parseInt(i);
               });
    var last_bit = bits.slice(-1).pop();

    // twos' complement bits
    var negative = Number.isNaN(parseInt(last_bit));
    if (negative) {
      bits = bits.map((i) => ((i) ? 0 : 1));
      bits = add_one(bits);
      bits.push(1);
      bits.push(1);
    } else {
      bits.push(0);
      bits.push(0);
    }
    return bits;
  }

  function add_one(bits) {
    var carry = 1;
    bits = bits.reduce(function(ans, b) {
             if (carry === 0) {
               ans.push(b);
             } else {
               if (b === 0) {
                 ans.push(1);
                 carry = 0;
               } else {
                 ans.push(0);
               }
             }
             return ans;
           }, []);
    
    if (carry === 1) {
      bits.push(1);
    }
    return bits;
  }
}

if (typeof module === 'object') {
  module.exports = getSum;
}