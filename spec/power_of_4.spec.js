'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var isPowerOfFour = require('../toys/power_of_4.js');
}

describe('power of four', function() {
  describe('fail to find the power of four', function() {
    it('null is false', function() {
      expect(isPowerOfFour(null)).to.equal(false);
    });
    it('undefined is false', function() {
      expect(isPowerOfFour(undefined)).to.equal(false);
    });
    it('-1 is false', function() {
      expect(isPowerOfFour(-1)).to.equal(false);
    });
    it('0 is 0^4', function() {
      expect(isPowerOfFour(0)).to.equal(false);
    });
    it('3 is false', function() {
      expect(isPowerOfFour(3)).to.equal(false);      
    });
    it('5 is false', function() {
      expect(isPowerOfFour(5)).to.equal(false);      
    });
    it('12 is false', function() {
      expect(isPowerOfFour(12)).to.equal(false);      
    });
  });
  describe('succeed to find the power of four', function() {
    it('1 is 1^4', function() {
      expect(isPowerOfFour(1)).to.equal(true);
    });
    it('16 is 2^4', function() {
      expect(isPowerOfFour(16)).to.equal(true);
    });
    it('81 is 3^4', function() {
      expect(isPowerOfFour(81)).to.equal(true);
    });
    it('256 is 4^4', function() {
      expect(isPowerOfFour(256)).to.equal(true);
    });
    it('625 is 5^4', function() {
      expect(isPowerOfFour(625)).to.equal(true);
    });
  });
});
