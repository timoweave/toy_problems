'use strict';

const chai = require('chai');
const expect = chai.expect;
const duplicate = require('../toys/contains_duplicate.js');

/*
 * Given an array of integers, find if the array contains any duplicates. 
 * Your function should return true if any value appears at least 
 * twice in the array, and it should return false if every element is distinct.
 */
describe('contains duplicate test', function() {
  describe("not array object", function () {
    it("object", function() {
      const input = {}
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
    it("undefined", function() {
      const input = undefined;
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
    it("string", function() {
      const input = "hello";
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
    it("number", function() {
      const input = 1;
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
    it("true", function() {
      const input = true;
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
    it("false", function() {
      const input = false;
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
  });
  describe('array of non numbers', function() {
    it('array of ["a"]', function() {
      const input = ["a"];
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
    it("array of ['a', 2, 3, 4]", function() {
      const input = ['a', 2, 3, 4];
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
    it("array of ['a', 'b', 4]", function() {
      const input = ['a', 'b,', 4];
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
  });
  describe('contain no dupicates', function() {
    it('array of []', function() {
      const input = [];
      const output = duplicate(input);
      expect(output).to.equal(false);
    });

    it('array of [1]', function() {
      const input = [1];
      const output = duplicate(input);
      expect(output).to.equal(false);
    });

    it('array of [0]', function() {
      const input = [0];
      const output = duplicate(input);
      expect(output).to.equal(false);
    });

    it("array of [1, 2]", function() {
      const input = [1, 2];
      const output = duplicate(input);
      expect(output).to.equal(false);
    });

    it("array of [1, 2, 3]", function() {
      const input = [1, 2, 3];
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
    it("array of [1, 2, 3, 4]", function() {
      const input = [1, 2, 3, 4];
      const output = duplicate(input);
      expect(output).to.equal(false);
    });
  });

  describe('contain at least one dupicate', function() {
    it("array of [1, 1]", function() {
      const input = [1, 1];
      const output = duplicate(input);
      expect(output).to.equal(true);
    });
    it("array of [2, 1, 1]", function() {
      const input = [2, 1, 1];
      const output = duplicate(input);
      expect(output).to.equal(true);
    });
    it("array of [2, 3, 4, 5, 6, 1, 1]", function() {
      const input = [2, 3, 4, 5, 6, 1, 1];
      const output = duplicate(input);
      expect(output).to.equal(true);
    });
    it("array of [4, 2, 3, 4]", function() {
      const input = [4, 2, 3, 4];
      const output = duplicate(input);
      expect(output).to.equal(true);
    });
    it("array of [4, 4, 3, 4]", function() {
      const input = [4, 4, 3, 4];
      const output = duplicate(input);
      expect(output).to.equal(true);
    });
  });
});
