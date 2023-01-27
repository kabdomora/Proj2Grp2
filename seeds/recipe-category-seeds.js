const { RecipeCategory } = require('../models');

const recipeCategoryData = [
  {
    recipe_id: 1,
    category_id: 4,
  },
  {
    recipe_id: 2,
    category_id: 3,
  },
  {
    recipe_id: 3,
    category_id: 3,
  },
  {
    recipe_id: 3,
    category_id: 2,
  },
];

const seedRecipeCategories = () => RecipeCategory.bulkCreate(recipeCategoryData);

module.exports = seedRecipeCategories;