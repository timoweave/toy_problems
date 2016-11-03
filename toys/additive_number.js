/**
 * @param {string} num
 * @return {boolean}
 */

var isAdditiveNumber = function(num) {
  let nums = num.split('').map( (i) => (parseInt(i)) );
  return does_add_up(nums);
  
  function does_add_up(nums) {
    console.log(nums, nums.length);
    if (nums.length < 3) { return false; }

    let [a, b, c] = nums;
    let lhs = a + b;
    let rhs = c;
    if (nums.length === 3) { return (lhs === rhs); }
    if (lhs === rhs) { return does_add_up(nums.shift()); }
    if (lhs < rhs) { return false; }
    if (lhs > rhs) {
      return false;
    }

    // return can_add_up(nums)
    return false;
  }

  function can_add_up(a_nums, b_nums, c_nums) {
    let [a, b, c] = nums;
    let [i, j, k] = [0, 1, 2];
  }
};

if (typeof module === 'object') {
  module.exports = isAdditiveNumber;
}