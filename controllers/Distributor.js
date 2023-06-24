const { Distributor } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      const Distributors = await Distributor.findAll()
      return res.json(Distributors)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const Distributor = await Distributor.findByPk(id)
      return res.json(Distributor)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const Distributor = await Distributor.create(body)
      return res.json('created: ', Distributor)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
    try {
      const Distributor = await Distributor.update(body, {
        where: {
          id_Distributor: id,
        },
      })
      return res.json('updated: ', Distributor)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async delete({ params: { id } }, res) {
    try {
      const Distributor = await User.destroy({
        where: {
          id_Distributor: id,
        },
      })
      return res.json('deleted: ', Distributor)
    } catch (err) {
      console.log('Ошибка')
    }
  },
}
