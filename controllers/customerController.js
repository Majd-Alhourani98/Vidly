const Customer = require('./../models/customerModel');

const getAllCustomers = async (req, res, next) => {
  const customers = await Customer.find().sort('name');
  res.status(201).json({
    status: 'success',
    data: { customers },
  });
};

const createCustomer = async (req, res, next) => {
  const customer = await Customer.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      customer,
    },
  });
};

const getSingleCustomer = async (req, res, next) => {
  const { id } = req.params;
  const customer = await Customer.findById(id);

  if (!customer)
    return res.status(404).json({
      status: 'fail',
      message: `there is no customer with the ${id}`,
    });

  res.status(200).json({
    status: 'success',
    data: {
      customer,
    },
  });
};

const updateCustomer = async (req, res, next) => {
  const { id } = req.params;
  const customer = await Customer.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!customer)
    return res.status(404).json({
      status: 'fail',
      message: `there is no customer with the ${id}`,
    });

  res.status(200).json({
    status: 'success',
    data: {
      customer,
    },
  });
};

const deleteCustomer = async (req, res, next) => {
  const { id } = req.params;
  const customer = await Customer.findByIdAndDelete(id, req.body);

  if (!customer)
    return res.status(404).json({
      status: 'fail',
      message: `there is no customer with the ${id}`,
    });

  res.status(204).json({
    status: 'success',
    data: {
      customer: null,
    },
  });
};

module.exports = {
  getAllCustomers,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
