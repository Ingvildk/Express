var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var SALT_FACTOR = 10;
// adding properties to a Schema
var userSchema = mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true},
	createdAt: { type: Date, default: Date.now },
	displayName: String,
	bio: String
});
// adding methods to the user (-Schema).
userSchema.methods.name = function() {
	return this.displayName || this.username;
};

// 
/*
	Function: Pre-save action to hash the password
						You never have to call any fancy logic to hash the password for the databae. 
						It will happen every time you save the model into Mongo.
*/
// a do-nothing function for use with the bcrypt module
var noop = function() {};
// defines a function that runs before model is saved
userSchema.pre("save", function(done) {
//saves	a reference to the user
	var user = this;
	if (!user.isModified("password")) {
		return done();
	}
// generates a salt for the hash, and calls the inner function once completed	
	bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
		if (err) { return done(err); }
		bcrypt.hash(user.password, salt, noop,
// hashes the user's password			
			function(err, hashedPassword) {
				if(err) { return done(err); }
// stores the password and continues with the savings				
		user.password = hashedPassword;
		done();
	});
});
});

// code to comapre the real password to a password guess
// when the user logs in, you'll need to make sure the password they typed in is correct
userSchema.methods.checkPassword = function(guess, done) {
	bcrypt.compare(guess, this.password, function(err, isMatch) {
		done(err, isMatch);
	});
};

// How you define a user model. and attach that scheme to an actual model
var User = mongoose.model("User", userSchema);

module.exports = User;

