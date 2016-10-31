'use strict';

const chai = require('chai');
const expect = chai.expect;
const canWinNim = require('../toys/nim_game.js');

/*
 * You are playing the following Nim Game with your friend:
 * There is a heap of stones on the table, each time one of
 * you take turns to remove 1 to 3 stones. The one who removes
 * the last stone will be the winner. You will take the first
 * turn to remove the stones.
 *
 * Both of you are very clever and have optimal strategies for the
 * game. Write a function to determine whether you can win the game
 * given the number of stones in the heap.
 *
 * For example, if there are 4 stones in the heap, then you will
 * never win the game: no matter 1, 2, or 3 stones you remove, the
 * last stone will always be removed by your friend.
 *
 * Hint:
 *
 * If there are 5 stones in the heap, could you figure out a way
 * to remove the stones such that you will always be the winner?
 *
 * Credits:
 * Special thanks to @jianchao.li.fighter for adding this problem
 * and creating all test cases.
 */

describe('nim game', function() {

  describe("losing nim game", function () {
    test_it(0, false);
    test_it(4, false);
    test_it(8, false);
    test_it(12, false);
    test_it(16, false);
    test_it(20, false);
    test_it(24, false);
    test_it(28, false);
    test_it(32, false);
    test_it(36, false);
  });
  describe('wining nim game', function() {
    test_it(1, true);
    test_it(2, true);
    test_it(3, true);
    test_it(5, true);
    test_it(6, true);
    test_it(7, true);
    test_it(9, true);
    test_it(10, true);
    test_it(11, true);
    test_it(13, true);
    test_it(14, true);
    test_it(15, true);
    test_it(17, true);
    test_it(18, true);
    test_it(19, true);
    test_it(21, true);
    test_it(22, true);
    test_it(23, true);
    test_it(25, true);
    test_it(26, true);
    test_it(27, true);
    test_it(29, true);
    test_it(30, true);
    test_it(31, true);
    test_it(33, true);
    test_it(34, true);
    test_it(35, true);
    test_it(37, true);
    test_it(38, true);
    test_it(39, true);
  });

  function test_it(stone_count, expected_answer) {
    const title = '' + stone_count + ' stone(s)';
    it(title, function() {
      const output = canWinNim(stone_count);
      expect(output).to.equal(expected_answer);
    });
  }
});

