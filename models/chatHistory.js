const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const ChatHistory = sequelize.define(
  'Contract',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'chatHistory',
  },
)

module.exports = ChatHistory
