'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Categories', [
      {
      name: 'Квартиры',
      url: 'https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg',
      createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      name: 'Дома',
      url: 'https://novmetr.ru/wa-data/public/blog/img/163300408.jpg',
      createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      name: 'Комнаты',
      url: 'https://avatars.dzeninfra.ru/get-zen_doc/1581245/pub_5e58a7958b8820183323fe19_5e58a7cebaedf81f7d511052/scale_1200',
      createdAt: new Date(),
        updatedAt: new Date(),
     },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
