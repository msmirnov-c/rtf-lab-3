
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    lastName: String,
    firstName: String,
    userName: String,
    password: String
});

User = mongoose.model('User', userSchema)

module.exports = User;