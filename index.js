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

app.get('/wirehouses', async (req, res) => {
  const wirehouses = await Wirehouse.findAll()
  return res.json(wirehouses)
})

app.post('/wirehouse', async ({ body }, res) => {
  console.log(444, body)
  const wirehouse = await Wirehouse.create(body)
  return res.json('created: ', wirehouse)
})

app.put('/wirehouse', async ({ params: { id }, body }, res) => {
  const wirehouse = await Wirehouse.update(body, {
    where: {
      id_wirehouse: id,
    },
  })
  return res.json('updated: ', wirehouse)
})

app.delete('/wirehouse', async ({ params: { id } }, res) => {
  const wirehouse = await User.destroy({
    where: {
      id_wirehouse: id,
    },
  })
  return res.json('deleted: ', wirehouse)
})
//

app.get('/wirehouseOwners', async (req, res) => {
  const wirehouseOwners = await WirehouseOwner.findAll()
  return res.json(wirehouseOwners)
})

app.post('/wirehouseOwners', async ({ body }, res) => {
  const wirehouseOwners = await WirehouseOwner.create(body)
  return res.json('created: ', wirehouseOwners)
})

app.put('/wirehouseOwners', async ({ params: { id }, body }, res) => {
  const wirehouseOwners = await WirehouseOwner.update(body, {
    where: {
      id: id,
    },
  })
  return res.json('updated: ', wirehouseOwners)
})

app.delete('/wirehouseOwners', async ({ params: { id } }, res) => {
  const wirehouseOwners = await WirehouseOwner.destroy({
    where: {
      id: id,
    },
  })
  return res.json('deleted: ', wirehouseOwners)
})
//

app.get('/staff', async (req, res) => {
  const staff = await Staff.findAll()
  return res.json(staff)
})

app.post('/staff', async ({ body }, res) => {
  const staff = await Staff.create(body)
  return res.json('created: ', staff)
})

app.put('/staff', async ({ params: { id }, body }, res) => {
  const staff = await Staff.update(body, {
    where: {
      id: id,
    },
  })
  return res.json('updated: ', staff)
})

app.delete('/staff', async ({ params: { id } }, res) => {
  const staff = await Staff.destroy({
    where: {
      id: id,
    },
  })
  return res.json('deleted: ', staff)
})
//

app.get('/posts', async (req, res) => {
  const posts = await Post.findAll()
  return res.json(posts)
})

app.post('/posts', async ({ body }, res) => {
  const posts = await Post.create(body)
  return res.json('created: ', posts)
})

app.put('/posts', async ({ params: { id }, body }, res) => {
  const posts = await Post.update(body, {
    where: {
      id: id,
    },
  })
  return res.json('updated: ', posts)
})

app.delete('/posts', async ({ params: { id } }, res) => {
  const posts = await Post.destroy({
    where: {
      id: id,
    },
  })
  return res.json('deleted: ', posts)
})
//

app.get('/distributors', async (req, res) => {
  const distributors = await Distributor.findAll()
  return res.json(distributors)
})

app.post('/distributors', async ({ body }, res) => {
  const distributors = await Distributor.create(body)
  return res.json('created: ', distributors)
})

app.put('/distributors', async ({ params: { id }, body }, res) => {
  const distributors = await Distributor.update(body, {
    where: {
      id: id,
    },
  })
  return res.json('updated: ', distributors)
})

app.delete('/distributors', async ({ params: { id } }, res) => {
  const distributors = await Distributor.destroy({
    where: {
      id: id,
    },
  })
  return res.json('deleted: ', distributors)
})
//

app.get('/contracts', async (req, res) => {
  const contracts = await Contract.findAll()
  return res.json(contracts)
})

app.post('/contracts', async ({ body }, res) => {
  const contracts = await Contract.create(body)
  return res.json('createed: ', contracts)
})

app.put('/contracts', async ({ params: { id }, body }, res) => {
  const contracts = await Contract.update(body, {
    where: {
      id: id,
    },
  })
  return res.json('updated: ', contracts)
})

app.delete('/contracts', async ({ params: { id } }, res) => {
  const contracts = await Contract.destroy({
    where: {
      id: id,
    },
  })
  return res.json('deleted: ', contracts)
})

//

app.listen(3000, async () => {
  await init()
})
