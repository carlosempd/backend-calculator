const { loginService, registerService } = require('../services/authService')

const login = ((req, res) => {
    loginService(req, res)
})

const register = ((req, res) => {
    registerService(req, res)
})

module.exports = {
    login,
    register
}