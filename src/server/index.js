const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')

// instance of app
const app = express()

// cors initiieren
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('dist'))

console.log(__dirname)

// Api ansteuern
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.Api_KEY
console.log(`Deine Api key ist ${process.env.API_KEY}`);
let userInput = [] //let, weil const nicht funktioniert

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Post route
app.post('/api', async function(req, res) {
    userInput = req.body.url;
    console.log(`Deine Eingabe:${userInput} `);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`

    const response = await fetch(apiURL)
    const mCloudData = await response.json()
    console.log(mCloudData)
    res.send(mCloudData)
})

// Gibt an, welchen Port die App auf eingehende Anforderungen überwacht
app.listen(8060, function () {
    console.log('Beispiel auf Port 8060!')
})