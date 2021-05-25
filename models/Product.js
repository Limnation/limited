const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    image_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER(100),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
  }
);

module.exports = Product;
