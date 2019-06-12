const User = require('../models/user'),
    jwt = require('jwt-simple'),
    config = require('../config')


//Create a token
function tokenForUser(user) {
    const timestamp = new Date().getTime()
    return jwt.encode({ sub: user._id, iat: timestamp }, config.secret)
}

exports.signin = function (req, res, next) {

    res.send({ token: tokenForUser(req.user) })
}

exports.signup = function (req, res, next) {

    const { email, password } = req.body

    //See if a user with the given email exists
    User.findOne({ email: email }, function (err, existingUser) {
        if (err) next(err)

        if (!email || !password)
            res.status(422).send('You must provide email and password')

        //If a user with email does exist, return an error
        if (existingUser)
            return res.status(422).send({ error: 'User is in use' })

        //If a user with email does NOT exist, create and save user record
        const user = new User({
            email: email,
            password: password
        })

        user.save(function (err, user) {
            if (err) next(err)

            //Respond to request indicatingthe user was created
            res.json({ token: tokenForUser(user) })
        })
    })




}