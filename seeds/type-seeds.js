const { Type } = require('../models');

const typeData = [
  {
    type_name: 'High-top',
  },
  {
    type_name: 'High-top-Boot',
  },
  {
    type_name: 'Iow-Top',
  },
  {
    type_name: 'flip-flops',
  },
];

const seedTypes = () => Type.bulkCreate(typeData);

module.exports = seedTypes;
