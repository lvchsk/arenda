'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const objs = [
      {
        name: 'papa',
        password: '$2b$10$pafoBu0eAAIO17yLE1wKiePFxX8mkjjdA0c6uJ.X4Rb6aLrg07HYi',
        email: 'aledab@mail.ru'
       
      },
      {
        name: 'mama',
        password: '$2b$10$pafoBu0eAAIO17yLE1wKiePFxX8mkjjdA0c6uJ.X4Rb6aLrg07HYi',
        email: 'mama@mail.ru'
       
      }
    ]
    
    const users = objs.map((user) => ({...user, createdAt: new Date(), updatedAt: new Date()}))
    await  queryInterface.bulkInsert('Users', users)
  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.bulkDelete('Users')
  }
};
