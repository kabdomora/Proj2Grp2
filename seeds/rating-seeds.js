const { Rating } = require('../models');

const ratingData = [
  {
    number: 1
  },
  {
    number: 2
  },
  {
    number: 3
  },
  {
    number: 4
  },
  {
    number: 5
  }
];

const seedRatings = () => Rating.bulkCreate(ratingData);

module.exports = seedRatings;