const Twitter = require('twitter')

// balance ton client
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

// balance ta fonction
// module.exports = (track, callback) => {
//   return client.stream('statuses/filter', { track: `#${track}` }, (stream) => {
//     stream.on('error', (error) => { throw error })
//     stream.on('data', callback)
//   })
// }

module.exports = (track) => {
  return client.stream('statuses/filter', { track: `#${track}` })
}
