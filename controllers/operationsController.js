const { getOperationsPaginated } = require("../services/operationService")

const getOperations = ((req, res) => {
    getOperationsPaginated(req, res);
})

module.exports = {
    getOperations
}