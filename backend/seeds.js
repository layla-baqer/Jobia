require('dotenv').config()
require('./config/database')
const Profile = require('./models/Profile')

Profile.insertMany([
    {skills:['Javascript','HTML'],
    education:['Software engineering'],
    intrests:['Coding'],
    experience:['Backend Developer','Frontend developer']
         
    },
    {skills:['AutoCad'],
    education:['Electrical engineering'],
    intrests:['Electrical Designing'],
    experience:['Electrical Engineer']
         
         
    }  
     
])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))





