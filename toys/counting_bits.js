/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let counts = [0, 1];
  while (counts.length <= num) {
    counts.push(...counts.map((i) => (i+1)));
  }
  return counts.slice(0, num + 1);
};

if (typeof module === 'object') {
  module.exports = countBits;
}