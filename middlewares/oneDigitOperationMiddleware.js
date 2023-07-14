const { oneDigitsOperationSchema } = require("../validators/calculatorValidator")

/**
 * Validates the body of one digit operation requests
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {function} next next handler chain of request
 * 
 */
const oneDigitsOperationMiddleware = (req, res, next) => {
    const { error, value } = oneDigitsOperationSchema.validate(req.body)

    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }

    req.value = value
    next()
}

module.exports = oneDigitsOperationMiddleware