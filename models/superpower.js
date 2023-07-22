'use strict';
const {
  Model
} = require('sequelize');
const superhero = require('./superhero');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Superpower.belongsTo(models.Superhero,{
        foreignKey:"superheroId",
        onDelete: 'cascade',
        onUpdate: 'cascade',
      })
    }
  }
  Superpower.init({
    superpower: {type:DataTypes.STRING},
    
  }, {
    sequelize,
    modelName: 'Superpower',
  });
  return Superpower;
};