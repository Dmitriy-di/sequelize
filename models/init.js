const sequelize = require('../DB')

const Wirehouse = require('./Wirehouse')
const WirehouseOwner = require('./WirehouseOwner')
const Staff = require('./Staff')
const Post = require('./Posts')
const Distributor = require('./Distributor')
const Contract = require('./Contract')

// const Post = require('./Post');

// User.hasMany(Post);
// Post.belongsTo(User);
// Post.hasMany(User);
// User.belongsTo(Post);

// User.belongsToMany(Post, {through: 'UserPost'});
// Post.belongsToMany(User, {through: 'UserPost'});

const init = async () => {
  // await sequelize.sync({alter: true});
  await Wirehouse.sync({ alter: true })
  await WirehouseOwner.sync({ alter: true })
  await Staff.sync({ alter: true })
  await Post.sync({ alter: true })
  await Distributor.sync({ alter: true })
  await Contract.sync({ alter: true })

  //  await Post.sync({alter: true});
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
