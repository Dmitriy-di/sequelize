const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Wirehouse = sequelize.define(
  'Wirehouse',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    capacity_kg: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
    capacity_kg: {
      type: DataTypes.INTEGER,
    },
    free_space_m2: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'wirehouses',
  },
)

module.exports = Wirehouse
