const { createOperation } = require("../services/operationService")
const getRandomString = require("../services/randomOrg")
const OPERATION_TYPE = require("../utils/operation")
require('dotenv').config()

/**
 * Retrieves the adition of the digits sent
 * via post body.
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the adition is calculated and sent in the response.
 */
const addition = ((req, res) => {
    const result = req.value.firstDigit + req.value.secondDigit
    req.operation = {
        type: OPERATION_TYPE.ADDITION,
        cost: process.env.ADDITION_COST,
        result
    }

    createOperation(req, res)
})

/**
 * Retrieves the substraction of the digits sent
 * via post body.
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the substraction is calculated and sent in the response.
 */
const substraction = ((req, res) => {
    const result = req.value.firstDigit - req.value.secondDigit
    req.operation = {
        type: OPERATION_TYPE.SUBSTRACTION,
        cost: process.env.SUBSTRACTION_COST,
        result
    }

    createOperation(req, res)
})

/**
 * Retrieves the multiplication of the digits sent
 * via post body.
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the multiplication is calculated and sent in the response.
 */
const multiplication = ((req, res) => {
    const result = req.value.firstDigit * req.value.secondDigit
    req.operation = {
        type: OPERATION_TYPE.MULTIPLICATION,
        cost: process.env.MULTIPLICATION_COST,
        result
    }

    createOperation(req, res)
})

/**
 * Retrieves the division of the digits sent
 * via post body.
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the division is calculated and sent in the response.
 */
const division = ((req, res) => {
    if (req.value.secondDigit === 0) {
        return res.status(400).json({
            message: 'Division by zero is undefined'
        })
    }

    const result = req.value.firstDigit / req.value.secondDigit
    req.operation = {
        type: OPERATION_TYPE.DIVISION,
        cost: process.env.DIVISION_COST,
        result
    }

    createOperation(req, res)
})

/**
 * Retrieves the square root of the digit sent
 * via post body.
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the square root is calculated and sent in the response.
 */
const squareRoot = ((req, res) => {
    const result = Math.sqrt(req.value.digit)
    req.operation = {
        type: OPERATION_TYPE.SQUARE_ROOT,
        cost: process.env.SQRT_COST,
        result
    }

    createOperation(req, res)
})

/**
 * Retrieves a random string.
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * the random string is retrieved and sent in the response.
 */
const randomString = (async (req, res) => {
    const result = await getRandomString()
    req.operation = {
        type: OPERATION_TYPE.RANDOM_STRING,
        cost: process.env.STRING_GENERATOR_COST,
        result
    }
    
    createOperation(req, res)
})

module.exports = {
    addition,
    substraction,
    multiplication,
    division,
    squareRoot,
    randomString
}