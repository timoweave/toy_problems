/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const left_max = [];
  const right_max = [];

  height.reduce((curr_max, h) => {
    const next_max = Math.max(h, curr_max);
    left_max.push(next_max);
    return next_max;
  }, 0);

  height.reduceRight((curr_max, h) => {
    const next_max = Math.max(h, curr_max);
    right_max.unshift(next_max);
    return next_max;
  }, 0);

  let total = 0;
  const hold_max = []
  left_max.map((lm, i) => {
    total += Math.min(lm, right_max[i]) - height[i];
  });
  return total;
};

if (typeof module === 'object') {
  module.exports = trap;
}