const { User } = require('../models');

const userData = [
  {
    name: 'John Doe',
    email: 'johndoe@email.com',
    password: 'password1',
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;