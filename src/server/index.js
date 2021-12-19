var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')


const dotenv = require('dotenv');
dotenv.config();

//new
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${apiKey}`);




const app = express()

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})





app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Post Method
app.post('/api', async (req, res) => {
    userInput = req.body.url;
    const mcURL = `${baseURL}${apiKey}&url=${userInput}&lang=en`
    const response = await fetch(mcURL);
    console.log('server response: ', response);
    const mcResults = await response.json()
    // console.log(mcResults)   
    console.log('server side: ', mcResults);
    try {
        res.send(mcResults);
    }
    catch (error) {
        console.log(`an error occured: ${error}`)
    }
})

