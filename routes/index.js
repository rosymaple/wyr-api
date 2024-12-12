const express = require('express')
// imports express library
const router = express.Router()
// must be uppercase r
// .. goes up one level in our file directory
// create our randomWYRQuestion function here that we wrote in ../model/wyr_questions
const randomWYRQuestion = require('../model/wyr_questions')

router.get('/', function (req, res, next) {
    res.send('Placeholder for home page')
    // .send sends text to our server to create text for homepage
})

router.get('/wyr', function (req, res, next) {
    // const wyr = {
    //     // set up a json object
    //     'question': 'Live in a circle house or a triangle house',
    //     'answer1': 'Circle house',
    //     'answer2': 'Triangle house'

    // call our randomWYRQuestion function
    const wyr = randomWYRQuestion()
    // this function can take json objects or arrays and turn them into json data that can be sent to our program
    res.json(wyr)
    })

// this router variable will become indexRouter in server.js
module.exports = router

// lets create more questions for our api server to handle in model/wyr_questions