'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var convert = require('../toys/zig_zag.js');
}

describe('zig zag conversion', function() {
  it('true is trufy', function() {
    expect(true).to.equal(false);
  });

});
