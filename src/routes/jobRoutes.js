const express = require('express')
const router = express.Router()

const JobCtrl = require('../controllers/jobController')

router.post('/jobs', JobCtrl.createNewJob)

router.get('/jobs', JobCtrl.fetchJobs)

module.exports = router