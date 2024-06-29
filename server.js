const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// LOAD ENVIRONMENT VARAIBLES
dotenv.config();

// CONNECT TO DATABASE
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('DATABASE CONNECTED'))
  .then('CANNOT CONNECT TO DATABASE');

// START THE SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
