const { Cart } = require('../models');

const cartData = [
  {
    quantity: 1,
    user_id: 1,
    product_id: 1,
  },
  {
    quantity: 2,
    user_id: 1,
    product_id: 2,
  },
  {
    quantity: 1,
    user_id: 2,
    product_id: 3,
  },
  {
    quantity: 1,
    user_id: 3,
    product_id: 4,
  },
  
];

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;
