'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 const data = [
  {
    user_id: 1,
    housing_id: 3
  },
  {
    user_id: 1,
    housing_id: 4
  },
 ];
 const favorites = data.map(favorite => ({...favorite, createdAt: new Date(), updatedAt: new Date()}));
 await queryInterface.bulkInsert('Favorites', favorites);
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favorites');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
