const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
const fs = require('fs');

app.get('/',  (req, res) => {
    res.render('index.ejs')
});

app.get('/architecture',  (req, res) => {
    res.render('architecture.ejs')
});

app.get('/indexLogin',  (req, res) => {
    res.render('indexLogin.ejs')
});

app.post('/register', (req, res) => {
    if (fs.readFileSync('data.txt').includes(req.body.name) === false)
        if (req.body.name !== "" && req.body.password !== "")
            fs.appendFile('data.txt', ('username:' + req.body.name + ',password:' + req.body.password + '\n'), (err) => {
                if (err)
                    throw err;
            });
    res.redirect('/');
});

app.post('/login', (req, res) => {
    let arr = fs.readFileSync('data.txt', 'utf-8').split('\n');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(req.body.name) && arr[i].includes(req.body.password))
            res.redirect('/indexLogin');
    }
    res.redirect('/');
});

app.listen(process.env.PORT || 3000);