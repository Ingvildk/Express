var express = require("express");
var path = require("path");
// requires your API roter
var apiRouter = require("./routes/api_router");

var app = express();

var staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));
// uses your API router
app.use("/api", apiRouter);
app.listen(3000);