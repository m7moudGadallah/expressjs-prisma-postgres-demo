const categories = require('./categories');
const products = require('./products');

/**
 * This module serves as an aggregator for various resource-related components in an Express.js application.
 * In a typical project structure, the 'resources' directory contains subdirectories for each resource, each of
 * which includes a controller, a service, routes, and an 'index.js' file to export these components.
 *
 * @module resources/index
 * @exports {Object} categories - An object that aggregates various resource categories.
 */
module.exports = {
  categories,
  products,
};
