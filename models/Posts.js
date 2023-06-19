const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Post = sequelize.define(
  'Post',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_post: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'posts',
  },
)

module.exports = Post
