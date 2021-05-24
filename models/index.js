const Cart = require("./Cart");
const Inventory = require("./Inventory");
const User = require("./User");
const Design = require("./Design");

// belongsTo: adds the user_id column to the Cart table.
//            in other words, it adds the user_id column as a foreignKey in the Cart table
//            linking the Cart table and the User table via the id column in the User table
//            and the user_id foreignKey column in the Cart table.
// Cart.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

User.hasOne(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
})

// Design.belongsTo(Cart, {
//   foreignKey: "cart_id",
//   onDelete: "CASCADE",
// });

Inventory.belongsTo(Cart, {
  foreignKey: "cart_id",
  onDelete: "CASCADE",
});

module.exports = {
  Cart,
  Inventory,
  User,
  Design,
};
