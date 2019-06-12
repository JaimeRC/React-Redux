const passport = require('passport'),
    User = require('../models/user'),
    config = require('../config'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    LocalStrategy = require('passport-local')


//Create a Local Strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {


    User.findOne({ email: email }, function (err, user) {
        if (err) return done(err)

        if (!user) return done(null, false)

        user.comparePassword(password, function (err, isMatch) {
            if (err) return done(err, false)

            if (!isMatch) return done(null, false)

            return done(null, true)
        })
    })
})

//Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {

    User.findById(payload._id, function (err, user) {
        if (err) return done(err, false)

        if (user) {
            done(null, true)
        } else {
            done(null, false)
        }
    })
})

//Tell passport to use Strategy
passport.use(jwtLogin)
passport.use(localLogin)