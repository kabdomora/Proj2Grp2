const User = require('./User');
const Category = require('./Category');
const Rating = require('./Rating');
const Recipe = require('./Recipe');
const Review = require('./Review');


User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
});

Recipe.hasOne(Category, {
  foreignKey: 'category_id',
});

Category.belongsTo(Recipe, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
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

module.exports = { User, Category, Rating, Recipe, Review, };
