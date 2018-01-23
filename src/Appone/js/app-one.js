// Appone
/// @title App One = Appone
// - A simple program written in Javascript that takes advantage of the Node.js™ Server program.
// Copyright (c) 2000 - 2018 Robert Weber FBO Node Lessons Project
// C=> https://rwebaz.github.io/Node-Lessons-Project/pages/App-One.html

// Note. As of ES7 the Global use of the strict string pragma is recommended
"use strict";

/* Function Two: How to construct a Number function that returns a value
    - where the only operation of the underlying function is to assign a value to the Number variable */

/* Step One: Declare a new variable of type Function ...
    - where `y` is the name, and
    - where the function accepts only one (1) argument */

/* Step Two: Declare a new variable of type Number ...
    - where `var2two` is the name, and
    - where the parameter of the only argument of function `y` is the variable `var2two` */

let var2two = new Number();

/* Step Three: Assign a value to the variable `var2two`
    - where the numeral `200` is the value 
var2two = 200; */

function y(var2two) {
  /* Step Four: Return the value of the variable `var2two` to the Javascrpt console
      - where the `return` keyword holds the pointer to the result of the operation of the function */
  return var2two;
}

/* Step Five: Call the function from outside the code block using the recursive method of function `y`
    - where the existing value of the Number variable is passed to the Javascript console 
y(); */

/* Step Six: Call the function from outside the code block using the log method of the Object console
    - where a new value may be passed through to replace the current value of the Number variable 
console.log(y(750)); */

/* Step Seven: Call the function from outside the code block using the recursive method of function `y`
    - where a new value may be passed through to replace the current value of the Number variable */
y(750);
