const express = require('express')
const fs = require("fs")
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const authCreds = require('../data/AuthCreds.json')
const AllProfiles = require('../data/AllProfiles.json')
const JWT_KEY = 'dsjfnsjaknfajdf'

const authRouter = express.Router();

authRouter
    .route('/')
    .get(isAuthenticated)

authRouter
    .route('/login')
    .post(postLogin, redirectAccordingly)

authRouter
    .route('/signup')
    .post(postSignUp, storePassword)

function isAuthenticated(req, res) {
    if (req.cookies === undefined) {
        res.redirect(301, 'http://localhost:5173')
    } else {
        jwt.verify(req.cookies.token, JWT_KEY, (err, decoded) => {
            if (err) {
                res.redirect(301, 'http://localhost:5173')
            } else {
                res.status(200).send('Authenticated')
            }
        }
        )
    }
}

function postLogin(req, res, next) {
    const email = req.body.Email;
    const password = req.body.Password;
    const cred = authCreds.Credentials.find(cred => cred.email === email);
    if (cred === undefined) {
        res.status(401).send(`${req.body.Email}`);
    } else if (cred.password !== password) {
        res.status(401).send('Invalid Password');
    }
    else {
        let uid = { email: email };
        let token = jwt.sign({ payload: uid }, JWT_KEY);
        res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24, sameSite: 'none', crossOriginIsolated: true});
        next();
    }
}

function redirectAccordingly(req, res) {
    const profile = AllProfiles.Profiles.find(profile => profile.Email === req.body.Email);
    if (profile === undefined || profile.Cleanliness === null) {
        res.redirect(301, 'http://localhost:5173/details')
    } else {
        res.redirect(301, 'http://localhost:5173/user')
    }
}

function postSignUp(req, res, next) {
    const profile = { Name: req.body.Name, RegNo: req.body.RegNo, Email: req.body.Email, SleepSchedule: req.body.SleepSchedule, SocialActivity: req.body.SocialActivity, Cleanliness: req.body.Cleanliness };
    AllProfiles.Profiles.push(profile);
    res.redirect('http://localhost:5173/details')
    fs.writeFileSync("../data/AllProfiles.json", JSON.stringify(AllProfiles))
    next();
}

function storePassword(req, res) {
    const cred = { email: req.body.Email, password: req.body.Password };
    authCreds.Credentials.push(cred);
    fs.writeFileSync("../data/authCreds.json", JSON.stringify(authCreds))
    res.status(201).send('Success');
}

module.exports = authRouter;
