const { Wirehouse } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      const wirehouses = await Wirehouse.findAll()
      return res.json(wirehouses)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const wirehouse = await Wirehouse.findByPk(id)
      return res.json(wirehouse)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const wirehouse = await Wirehouse.create(body)
      return res.json('created: ', wirehouse)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
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
  },

  async delete({ params: { id } }, res) {
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
  },
}
