const { Category } = require('../models');

const categoryData = [
  {
    name: 'Breakfast'
  },
  {
    name: 'Lunch'
  },
  {
    name: 'Dinner'
  },
  {
    name: 'Dessert'
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
