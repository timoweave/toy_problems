'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var isAdditiveNumber = require('../toys/additive_number.js');
}

describe('additive number sequence', function() {
  describe('invalid additive number sequence', function() {
    it('empty string', function() {
      const input = "";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(false);
    });
    it('1 string', function() {
      const input = "1";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(false);
    });
    it('12 string', function() {
      const input = "12";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(false);
    });
    it('125 string', function() {
      const input = "125";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(false);
    });
  });

  describe('valid additive number sequence, 3 numbers', function() {
    it('123 string', function() {
      const input = "123";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
    it('729 string', function() {
      const input = "729";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
    it('145 string', function() {
      const input = "123";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
    it('1910 string', function() {
      const input = "1910";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
    it('9110 string', function() {
      const input = "9110";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
    it('9716 string', function() {
      const input = "9716";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
  });
  describe('valid additive number sequence, > 3 numbers', function() {
    it('112358 is [1, 1, 2, 3, 5, 8] fibinaci', function() {
      const input = "112358";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
    it('1347 is [1, 3, 4, 7]', function() {
      const input = "1347";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
    it('199100199 is [1, 99, 100, 199], a valid additive number', function() {
      const input = "199100199";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
    it('1212142640 is [12, 12, 14, 26, 40], a valid additive number', function() {
      const input = "1212142640";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
    it('10212142640 is [10, 2, 12, 14, 26, 40], a valid additive number', function() {
      const input = "10212142640";
      const output = isAdditiveNumber(input);
      expect(output).to.equal(true);
    });
  });

});
