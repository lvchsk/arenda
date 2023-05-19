'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
const data = [
  {
  user_id: 1,
  housing_id: 1,
  text: 'AAAAA!',
  user_name: 'Отец Анатолий',
  date: new Date().toLocaleDateString()  
  },
  {
    user_id: 2,
    housing_id: 1,
    text: 'OOOO!',
    user_name: 'Матушка Анна',
    date: new Date().toLocaleDateString()   
    },
    {
      user_id: 2,
      housing_id: 1,
      text: 'ХА-ХА-ХА',
      user_name: 'Матушка Анна',
      date: new Date().toLocaleDateString()   
      },
];
const comments = data.map(comment => ({...comment, createdAt: new Date(), updatedAt: new Date()}));
queryInterface.bulkInsert('Comments', comments);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Comments');
  }
};
