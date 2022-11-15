// We import the Model to communicate with the Database
const Profile = require('../models/Profile')

 

async function createProfile(req,res) {
    console.log('Req Body! ', req.body)
     
    Profile.create(req.body)
    .then(newProfile => res.json(newProfile))
    .catch(err => res.json(err))
    
     
}

async function updateProfile(req, res) {
    try {
    // await Profile.findOne({ _id: ... })
    let updatedProfile = await Profile.findByIdAndUpdate(
        req.params._id,
        req.body //form body
        // {content: req.body.content}
    )
        res.status(200).json({message: 'Profile updated Successfully!'})
    // res.json(updatedProfile)
    } catch (err) {
        res.json(err)
    }
}


async function deleteProfile(req,res) {
    try {
        await Profile.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'Profile Deleted Successfully'})
    } catch (err) {
        res.json(err)
    }
}


// async function getProfile(req,res) {
//     try {
//         const Profile = await Profile.findById(req.params._id)
//         res.json(Profile)
//     } catch (err) {
//         res.json(err)
//     }
// }




//function to return a profile by it's id
async function getProfile(req,res) {
    try {
        const profile = await Profile.findById(req.params._id)
        res.json(profile)
    } catch (err) {
        res.json(err)
    }
}
// Exporting/Sharing our functions
module.exports = {
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
}




