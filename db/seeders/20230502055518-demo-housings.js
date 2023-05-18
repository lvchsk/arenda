'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
const objs = [
  {
    name: 'arfa',
    image: 'https://belarch.ru/wp-content/uploads/2020/05/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D1%84%D0%B0%D1%81%D0%B0%D0%B4-1024x696.jpg',
    info: 'loh',
    type: 'house',
    address: 'Восстания д. 43',
    user_id: 1
  },
  {
    name: 'fgtre',
    image: 'https://cdn5.vedomosti.ru/image/2022/8y/z2dan/original-19g1.jpg',
    info: 'loh',
    type: 'apartment',
    address: 'Восстания д. 43',
    user_id: 1
  },
  {
    name: 'fgqqww',
    image: 'https://belarch.ru/wp-content/uploads/2020/05/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D1%84%D0%B0%D1%81%D0%B0%D0%B4-1024x696.jpg',
    info: 'loh',
    type: 'house',
    address: 'Восстания д. 43',
    user_id: 2
  },
  {
    name: 'hjkio',
    image: 'https://cdn5.vedomosti.ru/image/2022/8y/z2dan/original-19g1.jpg',
    info: 'loh',
    type: 'apartment',
    address: 'Восстания д. 43',
    user_id: 1
  },
  {
    name: 'yyuio',
    image: 'https://cdn0.divan.ru/img/v1/z3lZ-EjCjCSs8Lg0sjBQO0cKqn-XMtWThwfmPp69qfo/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi93aWtpLWFydGljbGUvNDY2NDY4My5qcGc.jpg',
    info: 'loh',
    type: 'room',
    address: 'Восстания д. 43',
    user_id: 2
  },
  {
    name: 'saer',
    image: 'https://cdn5.vedomosti.ru/image/2022/8y/z2dan/original-19g1.jpg',
    info: 'loh',
    type: 'apartment',
    address: 'Восстания д. 43',
    user_id: 1
  },
  {
    name: 'nop',
    image: 'https://cdn0.divan.ru/img/v1/z3lZ-EjCjCSs8Lg0sjBQO0cKqn-XMtWThwfmPp69qfo/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi93aWtpLWFydGljbGUvNDY2NDY4My5qcGc.jpg',
    info: 'loh',
    type: 'room',
    address: 'Восстания д. 43',
    user_id: 2
  },
];
const housings = objs.map(housing => ({...housing, createdAt: new Date(), updatedAt: new Date()}));
 await queryInterface.bulkInsert('Housings', housings);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Housings');

  }
};
