const bcrypt = require('bcrypt')
const OPERATION_TYPE = require('../utils/operation')
require('dotenv').config()

const usersData = [
    {
        email: "carlosempd@gmail.com",
        password: bcrypt.hashSync( '123456', +process.env.SALT_ROUNDS),
        status: "active"
    },
    {
        email: "jose@gmail.com",
        password: bcrypt.hashSync( '123456', +process.env.SALT_ROUNDS),
        status: "active"
    },
    {
        email: "juan@gmail.com",
        password: bcrypt.hashSync( '123456', +process.env.SALT_ROUNDS),
        status: "active"
    }
]

const operationsData = [
    {
        type: OPERATION_TYPE.ADDITION,
        cost: process.env.ADDITION_COST,
        result: 5,
        date: new Date()
    },
    {
        type: OPERATION_TYPE.MULTIPLICATION,
        cost: process.env.MULTIPLICATION_COST,
        result: 20,
        date: new Date()
    },
    {
        type: OPERATION_TYPE.SQUARE_ROOT,
        cost: process.env.SQRT_COST,
        result: 5,
        date: new Date()
    }
]

module.exports = {
    usersData,
    operationsData
}