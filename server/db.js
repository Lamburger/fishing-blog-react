var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')





var passportLocalMongoose = require('passport-local-mongoose')

const postsSchema = new mongoose.Schema({
    title: String,
    cords: Array,
    url: String,
    review: String,
})

const posts = mongoose.model('posts', postsSchema)

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

userSchema.plugin(passportLocalMongoose)

const User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, callback){

	bcrypt.genSalt(10, function(err, salt) {

	    bcrypt.hash(newUser.password.toString(), salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	const query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){

	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
module.exports = {
    posts: posts,
    User: User
}
