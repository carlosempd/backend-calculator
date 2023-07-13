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
            result: req.operation.result
        })

        await operation.save()

        res.status(200).json({
            result: req.operation.result
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createOperation
}