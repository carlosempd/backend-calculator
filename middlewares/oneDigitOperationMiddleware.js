const { oneDigitsOperationSchema } = require("../validators/calculatorValidator")

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