const { ChatHistory } = require('../models/init')
const { Room } = require('../models/init')
const { Distributor } = require('../models/init')
const { WirehouseOwner } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      console.log(12312, req.headers.nameroom)
      const nameRoom = req.headers.nameroom
      const ChatHistorys = await ChatHistory.findAll({
        include: [Room, Distributor, WirehouseOwner],
        where: {
          room: nameRoom,
        },
        order: [['createdAt', 'DESC']],
      })
      return res.json(ChatHistorys)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const ChatHistory = await ChatHistory.findByPk(id)
      return res.json(ChatHistory)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const ChatHistory = await ChatHistory.create(body)
      return res.json('created: ', ChatHistory)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
    try {
      const ChatHistory = await ChatHistory.update(body, {
        where: {
          id_ChatHistory: id,
        },
      })
      return res.json('updated: ', ChatHistory)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async delete({ params: { id } }, res) {
    try {
      const ChatHistory = await User.destroy({
        where: {
          id_ChatHistory: id,
        },
      })
      return res.json('deleted: ', ChatHistory)
    } catch (err) {
      console.log('Ошибка')
    }
  },
}
