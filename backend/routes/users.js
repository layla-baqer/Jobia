// import controller functions
const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

// define routes & controllers
router.post('/users', usersController.createUser)
router.post('/users/:userId/profile', usersController.createUserProfile)
router.put('/users/:_id', usersController.updateUser)
router.delete('/users/:_id', usersController.deleteUser)
router.post('/auth/login', usersController.auth_login_post)
router.get('/users', usersController.getAllUsers)

// export our routes
module.exports = router