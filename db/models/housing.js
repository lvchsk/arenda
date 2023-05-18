'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Housing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Comment, Like, Favorite}) {
    this.belongsTo(User, {foreignKey: 'user_id'});
    this.hasMany(Comment, {foreignKey: 'housing_id'});
    this.hasMany(Like, {foreignKey: 'housing_id'});
    this.hasMany(Favorite, {foreignKey: 'housing_id'});
    }
  }
  Housing.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    info: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    type: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Housing',
  });
  return Housing;
};