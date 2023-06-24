const { Product } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      const Products = await Product.findAll()
      return res.json(Products)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const Product = await Product.findByPk(id)
      return res.json(Product)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const Product = await Product.create(body)
      return res.json('created: ', Product)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
    try {
      const Product = await Product.update(body, {
        where: {
          id_Product: id,
        },
      })
      return res.json('updated: ', Product)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async delete({ params: { id } }, res) {
    try {
      const Product = await User.destroy({
        where: {
          id_Product: id,
        },
      })
      return res.json('deleted: ', Product)
    } catch (err) {
      console.log('Ошибка')
    }
  },
}
