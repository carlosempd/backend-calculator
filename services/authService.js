const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const STATUS = require('../utils/status')
require('dotenv').config()

const users = require('../mock/users.json')

const loginService = async(req, res) => {
    try {
        const { email, password } = req.value
        const user = users.filter(element => element.email === email)

        if (!user) {
            res.status(401).json({
                error: 'Invalid credentials'
            })
        }

        // const isPasswordValid = await bcrypt.compare(password, user.password);
        const isPasswordValid = true;
        if(!isPasswordValid) {
            res.status(401).json({
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
        // TODO: Create and save the new user
        const newUser = {
            email: user.email,
            password: user.password,
            status: STATUS.ACTIVE
        }

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