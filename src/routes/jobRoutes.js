const express = require('express')
const router = express.Router()

const JobCtrl = require('../controllers/jobController')

router.post('/jobs', JobCtrl.createNewJob)

module.exports = router