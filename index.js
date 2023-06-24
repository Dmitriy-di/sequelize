const express = require('express')
const { init } = require('./models/init')
const app = express()
const fs = require('fs')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const acceptMessage = require('./routes/socketAcceptMsg')
const sendMessage = require('./routes/socketSendMsg')
const httpServer = createServer(app)
const { instrument } = require('@socket.io/admin-ui') // Подключим панель управления

const { routes } = require('./routes/index')

// const httpServer = createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     console.log(1111111)
//     let content = fs.readFileSync('./views/index.html', 'utf-8')
//     res.end(content)
//   }
// })

const io = new Server(httpServer, {
  cors: {
    origin: ['https://admin.socket.io', 'http://localhost:8080'],
    credentials: true,
  },
})

// const messages = ['Hello world!', 'New Message']

io.on('connection', (socket) => {
  // messages.forEach((message) => {
  //   socket.emit('message', message)
  // })
  socket.join('room1')
  socket.join('room2')
  socket.join('room3')
  socket.join('room4')
  const socketId = socket.id

  socket.on('postMsgOnServer', (msg) => {
    console.log(msg, socketId)

    io.to('room' + msg.roomId).emit('message', {
      socketId,
      message: msg.message,
      roomId: msg.roomId,
    })
  })
})

// acceptMessage(io)
// sendMessage(io)

app.use(express.json())
app.use(cors())

routes.forEach((item) => {
  app.use(`/${item}`, require(`./routes/${item}`))
})

// app.listen(3000, async () => {
//   console.log('Server is runing...')
//   await init()
// })

createServer({}, app).listen(3000, async () => {
  console.log('Server is runing...')
  await init()
})

instrument(io, {
  auth: false,
  mode: 'development',
})

httpServer.listen(3001)
