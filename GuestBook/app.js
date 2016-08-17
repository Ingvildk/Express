var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();
//tells express the views are in the views folder
app.set("views", path.resolve(__dirname, "views"));
// views will use the ESJ engine
app.set("view-engine", "ejs");

//Creates global array to store all your entries
var entries = [];
//makes this entries array avaiable in all views
app.locals.entries = entries;
//use morgan to log every request
app.use(logger("dev"));
//populates a variable called req.body if the user is subitting a form
//The extended option is required
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(request, response) {
	response.render("index");
});

app.get("new-entry", function(request, response) {
	response.render("new-entry");
});

app.post("/new-entry", function(request, response) {
	if(!request.body.title || !request.body.body) {
		response.status(400).send("Entries must have a title and a body.");
		return;
	}
	entries.push({
		title:request.body.title,
		contenet: request.body.body,
		publiched: new Data()
	});
	response.redirect("/");
});

app.use(function(request, response) {
	response.status(404).render("404");
});

app.listen(3000, function() {
	console.log("Guestbook app started on port 3000.");
});