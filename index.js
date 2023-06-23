const express = require('express')
const {
  init,
  Wirehouse,
  WirehouseOwner,
  Staff,
  Post,
  Distributor,
  Contract,
} = require('./models/init')
const app = express()
const fs = require('fs')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const acceptMessage = require('./routes/socketAcceptMsg')
const sendMessage = require('./routes/socketSendMsg')
const httpServer = createServer(app)

// const httpServer = createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     console.log(1111111)
//     let content = fs.readFileSync('./views/index.html', 'utf-8')
//     res.end(content)
//   }
// })

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080',
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

// Маршруты для http
//!=================wirehouses
app.get('/wirehouses', async (req, res) => {
  try {
    const wirehouses = await Wirehouse.findAll()
    return res.json(wirehouses)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.post('/wirehouse', async ({ body }, res) => {
  try {
    const wirehouse = await Wirehouse.create(body)
    return res.json('created: ', wirehouse)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.put('/wirehouse', async ({ params: { id }, body }, res) => {
  try {
    const wirehouse = await Wirehouse.update(body, {
      where: {
        id_wirehouse: id,
      },
    })
    return res.json('updated: ', wirehouse)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.delete('/wirehouse', async ({ params: { id } }, res) => {
  try {
    const wirehouse = await User.destroy({
      where: {
        id_wirehouse: id,
      },
    })
    return res.json('deleted: ', wirehouse)
  } catch (err) {
    console.log('Ошибка')
  }
})

//!=================wirehouseOwners
app.get('/wirehouseOwners', async (req, res) => {
  try {
    const wirehouseOwners = await WirehouseOwner.findAll()
    return res.json(wirehouseOwners)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.post('/wirehouseOwners', async ({ body }, res) => {
  try {
    const wirehouseOwners = await WirehouseOwner.create(body)
    return res.json('Собственник склада записан в бд')
  } catch (err) {
    res.status(400).send('Ошибка создания')
  }
})

app.put('/wirehouseOwners', async ({ params: { id }, body }, res) => {
  try {
    const wirehouseOwners = await WirehouseOwner.update(body, {
      where: {
        id: id,
      },
    })
    return res.json('updated: ', wirehouseOwners)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.delete('/wirehouseOwners', async ({ params: { id } }, res) => {
  try {
    const wirehouseOwners = await WirehouseOwner.destroy({
      where: {
        id: id,
      },
    })
    return res.json('deleted: ', wirehouseOwners)
  } catch (err) {
    console.log('Ошибка')
  }
})

//!=================staff
app.get('/staff', async (req, res) => {
  try {
    const staff = await Staff.findAll()
    return res.json(staff)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.post('/staff', async ({ body }, res) => {
  try {
    const staff = await Staff.create(body)
    return res.json('created: ', staff)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.put('/staff', async ({ params: { id }, body }, res) => {
  try {
    const staff = await Staff.update(body, {
      where: {
        id: id,
      },
    })
    return res.json('updated: ', staff)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.delete('/staff', async ({ params: { id } }, res) => {
  try {
    const staff = await Staff.destroy({
      where: {
        id: id,
      },
    })
    return res.json('deleted: ', staff)
  } catch (err) {
    console.log('Ошибка')
  }
})

//!=================posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll()
    return res.json(posts)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.post('/posts', async ({ body }, res) => {
  try {
    const posts = await Post.create(body)
    return res.json('created: ', posts)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.put('/posts', async ({ params: { id }, body }, res) => {
  try {
    const posts = await Post.update(body, {
      where: {
        id: id,
      },
    })
    return res.json('updated: ', posts)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.delete('/posts', async ({ params: { id } }, res) => {
  try {
    const posts = await Post.destroy({
      where: {
        id: id,
      },
    })
    return res.json('deleted: ', posts)
  } catch (err) {
    console.log('Ошибка')
  }
})

//!=================distributors
app.get('/distributors', async (req, res) => {
  try {
    const distributors = await Distributor.findAll()
    return res.json(distributors)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.post('/distributors', async ({ body }, res) => {
  try {
    const distributors = await Distributor.create(body)
    return res.json('created: ', distributors)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.put('/distributors', async ({ params: { id }, body }, res) => {
  try {
    const distributors = await Distributor.update(body, {
      where: {
        id: id,
      },
    })
    return res.json('updated: ', distributors)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.delete('/distributors', async ({ params: { id } }, res) => {
  try {
  } catch (err) {
    const distributors = await Distributor.destroy({
      where: {
        id: id,
      },
    })
    return res.json('deleted: ', distributors)
    console.log('Ошибка')
  }
})

//!=================contracts
app.get('/contracts', async (req, res) => {
  try {
    const contracts = await Contract.findAll()
    return res.json(contracts)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.post('/contracts', async ({ body }, res) => {
  try {
    const contracts = await Contract.create(body)
    return res.json('createed: ', contracts)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.put('/contracts', async ({ params: { id }, body }, res) => {
  try {
    const contracts = await Contract.update(body, {
      where: {
        id: id,
      },
    })
    return res.json('updated: ', contracts)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.delete('/contracts', async ({ params: { id } }, res) => {
  try {
    const contracts = await Contract.destroy({
      where: {
        id: id,
      },
    })
    return res.json('deleted: ', contracts)
  } catch (err) {
    console.log('Ошибка')
  }
})

app.listen(3000, async () => {
  console.log('Server is runing...')
  // await init()
})

httpServer.listen(3001)
