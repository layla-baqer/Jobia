// We import the Model to communicate with the Database
const Job = require('../models/Job')


 

async function createJob(req,res) {
    console.log('Req Body! ', req.body)
     
    Job.create(req.body)
    .then(newJob => res.json(newJob))
    .catch(err => res.json(err))
    
     
}

async function updateJob(req, res) {
    try {
    // await Job.findOne({ _id: ... })
    let updatedJob = await Job.findByIdAndUpdate(
        req.params._id,
        req.body //form body
        // {content: req.body.content}
    )
        res.status(200).json({message: 'Job updated Successfully!'})
    // res.json(updatedProfile)
    } catch (err) {
        res.json(err)
    }
}


async function deleteJob(req,res) {
    try {
        await Job.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'Job Deleted Successfully'})
    } catch (err) {
        res.json(err)
    }
}


async function getJob(req,res) {
    try {
        console.log(req.params)
        const job = await Job.findById(req.params,{Job})
        //console.log(Job)
        
        
        res.json(job)
    } catch (err) {
        res.json(err)
    }
}

async function getAllJobs(req,res) {
    const allJobs = await Job.find()
    res.json(allJobs)
}





// Exporting/Sharing our functions
module.exports = {
    getJob,
    getAllJobs,
    createJob,
    updateJob,
    deleteJob
}




