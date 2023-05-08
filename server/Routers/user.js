const express = require('express')
const fs = require("fs")
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const curProfile = require('../data/ProfileData.json')
const AllProfiles = require('../data/AllProfiles.json')

const userRouter = express.Router();
userRouter
.route('/')
.get((req, res) => {
    res.json(...curProfile.Profile)
})

userRouter
.route('/details')
.get(getRoomateDetails)
.patch(updateProfilePreferences)

function updateProfilePreferences(req, res){
    console.log(req)
    jwt.verify(req.cookies.token, 'dsjfnsjaknfajdf', (err, decoded) => {
        if(err){
            console.log(err)
            res.redirect(301, 'http://localhost:5173/')
        }else{
            const email = decoded.payload.email;
            console.log(email)
            const profile = AllProfiles.Profiles.find(profile => profile.Email === email);
            profile.SleepSchedule = req.body.SleepSchedule;
            profile.SocialActivity = req.body.SocialActivity;
            profile.Cleanliness = req.body.Cleanliness;
            fs.writeFileSync("./data/AllProfiles.json", JSON.stringify(AllProfiles))
            res.redirect(301, 'http://localhost:5173/user')
        }
    })
}

function getRoomateDetails(req, res){
    jwt.verify(req.cookies.token, 'dsjfnsjaknfajdf', (err, decoded) => {
        if(err){
            res.redirect(301, 'http://localhost:5173/')
        }else{
            const email = decoded.payload.email;
            const profile = curProfile.Profile.find(profile => profile.Email === email);
            const socialActivity = profile.SocialActivity;
            const cleanliness = profile.Cleanliness;
            const sleepSchedule = profile.SleepSchedule;
            const roomates = curProfile.Profile.filter(profile => profile.Email !== email);
            const roomateScores = [];
            roomates.forEach(roomate => {
                const sleepScore = Math.abs(roomate.SleepSchedule - sleepSchedule);
                const socialScore = Math.abs(roomate.SocialActivity - socialActivity);
                const cleanScore = Math.abs(roomate.Cleanliness - cleanliness);
                const score = sleepScore + socialScore + cleanScore;
                roomateScores.push({ Name: roomate.Name, RegNo: roomate.RegNo, Email: roomate.Email, Score: score });
            });
            roomateScores.sort((a, b) => a.Score - b.Score);
            res.json(roomateScores.slice(0, 5));
        }})
}


module.exports = userRouter;