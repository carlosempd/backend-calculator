const express = require('express')
const router = express.Router()
const { 
    addition, 
    substraction, 
    multiplication, 
    division, 
    squareRoot } = require('../controllers/calculatorController')
const twoDigitsOperationMiddleware = require('../middlewares/twoDigitsOperationMidlleware')
const oneDigitsOperationMiddleware = require('../middlewares/oneDigitOperationMiddleware')

router.post('/addition', twoDigitsOperationMiddleware, addition)
router.post('/substraction', twoDigitsOperationMiddleware, substraction)
router.post('/multiplication', twoDigitsOperationMiddleware, multiplication)
router.post('/division', twoDigitsOperationMiddleware, division)
router.post('/square-root', oneDigitsOperationMiddleware, squareRoot)

module.exports = router