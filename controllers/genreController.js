const Genre = require('../models/genreModel');

// Get All Gneres
const getAllGenres = async (req, res) => {
  const genres = await Genre.find().sort('name');
  res.status(200).json({
    status: 'success',
    genres: genres.length,
    data: {
      genres: genres,
    },
  });
};

// Create Genre
const createGenre = async (req, res) => {
  const genre = await Genre.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      genres: genre,
    },
  });
};

// Get Single Genre
const getSingleGenre = async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findById(id);

  if (!genre)
    return res.status(404).json({
      status: 'fail',
      message: `There is no Genre with the ID ${id}`,
    });

  res.status(200).json({
    status: 'success',
    data: { genre },
  });
};

// Update Genre
const updateGenre = async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!genre)
    return res.status(404).json({
      status: 'fail',
      message: `There is no Genre with the ID ${id}`,
    });

  res.status(200).json({
    status: 'success',
    data: { genre },
  });
};

// Delete Genre
const deleteGenre = async (req, res) => {
  const { id } = req.params;
  const genre = await Genre.findByIdAndDelete(id);

  if (!genre)
    return res.status(404).json({
      status: 'fail',
      message: `There is no Genre with the ID ${id}`,
    });

  res.status(204).json({
    status: 'success',
    data: {
      genres: '<updated genre>',
    },
  });
};

module.exports = {
  getAllGenres,
  getSingleGenre,
  createGenre,
  updateGenre,
  deleteGenre,
};
