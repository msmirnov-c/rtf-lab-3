const mongoose = require('mongoose');
var User = require('../public/database/schem');
mongoose.connect('mongodb+srv://yok:55623932@cluster0-02cjq.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
});

function Registration(req, res, next) {
    var user = new User({
    mail: req.body.mail,
    username: req.body.username,
    password: req.body.password
    });
    
    console.log(user);
    User.find({ username: user.username }, function (err, users) {
    if (err) throw err;
    console.log(users);
    if (users.length === 0) {
        user.save(function (err) {
        if (err) throw err;
        res.redirect('/authorization');
    })
    } else {
        res.redirect('/registration');
    }
    });
    }
    
    module.exports = Registration;