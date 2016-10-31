if (typeof module === 'object') {
  var chai = require('chai');
  var expect =  chai.expect;
  var combine = require('../toys/combinations.js');
}

describe("combinations of two integer n & k, ie. n Choose k, ", function() {
  it("0 n 0", function() {
    var output = combine(1, 0);
    expect(output).to.deep.equal([[]]);
  });
  it("1 n 0", function() {
    var output = combine(1, 0);
    expect(output).to.deep.equal([[]]);
  });
  it("1 n 1", function() {
    var output = combine(1, 1);
    expect(output).to.deep.equal([[1]]);
  });
  it("2 n 0", function() {
    var output = combine(2, 0);
    expect(output).to.deep.equal([[]]);
  });
  it("2 n 1", function() {
    var output = combine(2, 1);
    expect(output).to.deep.equal([[1], [2]]);
  });
  it("2 n 2", function() {
    var output = combine(2, 2);
    expect(output).to.deep.equal([[1, 2]]);
  });
  it("3 n 0", function() {
    var output = combine(3, 0);
    expect(output).to.deep.equal([[]]);
  });
  it("3 n 1", function() {
    var output = combine(3, 1);
    expect(output).to.deep.equal([[1], [2], [3]]);
  });
  it("3 n 2", function() {
    var output = combine(3, 2);
    expect(output).to.deep.equal([[1, 2], [1, 3], [2, 3]]);
  });
  it("3 n 3", function() {
    var output = combine(3, 3);
    expect(output).to.deep.equal([[1, 2, 3]]);
  });

  it("5 n 5", function() {
    var output = combine(5, 5);
    expect(output).to.deep.equal([[1, 2, 3, 4, 5]]);
  });

  it("10 n 10", function() {
    var output = combine(10, 10);
    expect(output).to.deep.equal([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]);
  });

  it("13 n 13", function() {
    var output = combine(13, 13);
    expect(output).to.deep.equal([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]]);
  });

});