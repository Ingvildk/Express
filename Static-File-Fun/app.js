// The file contains all of my small app's code

// Requires the modules we will need
var express = require("express");
var morgan = require("morgan");
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

app.use(function(request, response, next) {
// filePath is a variable containing the static files
	var filePath = path.join(__dirname, "static", request.url);
// fs.stat -- gets infor about the static files
	fs.stat(filePath, function(err, fileInfo) {
		if(err) {
			next();
			return;
		}
// if file exists call res.sendFile
		if (fileInfo.isFile()) {
			response.sendFile(filePath);
		} else {
// if the file do not exist call the next() function			
			next();
		}
	});
});

app.use(function(request, response) {
	response.status(404);
	response.send("File not found!");
});

app.listen(3000, function() {
	console.log("App started on port 3000");
});