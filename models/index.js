const User = require('./User');
const Category = require('./Category');
const Rating = require('./Rating');
const Recipe = require('./Recipe');
const Review = require('./Review');
const RecipeCategory = require('./RecipeCategory');


User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
});

Recipe.hasMany(Category, {
  through: {
    model: RecipeCategory,
    foreignKey: 'recipe_id',
  },
});

Category.belongsToMany(Recipe, {
  through: {
    model: RecipeCategory,
    foreignKey: 'category_id',
  },
});

Recipe.hasOne(Rating, {
  foreignKey: 'recipe_id',
});

Rating.belongsToMany(Recipe, {
  foreignKey: 'recipe_id',
});

Recipe.hasMany(Review, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
});

module.exports = { User, Category, Rating, Recipe, Review, RecipeCategory };
