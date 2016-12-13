'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var sortColors = require('../toys/sort_colors.js');
}

describe('sort colors', function() {
  it.only('should sort reds, whites, blues', function() {
    const input = [2, 1, 0, 2, 0, 1, 1, 2, 0];
    const expected = [0, 0, 0, 1, 1, 1, 2, 2 ,2];
    const output = input.slice();
    sortColors(output);
    expect(output).to.deep.equal(expected);
  });
});

