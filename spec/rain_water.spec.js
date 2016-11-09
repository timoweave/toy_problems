'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var trap = require('../toys/rain_water.js');
}

describe('trap water', function() {
  it('[0,1,0,2,1,0,1,3,2,1,2,1] is 6', function() {
    const input = [0,1,0,2,1,0,1,3,2,1,2,1];
    const expected = 6;
    const output = trap(input);
    expect(output).to.equal(expected);
  });
  it('[0,1,0,1,0,1,0,1,0,1,0,1] is 5', function() {
    const input = [0,1,0,1,0,1,0,1,0,1,0,1];
    const expected = 5;
    const output = trap(input);
    expect(output).to.equal(expected);
  });
  it('[1,0,1] is 1', function() {
    const input = [1,0,1];
    const expected = 1;
    const output = trap(input);
    expect(output).to.equal(expected);
  });
  it('[4,0,6] is 4', function() {
    const input = [4,0,6];
    const expected = 4;
    const output = trap(input);
    expect(output).to.equal(expected);
  });

  it('[0,1,2,3,4] is 0', function() {
    const input = [0,1,2,3,4];
    const expected = 0;
    const output = trap(input);
    expect(output).to.equal(expected);
  });
  it('[0,1,2,1,0] is 0', function() {
    const input = [0,1,2,1,0];
    const expected = 0;
    const output = trap(input);
    expect(output).to.equal(expected);
  });
});
