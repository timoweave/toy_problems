'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var containsDuplicate = require('../toys/contains_duplicate.js');
}
/*
 * Given an array of integers, find if the array contains any duplicates. 
 * Your function should return true if any value appears at least 
 * twice in the array, and it should return false if every element is distinct.
 */
describe('contains duplicate test', function() {
  describe("not array object", function () {
    it("object", function() {
      var input = {}
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
    it("undefined", function() {
      var input = undefined;
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
    it("string", function() {
      var input = "hello";
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
    it("number", function() {
      var input = 1;
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
    it("true", function() {
      var input = true;
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
    it("false", function() {
      var input = false;
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
  });
  describe('array of non numbers', function() {
    it('array of ["a"]', function() {
      var input = ["a"];
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
    it("array of ['a', 2, 3, 4]", function() {
      var input = ['a', 2, 3, 4];
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
    it("array of ['a', 'b', 4]", function() {
      var input = ['a', 'b,', 4];
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
  });
  describe('contain no dupicates', function() {
    it('array of []', function() {
      var input = [];
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });

    it('array of [1]', function() {
      var input = [1];
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });

    it('array of [0]', function() {
      var input = [0];
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });

    it("array of [1, 2]", function() {
      var input = [1, 2];
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });

    it("array of [1, 2, 3]", function() {
      var input = [1, 2, 3];
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
    it("array of [1, 2, 3, 4]", function() {
      var input = [1, 2, 3, 4];
      var output = containsDuplicate(input);
      expect(output).to.equal(false);
    });
  });

  describe('contain at least one dupicate', function() {
    it("array of [1, 1]", function() {
      var input = [1, 1];
      var output = containsDuplicate(input);
      expect(output).to.equal(true);
    });
    it("array of [2, 1, 1]", function() {
      var input = [2, 1, 1];
      var output = containsDuplicate(input);
      expect(output).to.equal(true);
    });
    it("array of [2, 3, 4, 5, 6, 1, 1]", function() {
      var input = [2, 3, 4, 5, 6, 1, 1];
      var output = containsDuplicate(input);
      expect(output).to.equal(true);
    });
    it("array of [4, 2, 3, 4]", function() {
      var input = [4, 2, 3, 4];
      var output = containsDuplicate(input);
      expect(output).to.equal(true);
    });
    it("array of [4, 4, 3, 4]", function() {
      var input = [4, 4, 3, 4];
      var output = containsDuplicate(input);
      expect(output).to.equal(true);
    });
  });
});
