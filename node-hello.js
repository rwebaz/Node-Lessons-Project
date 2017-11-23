// Node Hello C=> https://www.w3schools.com/nodejs/nodejs_get_started.asp

// Load the required modules
var http = require('http');
var dt = require('./node-date');

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
	
	res.write("The date and time at my local server are currently: " + dt.myDateTime() + "\n");
	res.write("Hey! Why-a-no carriage return?" + "\n" + "This should be a New Line ..." + "\n");

	res.end('Hello There! This is my first node program. Robert.');
	// Listen for incoming traffic, if any, over browser port 8080 C=> http://localhost:8080/
}).listen(8080, '127.0.0.1');
console.log('Node Server now running at http://localhost:8080');