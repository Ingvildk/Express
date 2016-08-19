// The file contains all of my small app's code

// Requires the modules we will need
var express = require("express");
var path = require("path");
var fs = require("fs");

// creates an express app and puts it inside the app variable
var app = express();

// THIS IS MY LOGGER. 
// 	all requests are logged in the console
app.use(function(req,res, next) {
	console.log("Request IP: " + req.url);
	console.log("Request date: " + new Date());
	next();
});

// THE STATIC FILE SERVER MIDDLEWARE
// 		1. check if the requested file exists in the static directory		
//		2. if it exists, responde with the file and call it a day. res.sendFile
//		3. if the file doesn't exists, continnue to the next middleware in the section. In code terms this is called next

app.use(function(requests, response, next) {
// uses path.join to find the path where the file should be	
	var filePath = path.join(__dirname, "static", req.url);
	//built-in fs.stat gets info about a file
	fs.stat(filePath, function(err, fileInfo) {
		if(err) {
			next();
			return;
		}
		// if file exists call res.sendFie
		if (fileInfo.isFile()) {
			res.sendFile(filePath);
		} else {
			next();
		}
	});
});

app.listen(3000, function() {
	console.log("App started on port 3000");
});