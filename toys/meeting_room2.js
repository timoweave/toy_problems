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

  if ((intervals === null) || (intervals === undefined) || (intervals.length === 0)) { return 0; }

  const invalid = (intervals.filter((int_i) => (!(int_i instanceof Interval))).length) ? true : false;
  if (invalid) { return 0; }

  intervals.sort(sort_intervals);
  
  const compatibles = [];
  let ints = intervals.slice();
  while (ints.length) {
    let int_i = ints.shift();
    let compatible = [int_i];
    let start = int_i.start;
    let end = int_i.end;
    ints = ints.reduce((int_left, int_j) => {
      const ok =  ((end < int_j.start) && (start < int_j.end));
      if (ok)
    }, []);
  }
  intervals.forEach(function() {}, );
  
  return 0;

  /*
  const min_room = intervals.reduce((int_max, int_i, i) => {
    if (!(int_i instanceof Interval)) { return false; }
    var conflict_list = intervals.filter((int_j, j) => {
      return ((int_i.end < int_j.start) && (int_i.start < int_j.end));
    });
    return Math.max(int_max, conflict_list.length);
  }, 1);

  return min_room;
   */
  function sort_intervals(a, b) {
    if (a.start === b.start) {
      return a.end - b.end;
    } else {
      return a.start - b.start;
    }
  }

};

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

if (typeof module === 'object') {
  module.exports = { minMeetingRooms : minMeetingRooms, Interval : Interval };
}