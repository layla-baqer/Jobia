require('dotenv').config()
require('./config/database')
const Tweet = require('./models/Profile')

Profile.insertMany([
    {
         
    },
    {
         
    },
    {
        name: 'Kareem',
        content: 'If you can hear me put your hand down',
    }
])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))





