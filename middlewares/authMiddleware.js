const { authUserSchema } = require("../validators/authValidator");
const jwt = require('jsonwebtoken');
const User = require('../models/user')
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
            balance: user.balance
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