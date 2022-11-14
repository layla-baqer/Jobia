require('dotenv').config()
require('./config/database')
const express = require('express')
const app = express()

 
// Listening on a port
app.listen(4000, () => {
    console.log('App listening on port 4000!')
})











