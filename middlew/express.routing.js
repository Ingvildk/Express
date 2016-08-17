var express = require("express");
var path = require("path");
var http = require("http");
//app is an express instance
var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

/*
	If the browser sends a GET request one of these three funcions will be called
*/
app.get("/", function(request, response) {
	response.end("Welcome to my homepage!");
});

app.get("/about", function(request, response) {
	response.end("About page");
});

app.get("/weather", function(request, response) {
	response.end("The weather is NICE today!");
});
/*
	The routes can be smarter. Not only match fixed routes, but also 
	they can match complex ones. Regular expression or more complicated parsing
*/
//the hello part of the route is fixed
app.get("/hello/:who", function(request, response) {
	//because the who part is dynamic and send from the browser
	//through the request object. B.c of this the request object
	// has a parameter property called who.
	response.end("Hello, " + request.params.who + ".");
});
/*
	If the browser sends a POST request 
	the app.post function, with the correct url, will be called
*/
/*------------------------------------------------------------*/
/*
	If the browser's send a request with a url which didn't match any of them
	then this function will be called
*/
app.use(function(request, response) {
	response.statusCode = 404;
	response.end("404");
});


http.createServer(app).listen(3000);