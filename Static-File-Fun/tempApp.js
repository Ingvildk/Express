var express = require("express");
var path = require("path");

var app = express();

var filePath = path.join(__dirname, "maria.jpg");

app.use(function(req, res, next) {
	res.sendFile(filePath, function(err) {
		if (err) {
// throws app into error mode			
			next (new Error("Error sending file!"));
		}
	});
});	
//middleware that logs all errors. Takes one exta parameter. Error handler
// Important to remember(!) -- no matter where this middleware is placed in your
// stack, it won't be called unless you're in error mode - in code this
// means calling next with an error parameter (new Error(blabla))
app.use(function(err, req, res, next) {
// sets the status code to 500
	res.status(500);
// sends the error text	
	res.send("Internal server error");
// logs the error in the console		
	console.error(err);
//continues to the next error handeling middleware	
	next(err);
});
app.listen(3000, function() {
	console.log("App started on port 3000");
});