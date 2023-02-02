const router = require('express').Router();
const { Rating } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRating = await Rating.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newRating);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const rating = await Rating.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });

    if (!rating) {
      res.status(404).json({ message: 'No rating found with this id!' });
      return;
    }

    res.status(200).json(rating);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;