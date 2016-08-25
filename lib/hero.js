'use strict';

// in this example, we use constructor functions to define methods
// BUT LITERALLY NEVER DO THIS. WE ARE ONLY DOING THIS FOR THIS example

const Hero = function Hero(name, alias, power) {

  // this.name is a property, name (on the left) is a parameter
  // we call them the same as convention, to make code easier to read

  this.name = name;
  this.alias = alias;
  this._power = power;

  //THIS IS THE BAD THING
  this.usePower = function () {
    // this is an example of a getter function
    return this._power;
  };
};

// let batman = new Hero('Bruce Wayne',
//                       'The Bat-man',
//                       'Spend money and hit people');

module.exports = Hero;
