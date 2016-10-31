/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function(n, k) {
  if ((n === 0) || (k === 0)) {
    return [[]];
  }

  let items = [1, ...range(1, n)].map(num => [num]);
  
  for (let i = 1; i < k; i++) {
    items = items.reduce(dot_product(n), []);
  }
  return items;

  // functions
  function dot_product(n) {
    return (accum_items, curr_items, index, container) => {
      const first_item = curr_items.slice(0,1).pop();
      const last_item = curr_items.slice(-1).pop();
      const append_items = range(last_item, n);
      if (append_items.length === 0) { return accum_items; }
      const new_items = cross_items(curr_items, append_items);
      return [...accum_items, ...new_items];
    }
  }
  
  function cross_items(curr_items, append_items) {
    // NOTE: input [a1, ...] x [b1,...], output [[a1, b1], [], ...]
    const new_accum = append_items.map((item) => {
      return curr_items.slice().concat(item);
    });
    return new_accum;
  }

  function range(first, last) {
    // NOTE: first = 1, last = n, gives [2, ... n]
    const nums = [];
    if ((first === 0) || (last === 0)) {
      return nums;
    }
    for (let i = first + 1; i <= last; i++) {
      nums.push(i);
    }

    // return Array.from(new Array(n),(val,index)=>index+1).slice(1);
    return nums;
  }

};

if (typeof module === 'object') {
  module.exports = combine;
}