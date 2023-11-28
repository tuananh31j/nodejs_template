const customerController = require('../app/controllers/CustomerController')
const express = require('express')
const routes = express.Router();



routes.get('/:id', customerController.get);
routes.delete('/:id', customerController.remove);
routes.patch('/:id', customerController.update);
routes.post('/', customerController.create)
routes.get('/', customerController.getAll);

module.exports = routes;

