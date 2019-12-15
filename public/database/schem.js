const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchem = new Schema({
mail: String,
username: String,
password: String
});

User = mongoose.model('User', userSchem)

module.exports = User;