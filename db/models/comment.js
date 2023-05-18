'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Housing}) {
    this.belongsTo(User, {foreignKey: 'user_id'});
    this.belongsTo(Housing, {foreignKey: 'housing_id'})
    }
  }
  Comment.init({
    housing_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Housings',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    text: {
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
    },
    user_name: {
     allowNull: false,
     type: DataTypes.TEXT
     },
   date: {
    allowNull: false,
    type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};