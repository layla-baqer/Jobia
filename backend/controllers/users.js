const User = require('../models/User')
const Profile = require('../models/Profile')
const { findOne } = require('../models/Profile')

// require bcrypt
const bcrypt = require('bcrypt')
const salt = 10; // 10 is a random string to make the password unpredectable

// require JWT (json web token)
const jwt = require('jsonwebtoken')

async function createUser(req, res) {
    // const newUser = await User.create(req.body)

    try {

        // convert password to encrypted string
        let hashedPassword = bcrypt.hashSync(req.body.password, salt)
        console.log('password:', hashedPassword)

        const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        password: hashedPassword
        })
    
        res.json(newUser)

    } catch (err) {
        res.json(err)
    }
}

const auth_login_post = async (req, res) => {
    // Instead of using req.body.email or req.body.password
    let {email, password} = req.body;
    console.log('email:', email)

    try {
        let user = await User.findOne({email})
        console.log('user:', user)

        // if the user does not exist this we won't continue with password comparison
        if(!user) {
            return res.json({message: 'User not found'}).status(400)
        }

        // password comparison
        const isMatch = await bcrypt.compareSync(password, user.password)
        console.log('password:', password)
        console.log('user.password:', user.password)

        // if the password is incorrect then return a message & exist the function (do not continue)
        if(!isMatch) {
            return res.json({message: 'Password does not match'}).status(400)
            // you can put any status number / 400 means you are not authorised to access
            // For what each code means -> HTTP response status code
        }

        // JWT Token
        const payload = {
            user: {
                id: user._id,
                firstName: user.firstName
                // id is a claim & we can put other claims as well, but we should keep a few ones only because it effects the performance/speed of the webpage
            }
        }

        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: 36000000},
            // expiresIn means how long before the password is asked again
            (err, token) => {
                if(err) throw err
                res.json({token}).status(200)
            }
        )

    } catch (err) {
        console.log(err)
        res.json({message: 'You are not loggedin! Try again later'}).status(400)
    }
}

async function createUserProfile(req, res) {

    try {
        // find the user
        let user = await User.findById(req.params.userId)

        // create the profile
        let newProfile = await Profile.create(req.body)

        // push the new profile Id into the user's profile
        user.profile.push(newProfile._id)

        // save changes
        await user.save()

        // show the data
        // populate the data
        await user.populate('profile')
        res.json(user)
        
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

async function updateUser(req, res) {
    try {
        let updatedUser = await User.findByIdAndUpdate(
            req.params._id,
            req.body
            )
        res.json({message: 'User updated successfully'})
        // res.json(updatedUser)
    } catch (err) {
        res.json(err)
    }
}

async function deleteUser(req, res) {
    try {
        await User.findByIdAndDelete(
            req.params._id,
            res.json({message: 'User deleted successfully'})
        )
    } catch (err) {
        res.json(err)
    }
}

async function getAllUsers(req, res) {
    try {
        const allUsers = await User.find()
        res.json(allUsers)
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    createUser,
    createUserProfile,
    updateUser,
    deleteUser,
    auth_login_post,
    getAllUsers
}