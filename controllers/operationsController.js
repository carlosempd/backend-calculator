const { 
    getOperationsPaginated, 
    deleteOperation } = require("../services/operationService")

const getOperations = ((req, res) => {
    getOperationsPaginated(req, res);
})

const deleteById = ((req, res) => {
    deleteOperation(req, res)
})

module.exports = {
    getOperations,
    deleteById
}