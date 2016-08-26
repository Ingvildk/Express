var express = require("express");
var User = require("./models/user");

var router = express.Router();
// sets useful variables for your templates
router.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	res.locals.errors = req.flash("error");
	res.locals.infos = req.flash("info");
	next();
});

router.get("/", function(req, res, next) {
//Queries the users collection, returning the newest users first	
	User.find()
	.sort({ createdAt: "descending" })
	.exec(function(err, user) {
		if (err) {return next(err); }
		res.render("index", { users: users });
	});
});

module.exports = router;