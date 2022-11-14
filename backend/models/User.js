const mongoose = require('mongoose')

const Schema = mongoose.Schema

// creating User schema
const UserModel = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    // associate the Profile model (one to many)
    // when we have [] it means it's to many relation (one user to many profiles)
    // tweets: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Tweet'
    //     }
    // ]
}, {
    timestamps: true
})

// storing Tweet schema as a model
const User = mongoose.model('User', UserModel)

module.exports = User