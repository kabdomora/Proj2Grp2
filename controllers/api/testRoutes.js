const router = require('express').Router();
const { User, Recipe, Category, Rating, Review } = require('../../models');

// all Users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// all Recipes
router.get('/recipes', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: Category,
          attributes: ['name'],
        },
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Review,
          attributes: ['review'],
        },
        {
          model: Rating,
          attributes: ['score'],
        }
      ]
    });

    res.status(200).json(recipeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/categories', async (req, res) => {
  try {

    const recipesData = await Recipe.findAll({ attributes: [ 'id', 'name'] });

    const categoryData = await Category.findAll();

    res.status(200).json({
      categoryData,
      recipesData,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;