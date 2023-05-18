'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Housing}) {
    this.belongsTo(User, {foreignKey: 'user_id'});
    this.belongsTo(Housing, {foreignKey: 'housing_id'});
    }
  }
  Favorite.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    housing_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Housings',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};