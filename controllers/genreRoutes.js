// Get All Gneres
const getAllGenres = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      genres: '<list of genres>',
    },
  });
};

// Create Genre
const createGenre = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      genres: '<new genre>',
    },
  });
};

// Get Single Genre
const getSingleGenre = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      genres: '<specified genre>',
    },
  });
};

// Update Genre
const updateGenre = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      genres: '<updated genre>',
    },
  });
};

// Delete Genre
const deleteGenre = (req, res) => {
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
