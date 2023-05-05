const express = require('express')
const app = express()
const fs = require("fs")

const curProfile = require('./data/ProfileData.json')
const authCreds = require('./data/LoginCreds.json')
const AllProfiles = require('./data/AllProfiles.json')

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/api/profile", (req, res) => {
    res.json(...curProfile.Profile)
})

app.post("/", (req, res) => {
    res.status(201).send(req.body);
})

app.post("/api/storePass", (req, res) => {
    const cred = { email: req.body.email, password: req.body.password };
    authCreds.Credentials.push(cred);
    res.status(201).send(req.body);
    fs.writeFileSync("./data/LoginCreds.json", JSON.stringify(authCreds))
})

app.post("/api/storeProfiles", (req, res) => {
    const profile = { Name: req.body.Name, RegNo: req.body.RegNo, Email: req.body.Email, SleepSchedule: req.body.SleepSchedule, SocialActivity: req.body.SocialActivity, Cleanliness: req.body.Cleanliness};
    AllProfiles.Profiles.push(profile);
    res.status(201).send(req.body);
    fs.writeFileSync("./data/AllProfiles.json", JSON.stringify(AllProfiles))
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Store the data in a separate JSON file
    const user = {
      email: email,
      password: password
    }
    fs.writeFile('./data.json', JSON.stringify(user), (err) => {
      if (err) throw err;
      console.log('User data has been saved!');
    });

    // Redirect to the Details page
    res.redirect('/details');
});

app.listen(5000, () => { console.log("Server Started on port 5000")});

