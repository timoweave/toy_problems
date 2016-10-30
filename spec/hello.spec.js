'use strict';

const chai = require('chai');
const expect = chai.expect;
const hello = require('../toys/hello.js');

describe('hello', function() {
  it('true is truify', function() {
    expect(true).to.equal(false);
  });
  it('hello return true by default', function() {
    expect(hello()).to.equal(false);
  });
});
