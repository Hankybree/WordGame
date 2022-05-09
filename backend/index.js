require('dotenv').config()

const server = require('./socket-server')

console.log('Server listening on ' + server.address().port)