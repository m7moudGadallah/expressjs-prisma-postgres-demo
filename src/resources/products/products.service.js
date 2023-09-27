// FIXME: This is a workaround for the issue of PrismaClient not being able to connect to the database.
// const database = require('../../config');
// console.log(database.DB);

/**
 * A collection of functions for managing products.
 *
 * @namespace ProductService
 */
module.exports = {
  /**
   * Get all products with optional filtering.
   *
   * @async
   * @param {object} [filter] - Optional filtering criteria.
   * @returns {Promise<Array>} - A promise that resolves to an array of products.
   */
  async getAll(filter) {
    // Create the find options object.
    const findOptions = {};

    // Add the filter to the find options.
    if (filter) findOptions.where = { ...filter };

    // Retrieve the products.
    const products = await DB.product.findMany(findOptions);

    return products;
  },

  /**
   * Get a product by its unique identifier.
   *
   * @async
   * @param {number} id - The unique identifier of the product.
   * @returns {Promise<object|null>} - A promise that resolves to the found product or null if not found.
   */
  async getOneById(id) {
    // Create the find options object.
    const findOptions = {
      where: { id },
    };

    // Retrieve the product.
    const product = await DB.product.findUnique(findOptions);

    return product;
  },

  /**
   * Create a new product.
   *
   * @async
   * @param {object} data - The data for the new product.
   * @returns {Promise<object>} - A promise that resolves to the created product.
   */
  async createOne(data) {
    // Create the product.
    const product = await DB.product.create({ data });

    return product;
  },

  /**
   * Update a product by its unique identifier.
   *
   * @async
   * @param {number} id - The unique identifier of the product to update.
   * @param {object} data - The updated data for the product.
   * @returns {Promise<object|null>} - A promise that resolves to the updated product or null if not found.
   */
  async updateOneById(id, data) {
    // Create the update options object.
    const updateOptions = {
      where: { id },
      data,
    };

    // Update the product.
    const product = await DB.product.update(updateOptions);

    return product;
  },

  /**
   * Delete a product by its unique identifier.
   *
   * @async
   * @param {number} id - The unique identifier of the product to delete.
   * @returns {Promise<object|null>} - A promise that resolves to the deleted product or null if not found.
   */
  async deleteOneById(id) {
    // Create the delete options object.
    const deleteOptions = {
      where: { id },
    };

    // Delete the product.
    const product = await DB.product.delete(deleteOptions);

    return product;
  },

  /**
   * Check if a product with a given unique identifier exists.
   *
   * @async
   * @param {number} id - The unique identifier to check.
   * @returns {Promise<boolean>} - A promise that resolves to true if the product exists, false otherwise.
   */
  async isExist(id) {
    // Create the find options object.
    const findOptions = {
      where: { id },
    };

    // Retrieve the product.
    const product = await DB.product.findUnique(findOptions);

    return !!product;
  },
};
