'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spisok extends Model {
    
    static associate({Category,Like}) {
      this.hasMany(Like,{foreignKey:'idSpisok'})
      this.belongsTo(Category,{foreignKey:'idCategory'})
    }
  }
  Spisok.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    idCategory: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Categories",
        key: "id",
      },
      onDelete:'CASCADE',
    },
    price: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    info: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    url: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    map: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Spisok',
  });
  return Spisok;
};