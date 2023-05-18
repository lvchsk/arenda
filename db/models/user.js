'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Favorite, Housing, Comment, Like}) {
    this.hasMany(Housing, {foreignKey: 'user_id'});
    this.hasMany(Comment, {foreignKey: 'user_id'});
    this.hasMany(Favorite, {foreignKey: 'user_id'});
    this.hasMany(Like, {foreignKey: 'user_id'});
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};