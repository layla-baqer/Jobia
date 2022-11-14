// import controller functions
const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

// define routes & controllers
router.post('/users', usersController.createUser)
// router.post('/users/:userId/tweets', usersController.createUserTweet)
router.put('/users/:_id', usersController.updateUser)
router.delete('/users/:_id', usersController.deleteUser)
router.post('/auth/login', usersController.auth_login_post)

// export our routes
module.exports = router