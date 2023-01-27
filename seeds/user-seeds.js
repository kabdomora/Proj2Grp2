const { User } = require('../models');

const userData = [
  {
    name: 'Juan Sanchez',
    email: 'sjuan634@yahoo.com',
    password: 'password123',
  },
  {
    name: 'John Doe',
    email: 'johndoe@email.com',
    password: 'password1',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@email.com',
    password: 'password2',
  },
  {
    name: 'Bob Johnson',
    email: 'bobjohnson@email.com',
    password: 'password3',
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;