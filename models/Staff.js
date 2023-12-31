const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Staff = sequelize.define(
  'Staff',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    middle_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'staff',
  },
)

module.exports = Staff
