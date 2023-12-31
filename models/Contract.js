const sequelize = require('../DB')
const { DataTypes } = require('sequelize')

const Contract = sequelize.define(
  'Contract',
  {
    contract_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    date_contract: {
      type: DataTypes.DATEONLY,
    },
    note: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'contracts',
  },
)

module.exports = Contract
