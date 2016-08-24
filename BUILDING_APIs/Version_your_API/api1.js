var express = require("express");
// create a new router a mini-app
var api = express.Router();

api.get("/timezone", function(req, res) {
	res.send("Sample response for /timezone");
});

api.get("/all_timezones", function(req, res) {
	res.send("Sample response for /all_timezones");
});
//export the router (CommonJS) so that other files can use it
module.exports = api;