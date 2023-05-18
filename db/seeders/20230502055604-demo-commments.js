'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
const data = [
  {
  user_id: 1,
  housing_id: 1,
  text: 'fuflo!',
  user_name: 'papa',
  date: new Date().toLocaleDateString()  
  },
  {
    user_id: 2,
    housing_id: 1,
    text: 'mega fuflo!',
    user_name: 'mama',
    date: new Date().toLocaleDateString()   
    },
    {
      user_id: 2,
      housing_id: 1,
      text: 'super mega fuflo!',
      user_name: 'mama',
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
