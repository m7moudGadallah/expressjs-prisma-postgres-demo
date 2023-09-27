const service = require('./categories.service');
const controller = require('./categories.controller');
const router = require('./categories.routes');
const { Router } = require('express');

const routes = Router();
routes.use('/categories', router);

/**
 * @module categories
 * @description
 * The `categories` module is responsible for managing and handling operations related to product categories.
 * It includes submodules for service, controller, and routes to organize the functionality.
 *
 * @exports service - The service module for managing category-related data and business logic.
 * @exports controller - The controller module for handling category-related HTTP requests and responses.
 * @exports routes - The routes module containing the API endpoints for category operations.
 */
module.exports = {
  service,
  controller,
  routes,
};
