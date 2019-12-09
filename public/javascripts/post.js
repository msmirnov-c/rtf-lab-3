const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/register', urlencodedParser, function(request, response) {
  response.sendFile(__dirname + '/register.html')
})
app.post('/register', urlencodedParser, function(request, response) {
  if (!request.body) return response.sendStatus(400)
  console.log(request.body)
  response.send(`${request.body.userName} - ${request.body.userAge}`)
})
