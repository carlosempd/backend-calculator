const { 
    getOperationsPaginated, 
    deleteOperation 
} = require("../services/operationService")

/**
 * Retrieves a list all (not deleted) operations
 * performed the current logged user
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the list is fetched from database, with pagination (currentPage, totalPage)
 */
const getOperations = ((req, res) => {
    getOperationsPaginated(req, res);
})

/**
 * Deletes (soft) an operation register via id sent
 * in request params
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the soft delete is comleted and return a message indicating success.
 */
const deleteById = ((req, res) => {
    deleteOperation(req, res)
})

module.exports = {
    getOperations,
    deleteById
}