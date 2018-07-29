const Authentication = require('./controllers/authentication'),
    passportService = require('./service/passport'),
    passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function (app) {

    app.get('/', requireAuth, function (req, res) {
        console.log('hola')
        res.send({ hi: 'There' })
    })

    app.post('/signin', Authentication.signin)

    app.post('/signup', Authentication.signup)

}