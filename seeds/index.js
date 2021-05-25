const seedUser = require('./user-seeds');
const seedCart = require('./cart-seeds');
const seedType = require('./type-seeds');
const seedProduct = require('./product-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedType();
  console.log('\n----- TYPES SEEDED -----\n');

  await seedProduct();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedCart();
  console.log('\n----- CARTS SEEDED -----\n');

  process.exit(0);
};

seedAll();