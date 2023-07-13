const { loginSchema } = require("../validators/authValidator");

const loginMiddleware = (req, res, next) => {
    const { error, value } = loginSchema.validate(req.body)

    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }

    req.value = value
    next()
}

module.exports = {
    loginMiddleware
}