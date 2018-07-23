const express = require('express')
const router = express.Router()
const User = require("../../models/users")
const passport = require("../../passport");


router.post('/login', (req, res) => {
    console.log('req', req);

    const { username, password } = req.body
    
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
            return res.json(err);
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post('/login', (req, res) => {
    console.log('REQ.BODY: ', req.body);

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ notLoggedIn: err })
        }
        if (!user) {
            console.log(info);
            return res.status(403).json({ notLoggedIn: info })
        }
        console.log('logged in', user);

        req.session.save();
        res.json(user);
    })(req, res);
})
    

router.get('/', (req, res, next) => {

    console.log("user", req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router
