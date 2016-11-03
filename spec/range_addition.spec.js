'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var getModifiedArray = require('../toys/range_addition.js');
}

describe('range addition', function() {
  it('example 1: 5, [ [1, 3, 2], [2, 4, 3], [0, 2, -2]]', function() {
    const length = 5;
    const updates = [ [1,  3,  2], [2,  4,  3], [0,  2, -2] ];
    const expected = [ -2, 0, 3, 5, 3 ];
    const output = getModifiedArray(length, updates);
    expect(output).to.deep.equal(expected);

    // console.log({length, updates, expected, output});
  });

  it('example 1: 5, [ [1, 3, 2], [2, 4, 3], [0, 2, -2] ] x 5', function() {
    const length = 5;
    const updates = [ [1,  3,  2], [2,  4,  3], [0,  2, -2],
                      [1,  3,  2], [2,  4,  3], [0,  2, -2],
                      [1,  3,  2], [2,  4,  3], [0,  2, -2],
                      [1,  3,  2], [2,  4,  3], [0,  2, -2],
                      [1,  3,  2], [2,  4,  3], [0,  2, -2]
                    ];
    const expected = [ -10, 0, 15, 25, 15 ];
    const output = getModifiedArray(length, updates);
    expect(output).to.deep.equal(expected);

    // console.log({length, updates, expected, output});
  });
});
