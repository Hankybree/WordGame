const { WebSocketServer } = require('ws')
const commands = require('./commands')

const server = new WebSocketServer({ port: 8080 })

server.on('connection', (socket, req) => {

  acceptConnection(socket, req)

  socket.on('message', (data) => {
    console.log(data.toString())
    server.clients.forEach(client => {
      client.send(data.toString())
    })
  })

  socket.on('close', () => {
    console.log('Client disconnected')
  })

})

function acceptConnection(socket, req) {
  console.log(`Client ${req.socket.remoteAddress} has connected`)
}

module.exports = server