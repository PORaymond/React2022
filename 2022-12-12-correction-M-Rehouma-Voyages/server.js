const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const voyages = require('./flight_2015new');

var resultat = "<h1>404 not fund!</h1>"

app.listen(3000, function () {
    console.log('listening on 3000')
})


app.get('/', (req, res) => {
    res.send('/index.html')
})

app.get('/voyages', (req, res) => {
    resultat = voyages
    res.send(resultat)
})


app.get('/voyages/random', (req, res) => {
    let id = Math.floor(Math.random() * voyages.length)
    console.log(id);
    resultat = voyages[id]
    res.send(resultat)
    resultat = "<h1>404 not fund!</h1>"
})

app.get('/voyages/:id', (req, res) => {
    if (req.params.id < voyages.length) {
        resultat = voyages[req.params.id]
    }
    res.send(resultat)
    resultat = "<h1>404 not fund!</h1>"
})

app.get('/voyages/o/:pays', (req, res) => {
    resultat = getListO(req.params.pays)
    res.send(resultat)
    resultat = "<h1>404 not fund!</h1>"
})

app.get('/voyages/d/:pays', (req, res) => {
    resultat = getListD(req.params.pays)
    res.send(resultat)
    resultat = "<h1>404 not fund!</h1>"
})


const getListO = (paysO) => {
    let listO = []
    for (let i = 0; i < voyages.length; i++) {
        if (voyages[i].ORIGIN_COUNTRY_NAME === paysO) {
            listO.push(voyages[i])
        }
    }
    return listO
}

const getListD = (paysD) => {
    let listD = []
    for (let i = 0; i < voyages.length; i++) {
        if (voyages[i].DEST_COUNTRY_NAME === paysD) {
            listD.push(voyages[i])
        }
    }
    return listD
}

