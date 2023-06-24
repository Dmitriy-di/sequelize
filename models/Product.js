const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    size_m2: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'products',
  },
)

module.exports = Product
