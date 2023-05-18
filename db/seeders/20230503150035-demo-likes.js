'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
const data = [
  {
    user_id:1,
    housing_id:1
  },
  {
    user_id:1,
    housing_id:2
  }
];
const likes = data.map(like => ({...like, createdAt: new Date(), updatedAt: new Date()}));
 await queryInterface.bulkInsert('Likes', likes);
  },

  async down (queryInterface, Sequelize) {
  await  queryInterface.bulkDelete('Likes');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
