/*
	Morgan is a nice logger for Express that has far more features
	The reason morgan is helpful:
		1. they're one way to see what your user is doing. Eg. the app crashes for a user and you dont know why.
		2. useful when developing. You can see when a requests comes into your your server. 
		3. see how long your server takes to respond to do performance analysis.
*/
var express = require("express");
var http = require("http");
var logger = require("morgan");
var app = express();

// the logger("short") function returns a function.App.use will be called with this function as parameter
app.use(logger("short"));

app.use(function(requests, response) {
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.end("Hello, world");
});

app.listen(3000);