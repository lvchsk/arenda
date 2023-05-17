'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate({Like}) {
      this.hasMany(Like,{foreignKey:'idUser'})
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    status: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};