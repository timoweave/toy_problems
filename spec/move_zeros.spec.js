'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  var moveZeros = require('../toys/move_zeros.js');
}

describe('move zeros to the end of its array in place', function() {
  describe('should not change any non-zeros', function() {
    it('[1]', function() {
      const input = [1];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(input);
    });
    it('[1, 2]', function() {
      const input = [1, 2];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(input);
    });
    it('[1, 2, 3]', function() {
      const input = [1, 2, 3];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(input);
    });
  });

  describe('should not change any tailing zeros, more or less', function() {
    it('[0]', function() {
      const input = [0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(input);
    });
    it('[1, 0]', function() {
      const input = [1, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(input);
    });
    it('[1, 2, 0]', function() {
      const input = [1, 2, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(input);
    });
    it('[1, 2, 3, 0]', function() {
      const input = [1, 2, 3, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(input);
    });
  });

  describe('should put zeros to its tail', function() {
    it('[0]', function() {
      const input = [0];
      const result = [0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(result);
    });
    it('[0, 0]', function() {
      const input = [0, 0];
      const result = [0, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(result);
    });
    it('[0, 1]', function() {
      const input = [0, 1];
      const result = [1, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(result);
    });
    it('[0, 1, 2, 3]', function() {
      const input = [0, 1, 2, 3];
      const result = [1, 2, 3, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(result);
    });
    it('[0, 1, 0, 2, 3]', function() {
      const input = [0, 1, 0, 2, 3];
      const result = [1, 2, 3, 0, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(result);
    });

    it('[1, 0, 2, 3]', function() {
      const input = [1, 0, 2, 3];
      const result = [1, 2, 3, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(result);
    });

    it('[1, 0, 2, 0, 3]', function() {
      const input = [1, 0, 2, 0, 3];
      const result = [1, 2, 3, 0, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(result);
    });

    it('[0, 0, 1, 0, 2, 3]', function() {
      const input = [0, 0, 1, 0, 2, 3];
      const result = [1, 2, 3, 0, 0, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(result);
    });

    it('[1, 0, 0, 2, 0, 3]', function() {
      const input = [1, 0, 0, 2, 0, 3];
      const result = [1, 2, 3, 0, 0, 0];
      const output = input.slice();
      moveZeros(output);
      expect(output).to.deep.equal(result);
    });
  });
});
