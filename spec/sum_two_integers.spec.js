'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var getSum = require('../toys/sum_two_integers.js');
}

describe('sum two integers without math operator +', function() {
  describe('sum two positive', function() {
    it('0 + 0', function() {
      var sum = getSum(0, 0);
      expect(sum).to.be.equal(0);
    });
    it('0 + 1', function() {
      var sum = getSum(0, 1);
      expect(sum).to.be.equal(1);
    });
    it('1 + 1', function() {
      var sum = getSum(1, 1);
      expect(sum).to.be.equal(2);
    });
    it('1 + 3', function() {
      var sum = getSum(1, 3);
      expect(sum).to.be.equal(4);
    });
    it('3 + 7', function() {
      var sum = getSum(3, 7);
      expect(sum).to.be.equal(10);
    });
    it('4 + 8', function() {
      var sum = getSum(4, 8);
      expect(sum).to.be.equal(12);
    });
    
  });

  describe('sum one positive and one negative number', function() {
    it('-0 + 0', function() {
      var sum = getSum(-0, 0);
      expect(sum).to.be.equal(0);
    });
    it('0 + -0', function() {
      var sum = getSum(0, -0);
      expect(sum).to.be.equal(0);
    });
    it('-4 + 8', function() {
      var sum = getSum(-4, 8);
      expect(sum).to.be.equal(4);
    });
    it('8 + -4', function() {
      var sum = getSum(8, -4);
      expect(sum).to.be.equal(4);
    });
    it('4 + -8', function() {
      var sum = getSum(4, -8);
      expect(sum).to.be.equal(-4);
    });
  });

  describe("sum two negative numbers", function() {
    it('-0 + -0', function() {
      var sum = getSum(-0, -0);
      expect(sum).to.be.equal(0);
    });

    it('-4 + -8', function() {
      var sum = getSum(-4, -8);
      expect(sum).to.be.equal(-12);
    });
  });

});