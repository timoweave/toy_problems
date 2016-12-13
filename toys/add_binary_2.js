/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const a_list = a.split('');
  const b_list = b.split('');

  const r_list = [];
  let c_i = 0; // carry
  while (a_list.length || b_list.length || c_i) {
    const a_i = parseInt(a_list.pop() || '0');
    const b_i = parseInt(b_list.pop() || '0');
    const s_i = a_i + b_i + c_i;
    if (s_i >= 2) {
      c_i = 1;
    } else {
      c_i = 0;
    }
    if ((s_i % 2) === 1) {
      r_list.unshift(1);
    } else {
      r_list.unshift(0);
    }
  }
  return r_list.join('');
};

if (typeof module === 'object') {
  module.exports = addBinary;
}
