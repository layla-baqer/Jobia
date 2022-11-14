const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
    //////////////////
    let token = ''
    let authToken = req.header('Authorization')
    console.log(authToken)

    if(!authToken) {
        return res.status(401).json({message: 'You are not allowed to use this! This is a protected route'})
    }

    if(authToken) {
        authToken = authToken.replace('Bearer ', '')
        console.log(authToken)
        token = authToken
    }
    //////////////////

    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded.user
        next()
    } catch (err) {
        return res.status(401).json({message: 'Your token is invalid'})
    }
}