const express = require('express')
const { authenticate } = require('../middlewares/authMiddleware')
const { getOperations, deleteById } = require('../controllers/operationsController')
const router = express.Router()

router.get('/list', authenticate, getOperations)
router.delete('/:id', authenticate, deleteById)

module.exports = router