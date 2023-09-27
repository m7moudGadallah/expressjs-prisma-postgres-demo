const { Router } = require('express');
const controller = require('./categories.controller');

const router = Router();

router.route('/').get(controller.getAll).post(controller.createOne);

router
  .route('/:id')
  .get(controller.getOneById)
  .patch(controller.updateOneById)
  .delete(controller.deleteOneById);

/**
 * Express Router for managing category routes.
 * @exports module:categories/routes
 */
module.exports = router;
