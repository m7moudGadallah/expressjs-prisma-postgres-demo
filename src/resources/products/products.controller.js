const service = require('./products.service');
const { catchAsync, AppError, JsonResponse } = require('../../utils');

/**
 * @namespace ProductController
 */
module.exports = {
  /**
   * @route GET /api/v1/products
   * @desc Retrieve all products
   * @access Public
   */
  getAll: catchAsync(async (req, res) => {
    // Initialize filter object.
    let filter = undefined;

    // Check if query query contains a property.
    if (req.query) filter = req.query;

    // Get all products using service.
    const products = await service.getAll(filter);

    // Send success response.
    return new JsonResponse(res, 200)
      .setMainContent(true, 'Products retrieved successfully')
      .setSuccessPayload({
        count: products.length,
        data: products,
      })
      .send();
  }),

  /**
   * @route GET /api/v1/products/:id
   * @desc Retrieve a product by its unique identifier
   * @access Public
   */
  getOneById: catchAsync(async (req, res, next) => {
    // Get product id from request parameters.
    const id = Number(req.params.id);

    // Get product using service.
    const product = await service.getOneById(id);

    // Check if product exists.
    if (!product) return next(new AppError('Product not found', 404));

    // Send success response.
    return new JsonResponse(res, 200)
      .setMainContent(true, 'Product retrieved successfully')
      .setSuccessPayload({
        data: product,
      })
      .send();
  }),

  /**
   * @route POST /api/v1/products
   * @desc Create a new product
   * @access Public
   */
  createOne: catchAsync(async (req, res) => {
    // Get data from request body.
    const data = req.body;

    // Create product using service.
    const product = await service.createOne(req.body);

    // Send success response.
    return new JsonResponse(res, 201)
      .setMainContent(true, 'Product created successfully')
      .setSuccessPayload({
        data: product,
      })
      .send();
  }),

  /**
   * @route PATCH /api/v1/products/:id
   * @desc Update an existing product by its unique identifier
   * @access Public
   */
  updateOneById: catchAsync(async (req, res, next) => {
    // Get product id from request parameters.
    const id = Number(req.params.id);

    // Get data from request body.
    const data = req.body;

    // Update product using service.
    const product = await service.updateOneById(id, data);

    // Check if product exists
    if (!product) return next(new AppError('Product not found', 404));

    // Send success response
    return new JsonResponse(res, 200)
      .setMainContent(true, 'Product updated successfully')
      .setSuccessPayload({
        data: product,
      })
      .send();
  }),

  /**
   * @route DELETE /api/v1/products/:id
   * @desc Delete a product by its unique identifier
   * @access Public
   */
  deleteOneById: catchAsync(async (req, res) => {
    // Get product id from request parameters.
    const id = Number(req.params.id);

    // Check if product exists using service.
    const product = await service.isExist(id);

    if (!product) return new AppError('Product not found', 404);

    // Delete product using service.
    await service.deleteOneById(id);

    // Send success response.
    return new JsonResponse(res, 200)
      .setMainContent(true, 'Product deleted successfully')
      .setSuccessPayload({
        data: null,
      })
      .send();
  }),
};
