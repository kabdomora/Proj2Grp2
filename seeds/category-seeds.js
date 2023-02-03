const { Category } = require('../models');

const categoryData = [
  {
    name: 'Breakfast',
    image: './images/breakfast.jpg',
  },
  {
    name: 'Lunch',
    image: './images/lunch.jpg'
  },
  {
    name: 'Dinner',
    image: './images/dinner.jpg'
  },
  {
    name: 'Dessert',
    image: './images/dessert.jpg'
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
