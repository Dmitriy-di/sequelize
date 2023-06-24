const sequelize = require('../DB')

const Wirehouse = require('./Wirehouse')
const WirehouseOwner = require('./WirehouseOwner')
const Staff = require('./Staff')
const Post = require('./Posts')
const Distributor = require('./Distributor')
const Contract = require('./Contract')
const ChatHistory = require('./chatHistory')
const Room = require('./Rooms')
const Product = require('./Product')

WirehouseOwner.hasMany(ChatHistory)
ChatHistory.belongsTo(WirehouseOwner)

Distributor.hasMany(ChatHistory)
ChatHistory.belongsTo(Distributor)

Room.hasMany(ChatHistory)
ChatHistory.belongsTo(Room)

WirehouseOwner.hasMany(Wirehouse)
Wirehouse.belongsTo(WirehouseOwner)

Wirehouse.hasMany(Product)
Product.belongsTo(Wirehouse)

Wirehouse.hasMany(Staff)
Staff.belongsTo(Wirehouse)

Post.hasOne(Staff)
Staff.belongsTo(Post)

Contract.hasMany(Product)
Product.belongsTo(Contract)

Distributor.hasMany(Contract)
Contract.belongsTo(Distributor)

const init = async () => {
  // await sequelize.sync({alter: true});
  await Wirehouse.sync({ alter: true })
  await WirehouseOwner.sync({ alter: true })
  await Staff.sync({ alter: true })
  await Post.sync({ alter: true })
  await Distributor.sync({ alter: true })
  await Contract.sync({ alter: true })
  await ChatHistory.sync({ alter: true })
  await Room.sync({ alter: true })
  await Product.sync({ alter: true })
}

module.exports = {
  init,
  Wirehouse,
  WirehouseOwner,
  Staff,
  Post,
  Distributor,
  Contract,
  ChatHistory,
  Room,
  Product,
}
