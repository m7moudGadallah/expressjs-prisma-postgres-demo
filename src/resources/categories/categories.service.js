// FIXME: This is a workaround for the issue of PrismaClient not being able to connect to the database.
// const database = require('../../config');
// console.log(database.DB);

/**
 * A collection of functions for managing categories.
 *
 * @namespace CategoryService
 */
module.exports = {
  /**
   * Retrieves all categories from the database.
   *
   * @async
   * @param {object} filter - An optional filter object for querying categories.
   * @returns {Promise<Array>} A promise that resolves to an array of category objects.
   */
  async getAll(filter) {
    // Create the find options object.
    const findOptions = {
      include: {
        products: true,
      },
    };

    // Add the filter to the find options.
    if (filter) findOptions.where = { ...filter };

    // Retrieve the categories.
    const categories = await DB.category.findMany(findOptions);

    return categories;
  },

  /**
   * Retrieves a category by its unique identifier.
   *
   * @async
   * @param {number} id - The unique identifier of the category to retrieve.
   * @returns {Promise<object>} A promise that resolves to the category object.
   */
  async getOneById(id) {
    // Create the find options object.
    const findOptions = {
      where: { id },
      include: {
        products: true,
      },
    };

    // Retrieve the category.
    const category = await DB.category.findUnique(findOptions);

    return category;
  },

  /**
   * Creates a new category with the provided data.
   *
   * @async
   * @param {object} data - The data for creating the category.
   * @returns {Promise<object>} A promise that resolves to the created category object.
   */
  async createOne(data) {
    // Create the category.
    const category = await DB.category.create({ data });

    return category;
  },

  /**
   * Updates an existing category by its unique identifier.
   *
   * @async
   * @param {number} id - The unique identifier of the category to update.
   * @param {object} data - The data to update the category with.
   * @returns {Promise<object>} A promise that resolves to the updated category object.
   */
  async updateOneById(id, data) {
    // Create the update options object.
    const updateOptions = {
      where: { id },
      data,
    };

    // Update the category.
    const category = await DB.category.update(updateOptions);

    return category;
  },

  /**
   * Deletes a category by its unique identifier.
   *
   * @async
   * @param {number} id - The unique identifier of the category to delete.
   * @returns {Promise<object>} A promise that resolves to the deleted category object.
   */
  async deleteOneById(id) {
    // Create the delete options object.
    const deleteOptions = {
      where: { id },
    };

    // Delete the category.
    const category = await DB.category.delete(deleteOptions);

    return category;
  },

  /**
   * Checks if a category with the specified unique identifier exists in the database.
   *
   * @async
   * @param {number} id - The unique identifier of the category to check for existence.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the category exists.
   */
  async isExist(id) {
    // Create the find options object.
    const findOptions = {
      where: { id },
    };

    // Retrieve the category.
    const category = await DB.category.findUnique(findOptions);

    return !!category;
  },
};
