// Readfile
/// @title Read File = Readfile
// - A simple program written in Javascript that takes advantage of the Node.js™ Server program.
// Copyright (c) 2000 - 2018 Robert Weber FBO Node Lessons Project
// C=> https://rwebaz.github.io/Node-Lessons-Project/pages/Read-File.html

"use strict";
// As of ES7 the Global use of the strict string pragma is recommended


// The variable 'fs' requires the Node File System ("fs") Module to perform the built-in 'readFile' function
// 'readFile' then reads the given file in UTF-8 after testing the content of the file to be either text or bytes
// If the file is indeed binary, an error is thrown
// Finally, to wrap up the subject function ( the 3rd argument ) the console will log the content of the text file
var fs = require("fs");
fs.readFile("../txt/start-jekyll-server.txt", "utf-8", function(error, text){
    if (error)
        throw error;
    console.log("The file contained:", text);
});
