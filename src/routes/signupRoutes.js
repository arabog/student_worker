/**
 * This file contains all the routes for signin up
 */

// making use of Router() from the express package.
// the Router acts like the app variable in index.js
const express = require('express')
const router = express.Router()

// this file holds the corresponding functions to these routes
const signupCtrl = require('../controllers/signupController')

// the landing page of this server.
// TODO: create a html file that explains the routes in this API
router.get('/', signupCtrl.welcome)


// this route registers a new student
router.post('/signup_student', signupCtrl.signupStudent)

// this route registers a new employer
router.post('/signup_employer', signupCtrl.signupEmployer)

// you have to export the router variable for this to work
module.exports = router