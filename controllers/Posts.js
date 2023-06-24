const { Post } = require('../models/init')

module.exports = {
  async getAll(req, res) {
    try {
      const Posts = await Post.findAll()
      return res.json(Posts)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async get({ params: { id } }, res) {
    try {
      const Post = await Post.findByPk(id)
      return res.json(Post)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async create({ body }, res) {
    try {
      const Post = await Post.create(body)
      return res.json('created: ', Post)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async update({ params: { id }, body }, res) {
    try {
      const Post = await Post.update(body, {
        where: {
          id_Post: id,
        },
      })
      return res.json('updated: ', Post)
    } catch (err) {
      console.log('Ошибка')
    }
  },

  async delete({ params: { id } }, res) {
    try {
      const Post = await User.destroy({
        where: {
          id_Post: id,
        },
      })
      return res.json('deleted: ', Post)
    } catch (err) {
      console.log('Ошибка')
    }
  },
}
