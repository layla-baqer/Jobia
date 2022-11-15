const mongoose = require('mongoose')

const Schema = mongoose.Schema

// creating User schema
const UserModel = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    title: {type: String},
    education: {type: String},
    skills: {type: String},
    // associate the Profile model
    profile: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }]
}, {
    timestamps: true
})

// storing User schema as a model
const User = mongoose.model('User', UserModel)

module.exports = User