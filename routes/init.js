const sequelize = require('.../modelsDB')

const Wirehouse = require('.../modelsmodels/Wirehouse')
const WirehouseOwner = require('../modelsWirehouseOwner')
const Staff = require('../modelsStaff')
const Post = require('../modelsPosts')
const Distributor = require('../modelsDistributor')
const Contract = require('../modelsContract')

const init = async () => {
  // await sequelize.sync({alter: true});
  await Wirehouse.sync({ alter: true })
  await WirehouseOwner.sync({ alter: true })
  await Staff.sync({ alter: true })
  await Post.sync({ alter: true })
  await Distributor.sync({ alter: true })
  await Contract.sync({ alter: true })
}

module.exports = {
  init,
  Wirehouse,
  WirehouseOwner,
  Staff,
  Post,
  Distributor,
  Contract,
}
