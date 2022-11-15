const mongoose = require('mongoose')

const Schema = mongoose.Schema
//Creating our Tweet Schema
const JobModel = new Schema({
    jobTitle:{type:String},
    companyName:{type:String},
    description:{type:String}
     
}, {
    timestamps: true
})
//Storing our Schema as a model
const Job = mongoose.model('Job', JobModel)
// Exporting our Model 
module.exports = Job;


