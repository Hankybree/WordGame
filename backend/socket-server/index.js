const { createServer } = require('wss')
const commands = require('./commands')

const clients = []

const server = createServer(client => {

  client.on('connect', () => {
    clients.push(client)
    console.log('Client connected')
    client.send('Connected!')
  })

  client.on('message', (data) => {
    clients.send(data.toString())
  })

  client.on('disconnect', () => {
    clients.splice(clients.indexOf(client), 1)
    console.log('Client disconnected')
  })

})

module.exports = server