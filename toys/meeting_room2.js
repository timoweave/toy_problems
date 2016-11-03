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
    if (isInvalid(intervals)) {
      return 0;
    }
    intervals.sort(sortIntervals);
    const breakup_intervals = breakupIntervals(intervals);
    return minRoom(breakup_intervals);
  }

  function breakupIntervals(intervals) {
    const points = {};
    intervals.forEach((interval) => {
      points[interval.start] = true;
      points[interval.end] = true;
    });
    const nums = Object.keys(points).map((i) => (parseInt(i)) ).sort((a, b) => (a - b));
    const breakups = [];
    intervals.forEach((interval) => {
      const range = nums.filter((n) => { return ((interval.start <= n) && (n <= interval.end)); });
      const first = range.shift();
      range.reduce((start, end) => {
        breakups.push(new Interval(start, end));
        return end;
      }, first);
    });

    return breakups;
  }

  function sortIntervals(a, b) {
    if (a.start === b.start) {
      return a.end - b.end;
    } else {
      return a.start - b.start;
    }
  }

  function minRoom(intervals) {
    const min_room = intervals.reduce((int_max, int_i, i) => {
      var conflict_list = intervals.filter((int_j, j) => {
        const overlap = ((int_i.start < int_j.end) && (int_j.start < int_i.end));
        return overlap;
      });
      return Math.max(int_max, conflict_list.length);
    }, 1);
    return min_room;
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
  
};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

if (typeof module === 'object') {
  module.exports = { minMeetingRooms : minMeetingRooms, Interval : Interval };
}