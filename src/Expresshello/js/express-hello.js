// Expresshello
/// @title Express Hello = Expresshello
// - A simple program written in Javascript that takes advantage of the Node.js™ Server program.
// Copyright (c) 2000 - 2018 Robert Weber FBO Node Lessons Project
// C=> https://rwebaz.github.io/Node-Lessons-Project/pages/Express-Hello.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

const express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello Express!');
});

var server = app.listen(8090, function(){
  console.log('Listening on port 8090');
});
