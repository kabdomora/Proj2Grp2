const { Rating } = require('../models');

const ratingData = [
  {
    number: 1,
    user_id: 1,
    recipe_id: 2,
  },
  {
    number: 2,
    user_id: 1,
    recipe_id: 3,
  },
  {
    number: 3,
    user_id: 4,
    recipe_id: 1,
  },
  {
    number: 4,
    user_id: 2,
    recipe_id: 2,
  },
  {
    number: 5,
    user_id: 3,
    recipe_id: 3,
  }
];

const seedRatings = () => Rating.bulkCreate(ratingData);

module.exports = seedRatings;