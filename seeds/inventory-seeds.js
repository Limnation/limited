const { Inventory } = require('../models');

const inventoryData = [
  {
    product_name: 'low-top tennis shoe',
    price: '45.99',
    stock: '102',
    cart_id: '1',
  },
  {
    product_name: 'high-top tennis shoe',
    price: '35.99',
    stock: '101',
    cart_id: '2',
  },
  {
    product_name: 'boots',
    price: '45.99',
    stock: '202',
    cart_id: '3',
  },
  {
    product_name: 'flip-flops',
    price: '14.99',
    stock: '303',
    cart_id: '4',
  },
  {
    product_name: 'slide shoes',
    price: '25.99',
    stock: '404',
    cart_id: '5',
  },
];

const seedInventories = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventories;
