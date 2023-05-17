"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Spisoks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      idCategory: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
        },
        onDelete:'CASCADE',
      },
      price: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      info: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      url: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      map: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Spisoks");
  },
};
