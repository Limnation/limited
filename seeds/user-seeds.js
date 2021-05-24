const { User } = require('../models');

const userData = [
  {
    username: 'dog',
    password: "yourself",
    email: 'you@myself.com',
    street: '123 Main Street SW',
    city: 'Burlington',
    state: 'VT',
    zip_code: '05042',
  },
  {
    username: 'cat',
    password: "amiko2k20!",
    email: "amiko2k20@aol.com",
    street: '123 Main Street SW',
    city: 'Atlanta',
    state: 'GA',
    zip_code: '33213',
  },
  {
    username: 'beer',
    password: "learnantino!",
    email: "lernantino@gmail.com",
    street: '123 Main Street SW',
    city: 'New York',
    state: 'NY',
    zip_code: '10034',
  },
  {
    username: 'willie',
    password: "sal!123!!",
    email: "sal@hotmail.com",
    street: '123 Main Street SW',
    city: 'Los Angeles',
    state: 'CA',
    zip_code: '90090',
  },
  {
    username: "jordan",
    password: "amiko2k20!",
    email: "sal@gmail.com",
    street: '123 Main Street SW',
    city: 'Philadelphia',
    state: 'PA',
    zip_code: '19104',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
