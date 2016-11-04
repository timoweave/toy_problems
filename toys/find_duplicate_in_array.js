/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let i = 0;
  let dups = {};
  nums = nums.map((n) => (n - 1));
  while (i < nums.length) {
    const n_i = nums[i];
    if (n_i !== i) {
      if (nums[n_i] === n_i) {
        dups[n_i + 1] = true;
        i++;
        continue;
      }
      const n_o = nums
      nums[i] = nums[n_i];
      nums[n_i] = n_i;
    }
    if (n_i === i) { i++; }
  }
  const repeats = Object.keys(dups).map((n)=>(parseInt(n))).sort((l,r) => (l - r));
  return repeats;
};

if (typeof module === 'object') {
  module.exports = findDuplicates;
}