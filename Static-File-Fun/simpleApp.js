var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

/*
	How to serve static files from multiple directories
*/
var staticPath = path.resolve(__dirname, "static");
var photoPath = path.resolve(__dirname, "offensive-photos-folder");

app.use(express.static(staticPath));
app.use(express.static(photoPath));

app.use(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Looks like you didn't find a static file");
});

app.listen(3000);