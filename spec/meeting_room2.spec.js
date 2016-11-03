'use strict';

if (typeof module === 'object') {
  var chai = require('chai');
  var expect = chai.expect;
  const meeting_room2 = require('../toys/meeting_room2.js');
  var minMeetingRooms = meeting_room2.minMeetingRooms;
  var Interval = meeting_room2.Interval;
}

describe.only('meeting room 2', function() {
  it('undefined interval', function() {
    const intervals = undefined;
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(0);
  });

  it('null interval', function() {
    const intervals = null;
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(0);
  });

  it('[null] interval', function() {
    const intervals = [null];
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(0);
  });

  it('[undefined] interval', function() {
    const intervals = [undefined];
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(0);
  });

  it('[] interval', function() {
    const intervals = [];
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(0);
  });

  it('[1] interval', function() {
    const intervals = [1];
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(0);
  });

  it('[(0, 10)] interval', function() {
    const i0 = new Interval(0, 10)
    const intervals = [ i0 ];
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(1);
  });

  it('[(0, 10), (20, 30)] interval, non overlap', function() {
    const intervals = [ new Interval(20, 30), new Interval(0, 10) ];
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(1);
  });

  it('[(0, 10), (5, 15)] interval, overlap', function() {
    const intervals = [ new Interval(5, 15), new Interval(0, 10) ];
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(2);
  });

  it('[(0, 10), (5, 15), (10, 20)] interval, overlap', function() {
    const intervals = [ new Interval(5, 15), new Interval(10, 20), new Interval(0, 10) ];
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(2);
  });

  it('[(0, 50), (5, 15), (10, 20), (7, 8), (50, 60)] interval, overlap', function() {
    const intervals = [ new Interval(0, 50), new Interval(5, 15), new Interval(10, 20),
                        new Interval(7, 8), new Interval(50, 60)
                      ];
    const count = minMeetingRooms(intervals);
    expect(count).to.equal(3);
  });
});
