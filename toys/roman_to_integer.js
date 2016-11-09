/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const value = s.split('').reverse().map(integerify).reduce(polarify, []).reduce(sum, 0);
  return value;

  function sum(result, value) {
    return result + value;
  }

  function polarify(results, curr_integer, index, container) {
    const prev_integer = (index > 0) ? container[index - 1] : curr_integer;
    if ((curr_integer < prev_integer) ||
        (results[results.length - 1] === -curr_integer)) {
      curr_integer = -curr_integer;
    }
    results.push(curr_integer);

    return results;
  }

  function integerify(roman) {
    const integer = { 'I': 1, 'V': 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000 };
    return integer[roman];
  }

};

if (typeof module === 'object') {
  module.exports = romanToInt;
}