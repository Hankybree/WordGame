require('dotenv').config()

const server = require('./socket-server')

server.listen(8080, function () {
  const { address, port } = this.address() // this is the http[s].Server
  console.log('listening on http://%s:%d (%s)', /::/.test(address) ? '0.0.0.0' : address, port)
})