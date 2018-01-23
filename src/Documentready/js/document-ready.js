// Appone
/// @title Document Ready = Document Ready
// - A simple program written in Javascript that takes advantage of the Node.js™ Server program.
// Copyright (c) 2000 - 2018 Robert Weber FBO Node Lessons Project
// C=> https://rwebaz.github.io/Node-Lessons-Project/pages/Document-Ready.html

// Note. As of ES7 the Global use of the strict string pragma is recommended
"use strict";
/* Step One: Declare a new variable of type Function ...
    - where `z` is the name, and
    - where the function accepts only one (1) argument */
/* Step Two: Declare a new variable of type String ...
    - where `var1one` is the name, and
    - where the parameter of the only argument of function `y` is the variable `var1one` */
function z(var1one) {
  /* Step Three: Assign a value to the variable `var1one`
      - where the string `string-theory` is the value */ 
  var1one = "string-theory";
  /* Step Four: Return the value of the variable `var1one`
    - where the `return` keyword holds the pointer to the result of the operation of the function */
  return var1one;
}
/* Step Five: Call the function
    - where a new value may be passed through to replace the current value of the String variable `var1one` */
z("number-theory");

/* Comment out old function
hljs.initHighlightingOnLoad();
 $(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  
  console.log();
}); */
