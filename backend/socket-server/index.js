const { createServer } = require('wss')
const commands = require('./commands')

const clients = []

const server = createServer(socket => {

  socket.on('open', () => {
    clients.push(socket)
    console.log('socket connected')
    socket.send('Connected!')
  })

  socket.on('message', (data) => {
    clients.forEach(client => {
      client.send(data.toString())
    })
  })

  socket.on('close', () => {
    clients.splice(clients.indexOf(socket), 1)
    console.log('Client disconnected')
  })

})

module.exports = server