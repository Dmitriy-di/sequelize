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
//!
const Wirehouse = require('./models/Wirehouse')
const WirehouseOwner = require('./models/WirehouseOwner')
const Staff = require('./models/Staff')
const Post = require('./models/Posts')
const Distributor = require('./models/Distributor')
const Contract = require('./models/Contract')
const ChatHistory = require('./models/chatHistory')
const Room = require('./models/Rooms')
const Product = require('./models/Product')
//! //
const io = new Server(httpServer, {
  cors: {
    origin: ['https://admin.socket.io', 'http://localhost:8080'],
    credentials: true,
  },
})

io.on('connection', (socket) => {
  // messages.forEach((message) => {
  //   socket.emit('message', message)
  // })
  // socket.join('room1')
  // socket.join('room2')
  // socket.join('room3')
  // socket.join('room4')
  const socketId = socket.id

  socket.on('createChat', async (nameNewChat) => {
    try {
      const room = await Room.create({ name: nameNewChat })
      // const rooms = await Room.findAll({
      //   include: ChatHistory,
      // })
      socket.emit('setNewRoom', room)
      socket.broadcast.emit('setNewRoom', room)
    } catch (err) {
      console.log(err)
    }
  })

  socket.on('postMsgOnServer', async (msg) => {
    if (msg.userRole === 'Distributor') {
      await ChatHistory.create({
        message: msg.message,
        RoomId: msg.roomId,
        DistributorId: msg.userId,
      })
    } else {
      await ChatHistory.create({
        message: msg.message,
        RoomId: msg.roomId,
        WirehouseOwnerId: msg.userId,
      })
    }

    const newMessage = await ChatHistory.findAll({
      order: [['createdAt', 'DESC']],
      limit: 1,
      include: [Distributor, Room, WirehouseOwner],
    })

    socket.emit('message', newMessage[0])
    socket.broadcast.emit('message', newMessage[0])
    // io.to('room' + msg.roomId).emit('message', {
    //   socketId,
    //   message: msg.message,
    //   roomId: msg.roomId,
    // })
  })

  socket.on('joinRoom', async (roomInfo) => {
    socket.join(roomInfo.roomName)
    const chatHistory = await ChatHistory.findAll({
      where: {
        RoomId: roomInfo.roomId,
      },
      include: [Distributor, Room, WirehouseOwner],
    })
    socket.emit('chatHistories', chatHistory)
  })
})

app.use(express.json())
app.use(cors())

routes.forEach((item) => {
  app.use(`/${item}`, require(`./routes/${item}`))
})

createServer({}, app).listen(3000, async () => {
  console.log('Server is runing...')
  await init()
})

instrument(io, {
  auth: false,
  mode: 'development',
})

httpServer.listen(3001)
