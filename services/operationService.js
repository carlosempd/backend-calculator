const Operation = require('../models/operation')
const { updateUserBalance } = require('./userService')

/**
 * Create a new operation
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the operation is created and the result is sent
 * via response
 */
const createOperation = async(req, res) => {
    try {
        const remainingBalance = await updateUserBalance(req.user._id, req.operation.cost)

        if (remainingBalance < 0) {
            return res.status(403).json({
                message: 'Not enough credit'
            })
        }

        const operation = new Operation({
            type: req.operation.type,
            user: req.user._id,
            cost: req.operation.cost,
            result: req.operation.result,
            date: new Date()
        })

        await operation.save()

        res.status(200).json({
            result: req.operation.result
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/**
 * Get the paginated list of operations
 * performed by logged user
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the list is retrieved and the pagianted result is sent
 * via response
 */
const getOperationsPaginated = async(req, res) => {
    const { page = 1, limit = 10, date, type} = req.query;
    const filter = {}

    if (type) {
        filter.type = { $regex: `${type}`, $options: 'i'};
    }
    if(date) {
        filter.date = { $gte: new Date(date) };
    }
    console.log(filter);
    try {
        const list = await Operation.find({ user: req.user._id })
            .where({ isDeleted: false, ...filter })
            .limit(limit*1)
            .skip((page-1) * limit)
            .sort({ date: -1 })
        
        const count = await Operation.countDocuments();

        res.json({
            data: list,
            totalPages: Math.ceil(count/limit),
            currentPage: page
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

/**
 * Delete an operation by its ID
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the soft delete is completed and a message is sent via response
 */
const deleteOperation = async(req, res) => {
    try {
        const id = req.params.id
        const operation = await Operation.findById(id)
        operation.isDeleted = true;
        await operation.save()
        res.status(200).json({
            message: 'Operation deleted'
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
    
}

module.exports = {
    createOperation,
    getOperationsPaginated,
    deleteOperation,
}