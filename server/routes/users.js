var express = require('express')
var router = express.Router()
const mongoose = require('mongoose'),
      User = require('../db.js').User;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//a call for the client to check if {username} is taken or not
router.get('/users/:username', function (req, res) {
    User.findOne({username: req.params.username}, function (err, obj) {
        if (err) return console.error(err)
        if (obj) {
            res.send({errors: {username: "username taken"}})
        } else {
            res.send({ })
        }
    })
})

passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Unknown User'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = router
