'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserToken.belongsTo(models.user, {
        foreignKey: "userId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  UserToken.init({
    token: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserToken',
    tableName: "users_tokens",
    underscored:"true"
  });
  return UserToken;
};