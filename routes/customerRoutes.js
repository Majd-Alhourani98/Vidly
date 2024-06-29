const express = require('express');
const {
  getAllCustomer,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/genreController');

const router = express.Router();

router.route('/').get(getAllCustomer).post(createCustomer);
router.route('/:id').get(deleteCustomer).patch(updateCustomer).delete(deleteCustomer);

module.exports = router;
