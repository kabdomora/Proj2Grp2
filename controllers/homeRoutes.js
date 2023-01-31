const router = require('express').Router();
const { Recipe, User, Category, Review, Rating } = require('../models');
const withAuth = require('../utils/auth');

// route for landing page "homepage"
router.get('/', async (req, res) => {
  try {

    const recipesData = await Recipe.findAll({ attributes: [ 'id', 'name'] });

    const categories = await Category.findAll();

    res.render('homepage', {
      recipesData,
      categories,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route for single recipe by id
router.get('recipe/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk({
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

    const recipe = recipeData.get({ plain: true });

    res.render('recipe-results', {
      ...recipe,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/category/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk({
      include: [
        {
          model: Recipe,
        }
      ]
    });

    const category = categoryData.get({ plain: true });

    res.render('category-results', {
      ...category,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route for adding recipe
router.get('/contribute', withAuth, async (req, res) => {
  try {
    res.render('contribute');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route for login/signup
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;