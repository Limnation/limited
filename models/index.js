const Cart = require("./Cart");
const Inventory = require("./Inventory");
const User = require("./User");
const Design = require("./Design");

Cart.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Design.belongsTo(Cart, {
  foreignKey: "cart_id",
  onDelete: "CASCADE",
});

Inventory.belongsTo(Cart, {
  foreignKey: "inventory_id",
});

module.exports = {
  Cart,
  Inventory,
  User,
  Design,
};
