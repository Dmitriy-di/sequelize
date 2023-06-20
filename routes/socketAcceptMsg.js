var express = require('express')

var router = express.Router()

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('message', function (message) {
      console.log(message)
      setTimeout(() => {
        socket.disconnect()
      }, 1000)
    })
  })

  return router
}
