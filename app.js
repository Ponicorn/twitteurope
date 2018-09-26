require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const twitter = require('./twitter')

app.use(logger('combined'))

// Partie classique
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.use('/public', express.static('public'))

// Partie paye ton serveur
http.listen(process.env.PORT, console.log(`listening on port ${process.env.PORT}`))

let stream = twitter(process.env.FILTER||'europe')
stream.on('data', (data) => io.emit('popit', data))
