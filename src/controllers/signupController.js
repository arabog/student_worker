/**
 * this file simply acts as an object that contains all the functions 
 * needed for the signup route
 */

const Job = require("../models/job")

const Employer = require("../models/employer");
const Student = require("../models/student");
const bcrypt = require('bcrypt');


// TODO: serve a html file that documents this API
exports.welcome = (req, res) => res.send('Welcome to the Student Worker API')


// this controller only works for the student database model
exports.studentSignup = (req, res) => {

 // Validate request
  if(!req.body) {
    return res.status(400).json({
        message: "all fields can not be empty"
    });
}

// Register student
const student = new Student({
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    school: req.body.school,
    password: bcrypt.hashSync(req.body.password)
});

// Save student in the database
student.save()
.then(data => {
    res.status(200).json({
        message: 'student successfully registered',
        data: data
    });
 })
 .catch(err => {
    res.status(500).json({
        message: err.message || "Some error occurred while registering user."
    });
});
};
   

// This is a mere reminder to split your functions into 
// smaller bits so that testing will be super easy.

