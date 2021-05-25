const { Product } = require('../models');

const productData = [
  {
    product_name: 'nintendo',
    stock: 10,
    price: 59.99,
    type_id: 1,
  },
  {
    product_name: 'mario-racoon',
    stock: 20,
    price: 69.99,
    type_id: 2,
  },
  {
    product_name: 'cat',
    stock: 25,
    price: 49.99,
    type_id: 3,
  },
  {
    product_name: 'dar-side-moon',
    stock: 5,
    price: 29.99,
    type_id: 4,
  },
 
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
