'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var findDuplicates = require('../toys/find_duplicate_in_array.js');
}

describe('find duplicates in an array', function() {
  describe("all unique in an array", function() {
    it('[] => []', function() {
      const input = [];
      const expected = [];
      const output = findDuplicates(input);
      expect(output).to.deep.equal(expected);
    });
    it('[1,2] => []', function() {
      const input = [1, 2];
      const expected = [];
      const output = findDuplicates(input);
      expect(output).to.deep.equal(expected);
    });
    it('[1,2,3] => []', function() {
      const input = [1, 2, 3];
      const expected = [];
      const output = findDuplicates(input);
      expect(output).to.deep.equal(expected);
    });
    it('[4,5,2,7,8,6,3,1] => []', function() {
      const input = [4, 5, 2, 7, 8, 6, 3, 1];
      const expected = [];
      const output = findDuplicates(input);
      expect(output).to.deep.equal(expected);
    });

  });
  describe("some doubles in an array", function() {
    it('[1,3,3] => [3]', function() {
      const input = [1, 3, 3];
      const expected = [3];
      const output = findDuplicates(input);
      expect(output).to.deep.equal(expected);
    });
    it('[4,3,2,7,8,2,3,1] => [2,3]', function() {
      const input = [4, 3, 2, 7, 8, 2, 3, 1];
      const expected = [2, 3];
      const output = findDuplicates(input);
      expect(output).to.deep.equal(expected);
    });
    it('[7,3,2,7,8,2,3,1] => [2,3,7]', function() {
      const input = [7, 3, 2, 7, 8, 2, 3, 1];
      const expected = [2, 3, 7];
      const output = findDuplicates(input);
      expect(output).to.deep.equal(expected);
    });
  });
});
