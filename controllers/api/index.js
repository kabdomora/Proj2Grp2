const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipesRoutes = require('./recipeRoutes');
const reviewRoutes = require('./reviewRoutes');
const testRoutes = require('./testRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipesRoutes);
router.use('/reviews', reviewRoutes);
router.use('./test', testRoutes);

module.exports = router;
