var express = require("express");
var app = express();

// Routes GET req to /olivia to the req handler
app.get("/olivia", function(req, res) {
	res.send("Welcome to Olivia's homepage");
});

/*
	Grabbing query arguments
*/
app.get("/search", function(req, res) {
	console.log(req.query.q);
	res.send("search");
});

 	
// Define a route that looks for ranges; that is, if you visit /users/100-500
// you can see a list of users from IDs 100 to 500
app.get(/^\/users\/(\d+)-(\d+)$/, function(req, res) {
	var startId = parseInt(req.params[0], 10);
	var endId = parseInt(req.params[1], 10);
	res.send("/users/" + startId + "-" + endId);
	});

// 	The page can only be rendered if the number after /users is an integer, thanks to regular expression
// 
app.get(/^\/users\/(\d+)$/, function(req, res) {
// accesses parameters by their ordinality	
	var userId = parseInt(req.params[0], 10);
	res.send("/users/" + userId);
});
/*
app.get("/users/:userid", function(req, res) {
	console.log("/users/:userid");

	var userId = parseInt(req.params.userid, 10);
	res.send("/users/" + userId);
});
*/
// if you loads something else than /olivia then you get a 404 error
app.use(function(req, res) {
	res.status(404).send("Page not found");
});

app.listen(3000);
