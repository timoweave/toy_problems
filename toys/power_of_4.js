/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return main(num);

  function main(target) {
    if ((target === null) || (target === undefined) || (target < 0)) { return false; }
    if (target === 0) { return false; }
    if (target === 1) { return true; }

    const lower = 2;
    const upper = target >> 2;
    const base = findPowerOfFour(target, lower, upper);
    return (Number.isInteger(base)) ? true : false;
  }

  function findPowerOfFour(target, lower, upper) {

    const diff = ((upper - lower) >> 1);
    const mid = (lower + upper) >> 1;
    const mid_mid = mid * mid;
    const attempt = mid_mid * mid_mid;

    if (target === attempt) {
      return mid;
    } else if ((lower === upper) || (diff === 0)) {
      return false;
    } else if (target > attempt) {
      lower = lower + diff;
    } else { // target < attempt
      upper = upper - diff;
    }
    return findPowerOfFour(target, lower, upper);
  }
};

if (typeof module === 'object') {
  module.exports = isPowerOfFour;
}