const { WirehouseOwner } = require('../models/init')
const { ChatHistory } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      const WirehouseOwners = await WirehouseOwner.findAll({
        include: ChatHistory,
      })
      return res.json(WirehouseOwners)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const WirehouseOwnerOne = await WirehouseOwner.findByPk(id, {
        include: ChatHistory,
      })
      return res.json(WirehouseOwnerOne)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const WirehouseOwnerOne = await WirehouseOwner.create(body)
      return res.json('created: ', WirehouseOwnerOne)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
    try {
      const WirehouseOwnerOne = await WirehouseOwner.update(body, {
        where: {
          id_WirehouseOwner: id,
        },
      })
      return res.json('updated: ', WirehouseOwnerOne)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async delete({ params: { id } }, res) {
    try {
      const WirehouseOwnerOne = await WirehouseOwner.destroy({
        where: {
          id_WirehouseOwner: id,
        },
      })
      return res.json('deleted: ', WirehouseOwnerOne)
    } catch (err) {
      console.log('Ошибка')
    }
  },
}
