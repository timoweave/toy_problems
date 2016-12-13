'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var addBinary = require('../toys/add_binary_2.js');
}

describe('add binary', function() {
  it('should add two zero => zeros', function() {
    const a = '000';
    const b = '000';
    const d = '000'
    const c = addBinary(a, b);
    expect(c).to.equal(d);
  });
  it('should add two numbers', function() {
    const a = '000';
    const b = '000';
    const d = '000'
    const c = addBinary(a, b);
    expect(c).to.equal(d);
  });
});
