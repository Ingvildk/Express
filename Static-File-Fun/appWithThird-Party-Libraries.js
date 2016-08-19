var express = require("express");
var morgan = require("morgan");
var path = require("path");
var fs = require("fs");

//	use the morgan middleware 
//	Morgan is a request logger middleware""
app.use(morgan("short"));
//puts the static path in a variabe
var staticPath = path.join(__dirname, "static");
//uses express.static to serve files from the static path
app.use(express.static(staticPath));

app.use(function(request, respons) {
	respons.status(404);
	respons.send("File not found!");
});

app.listen(3000, function() {
	console.log("App started on port 3000");
});