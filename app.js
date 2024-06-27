// IMPORT  REQUIRED PACKAGES
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// LOAD ENVIRONMENT VARAIBLES
dotenv.config();

// CREATE EXPRESS APP
const app = express();

// LOGGING IN DEVELOPMENT
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

// Genres Routes:
// getting all genres
app.get('/api/genres', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      genres: '<list of genres>',
    },
  });
});

// create new  genre
app.post('/api/genres', (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      genres: '<new genre>',
    },
  });
});

// getting single  genre
app.get('/api/genres/:id', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      genres: '<specified genre>',
    },
  });
});

// Update genere
app.patch('/api/genres/:id', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      genres: '<updated genre>',
    },
  });
});

// delete  genere
app.patch('/api/genres/:id', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      genres: '<updated genre>',
    },
  });
});

// START THE SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
