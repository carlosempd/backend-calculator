const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const STATUS = require('../utils/status')
const User = require('../models/user')
require('dotenv').config()

const users = require('../mock/users.json')

const loginService = async(req, res) => {
    try {
        const { email, password } = req.value
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                error: 'Invalid credentials'
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(401).json({
                error: 'Invalid credentials'
            })
        }

        const token = jwt.sign({
            userId: user.id
        }, process.env.JWT_SECRET)

        res.status(200).json({
            token
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const registerService = async(req, res) => {
    try {
        const { ...user } = req.value
        const hashedPassword = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)
        const newUser = new User({
            email: user.email,
            password: hashedPassword,
            status: STATUS.ACTIVE
        })

        await newUser.save()

        res.status(201).json({
            message: 'User created succesfully'
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    loginService,
    registerService
}