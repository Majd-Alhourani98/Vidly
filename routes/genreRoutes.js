const express = require('express');
const {
  getAllGenres,
  createGenre,
  getSingleGenre,
  updateGenre,
  deleteGenre,
} = require('../controllers/genreRoutes');

const router = express.Router();

router.route('/').get(getAllGenres).post(createGenre);
router.route('/:id').get(getSingleGenre).patch(updateGenre).delete(deleteGenre);

module.exports = router;
