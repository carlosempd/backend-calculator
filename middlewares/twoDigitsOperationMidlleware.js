const { twoDigitsOperationSchema } = require("../validators/calculatorValidator");

const twoDigitsOperationMiddleware = (req, res, next) => {
    const { error, value } = twoDigitsOperationSchema.validate(req.body);
    
    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    req.value = { ...value }
    next()
}

module.exports = twoDigitsOperationMiddleware;