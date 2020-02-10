const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    group: String
})

var User = module.exports = mongoose.model('User', UserSchema)

module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports.getUserByUsername = (username, callback) => {
    var query = { username: username};
    User.findOne(query, callback);
}

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.comparePassword = (inputPassword, hash, callback) => {
    bcrypt.compare(inputPassword, hash, (err, isMatch) => {
        if (err) throw err
        callback(null, isMatch)
    });
}