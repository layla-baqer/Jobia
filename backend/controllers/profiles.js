// We import the Model to communicate with the Database
const Profile = require('../models/Profile')

// async function getAllTweets(req,res) {
//     const allTweets = await Tweet.find()
//     res.json(allTweets)
// }

async function createProfile(req,res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    Profile.create(req.body)
    .then(newProfile => res.json(newProfile))
    .catch(err => res.json(err))
    
    // Method 2
    // let newTweet = await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // Method 1
    // let newTweet = new Tweet(
    //     name: req.body.name
    //     content: req.body.content
    // )
    // await newTweet.save()
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


// async function getTweet(req,res) {
//     try {
//         const tweet = await Tweet.findById(req.params._id)
//         res.json(tweet)
//     } catch (err) {
//         res.json(err)
//     }
// }

// Exporting/Sharing our functions
module.exports = {
    //getAllTweets,
    //getTweet,
    createProfile,
    updateProfile,
    deleteProfile
}




