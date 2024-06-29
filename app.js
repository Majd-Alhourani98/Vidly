// IMPORT  REQUIRED PACKAGES
const express = require('express');
const morgan = require('morgan');

// IMPORT ROUTERS
const genreRouter = require('./routes/genreRoutes');

// CREATE EXPRESS APP
const app = express();

// Parsing JSON
app.use(express.json());

// LOGGING IN DEVELOPMENT
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

// USING Routers
app.use('/api/genres', genreRouter);

module.exports = app;
