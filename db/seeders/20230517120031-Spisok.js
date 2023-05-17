"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Spisoks",
      [
        {
          name: "Квартира там",
          idCategory: 1,
          price: "60000рб",
          info: "Квартира тыры пыры пры",
          url: "https://darstroy-yug.ru/upload/medialibrary/571/5714b76c6608bb9e59d4bf4d2f03bb2d.jpg",
          map: "ул.ТЫТЫТ дом.50 кв.241",
          createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          name: "Дом там",
          idCategory: 2,
          price: "90000рб",
          info: "ДОМ тыры пыры пры",
          url: "https://cud.news/wp-content/uploads/2022/04/cud_news-panel.jpg",
          map: "ул.фыв дом.12",
          createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          name: "Комната там",
          idCategory: 3,
          price: "7000рб",
          info: "Квартира тыры пыры пры",
          url: "https://avatars.dzeninfra.ru/get-zen_doc/235990/pub_5c71c123be549400b427a76c_5c71c17adb06b400b30e18c8/scale_1200",
          map: "ул.ТЫТЫТ дом.50 кв.241",
          createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          name: "Квартира2 там",
          idCategory: 1,
          price: "60000рб",
          info: "Квартира тыры пыры пры",
          url: "https://darstroy-yug.ru/upload/medialibrary/571/5714b76c6608bb9e59d4bf4d2f03bb2d.jpg",
          map: "ул.ТЫТЫТ дом.50 кв.241",
          createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          name: "Дом2 там",
          idCategory: 2,
          price: "90000рб",
          info: "ДОМ тыры пыры пры",
          url: "https://cud.news/wp-content/uploads/2022/04/cud_news-panel.jpg",
          map: "ул.фыв дом.12",
          createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          name: "Комната2 там",
          idCategory: 3,
          price: "7000рб",
          info: "Квартира тыры пыры пры",
          url: "https://avatars.dzeninfra.ru/get-zen_doc/235990/pub_5c71c123be549400b427a76c_5c71c17adb06b400b30e18c8/scale_1200",
          map: "ул.ТЫТЫТ дом.50 кв.241",
          createdAt: new Date(),
        updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Spisoks", null, {});
  },
};
