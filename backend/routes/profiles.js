const express = require('express')
const router = express.Router()
const ProfilesController = require('../controllers/profiles')
// We import our controller functions above

// Require isLoggedIn Middleware.
const isLoggedin = require("../helper/isLoggedin");

// We define the routes and controllers
 
router.get('/profiles/:_id',ProfilesController.getProfile)

router.post('/profiles',ProfilesController.createProfile)

 router.put('/profiles/:_id',ProfilesController.updateProfile)

router.delete('/profiles/:_id',ProfilesController.deleteProfile)



// We export our routes 
module.exports = router




