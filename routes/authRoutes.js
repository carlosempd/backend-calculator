const express = require('express')
const router = express.Router()
const { login } = require('../controllers/authController')
const { loginMiddleware } = require('../middlewares/authMiddleware')

router.post('/login', loginMiddleware, login)

module.exports = router