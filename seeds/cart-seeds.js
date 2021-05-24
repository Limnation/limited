const { Cart } = require('../models');

const cartData = [
  {
    item: 2,
    size: '1',
    user_id: 1,
  },
  {
    item: 45,
    size: '12',
    user_id: 2,
  },
  {
    item: 54,
    size: '15',
    user_id: 3,
  },
  {
    item: 42,
    size: '4',
    user_id: 4,
  },
  {
    item: 10,
    size: '6',
    user_id: 5,
  },
];

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;
