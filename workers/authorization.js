const mongoose = require('mongoose');
var User = require('../public/database/schem');
mongoose.connect('mongodb+srv://yok:55623932@cluster0-02cjq.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
});

function Authorization(req,res,next) {
    User.find({ userName: req.body.username, password: req.body.password }, function (err, users) {
        if (err) throw err;
        console.log(users);
        if (users.length === 0) {
        res.redirect('/authorization');
        } else {
        res.redirect('/');
        }
    });
}
        
module.exports = Authorization;