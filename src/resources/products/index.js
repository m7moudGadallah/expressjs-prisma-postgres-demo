const service = require('./products.service');
const controller = require('./products.controller');
const router = require('./products.routes');
const { Router } = require('express');

const routes = Router();
routes.use('/products', router);

/**
 * @module categories
 * @description
 * The `products` module is responsible for managing and handling operations related to product products.
 * It includes submodules for service, controller, and routes to organize the functionality.
 *
 * @exports service - The service module for managing product-related data and business logic.
 * @exports controller - The controller module for handling product-related HTTP requests and responses.
 * @exports routes - The routes module containing the API endpoints for product operations.
 */
module.exports = {
  service,
  controller,
  routes,
};