var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'CAAOgpWyZBioEBAKLWSN1oLlvZCmyjE8oc8EsvWOy7VE9Oz4WtwmSQZBZC8G8VrZB1D0N0Oaie7HglY4Gul1wivkiZCaFtXcYMEcZClAXVPCrK78flITK1RblZBb3J7JSZCeojZCHRXZAhXAXW6TvMNZBKPcQgHMkIx1UE75dwqOuZAWTE7qXWsdIZCRpTRYDRTiOkIyFh06ni2ToHgcAZDZD') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
