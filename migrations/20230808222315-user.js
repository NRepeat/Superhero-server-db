"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        field:"created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field:"updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.dropTable("users");
  },
};
