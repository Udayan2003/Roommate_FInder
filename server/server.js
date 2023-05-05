const express = require('express')
const app = express()

const curProfile = require('./data/ProfileData.json').Profile

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/api/profile", (req, res) => {
    res.json(...curProfile)
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).send('Success');
})

app.listen(5000, () => { console.log("Server Started on port 5000")})