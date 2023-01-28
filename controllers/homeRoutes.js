const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

// route for landing page "homepage"
router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        }
      ]
    });

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    res.render('homepage', {
      recipes,
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
          model: User,
          attributes: ['name'],
        }
      ]
    });

    const recipe = recipeData.get({ plain: true });

    res.render('results', {
      ...recipe,
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