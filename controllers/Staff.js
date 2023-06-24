const { Staff } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      const Staff = await Staff.findAll()
      return res.json(Staff)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const Staff = await Staff.findByPk(id)
      return res.json(Staff)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const Staff = await Staff.create(body)
      return res.json('created: ', Staff)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
    try {
      const Staff = await Staff.update(body, {
        where: {
          id_Staff: id,
        },
      })
      return res.json('updated: ', Staff)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async delete({ params: { id } }, res) {
    try {
      const Staff = await User.destroy({
        where: {
          id_Staff: id,
        },
      })
      return res.json('deleted: ', Staff)
    } catch (err) {
      console.log('Ошибка')
    }
  },
}
