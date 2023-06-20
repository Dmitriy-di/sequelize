var express = require('express')

var router = express.Router()

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('message', function (message) {
      socket.emit('message', message)
    })
  })

  return router
}
