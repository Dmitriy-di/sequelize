const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Distributor = sequelize.define(
  'Distributor',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_organisation: {
      type: DataTypes.STRING,
    },
    ogrn: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.ENUM(
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
      ),
    },
  },
  {
    tableName: 'distributors',
  },
)

module.exports = Distributor
