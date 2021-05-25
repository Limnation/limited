const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Type extends Model {}

Type.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
  }
);

module.exports = Type;
