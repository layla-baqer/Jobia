const express = require('express')
const router = express.Router()
const ProfilesController = require('../controllers/profiles')
// We import our controller functions above

// Require isLoggedIn Middleware.
//const isLoggedIn = require("../helper/isLoggedIn");

// We define the routes and controllers
//router.get('/tweets', tweetsController.getAllTweets)

//router.get('/tweets/:_id', tweetsController.getTweet)

router.post('/profiles',ProfilesController.createProfile)

 router.put('/profiles/:_id',ProfilesController.updateProfile)

router.delete('/profiles/:_id',ProfilesController.deleteProfile)



// We export our routes 
module.exports = router




