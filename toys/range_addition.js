/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */

var getModifiedArray = function(length, updates) {

  let tables = {};
  updates.forEach(([start, stop, incr]) => {
    const key = [start, stop].join();
    tables[key] = tables[key] || 0;
    tables[key] += incr;
  });

  updates = [];
  Object.keys(tables).forEach((key) => {
    const update = [...key.split(',').map(i => parseInt(i)), tables[key]];
    updates.push(update);
  });

  let numbers = Array.from({length}).fill(0);
  updates.forEach(([start, stop, incr]) => {
    for (let i = start; i <= stop; i++) {
      numbers[i] += incr;
    }
  });
  return numbers;
};

if (typeof module === 'object') {
  module.exports = getModifiedArray;
}