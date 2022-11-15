const express = require('express')

// Initializing our application
const app = express()

// dotenv has to be first before the database file runs because it needs the env
require('dotenv').config()
require('./config/database')
const cors = require('cors')
// Mount our middleware
// express.json means that we accept json data from our frontend
// to send json in postman go to body -> raw -> change text to json
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//......
app.use('/', require('./routes/users'))
 app.use('/', require('./routes/profiles'))
 app.use('/', require('./routes/jobs'))
//......

// Listening on port
// we made it 4000 because react is on 3000 so we don't want them to interfere
app.listen(4000, () => {
    console.log('App listening on port 4000 :)')
})