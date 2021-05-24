const { Design } = require('../models');

const designData = [
  {
    designs: 'top',
    cart_id: '1',
  },
  {
    designs: 'medium-top',
    cart_id: '2',
  },
  {
    designs: 'low-top',
    cart_id: '3',
  },
  {
    designs: 'flip-flop',
    cart_id: '4',
  },
  {
    designs: 'boot',
    cart_id: '5',
  },
];

const seedDesigns = () => Design.bulkCreate(designData);

module.exports = seedDesigns;
