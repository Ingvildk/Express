var express = require("express");
var http = require("http");
var app = express();

// Logging middleware
app.use(function(request, response, next) {
	console.log("In comes a " + request.method + " to " + request.url);
	next();
});

// If visiting at the first minute of the hour, 
// calls next() to continue on
app.use(function(request, response, next) {
	var minutes = (new Date()).getMinutes();
		if ((minutes % 2) === 0) {
			next();
		} else {
// if not authorized, sends a 403 status code and respondes		
			response.statusCode = 403;
			response.end("Not authorized");
		}
});
//Sends the secret information
app.use(function(request, response) {
	response.end('Secret info: the password is "swordfish"!');
});

app.listen(3000);
