const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('testWirehouses', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize
