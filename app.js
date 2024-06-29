// IMPORT  REQUIRED PACKAGES
const express = require('express');
const morgan = require('morgan');

// CREATE EXPRESS APP
const app = express();

// Parsing JSON
app.use(express.json());

// LOGGING IN DEVELOPMENT
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

// USING Routers
app.use('/api/genres', require('./routes/genreRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));

module.exports = app;
