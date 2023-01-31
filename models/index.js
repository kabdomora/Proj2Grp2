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

Recipe.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Recipe, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Recipe.hasMany(Rating, {
  foreignKey: 'recipe_id',
});

Rating.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
});

User.hasMany(Rating, {
  foreignKey: 'user_id',
});

Rating.belongsTo(User, {
  foreignKey: 'user_id',
});

Recipe.hasMany(Review, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
});

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { User, Category, Rating, Recipe, Review, };
