const express = require('express')
require('dotenv').config()
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString  = process.env.connectionString;
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


MongoClient.connect(connectionString)
   .then(client => {
      console.log('Connected to Database')
      const db = client.db('star-wars-quotes')
      const quotesCollection = db.collection('quotes')
   })
   .catch(console.error)

app.post('/quotes', (req, res) => {
   quotesCollection.insertOne(req.body)
      .then(result => {
         console.log(result)
      })
      .catch(error => console.error(error))
})




