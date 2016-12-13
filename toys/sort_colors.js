
/*
Given an array with n objects colored red, white or blue,
sort them so that objects of the same color are adjacent,
with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent
the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for
this problem.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  
  const count = { '0' : 0, '1': 0, '2': 0 };
  nums.forEach((item) => {
    count[item] += 1;
  });

  const reds = Array(count['0']).fill(0);
  const whites = Array(count['1']).fill(1);
  const blues = Array(count['2']).fill(2);
  const result = reds.concat(whites).concat(blues);
  result.forEach((item, index)=>{
    nums[index] = item;
  });
};

if (typeof module === 'object') {
  module.exports = sortColors;
}

