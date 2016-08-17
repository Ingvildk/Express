var express = require("express");
var app = require("app");

var EVIL_IP = "123.45.67.89";

app.use(function(request, response, next) {
	if (request.ip === EVIL_IP) {
		response.status(401).send("Not allowed!");
	} else {
		next();
	}
});

app.listen(3000);