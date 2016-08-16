var express = require("express");
var app = express();

app.get("/", function(request, response) {
	response.send("Hello, word!");
});

app.listen(3000, function() {
	console.log("Express app starts on port 3000.");
});