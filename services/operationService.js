const Operation = require('../models/operation')

const createOperation = async(req, res) => {
    console.log(req.value);
    console.log(req.user);
    console.log(req.operation);

    try {
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