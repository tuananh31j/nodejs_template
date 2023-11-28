const routesCustomer = require("./customers");
const express = require('express')
const routes = express.Router();

routes.use('/customers', routesCustomer);



module.exports = routes;