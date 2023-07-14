const { authUserSchema } = require("../validators/authValidator");
const jwt = require('jsonwebtoken');
const User = require('../models/user')
require('dotenv').config()

/**
 * Validates the body of an auth request
 * and attach it to request in "value" property
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {function} next handler in next chain of request
 * 
 */
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

/**
 * Validates the token and if is ok
 * attach user info in request
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {function} next next handler chain of request
 * 
 */
const authenticate = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decodedToken.userId)
        if (!user) {
            throw new Error("Please try again")
        }
        
        req.user = {
            _id: user._id,
            email: user.email,
        }
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