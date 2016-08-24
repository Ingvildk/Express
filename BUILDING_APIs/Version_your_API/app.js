var express = require("express");
// requires the two example routers created in api1.js and api2.js
var apiVersion1 = require("./api1.js");
var apiVersion2 = require("./api2.js");

var app = express();
// uses the example routers from api.js and 2.. /v1/timezone or /v1/all_timezones..
app.use("/v1", apiVersion1);
app.use("/V2", apiVersion2);

app.listen(3000, function() {
	console.log("App strated on port 3000");
});