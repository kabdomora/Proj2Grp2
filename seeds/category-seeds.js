const { Category } = require('../models');

const categoryData = [
  {
    name: 'Breakfast',
    image: 'breakfast.jpg',
  },
  {
    name: 'Lunch',
    image: 'lunch.jpg'
  },
  {
    name: 'Dinner',
    image: 'dinner.jpg'
  },
  {
    name: 'Dessert',
    image: 'dessert.jpg'
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
