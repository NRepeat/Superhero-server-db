"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserMessage.belongsTo(models.user, {
        foreignKey: "userId",
        onDelete: "cascade",
        onUpdate: "cascade",
      }); // define association here
    }
  }
  UserMessage.init(
    {
      message: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserMessage",
      tableName: "user_messages",
      underscored: true,
    }
  );
  return UserMessage;
};
