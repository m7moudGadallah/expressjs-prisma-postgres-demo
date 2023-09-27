const { categories, products } = require('../resources');
const { Router } = require('express');

module.exports = (app) => {
  // Mount categories routes
  app.use('/api/v1', categories.routes);

  // Mount products routes
  app.use('/api/v1', products.routes);

  // Default route
  app.use('/', (req, res, next) => {
    res.status(200).json({
      success: true,
      message: 'Welcome to the API 👋',
    });
  });
};
