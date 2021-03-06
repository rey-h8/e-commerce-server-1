'use strict'

const { User } = require('../models')

let users = [
  {
    email: 'admin@mail.com',
    password: '1234',
    role: 'admin',
  },
  {
    email: 'a@a.com',
    password: '123',
  },
  {
    email: 'b@b.com',
    password: '123',
  },
]

users.forEach((user) => {
  user.createdAt = new Date()
  user.updatedAt = new Date()
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const user = await User.bulkCreate(users)
      console.log('user:', user)
    } catch (error) {
      console.log(error)
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
