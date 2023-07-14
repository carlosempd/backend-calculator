const { loginService, registerService } = require('../services/authService')

/**
 * Perform login of user and retrieves a jwt token
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * authentication is validated and return a jwt token via response
 */
const login = ((req, res) => {
    loginService(req, res)
})

/**
 * Register a new user 
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {Promise<void>} A Promise that resolves when 
 * user is created and returns a message indicating whether success or failure
 */
const register = ((req, res) => {
    registerService(req, res)
})

module.exports = {
    login,
    register
}