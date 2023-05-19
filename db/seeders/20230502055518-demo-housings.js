'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
const objs = [
  {
    name: 'Замок',
    image: 'https://belarch.ru/wp-content/uploads/2020/05/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D1%84%D0%B0%D1%81%D0%B0%D0%B4-1024x696.jpg',
    info: 'Будка в лесу',
    type: 'house',
    address: 'Лесная ул, д. 43',
    user_id: 1
  },
  {
    name: 'Муравейник 1',
    image: 'https://cdn5.vedomosti.ru/image/2022/8y/z2dan/original-19g1.jpg',
    info: 'Человейник к Мурино',
    type: 'apartment',
    address: 'Муринская дорога, д. 43',
    user_id: 1
  },
  {
    name: 'Дом лесника',
    image: 'https://belarch.ru/wp-content/uploads/2020/05/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D1%84%D0%B0%D1%81%D0%B0%D0%B4-1024x696.jpg',
    info: 'Будь как дома, путник',
    type: 'house',
    address: 'Опушка лесная, д.1',
    user_id: 2
  },
  {
    name: 'Человейник в Купчино',
    image: 'https://neferjournal.com/pic/20b/4eloveiniki/IMG_20200614_195257.jpg',
    info: 'Купи во мне квартиру!',
    type: 'apartment',
    address: 'Пупчинский проспект, д. 228',
    user_id: 1
  },
  {
    name: 'Комнатушка',
    image: 'https://cdn0.divan.ru/img/v1/z3lZ-EjCjCSs8Lg0sjBQO0cKqn-XMtWThwfmPp69qfo/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi93aWtpLWFydGljbGUvNDY2NDY4My5qcGc.jpg',
    info: 'У меня уютно',
    type: 'room',
    address: 'Муравейная улица, д. 43',
    user_id: 2
  },
  {
    name: 'Апартаментыч',
    image: 'https://cdn.indesignlive.com/wp-content/uploads/2.bedroomaes-1-1024x683.jpg',
    info: 'Лучший вариант внатуре',
    type: 'apartment',
    address: 'Некрасова, д. 14',
    user_id: 1
  },
  {
    name: 'Комнатушыч',
    image: 'https://i.pinimg.com/564x/71/b6/59/71b6596fcbab984ed2e372a8f1ccb379.jpg',
    info: 'Комнатка 2 на 2',
    type: 'room',
    address: 'Жуковского, д. 22',
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
