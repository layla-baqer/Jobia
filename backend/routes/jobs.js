const express = require('express')
const router = express.Router()
const JobsController = require('../controllers/jobs')
// We import our controller functions above

// Require isLoggedIn Middleware.
const isLoggedin = require("../helper/isLoggedin");

// We define the routes and controllers
 
router.get('/jobs/:_id',JobsController.getJob)
router.get('/jobs',JobsController.getAllJobs)

router.post('/jobs',JobsController.createJob)
router.put('/jobs/:_id',JobsController.updateJob)
router.delete('/jobs/:_id',JobsController.deleteJob)



// We export our routes 
module.exports = router




