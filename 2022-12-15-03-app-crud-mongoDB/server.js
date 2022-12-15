const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.listen(3000, function() {
   console.log('listening on 3000')
})

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

app.get('/page1', (req, res) => {
   res.sendFile(__dirname + '/page1.html')
})

app.get('/page2', (req, res) => {
   res.sendFile(__dirname + '/page2.html')
})

app.post('/quotes', (req, res) => {console.log(req.body)})
