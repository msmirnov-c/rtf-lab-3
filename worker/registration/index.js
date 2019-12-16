const mongoose = require('mongoose');
var User = require('../../dataBase/model');
mongoose.connect('mongodb+srv://Ulia:123654789@mydata-3ii8g.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

function Registration(req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password
    });

    console.log(user);
    User.find({ userName: user.userName }, function (err, users) {
        if (err) throw err;
        console.log(users);
        if (users.length === 0) {
            user.save(function (err) {
                if (err) throw err;
                console.log("Пользователь зарегистрирован!");
                res.redirect('/authorization');
            })
        } else {
            console.log("Имя пользователя занято!")
            res.redirect('/registration');
        } 
    });
}

module.exports = Registration;