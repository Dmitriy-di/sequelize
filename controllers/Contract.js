const { Contract } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      const Contracts = await Contract.findAll()
      return res.json(Contracts)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const Contract = await Contract.findByPk(id)
      return res.json(Contract)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const Contract = await Contract.create(body)
      return res.json('created: ', Contract)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
    try {
      const Contract = await Contract.update(body, {
        where: {
          id_Contract: id,
        },
      })
      return res.json('updated: ', Contract)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async delete({ params: { id } }, res) {
    try {
      const Contract = await User.destroy({
        where: {
          id_Contract: id,
        },
      })
      return res.json('deleted: ', Contract)
    } catch (err) {
      console.log('Ошибка')
    }
  },
}
