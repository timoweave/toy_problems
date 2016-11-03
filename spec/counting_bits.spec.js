'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var countBits = require('../toys/counting_bits.js');
}

describe.only('counting bits', function() {
  it('0', function() {
    const output = countBits(0);
    const expected = [0];
    expect(output).to.deep.equal(expected);
  });
  it('1', function() {
    const output = countBits(1);
    const expected = [0, 1];
    expect(output).to.deep.equal(expected);
  });
  it('2', function() {
    const output = countBits(2);
    const expected = [0, 1, 1];
    expect(output).to.deep.equal(expected);
  });
  it('3', function() {
    const output = countBits(3);
    const expected = [0, 1, 1, 2];
    expect(output).to.deep.equal(expected);
  });
  it('4', function() {
    const output = countBits(4);
    const expected = [0, 1, 1, 2, 1];
    expect(output).to.deep.equal(expected);
  });
  it('5', function() {
    const output = countBits(5);
    const expected = [0, 1, 1, 2, 1, 2];
    expect(output).to.deep.equal(expected);
  });
});
