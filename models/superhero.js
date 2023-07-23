"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ superpowers, SuperhroImg }) {
      Superhero.hasMany(superpowers, {
        foreignKey: "superheroId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Superhero.hasMany(SuperhroImg, {
        foreignKey: "superheroId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Superhero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{0,32}$/,
          notNull: true,
          notEmpty: true,
        },
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{0,32}$/,
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      catchPhrase: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "superhero",
      
    }
  );
  return Superhero;
};
