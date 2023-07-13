const { authUserSchema } = require("../validators/authValidator");
const jwt = require('jsonwebtoken');
const users = require('../mock/users.json')
require('dotenv').config()

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

const authenticate = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = users.filter(element => element.id === decodedToken.userId)

        if (!user) {
            throw new Error("Please try again")
        }

        req.user = user
        next()
    } catch (error) {
        res.status(401).json({
            error: 'Authentication failed'
        })
    }
}

module.exports = {
    authUserMiddleware,
    authenticate
}