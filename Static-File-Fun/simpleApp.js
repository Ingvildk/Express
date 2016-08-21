var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

/*
	Middleware can be mounted at a given prefix. You can make a middleware respond 
	only if it starts with /offensive
*/
var photoPath = path.resolve(__dirname, "offensive-photos-folder");
app.use("/offensive", express.static(photoPath));

app.use(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Looks like you didn't find a static file");
});

app.listen(3000);