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

// START THE SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
