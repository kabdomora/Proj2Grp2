const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newReview);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const review = await Review.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      }
    });

    if (!review) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }

    res.status(200).json(review);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;