'use strict';

const chai = require('chai');
const expect = chai.expect;

const runs = require('../lib/runs');

const user = new runs.User('Person McFace', 'wdi@personmcface.com');
user.runs.push(new runs.Run('2015-05-25 15:00', 1200, 600));
user.runs.push(new runs.Run('2015-05-25 15:00', 1400, 800));

describe('user', function () {
  it('has the correct name and e-mail address', function () {
    expect(user.name).to.equal('Person McFace');
    expect(user.email).to.equal('wdi@personmcface.com');
  });
});

describe('runs', function () {

  describe('length', function () {
    it('is correct', function () {
      expect(user.runs.length).to.equal(2);
    });
  });

  xdescribe('total distance', function () {

    it('has the correct length', function () {
      expect(runs.totalDistance()).to.equal(2600);
    });

  });

  xdescribe('longest run', function () {

    it('has the correct length', function () {
      expect(runs.longestRun()).to.equal(1400);
    });

  });

  xdescribe('average speed', function () {

    it('has the correct value', function () {
      expect(runs.averageSpeed().toLocaleString('en-US')).to.equal('1.857');
    });

  });

});
