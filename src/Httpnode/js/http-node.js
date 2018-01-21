// Httpnode
/// @title Http Node = Httpnode
// - A simple program written in Javascript that takes advantage of the Node.js™ Server program.
// Copyright (c) 2000 - 2018 Robert Weber FBO Node Lessons Project
// C=> https://rwebaz.github.io/Node-Lessons-Project/pages/Http-Node.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended

// Load the required modules
const http = require('http');
const url = require('url');

// Create the local server w a function for its argument
http.createServer(function (req, res) {
  // The function takes two parameters: reg, res
  // Note. The req parameter is a request from the client
    
  // The res parameter
  // The res parameter is a response from the server
  // The first part of the server response is a HTTP header

  res.writeHead(200, {'Content-Type': 'text/html'});
	// The writeHead() method of the http module takes two arguments
	// Argument One of the server response res holds the status code parameter.
  // The status code parameter 200 is commonly known as the "all is OK" response.
    
	// Argument Two of the server response res holds an object containing the response headers.
  // The object is a key-value pair showing the content type of the message
    
  // The request req has a property called url
  // The http.IncomingMessage object represents a request req from the client
  // The url property holds the part of the url that comes after the domain name: port of the incoming message
  res.write(req.url);

  res.end();
    
  // Listen for incoming traffic, if any, over browser port 8080 C=> http://localhost:8080/
}).listen(8080);
