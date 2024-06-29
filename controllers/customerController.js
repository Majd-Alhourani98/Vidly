const Customer = require('./../models/customerModel');

const getAllCustomers = async (req, res, next) => {};
const createCustomer = async (req, res, next) => {
  const customer = await Customer.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      customer,
    },
  });
};
const getSingleCustomer = async (req, res, next) => {};
const updateCustomer = async (req, res, next) => {};
const deleteCustomer = async (req, res, next) => {};

module.exports = {
  getAllCustomers,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
