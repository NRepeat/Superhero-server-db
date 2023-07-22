"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Superpowers }) {
      Superhero.hasMany(Superpowers, {
        foreignKey: "superHeroId",
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
        field: "real_name",
        validate: {
          is: /^[A-Z][a-z]{0,32}$/,
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        type: DataTypes.STRING,
        field: "origin_description",
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "Origin description cannot be empty.",
          },
          len: {
            args: [5, 100],
            msg: "Origin description must be between 5 and 100 characters.",
          },
        },
      },
      catchPhrase: {
        type: DataTypes.STRING,
        field: "catch_phrase",
        allowNull: true,
        validate: {
          len: {
            args: [5, 100],
            msg: "Origin description must be between 5 and 100 characters.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Superhero",
      tableName: "superhero",
      underscored: true,
    }
  );
  return Superhero;
};
