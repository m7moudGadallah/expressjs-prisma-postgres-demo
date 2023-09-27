const service = require('./categories.service');
const { catchAsync, AppError, JsonResponse } = require('../../utils');

/**
 * @namespace CategoryController
 */
module.exports = {
  /**
   * @route GET /api/v1/categories
   * @desc Retrieve all categories
   * @access Public
   */
  getAll: catchAsync(async (req, res) => {
    // Initialize filter object.
    let filter = undefined;

    // Check if query query contains a property.
    if (req.query) filter = req.query;
    // Get all categories using service.
    const categories = await service.getAll(filter);

    // Send success response.
    return new JsonResponse(res, 200)
      .setMainContent(true, 'Categories retrieved successfully')
      .setSuccessPayload({
        count: categories.length,
        data: categories,
      })
      .send();
  }),

  /**
   * @route GET /api/v1/categories/:id
   * @desc Retrieve a category by its unique identifier
   * @access Public
   */
  getOneById: catchAsync(async (req, res, next) => {
    // Get category id from request parameters.
    const id = Number(req.params.id);

    // Get category using service.
    const category = await service.getOneById(id);

    // Check if category exists.
    if (!category) return next(new AppError('Category not found', 404));

    // Send success response
    return new JsonResponse(res, 200)
      .setMainContent(true, 'Category retrieved successfully')
      .setSuccessPayload({
        data: category,
      })
      .send();
  }),

  /**
   * @route POST /api/v1/categories
   * @desc Create a new category
   * @access Public
   */
  createOne: catchAsync(async (req, res) => {
    // Get data from request body.
    const data = req.body;

    // Create category using service.
    const category = await service.createOne(data);

    // Send success response.
    return new JsonResponse(res, 201)
      .setMainContent(true, 'Category created successfully')
      .setSuccessPayload({
        data: category,
      })
      .send();
  }),

  /**
   * @route PATCH /api/v1/categories/:id
   * @desc Update an existing category by its unique identifier
   * @access Public
   */
  updateOneById: catchAsync(async (req, res, next) => {
    // Get category id from request parameters.
    const id = Number(req.params.id);

    // Get data from request body.
    const data = req.body;

    // update category using service
    const category = await service.updateOneById(id, data);

    // check if category exists
    if (!category) return next(new AppError('Category not found', 404));

    // Send success response
    return new JsonResponse(res, 200)
      .setMainContent(true, 'Category updated successfully')
      .setSuccessPayload({
        data: category,
      })
      .send();
  }),

  /**
   * @route DELETE /api/v1/categories/:id
   * @desc Delete a category by its unique identifier
   * @access Public
   */
  deleteOneById: catchAsync(async (req, res, next) => {
    // Get category id from request parameters.
    const id = Number(req.params.id);

    // Check if category exists using service.
    const category = await service.isExist(id);

    if (!category) return next(new AppError('Category not found', 404));

    // Delete category using service.
    await service.deleteOneById(id);

    // Send success resopnse.
    return new JsonResponse(res, 200)
      .setMainContent(true, 'Category deleted successfully')
      .setSuccessPayload({
        data: null,
      })
      .send();
  }),
};
