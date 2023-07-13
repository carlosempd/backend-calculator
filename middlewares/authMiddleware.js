const { authUserSchema } = require("../validators/authValidator");

const authUserMiddleware = (req, res, next) => {
    const { error, value } = authUserSchema.validate(req.body)

    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }

    req.value = value
    next()
}

module.exports = {
    authUserMiddleware
}