const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Wirehouse_owner = sequelize.define(
  'Wirehouse_owner',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_organisation: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Wirehouse_owners',
  },
)

module.exports = Wirehouse_owner
