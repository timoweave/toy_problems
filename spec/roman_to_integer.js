'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var romanToInt = require('../toys/roman_to_integer.js');
}

describe('roman to integer conversion', function() {
  describe("single roman", function() {
    it('I is 1', function() {
      const input = "I";
      const expected = 1;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('V is 5', function() {
      const input = "V";
      const expected = 5;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('X is 10', function() {
      const input = "X";
      const expected = 10;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('X is 10', function() {
      const input = "X";
      const expected = 10;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('L is 50', function() {
      const input = "L";
      const expected = 50;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('C is 100', function() {
      const input = "C";
      const expected = 100;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('D is 500', function() {
      const input = "D";
      const expected = 500;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('M is 1000', function() {
      const input = "M";
      const expected = 1000;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
  });

  describe("two romans", function() {
    it('IV is 4', function() {
      const input = "IV";
      const expected = 4;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('IX is 9', function() {
      const input = "IX";
      const expected = 9;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('XL is 40', function() {
      const input = "XL";
      const expected = 40;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('XC is 90', function() {
      const input = "XC";
      const expected = 90;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('CD is 400', function() {
      const input = "CD";
      const expected = 400;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('CM is 900', function() {
      const input = "CM";
      const expected = 900;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
  });

  describe("three romans", function() {
    it('IIV is 3', function() {
      const input = "IIV";
      const expected = 3;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
    it('IIX is 8', function() {
      const input = "IIX";
      const expected = 8;
      const output = romanToInt(input);
      expect(output).to.equal(expected);
    });
  });

  describe("1 to 10", function() {
    it("I to X is 1 to 10", function() {
      expect(romanToInt("I")).to.equal(1);
      expect(romanToInt("II")).to.equal(2);
      expect(romanToInt("III")).to.equal(3);
      expect(romanToInt("IV")).to.equal(4);
      expect(romanToInt("V")).to.equal(5);
      expect(romanToInt("VI")).to.equal(6);
      expect(romanToInt("VII")).to.equal(7);
      expect(romanToInt("VIII")).to.equal(8);
      expect(romanToInt("IX")).to.equal(9);
      expect(romanToInt("X")).to.equal(10);
    });
  });

  describe("years", function() {
    it("MCM is 1900", function() {
      expect(romanToInt("MCM")).to.equal(1900)
    });
    it("MCMLIV is 1954", function() {
      expect(romanToInt("MCMLIV")).to.equal(1954)
    });
    it("MCMXC is 1990", function() {
      expect(romanToInt("MCMXC")).to.equal(1990)
    });
    it("MCMLXXII is 1972", function() {
      expect(romanToInt("MCMLXXII")).to.equal(1972)
    });
    it("MMXIV is 2014", function() {
      expect(romanToInt("MMXIV")).to.equal(2014)
    });
  });
});
