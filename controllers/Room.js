const { Room } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      const Rooms = await Room.findAll()
      return res.json(Rooms)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const Room = await Room.findByPk(id)
      return res.json(Room)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const Room = await Room.create(body)
      return res.json('created: ', Room)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
    try {
      const Room = await Room.update(body, {
        where: {
          id_Room: id,
        },
      })
      return res.json('updated: ', Room)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async delete({ params: { id } }, res) {
    try {
      const Room = await User.destroy({
        where: {
          id_Room: id,
        },
      })
      return res.json('deleted: ', Room)
    } catch (err) {
      console.log('Ошибка')
    }
  },
}
