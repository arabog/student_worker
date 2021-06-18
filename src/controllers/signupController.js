/**
 * this file simply acts as an object that contains all the functions 
 * needed for the signup route
 */

const Job = require("../models/job")

// TODO: serve a html file that documents this API
exports.welcome = (req, res) => res.send('Welcome to the Student Worker API')


// TODO: setup the logic for signing up
exports.signup = (req, res) => {
    res.send('This is the signup route')
    doOneThing() // after
}

// This is a mere reminder to split your functions into 
// smaller bits so that testing will be super easy.
//
// I'm also trying to keep the as minimal as possible, 
// hence the single line.
const doOneThing = () => console.log('doing one thing')
