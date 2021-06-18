/** This file is the starting point of the student-worker project
*/

// imports
const express = require('express')
require('dotenv').config()
const connectDB = require('./db/mongoose')

const app = express()
const signupRoutes = require('./routes/signupRoutes')
const { PORT } = process.env

connectDB() // creates a connection to the database

// the middleware for this express app. It helps to 
// interprete JSON bodies
app.use(express.json({ extended: true }))

// this is what makes separating the routes
// into different files possible 
app.use(signupRoutes)

// listen and serve the apis :)
app.listen(PORT, () => console.log(`Server started successfully on ${PORT}`))