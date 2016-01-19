[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Constructors

## Prerequisites

-   Creating object literals
-   [ga-wdi-boston/js-objects-this](https://github.com/ga-wdi-boston/js-objects-this)

## Objectives

-   Attach properties to a new object using the constructor function

## Constructors

Now that we're using objects to solve problems, it might make sense to have a
way to make multiple objects with the same kind of format - an 'object factory',
designed to construct objects of a particular type.

JavaScript's answer to this problem is _constructor functions_. Below is an
example of a constructor function being defined and used.

```js
var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var someCar = new Car("Ford", "Focus", 2010);
```

Here's another example.

```js
var Person = function(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function(){
    return "Hi there! My name is " + this.name + ", and I am " + age + " years old.";
  };
}

var matt = new Person("Matt", 28);
```

The trick is `new`, a JavaScript keyword. When that last line runs, `new`:

1.  creates a new empty object (`{}`)
1.  attaches a the constructor to the object as a property
1.  invokes the constructor function on the new object
1.  returns the object

This new object we created might be referred to as an 'instance' of Person.

## Lab: Constructors

Create constructor functions for the User and Meal objects for the previous lab.
The constructor for User should take `name`, `age`, and `calorieTarget` as
arguments. The constructor for Meal should take all of its parameters (`title`,
`date`, `description`)

There are tests for this, so feel free to use `grunt test` to check your code's
functionality.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
