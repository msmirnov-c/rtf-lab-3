var express = require('express');
var app = express();
const fs = require('fs');

app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static('static'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/authorization', function(req, res) {
    res.sendFile(__dirname + "/authorization.html");
});

app.get('/registration', function(req, res) {
    res.sendFile(__dirname + "/registration.html");
});

app.get('/authorized', function(req, res) {
  res.sendFile(__dirname + "/authorized.html");
});

function registration(email, password){
    let data = fs.readFileSync('users.txt', 'utf-8');
    if (data.includes(email) !== true) {
      if (email.trim() !== "" && password.trim() !== "") {
        fs.appendFile('users.txt', (email + " " + password), (err) => {
          if (err) throw err;
        });
        return 1;
      } else return 0;
    }
    else return 0;
  }

  function authorization(email, password){
    let datat = fs.readFileSync('users.txt', 'utf-8');
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
  });

app.listen(3000);