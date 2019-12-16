var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');

var app = express();

// session settings
var cookieSession = require('cookie-session')

app.use(cookieSession({
    name: 'session',
    secret: 'secret'
}))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);

module.exports = app;

/*var express = require('express');
var app = express();
app.use('/static', express.static('static'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/authorization', function(req, res) {
    res.sendFile(__dirname + '/workers/auth/authorization.html');
});
app.get('/reg', function(req, res) {
    res.sendFile(__dirname + '/workers/reg/reg.html');
});
app.get('/authorized', function(req, res) {
    res.sendFile(__dirname + '/workers/auth/authorized.html');
});
function registration(email, password){
    let data = fs.readFileSync('user.txt', 'utf-8');
    if (data.includes(email) !== true) {
        if (email.trim() !== "" && password.trim() !== "") {
            fs.appendFile('user.txt', (email + " " + password + " "), (err) => {
                if (err) throw err;
            });
            return 1;
        } else return 0;
    }
    else return 0;
}
function authorization(email, password){
    let data = fs.readFileSync('user.txt', 'utf-8');
    let user = data.split(" ");
    for (let i = 0; i < user.length; i++){
        {
            if (user[i] === email)
                return (user[i+1] === password);
        }
    }
}
app.post('/registration', (req, res) => {
    if (registration(req.body.email, req.body.password) === 1)
        res.redirect('/authorization');
    else
        res.redirect('/')
});
app.post('/authorization', (req, res) => {
    if (authorization(req.body.email, req.body.password) === true)
        res.redirect('/authorized');
    else
        res.redirect('/authorization')
});*/