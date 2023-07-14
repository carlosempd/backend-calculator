const { twoDigitsOperationSchema } = require("../validators/calculatorValidator");

/**
 * Validates the body of two digit operation requests
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {function} next next handler chain of request
 * 
 */
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