const router = require('express').Router();
const { Recipe, User, Category, Review, Rating } = require('../models');
const withAuth = require('../utils/auth');

// route for landing page "homepage"
router.get('/', async (req, res) => {
  try {

    const recipesData = await Recipe.findAll({ attributes: [ 'id', 'name'] });
    const recipes = recipesData.map((recipe) => recipe.get({ plain: true }));

    const categoriesData = await Category.findAll();
    const categories = categoriesData.map((category) => category.get({ plain: true }));

    res.render('homepage', {
      recipes,
      categories,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route for single recipe by id
router.get('/recipe/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          attributes: [
            'name',
            'image',
        ],
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

    res.render('recipe', { recipe, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/category/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Recipe,
          attributes: [
            'id',
            'name',
            'description',
          ],
        },
      ],
    });

    const category = categoryData.get({ plain: true });

    res.render('results', { category, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route for adding recipe
router.get('/contribute', withAuth, async (req, res) => {
  try {
    const categoriesData = await Category.findAll();
    const categories = categoriesData.map((category) => category.get({ plain: true }));

    res.render('contribute', {
      categories,
      logged_in: req.session.logged_in,
    });

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