var express = require("express");
var path = require("path");

var app = express();

//	tells express that your views will be in a folder called views
app.set("views", path.resolve(__dirname, "views"));
//	tells express that your are going to use the EJS templating engine
app.set("view engine", "ejs");

//express adds a method to response called render
//it basically looks at the view engine and views directory
//() which you defined eralier and renders index.ejs
//with the varibales you pass in
app.get("/", function(request, response) {
	response.render("index", {
		message: "Hey everyone! This is my website."
	});
});

app.listen(3000);