"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Spisok }) {
      this.belongsTo(User, { foreignKey: "idUser" });
      this.belongsTo(Spisok, { foreignKey: "idSpisok" });
    }
  }
  Like.init(
    {
      idUser: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      idSpisok: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
