const express = require('express')
const router = express.Router()
const { login, register } = require('../controllers/authController')
const { authUserMiddleware } = require('../middlewares/authMiddleware')

router.post('/login', authUserMiddleware, login)
router.post('/register', authUserMiddleware, register)

module.exports = router