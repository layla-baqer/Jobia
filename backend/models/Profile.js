const mongoose = require('mongoose')

const Schema = mongoose.Schema
//Creating our Tweet Schema
const ProfileModel = new Schema({
    skills: {type: String, required: true},
    jobs: {type: String, required: true},
    intrests: {type: String, required: true},
    experience: {type: String, required: true}
}, {
    timestamps: true
})
//Storing our Schema as a model
const Profile = mongoose.model('Profile', ProfileModel)
// Exporting our Model 
module.exports = Profile;


