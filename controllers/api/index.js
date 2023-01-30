const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipesRoutes = require('./recipeRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipesRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
