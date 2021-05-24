const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      // references: {
      //   model: "Inventory",
      //   key: "id",
      // },
    },
    size: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
    },
    // design: {
    //   allowNull: false,
    //   references: {
    //     model: "Design",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
  }
);

module.exports = Cart;
