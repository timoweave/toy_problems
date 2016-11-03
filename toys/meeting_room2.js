/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */

var minMeetingRooms = function(intervals) {
  
  return main(intervals);

  function main(intervals) {
    if (isInvalid(intervals)) { return 0; }
    return findMinRoom(intervals);
  }

  function isInvalid(intervals) {
    if ((intervals === null) || (intervals === undefined) || (intervals.length === 0)) {
      return true;
    }
    if (intervals.filter((int_i) => (!(int_i instanceof Interval))).length) {
      return true;
    }
    return false;
  }

  function findMinRoom(intervals) {
    const points = {};
    intervals.forEach((interval) => {
      points[interval.start] = 0;
      points[interval.end] = 0;
    });
    const nums = Object.keys(points).map((i) => (parseInt(i)) ).sort((a, b) => (a - b));
    intervals.forEach((interval) => {
      const range = nums.filter((n) => { return ((interval.start <= n) && (n < interval.end)); });
      range.forEach((p) => { points[p]++; });
    });
    const minRooms = Object.keys(points).map((p) => (points[p]) ).reduce((ans, size) => (Math.max(ans, size)), 0);
    return minRooms;
  }

};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

if (typeof module === 'object') {
  module.exports = { minMeetingRooms : minMeetingRooms, Interval : Interval };
}