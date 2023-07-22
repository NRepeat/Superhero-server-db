"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("superheroes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING,
      },
      realName: {
        type: Sequelize.STRING,
        field: "real_name",
        allowNull: false,
      },
      originDescription: {
        type: Sequelize.STRING,
        field: "origin_description",
        allowNull: false,
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: "catch_phrase",
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
    await queryInterface.dropTable("Superheros");
  },
};
