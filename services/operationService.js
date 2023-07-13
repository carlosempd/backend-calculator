const Operation = require('../models/operation')
const { updateUserBalance } = require('./userService')

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

const getOperationsPaginated = async(req, res) => {
    const { page = 1, limit = 10} = req.query;

    try {
        const list = await Operation.find({ user: req.user._id })
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
        
    }
}

module.exports = {
    createOperation,
    getOperationsPaginated
}