const express = require('express')
const router = express.Router()
const { 
    addition, 
    substraction, 
    multiplication, 
    division } = require('../controllers/calculatorController')
const twoDigitsOperationMiddleware = require('../middlewares/twoDigitsOperationMidlleware')

router.post('/addition', twoDigitsOperationMiddleware, addition)
router.post('/substraction', twoDigitsOperationMiddleware, substraction)
router.post('/multiplication', twoDigitsOperationMiddleware, multiplication)
router.post('/division', twoDigitsOperationMiddleware, division)

module.exports = router