// const User = require('../models/users')
// const LocalStrategy = require('passport-local').Strategy

// const LocalStrategy = new LocalStrategy(
// 	{
// 		usernameField: 'username', 
// 		passwordField: 'password'
// 	},
// 	function (username, password, done) {
// 		User.findOne({ username: username }, function(err, user) {
// 			if (err) throw err;
// 			user.comparePassword(password, function(err, isMatch) {
// 				if (err) throw err;
// 				return done(null, user)
// 			});
	
// 		})

// 	}
	

// );

// module.exports = LocalStrategy;