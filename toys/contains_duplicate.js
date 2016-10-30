/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let invalid = ((nums === undefined) || (nums === null) ||
                 (!Array.isArray(nums)) || (nums.length <= 1));
  if (invalid) {
    return false;
  }
  nums.reduce(findDuplicate, {});

  return invalid;

  // functions
  function findDuplicate(dict, num) {
    if (invalid) { return false; }
    if (typeof num !== 'number') { invalid = false; return false; }

    dict[num] = dict[num] || 0;
    dict[num]++;

    if (dict[num] > 1) {
      invalid = true;
    }
    return dict;
  }
};

module.exports = containsDuplicate;