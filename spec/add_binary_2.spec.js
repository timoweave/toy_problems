'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var addBinary = require('../toys/add_binary_2.js');
}

describe.only('add binary', function() {
  it('should add two zero => zeros', function() {
    const a = '000';
    const b = '000';
    const d = '000'
    const c = addBinary(a, b);
    expect(c).to.equal(d);
  });
  it('should add 1 + 1 => 10', function() {
    const a = '001';
    const b = '001';
    const d = '010'
    const c = addBinary(a, b);
    expect(c).to.equal(d);
  });
  it('should add 111 + 001 => 1000', function() {
    const a = '111';
    const b = '001';
    const d = '1000'
    const c = addBinary(a, b);
    expect(c).to.equal(d);
  });
  it('should add 101 + 011 => 1000', function() {
    const a = '101';
    const b = '011';
    const d = '1000'
    const c = addBinary(a, b);
    expect(c).to.equal(d);
  });
});
