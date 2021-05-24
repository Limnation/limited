const seedUser = require('./user-seeds');
const seedCart = require('./cart-seeds');
const seedDesign = require('./design-seeds');
const seedInventory = require('./inventory-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCart();
  console.log('\n----- CARTS SEEDED -----\n');

  await seedDesign();
  console.log('\n----- DESIGNS SEEDED -----\n');

  await seedInventory();
  console.log('\n----- INVENTORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();