const { WirehouseOwner } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      console.log(123)
      const WirehouseOwners = await WirehouseOwner.findAll()
      return res.json(WirehouseOwners)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const WirehouseOwner = await WirehouseOwner.findByPk(id)
      return res.json(WirehouseOwner)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const WirehouseOwner = await WirehouseOwner.create(body)
      return res.json('created: ', WirehouseOwner)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
    try {
      const WirehouseOwner = await WirehouseOwner.update(body, {
        where: {
          id_WirehouseOwner: id,
        },
      })
      return res.json('updated: ', WirehouseOwner)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async delete({ params: { id } }, res) {
    try {
      const WirehouseOwner = await User.destroy({
        where: {
          id_WirehouseOwner: id,
        },
      })
      return res.json('deleted: ', WirehouseOwner)
    } catch (err) {
      console.log('Ошибка')
    }
  },
}
