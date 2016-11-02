
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let i = 0;
  let j = 1;
  while ((i < nums.length - 1) && (j < nums.length)) {
    if (nums[i] === 0) {
      while ((nums[j] === 0) && (j < nums.length - 1)) {
        j++;
      }
      nums[i] = nums[j];
      nums[j] = 0;
    }
    i++;
    j++;
  }
};


if (typeof module === 'object') {
  module.exports = moveZeroes;
}