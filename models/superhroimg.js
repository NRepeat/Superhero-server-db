'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperhroImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SuperhroImg.belongsTo(models.superhero, {
        foreignKey: "superheroId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  SuperhroImg.init({
    superheroImgPath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SuperhroImg',
  });
  return SuperhroImg;
};