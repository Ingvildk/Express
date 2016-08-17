var express = require("express");
var http = require("http");
var app = express();

/*
	What does next() do? 
		-- after all the instructions in the first middleware is finished 
			 the next method is called. The next method calles the next 
			 middleware function in the middleware array.
*/
app.use(function(request, response, next) {
	console.log("In comes a " + request.method + " to " + request.url);
	next();
});

app.use(function(request, response) {
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.end("Hello, world!");
});

http.createServer(app).listen(3000);
/*
//empty middleware that does nothing
function myFunMiddleware(request, response, next) {
	next();
}
*/