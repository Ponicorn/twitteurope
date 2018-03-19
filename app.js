require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const twitter = require('./twitter')

// Partie classique
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.use('/public', express.static('public'))

// Partie paye ton serveur
http.listen(process.env.PORT, console.log(`listening on port ${process.env.PORT}`))


// Partie balance la sauche
// TODO: Replacer l'api twitter, 
//       Fermer le stream quand personne n'est connecter
twitter(process.env.FILTER||'europe', (data) => io.emit('popit', data.text))
