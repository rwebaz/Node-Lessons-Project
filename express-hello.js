// Node Express Hello C=> https://frontendmasters.com/courses/web-development/express

var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello Express!');
});

var server = app.listen(8090, function(){
  console.log('Listening on port 8090');
});