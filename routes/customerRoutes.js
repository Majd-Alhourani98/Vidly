const express = require('express');
const router = express.Router();

const {
  getAllCustomers,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customerController');

router.route('/').get(getAllCustomers).post(createCustomer);
router.route('/:id').get(getSingleCustomer).patch(updateCustomer).delete(deleteCustomer);

module.exports = router;
