[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Constructors

## Prerequisites

-   [ga-wdi-boston/js-objects-this](https://github.com/ga-wdi-boston/js-objects-this)

## Objectives

-   Attach properties to a new object using the constructor function

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install`.

## Similar Objects

Now that we're using objects to solve problems, it might make sense to have a
way to make multiple objects with the same kind of format - an 'object factory',
designed to construct objects of a particular type.

Suppose we had the following object describing my favorite comic book hero:

```js
let batman = {
  name: 'Bruce Wayne',
  alias: 'The Bat-man',

  power: function() {
    return 'Super wealthy and super pissed off';
  }
}
```

Now, I want to have an object describing another hero:

```js
let superman = {
  name: 'Clark Kent',
  alias: 'Superman',

  power: function() {
    return 'Kind of arrogant, but super nice';
  }
}
```

Not only do I hate copying-and-pasting because I'm lazy, but *copy-and-paste is
one of the biggest source of errors* when programming.

## Lab: Model a Hero

What features do `batman` and `superman` share? Remember to think about
attributes and methods when you're modeling. Also take a note of what differs
between them.

Make a diagram of our `Hero` entity.

## Constructors

JavaScript's answer to the copy-and-paste problem is **constructor functions**.
Constructor functions:

-   Always start with a capital letter (convention)
-   Are always used with the `new` keyword (self-enforced)

Bad things happen when you break these rules.

Let's make a Hero constructor function. We'll make use of the function to
reduce duplication in our objects, while allowing the difference to vary by
only defining the differences when we *construct* the new object.

```js
const Hero = function(name, alias) {
  this.name = name;
  this.alias = alias;
};
```

`const` is just like `let`, except `const` will not let you re-assign a value
to the same name.

```js
const foo = 'bar';
const foo = 'baz'; // wrong!
```

What does my choice of `const` tell you about my expectations for constructor
functions?

Look back at the `Hero` constructor. Why don't we define methods inside the
constructor? Because it is a Bad Idea™. JavaScript will totally let you, but
**Don't do it.**

Now, let's make `batman` using the constructor function instead of an object
literal:

```js
let batman = new Hero('Bruce Wayne', 'The Bat-man');
//=> undefined

batman;
// => { name: 'Bruce Wayne', alias: 'The Bat-man' }
```

The trick is `new`, a JavaScript keyword. `new` does the following, in order:

1.  creates a new empty object (`{}`)
1.  attaches the constructor to the object as a property
1.  invokes the constructor function on the new object
1.  returns the object

This new object we created is sometimes called an 'instance' of type `Hero`.

## Lab: Refactor Object Literals Using Constructors

Refactor the run tracker code you made in the [previous
lesson](https://github.com/ga-wdi-boston/js-objects-this) to use constructor
functions instead of copying methods between object literals.

There are no tests for this (yet), but you can still use `grunt nag` to lint
your code and look for syntax errors.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
