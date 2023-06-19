const { Sequelize, DataTypes, Op } = require('sequelize')

const sequelize = new Sequelize('test1T', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
)

const Post = sequelize.define(
  'Post',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
)

// User.sync({ force: true }).then(async () => {
//   await User.create({ name: 'Ivan' })
//   await User.create({ name: 'Pavel' })
//   //   const users = await User.findAll()
//   //   users.forEach((user) => console.log(user.id, user.name))

//   //   let pavel = await User.findOne({
//   //     where: {
//   //       id: 2,
//   //     },
//   //   })
//   //   console.log(pavel.id, pavel.name)

//   //   let users = await User.findAll({
//   //     where: {
//   //       [Op.or]: [{ id: 1 }, { name: 'Pavel' }],
//   //     },
//   //   })
//   //   console.log(users)

//   //   let ivan = await User.findOne({
//   //     where: {
//   //       id: 1,
//   //     },
//   //   })
//   //   ivan.name = 'Alex'
//   //   await ivan.save()
//   //   let users = await User.findAll()
//   //   users.forEach((user) => console.log(user.id, user.name))

//   //! Для удаления пользователя мы можем вызвать метод destroy() у самого пользователя.
//   //   let ivan = await User.findOne({
//   //     where: {
//   //       id: 1,
//   //     },
//   //   })
//   //   await ivan.destroy()
//   //   let users = await User.findAll()
//   //   console.log(users)

//   //! Либо удалить пользователя выполнив запрос в бд.
//   //   await User.destroy({
//   // 	  where: {
//   // 			id: 1
//   // 	  }
// })

User.hasMany(Post, {
  foreignKey: {
    name: 'authorId',
    allowNull: false,
  },
})
Post.belongsTo(User, {
  foreignKey: {
    name: 'authorId',
    allowNull: false,
  },
})

sequelize.sync({ force: true }).then(async () => {
  const ivan = await User.create({ name: 'Ivan' })
  await Post.create({ title: 'First post', authorId: ivan.id })
  await Post.create({ title: 'Second post', authorId: ivan.id })
  const pavel = await User.create({ name: 'Pavel' })
  await Post.create({ title: 'Third post', authorId: pavel.id })

  //   let users = await User.findAll()
  //   users.forEach(async (user) => {
  //     let userPosts = await user.getPosts()
  //     console.log(`${user.name} posts`)
  //     userPosts.forEach((post) => console.log(post.id, post.title))
  //   })

  //   let users = await User.findAll({
  //     include: Post,
  //   })
  //   users.forEach(async (user) => {
  //     let userPosts = user.Posts
  //     console.log(`${user.name} posts`)
  //     userPosts.forEach((post) => console.log(post.id, post.title))
  //   })

  let posts = await Post.findAll({
    include: User,
  })
  posts.forEach(async (post) => {
    console.log(`${post.User.name} is the author of the ${post.title}`)
  })
})
// User.drop()
