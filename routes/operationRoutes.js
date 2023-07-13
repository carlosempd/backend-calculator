const express = require('express')
const { authenticate } = require('../middlewares/authMiddleware')
const { getOperations } = require('../controllers/operationsController')
const router = express.Router()

router.get('/list', authenticate, getOperations)

module.exports = router