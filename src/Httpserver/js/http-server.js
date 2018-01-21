// Httpserver
/// @title Http Server = Httpserver
// - A simple program written in Javascript that takes advantage of the Node.js™ Server program.
// Copyright (c) 2000 - 2018 Robert Weber FBO Node Lessons Project
// C=> https://rwebaz.github.io/Node-Lessons-Project/pages/Http-Server.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

var http = require('http');

var mappings = require('./data/mappings');

var server = http.createServer(function (req, res) {
  mappings.get(req.url, function (err, mapping) {
    if (err) {
      res.writeHead(404);
      return res.end();
    }

    res.writeHead(302, { location: mapping });
    res.end();
  });
});

server.listen(3000);
