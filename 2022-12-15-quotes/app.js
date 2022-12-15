const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// tell Express to make this public folder accessible to the public
app.use(express.static('public'))

// The urlencoded method within body-parser tells body-parser to extract data 
// from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({ extended: true }))

// allow server to read JSON
app.use(bodyParser.json())

// variable de toutes les quotes
const quotes = require('./quotes.json')

// route pour acceder a tous les quotes
app.get('/quotes', (req, res) => {
    res.json(quotes);
})

// route pour acceder a un quote aleatoire
app.get('/quotes/random', (req, res) => {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomQuote])    
})

// route pour acceder un quote par id
app.get("/quotes/:id", (req, res) => {
    res.json(quotes[req.params.id - 1]);   
})


app.listen(3000, function() {
    console.log('listening on 3000');
})
