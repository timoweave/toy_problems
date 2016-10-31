'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var hello = require('../toys/hello.js');
}

describe('hello', function() {
  it('true is trufy', function() {
    expect(true).to.equal(true);
  });
  it('false is falsy', function() {
    expect(false).to.equal(false);
  });
  it('hello return true by default', function() {
    expect(hello()).to.equal(true);
  });
});
