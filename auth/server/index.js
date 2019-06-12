const express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app = express(),
    router = require('./router'),
    mongoose = require('mongoose'),
    cors = require('cors')

//DB setup
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true })

//App setup
app.use(cors)
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

//Server Setup
const port = process.env.PORT || 3090
server = http.createServer(app)
server.listen(port)
console.log('Server listening on: ', port)
