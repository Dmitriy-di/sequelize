const { Distributor } = require('../models/init')
const { ChatHistory } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      const Distributors = await Distributor.findAll({
        include: ChatHistory,
      })
      return res.json(Distributors)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const DistributorOne = await Distributor.findByPk(id, {
        include: ChatHistory,
      })
      return res.json(DistributorOne)
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
