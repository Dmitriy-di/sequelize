require('dotenv').config()
const jwt = require('jsonwebtoken')

// const { User, Token, Subject } = require('../model');
const { Distributor } = require('../models/init')
const { WirehouseOwner } = require('../models/init')

module.exports = {
  // usersTable - это либо Distributor, либо Wirehouse_owner
  async login({ body: { email, password, userType } }, res) {
    try {
      if (userType === 'distributor') {
        userModel = Distributor
      } else if (userType === 'wirehouse_owner') {
        userModel = WirehouseOwner
      }

      const foundUser = await userModel.findAll({
        where: {
          email: email,
        },
      })

      if (!foundUser) {
        console.log(4)
        return res.status(403).send({
          message: 'Извините, но логин или пароль не подходят!',
        })
      }

      const isPasswordCorrect = foundUser[0].dataValues.password === password

      if (!isPasswordCorrect) {
        console.log(5)
        return res.status(403).send({
          message: 'Извините, но логин или пароль не подходят!2',
        })
      }

      //Подписываем токен
      const accessToken = jwt.sign(
        {
          userId: foundUser[0].dataValues.id,
          email: foundUser[0].dataValues.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '10m',
        },
      )

      return res.status(200).send({
        accessToken,
        email: foundUser[0].dataValues.email,
        userType: userType,
      })
    } catch (err) {
      return res.status(403).send({
        message: 'Извините, но логин или пароль не подходят!3',
        err,
      })
    }
  },

  async signUp({ body }, res) {
    try {
      if (body.userType === 'distributor') {
        userModel = Distributor
      } else if (body.userType === 'wirehouse_owner') {
        userModel = WirehouseOwner
      } else throw new Error()

      delete body.userType
      console.log(123, userModel)

      const foundUser = await userModel.findAll({
        where: {
          email: body.email,
        },
      })

      if (foundUser.length != 0) {
        return res.status(403).send({
          message: 'Данный email занят',
        })
      }

      const user = await userModel.create(body)

      return res.status(200).send({
        message: 'Пользователь создан',
      })
    } catch (err) {
      return res.status(403).send({
        message: 'Ошибка: пользователь не создан!',
        err,
      })
    }
  },
}
