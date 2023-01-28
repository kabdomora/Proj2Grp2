const { Review } = require('../models');

const reviewData = [
  {
    review: 'This recipe is amazing! I highly recommend it.',
    recipe_id: 1,
    user_id: 1,
  },
  {
    review: 'The instructions were a bit confusing but overall the dish turned out great.',
    recipe_id: 2,
    user_id: 2,
  },
  {
    review: "I didn't like the taste of this recipe, but others in my family did.",
    recipe_id: 3,
    user_id: 1,
  },
  {
    review: 'The cookies were a bit hit to both kids and adults',
    recipe_id: 1,
    user_id: 3,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports - seedReviews;