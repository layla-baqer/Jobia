const mongoose = require('mongoose')

const Schema = mongoose.Schema
//Creating our Tweet Schema
const ProfileModel = new Schema({
    title:{type:String},
    skills: {type: Array},
    education: {type: Array},
    intrests: {type: Array},
    experience: {type: Array}
}, {
    timestamps: true
})
//Storing our Schema as a model
const Profile = mongoose.model('Profile', ProfileModel)
// Exporting our Model 
module.exports = Profile;


