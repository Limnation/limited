const Cart = require('./Cart');
const Inventory = require('./Inventory');
const User = require('./User');

Cart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = {
  Cart,
  Inventory,
  User
};